import fs from 'node:fs/promises';
import path from 'node:path';

const TZ = 'Australia/Perth';
const PROFILE = {
  name: 'Kaden Condie',
  location: 'Perth, WA',
  priorities: [
    'calendar events and meetings',
    'film industry contacts and opportunities',
    'sales/distribution/festival/market updates',
    'Screenwest, MIFF, CinefestOZ, WA screen industry opportunities',
    'client deadlines, editing tasks, shoots, revisions, and production work',
    'job opportunities in film, content production, festivals, distribution, sales, and marketing',
    'important unread emails that require action',
    'overdue or time-sensitive tasks',
    'travel, parking, weather, fuel/car, and money logistics only when relevant',
  ],
};

function formatHeadingDate(date = new Date()) {
  return new Intl.DateTimeFormat('en-AU', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: TZ,
  }).format(date);
}

function toDate(value) {
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? null : d;
}

function formatTime(value) {
  const d = toDate(value);
  if (!d) return 'Unknown time';
  return new Intl.DateTimeFormat('en-AU', { hour: 'numeric', minute: '2-digit', hour12: true, timeZone: TZ }).format(d);
}

async function loadJsonSource(name, keyPrefix) {
  const filePath = process.env[`${keyPrefix}_JSON_FILE`];
  const url = process.env[`${keyPrefix}_JSON_URL`];

  if (filePath) {
    try {
      const raw = await fs.readFile(filePath, 'utf8');
      return { ok: true, source: `${name} file (${filePath})`, data: JSON.parse(raw) };
    } catch (error) {
      return { ok: false, source: `${name} file (${filePath})`, error: String(error) };
    }
  }

  if (url) {
    try {
      const res = await fetch(url);
      if (!res.ok) return { ok: false, source: `${name} url (${url})`, error: `HTTP ${res.status}` };
      return { ok: true, source: `${name} url (${url})`, data: await res.json() };
    } catch (error) {
      return { ok: false, source: `${name} url (${url})`, error: String(error) };
    }
  }

  return { ok: false, source: name, error: 'No source configured.' };
}

function asArray(data) {
  if (Array.isArray(data)) return data;
  if (Array.isArray(data?.items)) return data.items;
  return [];
}

function renderUnavailable(sources) {
  return sources.filter((s) => !s.ok).map((s) => `- ${s.source}: ${s.error}`).join('\n');
}

function scoreTask(task) {
  let score = 0;
  const txt = `${task.title ?? ''} ${task.notes ?? ''}`.toLowerCase();
  if (task.overdue) score += 10;
  if (task.priority === 'high') score += 8;
  if (/deadline|urgent|today|asap/.test(txt)) score += 5;
  if (/edit|revision|client|shoot|invoice/.test(txt)) score += 4;
  if (/screenwest|miff|cinefestoz|distribution|sales agent|festival|market/.test(txt)) score += 4;
  return score;
}

function summarizeEmail(email) {
  const from = email.from ?? 'Unknown sender';
  const subject = email.subject ?? 'No subject';
  const summary = email.summary ?? email.snippet ?? 'No preview available.';
  const action = email.suggestedAction ?? 'Review and decide next action.';
  return `- **${from}** — *${subject}*\n  - Summary: ${summary}\n  - Suggested action: ${action}`;
}

function eventLine(ev) {
  const attendees = Array.isArray(ev.attendees) && ev.attendees.length ? ev.attendees.join(', ') : 'N/A';
  return `- **${ev.title ?? 'Untitled event'}** (${formatTime(ev.start)}–${formatTime(ev.end)})\n  - Location: ${ev.location ?? 'N/A'}\n  - Attendees: ${attendees}\n  - Prep: ${ev.prepNotes ?? 'No prep notes provided.'}`;
}

function samePerthDay(dateStr, now = new Date()) {
  const d = toDate(dateStr);
  if (!d) return false;
  const fmt = new Intl.DateTimeFormat('en-CA', { timeZone: TZ, year: 'numeric', month: '2-digit', day: '2-digit' });
  return fmt.format(d) === fmt.format(now);
}

function pickMainThing(tasks, events) {
  const topTask = [...tasks].sort((a, b) => scoreTask(b) - scoreTask(a))[0];
  if (topTask?.title) return topTask.title;
  if (events[0]?.title) return `Prepare for ${events[0].title}`;
  return 'Clear top-priority overdue tasks and inbox actions';
}

async function run() {
  const now = new Date();
  const headingDate = formatHeadingDate(now);

  const [calendarSource, taskSource, emailSource, extraSource] = await Promise.all([
    loadJsonSource('Calendar', 'CALENDAR'),
    loadJsonSource('Tasks', 'TASKS'),
    loadJsonSource('Emails', 'EMAILS'),
    loadJsonSource('Connected sources', 'SOURCES'),
  ]);

  const events = asArray(calendarSource.data).filter((e) => samePerthDay(e.start, now));
  const tasks = asArray(taskSource.data);
  const unreadEmails = asArray(emailSource.data).filter((e) => e.unread === true);
  const extras = asArray(extraSource.data);

  const sortedTasks = [...tasks].sort((a, b) => scoreTask(b) - scoreTask(a));
  const must = sortedTasks.filter((t) => t.overdue || t.priority === 'high').slice(0, 7);
  const should = sortedTasks.filter((t) => !must.includes(t)).slice(0, 7);
  const canMove = sortedTasks.filter((t) => !must.includes(t) && !should.includes(t)).slice(0, 7);

  const top3 = sortedTasks.slice(0, 3).map((t, i) => `${i + 1}. ${t.title ?? 'Untitled task'}`);

  const unavailable = renderUnavailable([calendarSource, taskSource, emailSource, extraSource]);

  const lines = [
    `# Morning Brief — ${headingDate}`,
    '',
    '## Today at a Glance',
    `${PROFILE.name} (${PROFILE.location}) — ${events.length} events, ${must.length} must-do tasks, ${unreadEmails.length} unread emails flagged for attention. Prioritise practical execution tied to film/business outcomes.`,
    '',
    '## Calendar',
    ...(events.length ? events.map(eventLine) : ['- No calendar events found for today, or calendar source unavailable.']),
    '',
    '## Priority Actions',
    ...(top3.length ? top3 : ['1. No tasks available from connected task source.']),
    '',
    '## To-Do List',
    '- **Must do today**',
    ...(must.length ? must.map((t) => `  - ${t.title}`) : ['  - No must-do tasks found.']),
    '- **Should do today**',
    ...(should.length ? should.map((t) => `  - ${t.title}`) : ['  - No should-do tasks found.']),
    '- **Can move if needed**',
    ...(canMove.length ? canMove.map((t) => `  - ${t.title}`) : ['  - No movable tasks found.']),
    '',
    '## Important Emails',
    ...(unreadEmails.length ? unreadEmails.slice(0, 10).map(summarizeEmail) : ['- No unread emails available, or email source unavailable.']),
    '',
    '## Career / Film / Business Opportunities',
    ...(extras.length ? extras.map((o) => `- ${o.title ?? 'Untitled opportunity'}: ${o.summary ?? 'No details provided.'}`) : ['- No connected opportunity feed available.']),
    '',
    '## Work / Client Priorities',
    ...(sortedTasks.filter((t) => /client|edit|revision|shoot|production|invoice/i.test(`${t.title} ${t.notes ?? ''}`)).slice(0, 6).map((t) => `- ${t.title}`) || ['- No work/client items detected.']),
    '',
    '## Logistics',
    ...(extras.filter((o) => /weather|travel|parking|fuel|car|budget|money|meal|clothes/i.test(`${o.title} ${o.summary}`)).map((o) => `- ${o.title}: ${o.summary}`)),
    ...(extras.some((o) => /weather|travel|parking|fuel|car|budget|money|meal|clothes/i.test(`${o.title} ${o.summary}`)) ? [] : ['- No relevant logistics notes from connected sources.']),
    '',
    '## Suggested Day Plan',
    '- Start with urgent communication and schedule checks (inbox + first meeting prep).',
    '- Complete the highest-impact production/client task block before midday.',
    '- Use midday for industry outreach/opportunity follow-ups (Screenwest/MIFF/CinefestOZ/festival/distribution pathways).',
    '- Close day with admin, revisions, and tomorrow setup.',
    '',
    `Main thing today: ${pickMainThing(sortedTasks, events)}.`,
    '',
    '---',
    '### Data source status',
    unavailable ? unavailable : '- All configured sources responded successfully.',
    '',
    '> This brief does not invent missing data. If a source is unavailable or not configured, it is listed above.',
  ];

  const outDir = path.resolve('morning-brief');
  await fs.mkdir(outDir, { recursive: true });
  const stamp = new Intl.DateTimeFormat('en-CA', { timeZone: TZ, year: 'numeric', month: '2-digit', day: '2-digit' }).format(now).replaceAll('-', '');
  await fs.writeFile(path.join(outDir, `brief-${stamp}.md`), lines.join('\n'));
  await fs.writeFile(path.join(outDir, 'latest.md'), lines.join('\n'));
  console.log(`Morning brief generated: morning-brief/brief-${stamp}.md`);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
