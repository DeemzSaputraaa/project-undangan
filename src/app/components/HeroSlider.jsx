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
  { src: "/images/slide1.jpg",      alt: "Foto mempelai 1" },
  { src: "/images/slide2.jpg",  alt: "Foto mempelai 2" },
  { src: "/images/slide3.jpg",      alt: "Foto mempelai 3" },
  { src: "/images/slide4.jpg",  alt: "Foto mempelai 4" },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);
  const [animating, setAnimating] = useState(false);
  const timeoutRef = useRef(null);

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
      if (animating || index === current) return;
      setAnimating(true);
      setPrev(current);
      setCurrent(index);

      // animation duration matches CSS transition (0.8s)
      timeoutRef.current = setTimeout(() => {
        setPrev(null);
        setAnimating(false);
      }, 800);
    },
    [current, animating]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, [next]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <section className="hero-slider">
      <div className="hs-track">
        {slides.map((slide, i) => {
          let cls = "hs-slide";
          if (i === current) cls += " hs-slide--enter";
          else if (i === prev) cls += " hs-slide--exit";
          else cls += " hs-slide--hidden";

          return (
            <div
              key={i}
              className={cls}
              aria-hidden={i !== current}
            >
              <div
                className="hs-slide-img"
                style={{ backgroundImage: `url(${slide.src})` }}
              />
            </div>
          );
        })}
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
