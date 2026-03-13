export default function Home() {
  return (
    <div className="page">
      <section className="opening opening-full">
        <div className="opening-overlay" />
        <div className="cover-content fade-in">
          <div className="cover-top">
            <p className="cover-script">The Wedding of</p>
            <h1 className="cover-names">Rio Setiawan  &amp; Lukmaniati</h1>
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
