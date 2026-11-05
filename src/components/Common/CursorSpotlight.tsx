import React, { useEffect, useRef } from 'react';

export const CursorSpotlight: React.FC = () => {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const spotlight = spotlightRef.current;
    const finePointer = window.matchMedia('(pointer: fine)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (!spotlight || !finePointer.matches || reducedMotion.matches) return;

    let frameId: number | null = null;
    let pointerX = 0;
    let pointerY = 0;

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType === 'touch') return;

      pointerX = event.clientX;
      pointerY = event.clientY;
      if (frameId !== null) return;

      frameId = window.requestAnimationFrame(() => {
        spotlight.style.transform = `translate3d(${pointerX - 240}px, ${pointerY - 240}px, 0)`;
        spotlight.style.opacity = '1';
        frameId = null;
      });
    };

    const handlePointerLeave = (event: PointerEvent) => {
      if (!event.relatedTarget) {
        spotlight.style.opacity = '0';
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerout', handlePointerLeave);

    return () => {
      if (frameId !== null) window.cancelAnimationFrame(frameId);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerout', handlePointerLeave);
    };
  }, []);

  return (
    <div
      ref={spotlightRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[30] h-[30rem] w-[30rem] rounded-full opacity-0 transition-opacity duration-300"
      style={{
        background:
          'radial-gradient(circle, rgba(56, 189, 248, 0.06) 0%, rgba(59, 130, 246, 0.03) 28%, rgba(34, 211, 238, 0.01) 48%, transparent 70%)',
        willChange: 'transform, opacity',
      }}
    />
  );
};
