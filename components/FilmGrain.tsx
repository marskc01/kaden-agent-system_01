const grain = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="1.15" numOctaves="2" stitchTiles="stitch"/></filter><rect width="180" height="180" filter="url(%23n)" opacity="0.95"/></svg>`;

export function FilmGrain() {
  return (
    <div
      className="pointer-events-none fixed inset-[-8%] z-[3] opacity-[0.11] mix-blend-soft-light"
      style={{
        backgroundImage: `url('${grain}')`,
        backgroundSize: "180px 180px",
        animation: "grainDrift .28s steps(2) infinite"
      }}
      aria-hidden="true"
"use client";

import { useEffect, useRef } from "react";

export function FilmGrain() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let animationFrame = 0;

    const resize = () => {
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = "100%";
      canvas.style.height = "100%";
    };

    const draw = () => {
      const width = canvas.width;
      const height = canvas.height;
      const image = context.createImageData(width, height);
      const buffer = image.data;

      for (let i = 0; i < buffer.length; i += 4) {
        const value = Math.random() * 255;
        buffer[i] = value;
        buffer[i + 1] = value;
        buffer[i + 2] = value;
        buffer[i + 3] = 10;
      }

      context.putImageData(image, 0, 0);
      animationFrame = window.requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-10 opacity-[0.12] mix-blend-soft-light"
    />
  );
}
