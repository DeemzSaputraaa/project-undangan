"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

export default function WeddingGift() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      className="section"
      id="gift"
      style={{
        padding: "clamp(40px, 8vw, 80px) 0",
        background: "url('/images/awal.jpg') center 35% / cover",
        position: "relative",
      }}
    >
      {/* Overlay to fade background a bit for readability */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(253, 248, 245, 0.85)",
        }}
      ></div>

      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          maxWidth: "850px",
          margin: "0 auto",
        }}
      >
        <AnimatedSection delay="0.1s">
          <div
            style={{
              padding: "clamp(30px, 5vw, 60px)",
              borderRadius: "24px",
              border: "2px solid rgba(198, 163, 111, 0.4)",
              background: "rgba(255, 255, 255, 0.6)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 10px 40px rgba(0,0,0,0.05)",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-heading), serif",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                color: "var(--deep)",
                marginBottom: "20px",
                letterSpacing: "2px",
              }}
            >
              WEDDING GIFT
            </h2>
            <p
              style={{
                color: "var(--deep)",
                fontSize: "clamp(0.95rem, 1.8vw, 1.15rem)",
                lineHeight: 1.8,
                marginBottom: "32px",
                fontFamily: "var(--font-heading), serif",
                fontWeight: 500,
              }}
            >
              Doa restu Anda merupakan karunia yang sangat berarti bagi kami,
              dan jika memberi adalah ungkapan tanda kasih, Anda dapat memberi
              kado secara cashless.
            </p>

            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{
                padding: "14px 32px",
                background: "var(--deep)",
                color: "#fff",
                border: "none",
                borderRadius: "30px",
                fontSize: "0.95rem",
                fontWeight: "600",
                cursor: "pointer",
                letterSpacing: "1px",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                boxShadow: "0 6px 20px rgba(198, 163, 111, 0.4)",
                transition: "all 0.3s ease",
              }}
            >
              {isOpen ? "Tutup" : "➔ Klik Disini"}
              <span
                style={{
                  display: "inline-block",
                  transition: "transform 0.4s ease",
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  fontSize: "0.85rem",
                }}
              >
                ▼
              </span>
            </button>

            {/* Animated cards container - always in DOM, animated with max-height */}
            <div
              style={{
                overflow: "hidden",
                maxHeight: isOpen ? "800px" : "0px",
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "translateY(0)" : "translateY(-20px)",
                transition:
                  "max-height 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease, transform 0.5s ease",
                marginTop: isOpen ? "40px" : "0px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: "24px",
                }}
              >
                {/* ATM Card BRI Image Wrapper */}
                <div
                  style={{
                    position: "relative",
                    flex: "1 1 300px",
                    maxWidth: "380px",
                    borderRadius: "16px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                    overflow: "hidden",
                    display: "flex",
                  }}
                >
                  <img
                    src="/images/bank-bri.png"
                    alt="Bank BRI Card"
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />

                  {/* Floating Copy Button */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "16px",
                      right: "16px",
                      zIndex: 3,
                    }}
                  >
                    <button
                      onClick={() => copyToClipboard("060501018171530")}
                      style={{
                        padding: "6px 12px",
                        background: "#9aa3af",
                        color: "#fff",
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer",
                        fontSize: "0.8rem",
                        fontWeight: "600",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                        transition: "background 0.2s",
                      }}
                      onMouseOver={(e) =>
                        (e.target.style.background = "#848d98")
                      }
                      onMouseOut={(e) =>
                        (e.target.style.background = "#9aa3af")
                      }
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          x="9"
                          y="9"
                          width="13"
                          height="13"
                          rx="2"
                          ry="2"
                        ></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                      </svg>
                      Copy
                    </button>
                  </div>

                  {copied && (
                    <div
                      style={{
                        position: "absolute",
                        bottom: "56px",
                        right: "16px",
                        background: "#333",
                        color: "#fff",
                        padding: "6px 12px",
                        borderRadius: "6px",
                        fontSize: "0.8rem",
                        zIndex: 4,
                      }}
                    >
                      Berhasil disalin!
                    </div>
                  )}
                </div>

                {/* Kirim Hadiah (Physical) Wrapper */}
                <div
                  style={{
                    position: "relative",
                    flex: "1 1 300px",
                    maxWidth: "380px",
                    aspectRatio: "740 / 460",
                    borderRadius: "16px",
                    padding: "clamp(12px, 3vw, 24px)",
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(245,245,245,0.95) 100%)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    border: "1px solid rgba(255,255,255,0.8)",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      marginBottom: "0px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src="/hadiah.svg"
                      alt="Hadiah Icon"
                      style={{
                        width: "32px",
                        height: "32px",
                        objectFit: "contain",
                      }}
                    />
                  </div>

                  <h3
                    style={{
                      fontFamily: "var(--font-heading), serif",
                      fontSize: "clamp(1.1rem, 4vw, 1.3rem)",
                      color: "#455061",
                      margin: "4px 0 12px 0",
                      fontWeight: "700",
                    }}
                  >
                    Kirim Hadiah
                  </h3>

                  <div
                    style={{
                      color: "#444",
                      fontSize: "clamp(0.7rem, 2.5vw, 0.9rem)",
                      lineHeight: "1.6",
                      fontWeight: "500",
                      position: "relative",
                      zIndex: 2,
                    }}
                  >
                    <div>Nama Penerima : Lukmaniati</div>
                    <div>No. HP : 081234567890</div>
                    <div>Alamat : Kediaman Mempelai Wanita</div>
                    <div>
                      Suka mandiri sp 3D, Kec. Way Serdang, Suka Agung, Mesuji,
                      Lampung
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
