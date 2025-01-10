"use client";

import React, { useEffect, useRef } from "react";
import { SVG } from "@svgdotjs/svg.js";
import { Raycaster, boundingBoxToSegments } from "./raycaster";

interface RaycastWrapperProps {
    children: React.ReactNode;
}

export default function RaycastWrapper({ children }: RaycastWrapperProps) {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        if (!wrapperRef.current || !svgRef.current) return;

        const svg = SVG().addTo(svgRef.current as unknown as HTMLElement);
        const raycaster = new Raycaster({ segments: [] });

        const elementsToObserve = wrapperRef.current.querySelectorAll(
            '[data-observe="true"]'
        );

        const observer = new ResizeObserver((entries) => {
            const segments = entries.map((e) => {
                const rect = e.target.getBoundingClientRect();
                const wrapperRect = wrapperRef.current!.getBoundingClientRect();
                return boundingBoxToSegments(
                    new DOMRect(
                        rect.x - wrapperRect.x,
                        rect.y - wrapperRect.y,
                        rect.width,
                        rect.height
                    )
                );
            });

            raycaster.setSegments(segments.flat());
        });

        elementsToObserve.forEach((el) => {
            observer.observe(el);
        });

        const clearSvg = () => {
            svg.clear();
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (!wrapperRef.current) return;

            const wrapperRect = wrapperRef.current.getBoundingClientRect();
            const x = e.clientX - wrapperRect.x;
            const y = e.clientY - wrapperRect.y;

            if (
                x < 0 ||
                y < 0 ||
                x > wrapperRect.width ||
                y > wrapperRect.height
            ) {
                clearSvg();
                return;
            }

            const res = raycaster.emit(x, y);

            svg.clear();

            res.forEach((p) => {
                svg.line(x, y, p.x, p.y).stroke("#000").stroke({
                    color: "#727892",
                });

                svg.circle(8).cx(p.x).cy(p.y).fill("#f6f6f8");
            });
        };

        wrapperRef.current.addEventListener("mousemove", handleMouseMove);
        wrapperRef.current.addEventListener("mouseleave", clearSvg);

        return () => {
            observer.disconnect();
            if (wrapperRef.current) {
                wrapperRef.current.removeEventListener(
                    "mousemove",
                    handleMouseMove
                );
                wrapperRef.current.removeEventListener("mouseleave", clearSvg);
            }
        };
    }, []);

    return (
        <div
            ref={wrapperRef}
            className="relative w-full h-full bg-[#13141b] overflow-hidden"
        >
            <div className="w-full h-full grid grid-cols-3 grid-rows-2 gap-[10vmin] p-[10vmin]">
                {children}
            </div>
            <svg
                ref={svgRef}
                className="absolute inset-0 w-full h-full pointer-events-none"
            />
        </div>
    );
}
