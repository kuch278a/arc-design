import React, { useRef, useEffect } from 'react';

/**
 * InteractiveDotGrid
 * A canvas-driven interactive dot matrix that reacts to cursor proximity
 * with dynamic scale, opacity, and color interpolation with smooth physics decay.
 */
export default function InteractiveDotGrid({
  gap = 26,                              // Distance between dots in px
  baseRadius = 1.4,                      // Idle dot radius
  activeRadius = 3.8,                    // Max dot radius near cursor
  proximityRadius = 135,                 // Hover influence radius in px
  baseColor = 'rgba(215, 215, 220, 0.65)', // Idle dot color
  activeColor = { r: 225, g: 29, b: 72 }, // Active dot RGB (ruby/crimson #e11d48)
  className = '',
  children
}) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -2000, y: -2000, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = 0;
    let height = 0;
    let dots = [];

    const handleResize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      width = rect.width;
      height = rect.height;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      dots = [];
      const cols = Math.floor(width / gap);
      const rows = Math.floor(height / gap);
      const startX = (width - (cols - 1) * gap) / 2;
      const startY = (height - (rows - 1) * gap) / 2;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          dots.push({
            x: startX + i * gap,
            y: startY + j * gap,
            scale: 0
          });
        }
      }
    };

    handleResize();
    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(container);

    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true
      };
    };

    const onMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    container.addEventListener('mouseleave', onMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const mouseX = mouseRef.current.x;
      const mouseY = mouseRef.current.y;
      const isMouseActive = mouseRef.current.active;

      const { r, g, b } = activeColor;

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        let targetScale = 0;

        if (isMouseActive) {
          const dx = mouseX - dot.x;
          const dy = mouseY - dot.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < proximityRadius) {
            // Cubic ease-out falloff for natural light bloom
            const ratio = 1 - dist / proximityRadius;
            targetScale = ratio * ratio;
          }
        }

        // Smooth Lerp physics decay
        dot.scale += (targetScale - dot.scale) * 0.14;

        const currentRadius = baseRadius + (activeRadius - baseRadius) * dot.scale;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, currentRadius, 0, Math.PI * 2);

        if (dot.scale > 0.015) {
          // Dynamic alpha based on proximity
          const alpha = 0.2 + dot.scale * 0.78;
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        } else {
          ctx.fillStyle = baseColor;
        }

        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      window.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [gap, baseRadius, activeRadius, proximityRadius, baseColor, activeColor]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden w-full ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        aria-hidden="true"
      />
      <div className="relative z-10 pointer-events-auto">{children}</div>
    </div>
  );
}
