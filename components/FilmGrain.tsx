"use client";

import { useEffect, useRef } from "react";

export function FilmGrain() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d", { alpha: true });
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
      context.clearRect(0, 0, canvas.width, canvas.height);
      const imageData = context.createImageData(canvas.width, canvas.height);
      const buffer = imageData.data;

      for (let index = 0; index < buffer.length; index += 4) {
        const brightness = Math.random() * 255;
        buffer[index] = brightness;
        buffer[index + 1] = brightness;
        buffer[index + 2] = brightness;
        buffer[index + 3] = Math.random() > 0.84 ? 18 : 0;
      }

      context.putImageData(imageData, 0, 0);
      animationFrame = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-10 opacity-[0.12] mix-blend-screen"
    />
  );
}
