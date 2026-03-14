"use client";

import { useState, useEffect, useCallback, useRef, useMemo } from "react";

const getRemainingTime = (target) => {
  const now = new Date().getTime();
  const distance = Math.max(target - now, 0);

  return [
    { label: "Hari", value: Math.floor(distance / (1000 * 60 * 60 * 24)) },
    { label: "Jam", value: Math.floor((distance / (1000 * 60 * 60)) % 24) },
    { label: "Menit", value: Math.floor((distance / (1000 * 60)) % 60) },
    { label: "Detik", value: Math.floor((distance / 1000) % 60) },
  ];
};

const slides = [
  { src: "/images/slide1.jpg", alt: "Foto mempelai 1" },
  { src: "/images/slide2.jpg", alt: "Foto mempelai 2" },
  { src: "/images/slide3.jpg", alt: "Foto mempelai 3" },
  { src: "/images/slide4.jpg", alt: "Foto mempelai 4" },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);
  const [sliding, setSliding] = useState(false);
  const timeoutRef = useRef(null);
  const rafRef = useRef(null);

  // Countdown logic
  const targetDate = "2026-08-16T08:00:00";
  const target = useMemo(() => new Date(targetDate).getTime(), [targetDate]);
  const [timeLeft, setTimeLeft] = useState(() => getRemainingTime(target));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getRemainingTime(target));
    }, 1000);
    return () => clearInterval(timer);
  }, [target]);

  const goTo = useCallback(
    (index) => {
      if (sliding || index === current) return;

      setPrev(current);
      setCurrent(index);

      // Force browser to render the new slide at translateX(100%) first
      // then on the next frame start the slide-in animation
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = requestAnimationFrame(() => {
          setSliding(true);
        });
      });

      // After transition completes, clean up
      timeoutRef.current = setTimeout(() => {
        setSliding(false);
        setPrev(null);
      }, 2200);
    },
    [current, sliding]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const getSlideStyle = (index) => {
    // CURRENT slide that is entering
    if (index === current && prev !== null) {
      return {
        opacity: sliding ? 1 : 0,
        transition: sliding ? "opacity 2s ease-in-out" : "none",
        zIndex: 3,
      };
    }

    // CURRENT slide (no transition happening, just showing)
    if (index === current && prev === null) {
      return {
        opacity: 1,
        transition: "none",
        zIndex: 2,
      };
    }

    // PREVIOUS slide: stays perfectly still, fully visible underneath while new slide fades in on top
    if (index === prev) {
      return {
        opacity: 1,
        transition: "none",
        zIndex: 1,
      };
    }

    // ALL OTHER slides: hidden behind
    return {
      opacity: 0,
      transition: "none",
      zIndex: 0,
    };
  };

  return (
    <section className="hero-slider">
      <div className="hs-track">
        {slides.map((slide, i) => (
          <div
            key={i}
            className="hs-slide"
            style={getSlideStyle(i)}
            aria-hidden={i !== current}
          >
            <div
              className="hs-slide-img"
              style={{ backgroundImage: `url(${slide.src})` }}
            />
          </div>
        ))}
      </div>

      <div className="hs-overlay" />

      <div className="hs-content">
        <p className="hs-label">Wedding Invitation</p>
        <h1 className="hs-names">Rio Setiawan &amp; Lukmaniati</h1>
        <div className="hs-divider">
          <span className="hs-line" />
          <p className="hs-date">27 &bull; 08 &bull; 26</p>
          <span className="hs-line" />
        </div>
      </div>

      <div className="hs-countdown-vertical">
        {timeLeft.map((item) => (
          <div key={item.label} className="hs-countdown-item">
            <span className="hs-cd-val">{item.value.toString().padStart(2, "0")}</span>
            <span className="hs-cd-lbl">{item.label}</span>
          </div>
        ))}
      </div>

    </section>
  );
}
