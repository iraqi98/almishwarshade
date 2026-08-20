"use client";

import { useRef, useState } from "react";

type Ripple = { id: number; x: number; y: number; size: number };

export default function RippleButton({
  as: Tag = "a",
  children,
  className,
  onClick,
  ...props
}: {
  as?: "a" | "button";
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  [key: string]: unknown;
}) {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const nextId = useRef(0);

  function addRipple(e: React.MouseEvent) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const el = e.currentTarget as HTMLElement;
    const rect = el.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    const id = nextId.current++;

    setRipples((r) => [...r, { id, x, y, size }]);
    setTimeout(() => {
      setRipples((r) => r.filter((rp) => rp.id !== id));
    }, 500);
  }

  const Comp = Tag as React.ElementType;

  return (
    <Comp
      {...props}
      onMouseDown={addRipple}
      onClick={onClick}
      className={`relative overflow-hidden ${className ?? ""}`}
    >
      {children}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="pointer-events-none absolute rounded-full bg-white/40"
          style={{
            left: r.x,
            top: r.y,
            width: r.size,
            height: r.size,
            animation: "ripple-fade 500ms ease-out forwards",
          }}
        />
      ))}
    </Comp>
  );
}
