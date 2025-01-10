"use client";

import { useEffect, useRef } from "react";

interface NoiseProps {
  opacity?: number;
  speed?: number;
  color?: string;
}

export default function NoiseAnimation({
  opacity = 1,
  speed = 10,
  color = "#F2F2F2",
}: NoiseProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createNoise = () => {
      const imgData = ctx.createImageData(canvas.width, canvas.height);
      const buffer32 = new Uint32Array(imgData.data.buffer);
      const rgb = hexToRgb(color);

      for (let i = 0; i < buffer32.length; ) {
        const noise = Math.random() * 255;
        buffer32[i++] = (noise << 24) | (rgb.b << 16) | (rgb.g << 8) | rgb.r;
      }

      ctx.putImageData(imgData, 0, 0);
    };

    const render = () => {
      createNoise();
      ctx.globalAlpha = opacity;
      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener("resize", resize);
    resize();
    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [opacity, speed, color]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 h-full w-full"
      style={{ zIndex: -1 }}
      aria-hidden="true"
    />
  );
}

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : { r: 255, g: 255, b: 255 }; // Default to white if invalid hex
}
