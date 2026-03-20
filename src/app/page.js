export default function Home() {
  return (
    <div className="page">
      <section className="opening opening-full">
        <div className="opening-overlay" />
        <img src="/atas1.svg" alt="" className="opening-flower-atas opening-flower-atas1-kiri" aria-hidden="true" />
        <img src="/atas2.svg" alt="" className="opening-flower-atas opening-flower-atas2-kiri" aria-hidden="true" />
        <img src="/atas1.svg" alt="" className="opening-flower-atas opening-flower-atas1-kanan" aria-hidden="true" />
        <img src="/atas2.svg" alt="" className="opening-flower-atas opening-flower-atas2-kanan" aria-hidden="true" />
        <img src="/sudutkiri.svg" alt="" className="opening-flower-sudut opening-flower-sudut-kiri" aria-hidden="true" />
        <img src="/bawah2.svg" alt="" className="opening-flower-bawah2 opening-flower-bawah2-left" aria-hidden="true" />
        <img src="/bawah.svg" alt="" className="opening-flower-bawah opening-flower-bawah-left" aria-hidden="true" />
        <img src="/bunga4.svg" alt="" className="opening-flower-bottom" aria-hidden="true" />
        <img src="/bawah.svg" alt="" className="opening-flower-bawah opening-flower-bawah-right" aria-hidden="true" />
        <img src="/bawah2.svg" alt="" className="opening-flower-bawah2 opening-flower-bawah2-right" aria-hidden="true" />
        <img src="/sudutkanan.svg" alt="" className="opening-flower-sudut opening-flower-sudut-kanan" aria-hidden="true" />
        <div className="cover-content fade-in">
          <div className="cover-top">
            <p className="cover-script">The Wedding of</p>
            <h1 className="cover-names">Riyo Setiawan &amp; Lukmaniati</h1>
            <img src="/images/awal.png" alt="" className="cover-ornament" />
          </div>
          <div className="cover-bottom">
            {/* <p className="cover-dear">Kepada Yth.</p>
            <p className="cover-guest">Kharisma</p> */}
            <a href="/undangan" className="button cover-btn">
              Ke Buka Undangan ›
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
