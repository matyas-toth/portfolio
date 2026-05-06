"use client";

import React, { useRef, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function GlowGrid({ children, className, ...props }: HTMLAttributes<HTMLDivElement>) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const cards = containerRef.current.getElementsByClassName("glow-card");
    for (const card of Array.from(cards)) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
      (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
    }
  };

  return (
    <div ref={containerRef} onMouseMove={handleMouseMove} className={cn("group/glowgrid", className)} {...props}>
      {children}
    </div>
  );
}

export function GlowCard({ children, className, innerClassName, ...props }: HTMLAttributes<HTMLDivElement> & { innerClassName?: string }) {
  return (
    <div
      className={cn(
        "glow-card relative bg-olive-800 rounded-3xl group/glow",
        className
      )}
      {...props}
    >
      {/* Border glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover/glowgrid:opacity-100 transition-opacity duration-500 rounded-3xl"
        style={{
          background: "radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.5), transparent 40%)"
        }}
      />

      {/* Inner card background */}
      <div className={cn("absolute inset-[2px] rounded-[calc(1.9rem)] bg-olive-900 z-10", innerClassName)}></div>

      {/* Content wrapper */}
      <div className="relative z-20 h-full w-full">
        {children}
      </div>

      {/* Hover background glow */}
      <div
        className="pointer-events-none absolute inset-[2px] rounded-[calc(1.5rem-2px)] z-30 opacity-0 group-hover/glow:opacity-0 transition-opacity duration-500"
        style={{
          background: "radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.06), transparent 40%)"
        }}
      />
    </div>
  );
}
