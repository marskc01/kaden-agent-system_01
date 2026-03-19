"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseX: number;
  baseY: number;
};

export function NeuralField({ intensity = 1 }: { intensity?: number }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const mouse = { x: 0, y: 0, active: false };
    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let nodes: Node[] = [];

    const buildNodes = () => {
      const total = Math.max(28, Math.floor((width / 46) * intensity));
      nodes = Array.from({ length: total }, () => {
        const x = Math.random() * width;
        const y = Math.random() * height;
        return {
          x,
          y,
          baseX: x,
          baseY: y,
          vx: (Math.random() - 0.5) * 0.22,
          vy: (Math.random() - 0.5) * 0.22
        };
      });
    };

    const resize = () => {
      width = Math.floor(window.innerWidth * dpr);
      height = Math.floor(window.innerHeight * dpr);
      canvas.width = width;
      canvas.height = height;
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      buildNodes();
    };

    const onPointerMove = (event: PointerEvent) => {
      mouse.active = true;
      mouse.x = event.clientX * dpr;
      mouse.y = event.clientY * dpr;
    };

    const onPointerLeave = () => {
      mouse.active = false;
    };

    const step = () => {
      context.clearRect(0, 0, width, height);

      const glow = context.createRadialGradient(
        width * 0.52,
        height * 0.18,
        0,
        width * 0.52,
        height * 0.18,
        width * 0.68
      );
      glow.addColorStop(0, "rgba(183,194,255,0.18)");
      glow.addColorStop(0.55, "rgba(183,194,255,0.05)");
      glow.addColorStop(1, "rgba(183,194,255,0)");
      context.fillStyle = glow;
      context.fillRect(0, 0, width, height);

      const linkDistance = 160 * dpr * intensity;

      for (const node of nodes) {
        const driftX = (node.baseX - node.x) * 0.0008;
        const driftY = (node.baseY - node.y) * 0.0008;
        node.vx += driftX;
        node.vy += driftY;

        if (mouse.active) {
          const dx = node.x - mouse.x;
          const dy = node.y - mouse.y;
          const distance = Math.hypot(dx, dy) || 1;
          const influence = Math.max(0, 1 - distance / (220 * dpr));
          node.vx += (dx / distance) * influence * 0.014;
          node.vy += (dy / distance) * influence * 0.014;
        }

        node.x += node.vx;
        node.y += node.vy;
        node.vx *= 0.985;
        node.vy *= 0.985;

        if (node.x < -20 || node.x > width + 20) node.vx *= -1;
        if (node.y < -20 || node.y > height + 20) node.vy *= -1;
      }

      for (let index = 0; index < nodes.length; index += 1) {
        const a = nodes[index];
        for (let compare = index + 1; compare < nodes.length; compare += 1) {
          const b = nodes[compare];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.hypot(dx, dy);

          if (distance <= linkDistance) {
            const alpha = 0.18 * (1 - distance / linkDistance);
            context.strokeStyle = `rgba(183, 194, 255, ${alpha})`;
            context.lineWidth = dpr;
            context.beginPath();
            context.moveTo(a.x, a.y);
            context.lineTo(b.x, b.y);
            context.stroke();
          }
        }
      }

      for (const node of nodes) {
        context.beginPath();
        context.fillStyle = "rgba(241, 244, 255, 0.8)";
        context.arc(node.x, node.y, 1.3 * dpr, 0, Math.PI * 2);
        context.fill();
      }

      animationFrame = requestAnimationFrame(step);
    };

    resize();
    step();

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerleave", onPointerLeave);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      cancelAnimationFrame(animationFrame);
    };
  }, [intensity]);

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none fixed inset-0 z-0" />;
}
