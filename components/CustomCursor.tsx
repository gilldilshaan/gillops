"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);
  const [visible, setVisible] = useState(false);
  const isTouch = useRef(false);

  useEffect(() => {
    const checkTouch = window.matchMedia("(hover: none)");
    isTouch.current = checkTouch.matches;
    if (checkTouch.matches) return;

    let x = 0;
    let y = 0;
    let targetX = 0;
    let targetY = 0;
    let rafId: number;

    const handleMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!visible) setVisible(true);
    };

    const animate = () => {
      x += (targetX - x) * 0.15;
      y += (targetY - y) * 0.15;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${x - (hover ? 20 : 4)}px, ${y - (hover ? 20 : 4)}px)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    const handleEnter = () => setHover(true);
    const handleLeave = () => setHover(false);

    window.addEventListener("mousemove", handleMove);
    animate();

    const interactiveElements = document.querySelectorAll(
      "a, button, [role='button'], input, textarea, select"
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(rafId);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, [hover, visible]);

  if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) {
    return null;
  }

  return (
    <div
      ref={dotRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: hover ? 40 : 8,
        height: hover ? 40 : 8,
        borderRadius: "50%",
        backgroundColor: "#7C3AED",
        pointerEvents: "none",
        zIndex: 9999,
        transition: "width 0.3s, height 0.3s, background-color 0.3s",
        opacity: visible ? 0.8 : 0,
      }}
    />
  );
}
