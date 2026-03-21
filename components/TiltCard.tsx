"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function TiltCard({ children }: { children: React.ReactNode }) {
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, x: 50, y: 50 });

  return (
    <motion.div
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        setTilt({
          rx: -((y - 50) / 50) * 4,
          ry: ((x - 50) / 50) * 4,
          x,
          y
        });
      }}
      onMouseLeave={() => setTilt({ rx: 0, ry: 0, x: 50, y: 50 })}
      style={{
        transformStyle: "preserve-3d",
        background: `radial-gradient(380px circle at ${tilt.x}% ${tilt.y}%, rgba(255,255,255,0.09), transparent 55%)`
      }}
      animate={{ rotateX: tilt.rx, rotateY: tilt.ry }}
      transition={{ type: "spring", stiffness: 180, damping: 16, mass: 0.6 }}
    >
      {children}
    </motion.div>
  );
}
