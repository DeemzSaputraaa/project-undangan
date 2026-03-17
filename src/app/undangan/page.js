
import RsvpForm from "../components/RsvpForm";
import HeroSlider from "../components/HeroSlider";
import MusicPlayer from "../components/MusicPlayer";
import WeddingGift from "../components/WeddingGift";
import WishesSection from "../components/WishesSection";
import ClosingSection from "../components/ClosingSection";
import AnimatedSection from "../components/AnimatedSection";
import Countdown from "../components/Countdown";

export default function UndanganPage() {
  return (
    <div className="page">
      <HeroSlider />

      {/* Quote Section */}
      <section className="section" id="quote" style={{ position: "relative", zIndex: 10, display: "flex", justifyContent: "center", paddingTop: "clamp(20px, 5vw, 40px)", paddingBottom: "20px" }}>
        <div style={{ width: "95%", maxWidth: "1500px", textAlign: "center" }}>
          <AnimatedSection delay="0.1s">
            <div className="card" style={{ background: "#fff", padding: "clamp(20px, 3vw, 35px) clamp(20px, 5vw, 60px)", display: "flex", flexDirection: "column", gap: "14px", alignItems: "center" }}>
              <h3 style={{ fontFamily: "var(--font-heading), serif", fontSize: "clamp(1.5rem, 4vw, 2.2rem)", margin: 0, color: "var(--deep)", fontWeight: 400 }}>
                بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
              </h3>
              <p className="section-lead" style={{ margin: 0, maxWidth: "100%", fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)", lineHeight: 1.7, color: "#444" }}>
                "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir."
              </p>
              <p style={{ fontWeight: 600, color: "var(--deep)", letterSpacing: "0.15em", margin: 0, fontSize: "0.85rem", textTransform: "uppercase" }}>
                (QS. Ar-Rum: 21)
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mempelai Section */}
      <section className="section" id="mempelai">
        <div className="container" style={{ textAlign: "center" }}>
          <AnimatedSection delay="0.1s">
            <p className="pill" style={{ marginBottom: "16px" }}>Sang Mempelai</p>
            <h2 className="section-title">Pasangan Berbahagia</h2>
            <p className="section-lead" style={{ margin: "0 auto 40px" }}>
              Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan acara pernikahan putra-putri kami:
            </p>
          </AnimatedSection>
          
          <div className="mempelai-grid" style={{ gap: "clamp(40px, 5vw, 60px)", marginTop: "10px" }}>
            {/* Mempelai Pria */}
            <AnimatedSection delay="0.2s">
              <div className="mempelai-wrapper" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                <div style={{ 
                  width: "min(250px, 65vw)", 
                  aspectRatio: "4/5", 
                  borderRadius: "200px", 
                  backgroundImage: "url('/images/pria.jpg')", 
                  backgroundSize: "108%", 
                  backgroundPosition: "center 25%", 
                  marginBottom: "24px", 
                  marginTop: "-30px",
                  border: "6px solid rgba(255, 220, 228, 0.25)", 
                  boxShadow: "0 14px 40px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,220,228,0.1)" 
                }}></div>
                <h3 style={{ fontFamily: "var(--font-script), 'Great Vibes', cursive", fontSize: "clamp(3.5rem, 8vw, 4.5rem)", color: "var(--accent)", margin: "0 0 -10px 0", fontWeight: 400, transform: "rotate(-2deg)" }}>
                  Riyo
                </h3>
                <h4 style={{ fontFamily: "var(--font-heading), serif", fontSize: "clamp(1.6rem, 4vw, 2.2rem)", color: "var(--ink)", margin: "0 0 24px 0", fontWeight: 500, letterSpacing: "1px" }}>
                  Riyo Setiawan
                </h4>
                <p style={{ color: "var(--ink-soft)", lineHeight: "1.7", margin: 0, fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)" }}>
                  Putra dari<br/>
                  <strong style={{ color: "var(--accent)", fontSize: "clamp(0.95rem, 1.6vw, 1.1rem)", display: "block", marginTop: "6px", fontWeight: 500 }}>Bapak Sumedi &amp; Ibu Supatnaten</strong>
                </p>
              </div>
            </AnimatedSection>

            {/* Dan / & */}
            <div className="mempelai-ampersand">
              <span style={{ fontFamily: "var(--font-script), 'Great Vibes', cursive", fontSize: "clamp(3.5rem, 8vw, 5rem)", color: "var(--gold)", opacity: 0.8, textShadow: "0 4px 12px rgba(0,0,0,0.3)" }}>&</span>
            </div>

            {/* Mempelai Wanita */}
            <AnimatedSection delay="0.3s">
              <div className="mempelai-wrapper" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                <div style={{ 
                  width: "min(250px, 65vw)", 
                  aspectRatio: "4/5", 
                  borderRadius: "200px", 
                  backgroundImage: "url('/images/wanita.jpg')", 
                  backgroundSize: "108%", 
                  backgroundPosition: "center 25%", 
                  marginBottom: "24px", 
                  marginTop: "-30px",
                  border: "6px solid rgba(255, 220, 228, 0.25)", 
                  boxShadow: "0 14px 40px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,220,228,0.1)" 
                }}></div>
                <h3 style={{ fontFamily: "var(--font-script), 'Great Vibes', cursive", fontSize: "clamp(3.5rem, 8vw, 4.5rem)", color: "var(--accent)", margin: "0 0 -10px 0", fontWeight: 400, transform: "rotate(-2deg)" }}>
                  Lukmaniati
                </h3>
                <h4 style={{ fontFamily: "var(--font-heading), serif", fontSize: "clamp(1.6rem, 4vw, 2.2rem)", color: "var(--ink)", margin: "0 0 24px 0", fontWeight: 500, letterSpacing: "1px" }}>
                  Lukmaniati
                </h4>
                <p style={{ color: "var(--ink-soft)", lineHeight: "1.7", margin: 0, fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)" }}>
                  Putri Kedua dari<br/>
                  <strong style={{ color: "var(--accent)", fontSize: "clamp(0.95rem, 1.6vw, 1.1rem)", display: "block", marginTop: "6px", fontWeight: 500 }}>Bapak Sukidi (alm) &amp; Ibu Yatinah</strong>
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Save The Date / Countdown Section */}
      <section className="section save-the-date-section" id="save-the-date" style={{ padding: "clamp(40px, 8vw, 80px) 0", background: "url('/images/awal.jpg') center 35% / cover", position: "relative" }}>
        {/* Overlay to fade background a bit for readability */}
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(253, 248, 245, 0.85)" }}></div>
        
        <div className="container" style={{ position: "relative", zIndex: 2, textAlign: "center", maxWidth: "850px", margin: "0 auto" }}>
          <AnimatedSection delay="0.1s">
            <div style={{ padding: "clamp(10px, 3vw, 20px) 0" }}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <p className="pill" style={{ marginBottom: "16px" }}>Save The Date</p>
              </div>
              <h2 className="section-title">Hitung Mundur Menuju Hari Bahagia</h2>
              <p className="section-lead" style={{ margin: "0 auto 40px" }}>
                Tandai tanggal ini dan jadilah bagian dari momen paling berharga dalam hidup kami.
              </p>
              <div className="save-the-date-date">
                <span>Minggu</span>
                <span className="save-the-date-bullet">✦</span>
                <span>16 Agustus 2026</span>
              </div>
              <Countdown targetDate="2026-08-16T08:00:00" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Acara Section */}
      <section className="section" id="acara">
        <div className="container" style={{ textAlign: "center" }}>
          <AnimatedSection delay="0.1s">
            <p className="pill" style={{ marginBottom: "16px" }}>Jadwal Acara</p>
            <h2 className="section-title">Waktu &amp; Tempat</h2>
            <p className="section-lead" style={{ margin: "0 auto 40px" }}>
              Dengan memohon rahmat dan ridho Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk hadir pada acara:
            </p>
          </AnimatedSection>

          <div className="acara-grid">
            {/* Akad Nikah */}
            <AnimatedSection delay="0.15s">
              <div className="acara-card">
                <div className="acara-card-inner">
                  <h3 className="acara-title">AKAD NIKAH</h3>
                  <p className="acara-day">MINGGU</p>
                  <p className="acara-date">16</p>
                  <p className="acara-month">AGUSTUS 2026</p>
                  <p className="acara-time">Pukul : 08:00 WIB</p>
                  
                  <div className="acara-divider">
                    <span className="acara-divider-line"></span>
                  </div>

                  <p className="acara-location">
                    <strong>Tempat : Kediaman Mempelai Wanita</strong><br/>
                    Ds Pagu, Wates, Kediri, Jawa Timur
                  </p>

                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="acara-btn">
                    📍 LIHAT LOKASI
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* Resepsi */}
            <AnimatedSection delay="0.25s">
              <div className="acara-card">
                <div className="acara-card-inner">
                  <h3 className="acara-title">RESEPSI</h3>
                  <p className="acara-day">MINGGU</p>
                  <p className="acara-date">16</p>
                  <p className="acara-month">AGUSTUS 2026</p>
                  <p className="acara-time">Pukul : 10:00 WIB</p>
                  
                  <div className="acara-divider">
                    <span className="acara-divider-line"></span>
                  </div>

                  <p className="acara-location">
                    <strong>Tempat : Kediaman Mempelai Wanita</strong><br/>
                    Ds Pagu, Wates, Kediri, Jawa Timur
                  </p>

                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="acara-btn">
                    📍 LIHAT LOKASI
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section" id="story" style={{ paddingTop: "clamp(40px, 5vw, 60px)", paddingBottom: "clamp(40px, 5vw, 60px)" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
            <AnimatedSection delay="0.1s">
              <p className="pill" style={{ marginBottom: "16px" }}>True Story</p>
              <h2 className="section-title">Perjalanan Cinta Kami</h2>
              <p style={{ color: "var(--ink-soft)", lineHeight: "1.8", fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)", fontStyle: "italic", marginTop: "20px" }}>
                "Pertemuan sederhana yang tak pernah kami rencanakan menjadi awal dari cerita yang panjang. Melewati banyak tawa, tangis, serta proses saling mengerti. Kini, kami berdiri di sini siap untuk memulai babak baru bersama-sama dan selamanya."
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <WeddingGift />

      <WishesSection />

      <ClosingSection />
      
      <MusicPlayer />
    </div>
  );
}
