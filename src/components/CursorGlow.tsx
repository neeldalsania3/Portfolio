import { useEffect, useState } from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';

export function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const isDesktop = useMediaQuery('(min-width: 1024px) and (pointer: fine)');

  useEffect(() => {
    if (!isDesktop) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(7, 182, 235, 0.1), transparent 40%)`,
      }}
    />
  );
}
