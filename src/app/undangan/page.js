
import RsvpForm from "../components/RsvpForm";
import HeroSlider from "../components/HeroSlider";
import MusicPlayer from "../components/MusicPlayer";
import WeddingGift from "../components/WeddingGift";
import WishesSection from "../components/WishesSection";
import ClosingSection from "../components/ClosingSection";

export default function UndanganPage() {
  return (
    <div className="page">
      <HeroSlider />

      <section className="section" id="quote" style={{ position: "relative", zIndex: 10, display: "flex", justifyContent: "center", paddingTop: "clamp(20px, 5vw, 40px)", paddingBottom: "20px" }}>
        <div style={{ width: "95%", maxWidth: "1500px", textAlign: "center" }}>
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
        </div>
      </section>

      <section className="section" id="mempelai">
        <div className="container" style={{ textAlign: "center" }}>
          <p className="pill" style={{ marginBottom: "16px" }}>Sang Mempelai</p>
          <h2 className="section-title">Pasangan Berbahagia</h2>
          <p className="section-lead" style={{ margin: "0 auto 40px" }}>
            Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan acara pernikahan putra-putri kami:
          </p>
          
          <div className="mempelai-grid" style={{ gap: "clamp(40px, 5vw, 60px)", marginTop: "10px" }}>
            {/* Mempelai Pria */}
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
                Rio
              </h3>
              <h4 style={{ fontFamily: "var(--font-heading), serif", fontSize: "clamp(1.6rem, 4vw, 2.2rem)", color: "var(--ink)", margin: "0 0 24px 0", fontWeight: 500, letterSpacing: "1px" }}>
                Rio Setiawan
              </h4>
              <p style={{ color: "var(--ink-soft)", lineHeight: "1.7", margin: 0, fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)" }}>
                Putra dari<br/>
                <strong style={{ color: "var(--accent)", fontSize: "clamp(0.95rem, 1.6vw, 1.1rem)", display: "block", marginTop: "6px", fontWeight: 500 }}>Bapak Sumedi & Ibu Supatnaten</strong>
              </p>
            </div>

            {/* Dan / & */}
            <div className="mempelai-ampersand">
              <span style={{ fontFamily: "var(--font-script), 'Great Vibes', cursive", fontSize: "clamp(3.5rem, 8vw, 5rem)", color: "var(--gold)", opacity: 0.8, textShadow: "0 4px 12px rgba(0,0,0,0.3)" }}>&</span>
            </div>

            {/* Mempelai Wanita */}
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
                <strong style={{ color: "var(--accent)", fontSize: "clamp(0.95rem, 1.6vw, 1.1rem)", display: "block", marginTop: "6px", fontWeight: 500 }}>Bapak Sukidi (alm) & Ibu Yatinah</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ACARA / EVENT SECTION ── */}
      <section className="section" id="acara">
        <div className="container" style={{ textAlign: "center" }}>
          <p className="pill" style={{ marginBottom: "16px" }}>Jadwal Acara</p>
          <h2 className="section-title">Waktu & Tempat</h2>
          <p className="section-lead" style={{ margin: "0 auto 40px" }}>
            Dengan memohon rahmat dan ridho Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk hadir pada acara:
          </p>

          <div className="acara-grid">
            {/* Akad Nikah */}
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

            {/* Resepsi */}
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
          </div>
        </div>
      </section>

      <section className="section" id="story" style={{ paddingTop: "clamp(40px, 5vw, 60px)", paddingBottom: "clamp(40px, 5vw, 60px)" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
            <p className="pill" style={{ marginBottom: "16px" }}>True Story</p>
            <h2 className="section-title">Perjalanan Cinta Kami</h2>
            <p style={{ color: "var(--ink-soft)", lineHeight: "1.8", fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)", fontStyle: "italic", marginTop: "20px" }}>
              "Pertemuan sederhana yang tak pernah kami rencanakan menjadi awal dari cerita yang panjang. Melewati banyak tawa, tangis, serta proses saling mengerti. Kini, kami berdiri di sini siap untuk memulai babak baru bersama-sama dan selamanya."
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="gallery">
        <div className="container" style={{ textAlign: "center" }}>
          <p className="pill" style={{ marginBottom: "16px" }}>Our Gallery</p>
          <h2 className="section-title">Momen Kebahagiaan</h2>
          
          <div className="gallery-zigzag">
            {/* 8 Images for Zigzag Layout */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <div key={num} className="gallery-item-zigzag">
                {/* Fallback pattern / image */}
                <div 
                  className="gallery-img-bg"
                  style={{ backgroundImage: `url('/images/gallery${num}.jpg')` }}
                />
              </div>
            ))}
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
