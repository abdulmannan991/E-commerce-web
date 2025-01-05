'use client'
import React, { useEffect } from "react";

type ScrollAnimationProps = {
  children: React.ReactNode;
  className?: string; 
};

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  className = "",
}) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "opacity-100",
              "translate-y-0",
              "scale-100",
              
            );
            entry.target.classList.remove(
              "opacity-0",
              "translate-y-10",
              "scale-95"
            );
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".scroll-animate");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`scroll-animate opacity-0 translate-y-10 scale-95 transition-all duration-700 ease-out  ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
