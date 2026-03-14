"use client";

import { useEffect, useRef, useState } from "react";

export default function ClosingSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section"
      style={{
        background: "url('/images/awal.jpg') center 20% / cover",
        position: "relative",
        padding: "clamp(60px, 10vw, 100px) 20px",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Overlay to create the soft krem background over the image like WeddingGift */}
      <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(253, 248, 245, 0.85)" }}></div>
      

      <div style={{ position: "relative", zIndex: 2, maxWidth: "800px", margin: "0 auto" }}>
        
        {/* Arch Image Container */}
        <div style={{ 
          position: "relative", 
          margin: "0 auto 40px auto", 
          width: "clamp(200px, 50vw, 260px)",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(40px)",
          transition: "all 1s cubic-bezier(0.2, 0.8, 0.2, 1) 0.1s"
        }}>
          
          {/* Flower overlapping the top of the Arch Image */}
          {/* <img
            src="/icon/bunga5.png"
            alt="Hiasan Bunga Atas"
            style={{
              position: "absolute",
              top: "-50px", 
              left: "50%",
              width: "120%", 
              height: "auto",
              zIndex: 3,
              pointerEvents: "none",
              transform: "translateX(-10%)", 
            }}
          /> */}

          <div
            style={{
              width: "100%",
              aspectRatio: "3 / 4",
              background: "url('/images/gallery1.jpg') center/cover",
              borderTopLeftRadius: "150px",
              borderTopRightRadius: "150px",
              border: "6px solid var(--deep)",
              boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
            }}
          ></div>

        </div>

        {/* Text */}
        <p
          style={{
            fontFamily: "var(--font-body), sans-serif",
            color: "var(--deep)",
            fontSize: "clamp(0.85rem, 3.5vw, 1rem)",
            lineHeight: 1.6,
            marginBottom: "20px",
            fontWeight: 500,
            padding: "0 20px",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 1s cubic-bezier(0.2, 0.8, 0.2, 1) 0.3s"
          }}
        >
          Merupakan suatu kehormatan dan kebahagiaan bagi kami 
          apabila Anda berkenan hadir dan memberikan doa restunya 
          untuk pernikahan kami.
          <br /><br />
          Atas doa &amp; restunya, kami ucapkan terima kasih.
        </p>

        {/* Couple Names */}
        <h2
          style={{
            fontFamily: "var(--font-heading), serif",
            color: "var(--deep)",
            fontSize: "clamp(1.6rem, 5vw, 2.4rem)",
            fontWeight: "700",
            letterSpacing: "2px",
            marginTop: "10px",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 1s cubic-bezier(0.2, 0.8, 0.2, 1) 0.5s"
          }}
        >
          RIO &amp; LUKMANIATI
        </h2>
      </div>

      {/* Decorative Flowers */}
      <img
        src="/icon/bunga4.webp"
        alt="Decorative Flower Left"
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "clamp(120px, 30vw, 300px)",
          height: "auto",
          zIndex: 1,
          opacity: isVisible ? 1 : 0,
          pointerEvents: "none",
          transform: isVisible ? "translate(0, 0) scale(-1, -1)" : "translate(-60px, 60px) scale(-1, -1)",
          transition: "all 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) 0.6s"
        }}
      />
      <img
        src="/icon/bunga4.webp"
        alt="Decorative Flower Right"
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          width: "clamp(120px, 30vw, 300px)",
          height: "auto",
          zIndex: 1,
          opacity: isVisible ? 1 : 0,
          pointerEvents: "none",
          transform: isVisible ? "translate(0, 0) scaleY(-1)" : "translate(60px, 60px) scaleY(-1)",
          transition: "all 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) 0.6s"
        }}
      />
    </section>
  );
}
