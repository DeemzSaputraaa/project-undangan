export default function HeroSlider() {
  return (
    <section className="hero-slider">
      {/* Background Video */}
      <video
        className="hs-video-bg"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/video/bg1.mp4" type="video/mp4" />
      </video>

      <div className="hs-overlay" />

      {/* Bunga Hiasan Atas (kiri & kanan) seperti halaman cover */}
      <img src="/atas1.svg" alt="" className="opening-flower-atas opening-flower-atas1-kiri" aria-hidden="true" />
      <img src="/atas2.svg" alt="" className="opening-flower-atas opening-flower-atas2-kiri" aria-hidden="true" />
      <img src="/atas1.svg" alt="" className="opening-flower-atas opening-flower-atas1-kanan" aria-hidden="true" />
      <img src="/atas2.svg" alt="" className="opening-flower-atas opening-flower-atas2-kanan" aria-hidden="true" />

      {/* 2 Kupu-kupu terbang dengan kepak sayap dan jalur berbeda */}
      {/* Kupu-kupu 1 (Utama - Besar) */}
      <div className="hs-butterfly-wrap" aria-hidden="true">
        <img src="/kupu-kupu.svg" alt="" className="hs-butterfly-wings" />
      </div>

      {/* Kupu-kupu 2 (Kedua - Kecil) */}
      <div className="hs-butterfly-wrap-2" aria-hidden="true">
        <img src="/kupu-kupu.svg" alt="" className="hs-butterfly-wings-2" />
      </div>

      {/* Bunga Bawah Bersebelahan */}
      <div className="hs-flowers-bottom" aria-hidden="true">
        <img src="/images/bunga/elementbunga3.png" alt="" className="hs-flower hs-flower-left" />
        <img src="/images/bunga/elementbunga4.png" alt="" className="hs-flower hs-flower-right" />
      </div>

      <div className="hs-content">
        <p className="hs-label">Wedding Invitation</p>
        <h1 className="hs-names">
          <span>Riyo Setiawan</span>
          <span className="hs-amp">&amp;</span>
          <span>Lukmaniati</span>
        </h1>
        <div className="hs-divider">
          <span className="hs-line" />
          <p className="hs-date">09 &bull; 04 &bull; 26</p>
          <span className="hs-line" />
        </div>
      </div>
    </section>
  );
}
