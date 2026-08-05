"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

function useInView<T extends HTMLElement>(threshold = 0.25) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

export function AnimatedNumber({ value, suffix = "%" }: { value: number; suffix?: string }) {
  const { ref, isVisible } = useInView<HTMLSpanElement>(0.65);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const frame = requestAnimationFrame(() => setDisplayValue(value));
      return () => cancelAnimationFrame(frame);
    }

    const duration = 2200;
    const start = performance.now();
    let frame = 0;

    const update = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(update);
    };

    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, [isVisible, value]);

  return (
    <span ref={ref} aria-label={`${value}${suffix}`}>
      <span aria-hidden="true">{displayValue}{suffix}</span>
    </span>
  );
}

export function Marker({ children, variant = "underline" }: { children: ReactNode; variant?: "underline" | "circle" }) {
  const { ref, isVisible } = useInView<HTMLSpanElement>(0.75);

  return (
    <span ref={ref} className={`marker marker-${variant}${isVisible ? " is-visible" : ""}`}>
      {children}
    </span>
  );
}

export function Typewriter({ text }: { text: string }) {
  const { ref, isVisible } = useInView<HTMLSpanElement>(0.7);
  const [characterCount, setCharacterCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const frame = requestAnimationFrame(() => setCharacterCount(text.length));
      return () => cancelAnimationFrame(frame);
    }

    let currentCharacter = 0;
    const interval = window.setInterval(() => {
      currentCharacter += 1;
      setCharacterCount(currentCharacter);
      if (currentCharacter >= text.length) window.clearInterval(interval);
    }, 95);

    return () => window.clearInterval(interval);
  }, [isVisible, text]);

  return (
    <span ref={ref} className="typewriter" aria-label={text}>
      <span className="invisible" aria-hidden="true">{text}</span>
      <span className="absolute inset-0" aria-hidden="true">{text.slice(0, characterCount)}</span>
    </span>
  );
}

export function RevealGroup({ children, className = "", delayStep = 130 }: { children: ReactNode; className?: string; delayStep?: number }) {
  const { ref, isVisible } = useInView<HTMLDivElement>(0.18);

  return (
    <div ref={ref} className={`${className}${isVisible ? " is-visible" : ""}`} style={{ "--reveal-step": `${delayStep}ms` } as CSSProperties}>
      {children}
    </div>
  );
}
