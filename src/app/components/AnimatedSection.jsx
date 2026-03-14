"use client";
import { useEffect, useRef, useState } from "react";

export default function AnimatedSection({ children, className = "", style = {}, delay = "0.1s" }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger as soon as 15% of the element is visible
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 1s ease-out ${delay}, transform 1s cubic-bezier(0.2, 0.8, 0.2, 1) ${delay}`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
