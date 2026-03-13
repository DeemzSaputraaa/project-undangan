"use client";

import { useState } from "react";

export default function RsvpForm() {
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "loading", message: "Mengirim data..." });

    try {
      const formData = new FormData(event.target);
      const response = await fetch("/api/rsvp", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result?.message || "Gagal menyimpan data.");
      }

      setStatus({
        type: "success",
        message: "Terima kasih! Konfirmasi Anda sudah kami terima.",
      });
      event.target.reset();
    } catch (error) {
      setStatus({
        type: "error",
        message: error?.message || "Terjadi kesalahan, coba lagi ya.",
      });
    }
  };

  return (
    <form className="rsvp-form" onSubmit={handleSubmit}>
      <div className="input-row">
        <input name="name" placeholder="Nama lengkap" required />
        <input name="phone" placeholder="Nomor WhatsApp" required />
      </div>
      <div className="input-row">
        <select name="attendance" required defaultValue="">
          <option value="" disabled>
            Konfirmasi kehadiran
          </option>
          <option value="hadir">Hadir</option>
          <option value="tidak-hadir">Tidak Hadir</option>
          <option value="masih-ragu">Masih Ragu</option>
        </select>
        <input
          name="guests"
          type="number"
          min="1"
          max="10"
          placeholder="Jumlah tamu"
          required
        />
      </div>
      <textarea
        name="message"
        placeholder="Ucapan atau doa terbaik"
        required
      />
      <button className="button primary" type="submit" disabled={status.type === "loading"}>
        Kirim RSVP
      </button>
      {status.message && (
        <p className="section-lead" aria-live="polite">
          {status.message}
        </p>
      )}
    </form>
  );
}
