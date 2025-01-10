"use client";

import React, { useEffect, useRef } from "react";

interface Wave {
    phase: number;
    period: number;
    amplitude: number;
    wavelength: number;
    speed: number;
}

interface WaveAnimationProps {
    baseSpeed: number;
    width: number;
}

const WaveAnimation: React.FC<WaveAnimationProps> = ({ baseSpeed, width }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const waves: Wave[] = [];

        function randFrom(min: number, max: number) {
            return Math.random() * (max - min) + min;
        }

        function createWaves() {
            waves.length = 0;
            const waveCount = 3;
            if (!canvas) return;
            for (let i = 0; i < waveCount; i++) {
                waves.push({
                    phase: Math.random() * Math.PI * 2,
                    period: randFrom(canvas.width * 0.5, canvas.width * 1.5),
                    amplitude: (canvas.height / 8) * (1 - i * 0.2),
                    wavelength: randFrom(
                        canvas.width * 0.8,
                        canvas.width * 1.2
                    ),
                    speed: baseSpeed * (1 + i * 0.2),
                });
            }
        }

        function drawWaves(time: number) {
            if (!canvas) return;
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            waves.forEach((wave, index) => {
                ctx.beginPath();
                ctx.moveTo(0, canvas.height / 2);

                for (let x = 0; x < canvas.width; x++) {
                    const y =
                        Math.sin(
                            (x / wave.wavelength) * Math.PI * 2 +
                                wave.phase +
                                time * 0.002 * wave.speed
                        ) *
                            wave.amplitude +
                        canvas.height / 2;
                    ctx.lineTo(x, y);
                }

                ctx.strokeStyle = `rgba(67, 208, 213, ${0.5 - index * 0.15})`;
                ctx.lineWidth = width * (1 - index * 0.2);
                ctx.stroke();
            });
        }

        function animate(time: number) {
            drawWaves(time);
            requestAnimationFrame(animate);
        }

        createWaves();
        requestAnimationFrame(animate);

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            createWaves();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [baseSpeed, width]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-[400px]"
        />
    );
};

export default WaveAnimation;
