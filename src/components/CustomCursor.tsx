import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -200, y: -200 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on devices with fine pointer (mouse), not touch screens
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || prefersReducedMotion) return;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    // Soft, understated radial blue light following cursor
    <div
      className="fixed top-0 left-0 pointer-events-none z-30 transition-opacity duration-300 ease-out hidden md:block"
      style={{
        transform: `translate3d(${position.x - 200}px, ${position.y - 200}px, 0)`,
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(57, 135, 255, 0.045) 0%, transparent 65%)',
        borderRadius: '50%',
      }}
      aria-hidden="true"
    />
  );
};
