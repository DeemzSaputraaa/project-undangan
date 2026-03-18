"use client";

import { useState, useEffect, useCallback } from "react";
import AnimatedSection from "./AnimatedSection";

function timeAgo(dateString) {
  const now = new Date();
  const date = new Date(dateString);
  const diffMs = now - date;
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);
  const diffMonth = Math.floor(diffDay / 30);
  const diffYear = Math.floor(diffMonth / 12);

  if (diffSec < 60) return "Baru saja";
  if (diffMin < 60) return `${diffMin} menit lalu`;
  if (diffHour < 24) return `${diffHour} jam lalu`;
  if (diffDay < 30) return `${diffDay} hari lalu`;
  if (diffMonth < 12) return `${diffMonth} bulan lalu`;
  return `${diffYear} tahun lalu`;
}

const cardStyle = {
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.18)",
  borderRadius: "20px",
  padding: "clamp(20px, 4vw, 32px)",
  backdropFilter: "blur(8px)",
};

export default function WishesSection() {
  const [wishes, setWishes] = useState([]);
  const [stats, setStats] = useState({ hadir: 0, tidakHadir: 0, total: 0 });
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [loading, setLoading] = useState(true);

  const fetchWishes = useCallback(async () => {
    try {
      const res = await fetch("/api/rsvp");
      const json = await res.json();
      if (json.ok) {
        setWishes(json.data || []);
        setStats({ hadir: json.hadir || 0, tidakHadir: json.tidakHadir || 0, total: json.total || 0 });
      }
    } catch { /* ignore */ }
    setLoading(false);
  }, []);

  useEffect(() => { fetchWishes(); }, [fetchWishes]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Mengirim..." });
    try {
      const formData = new FormData(e.target);
      const res = await fetch("/api/rsvp", { method: "POST", body: formData });
      const result = await res.json();
      if (!res.ok) throw new Error(result?.message || "Gagal mengirim.");
      setStatus({ type: "success", message: "Terima kasih! Ucapan Anda sudah terkirim 💌" });
      e.target.reset();
      fetchWishes();
    } catch (err) {
      setStatus({ type: "error", message: err?.message || "Terjadi kesalahan." });
    }
  };

  return (
    <section
      id="rsvp"
      style={{
        background: "var(--deep)",
        padding: "clamp(40px, 8vw, 80px) 0",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 clamp(16px, 4vw, 32px)" }}>

        {/* ── Header (Full Width) ── */}
        <AnimatedSection delay="0.1s">
          <h2 style={{ fontFamily: "var(--font-heading), serif", fontSize: "clamp(2rem, 5vw, 3rem)", color: "#fff", letterSpacing: "4px", textAlign: "center", marginBottom: "12px" }}>
            WISHES
          </h2>
          <p style={{ textAlign: "center", color: "rgba(255,255,255,0.8)", fontSize: "clamp(0.9rem, 2vw, 1rem)", marginBottom: "40px", fontWeight: 500 }}>
            Berikan ucapan harapan dan do&apos;a kepada kedua mempelai
          </p>
        </AnimatedSection>

        {/* ── Two-Column Row ── */}
        <AnimatedSection delay="0.2s" style={{ display: "flex", gap: "24px", alignItems: "flex-start", flexWrap: "wrap" }}>

          {/* LEFT CARD: Stats + Form */}
          <div style={{ flex: "1 1 280px", minWidth: "260px", ...cardStyle }}>

            {/* Stats inside left card */}
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", marginBottom: "10px", textAlign: "center" }}>
              {stats.total} Comments
            </p>
            <div style={{ display: "flex", gap: "12px", marginBottom: "24px" }}>
              <div style={{ flex: 1, background: "#d4edda", borderRadius: "12px", padding: "12px 8px", textAlign: "center" }}>
                <div style={{ fontSize: "1.6rem", fontWeight: "700", color: "#2e7d32" }}>{stats.hadir}</div>
                <div style={{ fontSize: "0.85rem", color: "#2e7d32", fontWeight: 600 }}>Hadir</div>
              </div>
              <div style={{ flex: 1, background: "#fce4e4", borderRadius: "12px", padding: "12px 8px", textAlign: "center" }}>
                <div style={{ fontSize: "1.6rem", fontWeight: "700", color: "#c62828" }}>{stats.tidakHadir}</div>
                <div style={{ fontSize: "0.85rem", color: "#c62828", fontWeight: 600 }}>Tidak Hadir</div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <input
                name="name"
                placeholder="Nama"
                required
                style={{ padding: "12px 14px", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.2)", fontSize: "0.92rem", background: "rgba(255,255,255,0.92)", outline: "none", width: "100%", boxSizing: "border-box", color: "#222" }}
              />
              <textarea
                name="message"
                placeholder="Ucapan"
                required
                rows={4}
                style={{ padding: "12px 14px", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.2)", fontSize: "0.92rem", background: "rgba(255,255,255,0.92)", resize: "vertical", outline: "none", width: "100%", boxSizing: "border-box", fontFamily: "inherit", color: "#222" }}
              />
              <select
                name="attendance"
                required
                defaultValue=""
                style={{ padding: "12px 14px", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.2)", fontSize: "0.92rem", background: "rgba(255,255,255,0.92)", outline: "none", width: "100%", boxSizing: "border-box", color: "#222", cursor: "pointer" }}
              >
                <option value="" disabled>Konfirmasi Kehadiran</option>
                <option value="hadir">Hadir</option>
                <option value="tidak-hadir">Tidak Hadir</option>
                <option value="masih-ragu">Masih Ragu</option>
              </select>
              <button
                type="submit"
                disabled={status.type === "loading"}
                style={{ padding: "13px", background: "rgba(255,255,255,0.15)", color: "#fff", border: "2px solid rgba(255,255,255,0.4)", borderRadius: "10px", fontSize: "0.95rem", fontWeight: "700", cursor: "pointer", letterSpacing: "1px", transition: "all 0.2s", opacity: status.type === "loading" ? 0.65 : 1 }}
              >
                Kirim
              </button>
              {status.message && (
                <p style={{ textAlign: "center", color: status.type === "error" ? "#ff8a80" : "#a5d6a7", fontSize: "0.88rem", fontWeight: 600, margin: 0 }}>
                  {status.message}
                </p>
              )}
            </form>
          </div>

          {/* RIGHT CARD: Wishes List */}
          <div className="hide-scrollbar" style={{ flex: "1 1 280px", minWidth: "260px", maxHeight: "500px", overflowY: "auto", ...cardStyle }}>
            <h3 style={{ color: "#fff", fontFamily: "var(--font-heading), serif", fontSize: "1.2rem", marginBottom: "20px", letterSpacing: "1px", textAlign: "center" }}>
              Ucapan &amp; Doa
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {loading && (
                <p style={{ textAlign: "center", color: "rgba(255,255,255,0.4)", fontSize: "0.9rem" }}>Memuat ucapan...</p>
              )}
              {!loading && wishes.length === 0 && (
                <p style={{ textAlign: "center", color: "rgba(255,255,255,0.4)", fontSize: "0.9rem" }}>Belum ada ucapan.</p>
              )}
              {wishes.map((w) => (
                <div key={w.id} style={{ display: "flex", gap: "12px", alignItems: "flex-start", paddingBottom: "18px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(255,255,255,0.15)", border: "1.5px solid rgba(255,255,255,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ margin: "0 0 6px 0", fontSize: "0.8rem", color: "rgba(255,255,255,0.55)", fontWeight: 700, wordBreak: "break-word", overflowWrap: "break-word", display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
                      <span>- {w.name}</span>
                      <span style={{ fontSize: "0.76rem", fontWeight: "700", color: w.attendance === "hadir" ? "#81c784" : w.attendance === "tidak-hadir" ? "#ef9a9a" : "rgba(255,255,255,0.45)", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                        {w.attendance === "hadir" ? (
                          <>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                            Hadir
                          </>
                        ) : w.attendance === "tidak-hadir" ? (
                          <>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M18 6L6 18"></path>
                              <path d="M6 6l12 12"></path>
                            </svg>
                            Tidak Hadir
                          </>
                        ) : (
                          <>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <circle cx="12" cy="12" r="9"></circle>
                              <path d="M9.5 9a2.5 2.5 0 1 1 3.7 2.2c-.9.5-1.2.9-1.2 1.8"></path>
                              <circle cx="12" cy="17" r="1"></circle>
                            </svg>
                            Masih Ragu
                          </>
                        )}
                      </span>
                    </p>
                    <p style={{ margin: "0 0 6px 0", fontSize: "0.92rem", color: "rgba(255,255,255,0.88)", lineHeight: 1.6, wordBreak: "break-word", overflowWrap: "break-word" }}>
                      {w.message}
                    </p>
                    <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
                      <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.38)", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <circle cx="12" cy="12" r="9"></circle>
                          <path d="M12 7v6l4 2"></path>
                        </svg>
                        {timeAgo(w.created_at)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
