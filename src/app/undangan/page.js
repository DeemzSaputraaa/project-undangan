import Countdown from "../components/Countdown";
import RsvpForm from "../components/RsvpForm";
import HeroSlider from "../components/HeroSlider";
import MusicPlayer from "../components/MusicPlayer";

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
          
          <div className="mempelai-grid">
            {/* Mempelai Wanita */}
            <div className="card" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "clamp(30px, 5vw, 50px) 20px" }}>
              <div style={{ width: "130px", height: "130px", borderRadius: "50%", backgroundImage: "url('/images/wanita.jpg')", backgroundSize: "cover", backgroundPosition: "center", marginBottom: "20px", border: "4px solid rgba(255, 220, 228, 0.2)", boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}></div>
              <h3 style={{ fontFamily: "var(--font-heading), serif", fontSize: "clamp(1.8rem, 3vw, 2.2rem)", color: "var(--ink)", margin: "0 0 12px 0", letterSpacing: "1px" }}>Lukmaniati</h3>
              <p style={{ color: "var(--ink-soft)", lineHeight: "1.6", margin: 0, fontSize: "0.95rem" }}>
                Putri dari Pasangan<br/>
                <strong style={{ color: "var(--accent)", fontSize: "1.05rem", display: "block", marginTop: "4px" }}>Bapak Sukidi (alm) & Ibu Yatinah</strong>
              </p>
            </div>

            {/* Dan / & */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "10px" }}>
              <span style={{ fontFamily: "var(--font-heading), serif", fontSize: "clamp(3rem, 6vw, 5rem)", color: "var(--gold)", opacity: 0.8, textShadow: "0 4px 12px rgba(0,0,0,0.3)" }}>&</span>
            </div>

            {/* Mempelai Pria */}
            <div className="card" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "clamp(30px, 5vw, 50px) 20px" }}>
              <div style={{ width: "130px", height: "130px", borderRadius: "50%", backgroundImage: "url('/images/pria.jpg')", backgroundSize: "cover", backgroundPosition: "center", marginBottom: "20px", border: "4px solid rgba(255, 220, 228, 0.2)", boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}></div>
              <h3 style={{ fontFamily: "var(--font-heading), serif", fontSize: "clamp(1.8rem, 3vw, 2.2rem)", color: "var(--ink)", margin: "0 0 12px 0", letterSpacing: "1px" }}>Rio Setiawan</h3>
              <p style={{ color: "var(--ink-soft)", lineHeight: "1.6", margin: 0, fontSize: "0.95rem" }}>
                Putra dari Pasangan<br/>
                <strong style={{ color: "var(--accent)", fontSize: "1.05rem", display: "block", marginTop: "4px" }}>Bapak Sumedi & Ibu Supatnaten</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "28px" }}>
            <p className="pill">Hitung Mundur</p>
            <h2 className="section-title">Menuju Hari Bahagia</h2>
          </div>
          <Countdown targetDate="2026-08-16T08:00:00+07:00" />
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="card">
            <p className="pill">Cerita Kami</p>
            <h2 className="section-title">Dua Hati, Satu Perjalanan</h2>
            <p className="section-lead">
              Pertemuan singkat di sebuah kafe menjadi awal dari cerita panjang
              kami. Seiring waktu, kami belajar untuk saling mendukung dan
              bertumbuh. Kini kami siap melangkah ke babak baru bersama.
            </p>
          </div>
          <div className="card">
            <p className="pill">Dress Code</p>
            <h3 className="section-title">Earthy Neutral</h3>
            <p className="section-lead">
              Kenakan warna hangat dan natural agar selaras dengan nuansa acara.
              Mohon hindari warna putih polos.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Galeri</h2>
          <p className="section-lead">
            Beberapa momen yang kami abadikan selama perjalanan menuju hari ini.
          </p>
          <div className="gallery-grid">
            {[
              "Moment 01",
              "Moment 02",
              "Moment 03",
              "Moment 04",
              "Moment 05",
              "Moment 06",
            ].map((item) => (
              <div className="gallery-item" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="rsvp">
        <div className="container split">
          <div>
            <p className="pill">Konfirmasi</p>
            <h2 className="section-title">RSVP &amp; Ucapan</h2>
            <p className="section-lead">
              Silakan konfirmasi kehadiran dan tinggalkan doa terbaik Anda. Kami
              akan menyimpan data ini untuk keperluan acara.
            </p>
          </div>
          <div className="card">
            <RsvpForm />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="card">
            <p className="pill">Hadiah</p>
            <h2 className="section-title">Tanda Kasih</h2>
            <p className="section-lead">
              Kehadiran Anda sudah sangat berarti bagi kami. Namun, jika ingin
              memberikan tanda kasih, berikut informasi yang dapat digunakan.
            </p>
            <div className="timeline">
              <div className="timeline-item">
                <h4>Bank BCA</h4>
                <p>123 456 7890</p>
                <p>a.n. Aruna Prameswari</p>
              </div>
              <div className="timeline-item">
                <h4>Bank Mandiri</h4>
                <p>987 654 3210</p>
                <p>a.n. Naya Putra</p>
              </div>
            </div>
          </div>
          <div className="card">
            <p className="pill">Kontak</p>
            <h2 className="section-title">Informasi</h2>
            <p className="section-lead">
              Jika ada pertanyaan, silakan hubungi kami melalui nomor berikut.
            </p>
            <div className="timeline">
              <div className="timeline-item">
                <h4>Aruna</h4>
                <p>+62 812-3456-7890</p>
              </div>
              <div className="timeline-item">
                <h4>Naya</h4>
                <p>+62 811-2233-4455</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        Terima kasih atas doa dan kehadiran Anda. <br />
        Dengan cinta, Aruna &amp; Naya.
      </footer>
      
      <MusicPlayer />
    </div>
  );
}
