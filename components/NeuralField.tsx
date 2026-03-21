"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
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
    let nodes: Node[] = [];

    const createNodes = () => {
      const area = window.innerWidth * window.innerHeight;
      const count = Math.max(28, Math.floor((area / 32000) * intensity));

      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18
      }));
    };

    const resize = () => {
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      createNodes();
    };

    const onMove = (event: PointerEvent) => {
      mouse.active = true;
      mouse.x = event.clientX * dpr;
      mouse.y = event.clientY * dpr;
    };

    const onLeave = () => {
      mouse.active = false;
    };

    const render = () => {
      const width = canvas.width;
      const height = canvas.height;
      context.clearRect(0, 0, width, height);

      const gradient = context.createRadialGradient(
        width * 0.5,
        height * 0.18,
        0,
        width * 0.5,
        height * 0.2,
        width * 0.9
      );
      gradient.addColorStop(0, "rgba(183, 194, 255, 0.18)");
      gradient.addColorStop(0.45, "rgba(183, 194, 255, 0.04)");
      gradient.addColorStop(1, "rgba(183, 194, 255, 0)");
      context.fillStyle = gradient;
      context.fillRect(0, 0, width, height);

      const linkDistance = 130 * dpr * intensity;

      for (const node of nodes) {
        if (mouse.active) {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const distance = Math.hypot(dx, dy) || 1;
          if (distance < 220 * dpr) {
            node.vx += (dx / distance) * 0.0035;
            node.vy += (dy / distance) * 0.0035;
          }
        }

        node.x += node.vx;
        node.y += node.vy;
        node.vx *= 0.992;
        node.vy *= 0.992;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
        node.x = Math.min(width, Math.max(0, node.x));
        node.y = Math.min(height, Math.max(0, node.y));
      }

      context.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.hypot(dx, dy);
          if (distance <= linkDistance) {
            const alpha = (1 - distance / linkDistance) * 0.22;
            context.strokeStyle = `rgba(183, 194, 255, ${alpha})`;
            context.beginPath();
            context.moveTo(a.x, a.y);
            context.lineTo(b.x, b.y);
            context.stroke();
          }
        }
      }

      for (const node of nodes) {
        context.beginPath();
        context.fillStyle = "rgba(237, 240, 255, 0.7)";
        context.arc(node.x, node.y, 1.3 * dpr, 0, Math.PI * 2);
        context.fill();
      }

      animationFrame = window.requestAnimationFrame(render);
    };

    resize();
    render();

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerleave", onLeave);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      window.cancelAnimationFrame(animationFrame);
    };
  }, [intensity]);

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none fixed inset-0 z-0" />;
}
