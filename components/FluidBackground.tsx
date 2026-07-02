"use client";

import { useRef, useEffect } from "react";

export default function FluidBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let w = 0;
    let h = 0;
    let mouseX = 0;
    let mouseY = 0;
    let time = 0;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Structured grid of particles for 3D depth illusion
    const layerCount = 3;
    const particlesPerLayer = 40;
    const particles: {
      x: number;
      y: number;
      z: number;
      baseX: number;
      baseY: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      layer: number;
      phase: number;
    }[] = [];

    const colors = [
      { r: 200, g: 100, b: 78 },   // #C8644E
      { r: 224, g: 122, b: 95 },   // #E07A5F
      { r: 217, g: 139, b: 74 },   // #D98B4A
      { r: 255, g: 200, b: 100 },  // gold highlight
      { r: 200, g: 80, b: 60 },    // deep sienna
    ];

    for (let layer = 0; layer < layerCount; layer++) {
      for (let i = 0; i < particlesPerLayer; i++) {
        const x = Math.random() * w;
        const y = Math.random() * h;
        const color = colors[Math.floor(Math.random() * colors.length)];
        particles.push({
          x, y,
          z: layer * 0.3 + Math.random() * 0.3,
          baseX: x,
          baseY: y,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          size: (3 - layer) * 1.5 + Math.random() * 2,
          color: `rgba(${color.r},${color.g},${color.b}`,
          layer,
          phase: Math.random() * Math.PI * 2,
        });
      }
    }

    const draw = () => {
      time += 0.016;
      ctx.fillStyle = "rgba(27, 25, 24, 0.15)";
      ctx.fillRect(0, 0, w, h);

      // Sort by Z for depth
      particles.sort((a, b) => b.z - a.z);

      // Draw connections with depth
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 120 + (particles[i].z + particles[j].z) * 50;

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.15 * (particles[i].z + particles[j].z) * 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(200, 100, 78, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Update and draw particles with 3D perspective
      particles.forEach((p) => {
        // Orbital motion + mouse influence
        const mx = (mouseX - w / 2) * 0.001 * (p.z + 1);
        const my = (mouseY - h / 2) * 0.001 * (p.z + 1);

        p.baseX += p.vx + mx * 0.01;
        p.baseY += p.vy + my * 0.01;

        // Wrap around
        if (p.baseX < -50) p.baseX = w + 50;
        if (p.baseX > w + 50) p.baseX = -50;
        if (p.baseY < -50) p.baseY = h + 50;
        if (p.baseY > h + 50) p.baseY = -50;

        // 3D wobble
        const wobble = Math.sin(time * 0.5 + p.phase) * 20 * (p.z + 0.5);
        p.x = p.baseX + wobble;
        p.y = p.baseY + Math.cos(time * 0.3 + p.phase) * 15 * (p.z + 0.5);

        // Size based on Z depth
        const depthScale = 0.5 + p.z;
        const finalSize = p.size * depthScale;

        // Glow effect
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, finalSize * 3);
        gradient.addColorStop(0, `${p.color}, ${0.8 * depthScale})`);
        gradient.addColorStop(0.5, `${p.color}, ${0.3 * depthScale})`);
        gradient.addColorStop(1, `${p.color}, 0)`);

        ctx.beginPath();
        ctx.arc(p.x, p.y, finalSize * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(p.x, p.y, finalSize, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}, ${depthScale})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 w-full h-full pointer-events-none"
      style={{ background: "#0F0D0C" }}
    />
  );
}
