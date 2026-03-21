"use client";

import { useEffect, useMemo, useRef } from "react";

const themePalette = {
  home: {
    ga: "rgba(148,177,255,.14)",
    gb: "rgba(189,162,255,.10)",
    line: "218,226,255",
    point: "rgba(245,247,255,.9)",
    shadow: "rgba(173,196,255,.34)"
  },
  film: {
    ga: "rgba(255,181,122,.13)",
    gb: "rgba(255,115,115,.08)",
    line: "255,223,196",
    point: "rgba(255,246,235,.9)",
    shadow: "rgba(255,180,128,.32)"
  },
  commercial: {
    ga: "rgba(124,214,255,.14)",
    gb: "rgba(155,188,255,.10)",
    line: "214,244,255",
    point: "rgba(241,251,255,.92)",
    shadow: "rgba(124,214,255,.32)"
  }
} as const;

type Theme = keyof typeof themePalette;

type Node = {
  x: number;
  y: number;
  bx: number;
  by: number;
  dx: number;
  dy: number;
  phase: number;
  size: number;
};

export function NeuralField({ theme = "home" }: { theme?: Theme }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false });
  const palette = useMemo(() => themePalette[theme], [theme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let animationFrame = 0;
    let nodes: Node[] = [];

    const glow = (x: number, y: number, radius: number, color: string) => {
      const gradient = context.createRadialGradient(x, y, 0, x, y, radius);
      gradient.addColorStop(0, color);
      gradient.addColorStop(1, "rgba(0,0,0,0)");
      context.fillStyle = gradient;
      context.beginPath();
      context.arc(x, y, radius, 0, Math.PI * 2);
      context.fill();
    };

    const makeNodes = () => {
      const count = Math.min(100, Math.max(50, Math.floor((width * height) / 24000)));
      const cols = Math.max(8, Math.floor(Math.sqrt(count * 1.5)));
      const rows = Math.ceil(count / cols);

      nodes = Array.from({ length: count }, (_, index) => {
        const col = index % cols;
        const row = Math.floor(index / cols);
        const cellWidth = width / cols;
        const cellHeight = height / Math.max(rows, 1);
        const bx = col * cellWidth + cellWidth * 0.5 + (Math.random() - 0.5) * cellWidth * 0.65;
        const by = row * cellHeight + cellHeight * 0.5 + (Math.random() - 0.5) * cellHeight * 0.75;

        return {
          x: bx,
          y: by,
          bx,
          by,
          dx: (Math.random() - 0.5) * 0.16,
          dy: (Math.random() - 0.5) * 0.16,
          phase: Math.random() * Math.PI * 2,
          size: 0.7 + Math.random() * 1.9
        };
      });
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      makeNodes();
    };

    const render = (time: number) => {
      const t = time * 0.001;
      const mouse = mouseRef.current;
      context.clearRect(0, 0, width, height);

      const focusX = mouse.active ? mouse.x : width * 0.62;
      const focusY = mouse.active ? mouse.y : height * 0.24;

      glow(focusX, focusY, Math.max(width * 0.22, 220), palette.ga);
      glow(width * 0.24, height * 0.76, Math.max(width * 0.18, 180), palette.gb);

      for (const node of nodes) {
        const ox = Math.sin(t * 0.6 + node.phase) * 16;
        const oy = Math.cos(t * 0.46 + node.phase) * 14;
        node.x += (node.bx + ox - node.x) * 0.04 + node.dx;
        node.y += (node.by + oy - node.y) * 0.04 + node.dy;

        if (mouse.active) {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const distance = Math.hypot(dx, dy);
          if (distance < 180) {
            const force = (1 - distance / 180) * 0.028;
            node.x -= dx * force;
            node.y -= dy * force;
          }
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.hypot(dx, dy);
          if (distance >= 126) continue;

          const alpha = (1 - distance / 126) * 0.14;
          const midX = (a.x + b.x) * 0.5;
          const midY = (a.y + b.y) * 0.5;
          const boost = mouse.active
            ? Math.max(0, 1 - Math.hypot(mouse.x - midX, mouse.y - midY) / 260) * 0.18
            : 0;

          context.strokeStyle = `rgba(${palette.line}, ${alpha + boost})`;
          context.lineWidth = 1;
          context.beginPath();
          context.moveTo(a.x, a.y);
          context.lineTo(b.x, b.y);
          context.stroke();
        }
      }

      for (const node of nodes) {
        context.beginPath();
        context.fillStyle = palette.point;
        context.shadowBlur = 18;
        context.shadowColor = palette.shadow;
        context.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        context.fill();
        context.shadowBlur = 0;
      }

      animationFrame = window.requestAnimationFrame(render);
    };

    const onMove = (event: MouseEvent) => {
      mouseRef.current = { x: event.clientX, y: event.clientY, active: true };
    };

    const onLeave = () => {
      mouseRef.current.active = false;
    };

    resize();
    render(0);
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.cancelAnimationFrame(animationFrame);
    };
  }, [palette]);

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-[1] opacity-[0.88] mix-blend-screen" />;
}
