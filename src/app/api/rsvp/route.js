import { getSupabaseAdmin } from "@/lib/supabaseAdmin";

const requiredFields = ["name", "phone", "attendance", "guests", "message"];
const allowedAttendance = new Set(["hadir", "tidak-hadir", "masih-ragu"]);
const maxMessageLength = 500;

export async function POST(request) {
  try {
    const data = await request.formData();
    const payload = Object.fromEntries(data.entries());

    const missing = requiredFields.filter((field) => !payload[field]);
    if (missing.length) {
      return Response.json(
        { ok: false, message: "Mohon lengkapi semua data RSVP." },
        { status: 400 }
      );
    }

    const name = typeof payload.name === "string" ? payload.name.trim() : "";
    const phone = typeof payload.phone === "string" ? payload.phone.trim() : "";
    const attendance =
      typeof payload.attendance === "string" ? payload.attendance.trim() : "";
    const message =
      typeof payload.message === "string" ? payload.message.trim() : "";

    if (name.length < 2 || name.length > 80) {
      return Response.json(
        { ok: false, message: "Nama harus 2-80 karakter." },
        { status: 400 }
      );
    }

    if (phone.length < 7 || phone.length > 20) {
      return Response.json(
        { ok: false, message: "Nomor WhatsApp tidak valid." },
        { status: 400 }
      );
    }

    if (!allowedAttendance.has(attendance)) {
      return Response.json(
        { ok: false, message: "Pilihan kehadiran tidak valid." },
        { status: 400 }
      );
    }

    if (!message || message.length > maxMessageLength) {
      return Response.json(
        { ok: false, message: "Ucapan maksimal 500 karakter." },
        { status: 400 }
      );
    }

    const supabase = getSupabaseAdmin();
    const guests = Number.parseInt(payload.guests, 10);
    if (Number.isNaN(guests) || guests < 1 || guests > 10) {
      return Response.json(
        { ok: false, message: "Jumlah tamu harus antara 1-10." },
        { status: 400 }
      );
    }
    const insertPayload = {
      name,
      phone,
      attendance,
      guests,
      message,
    };

    const { error } = await supabase.from("rsvp").insert(insertPayload);
    if (error) {
      return Response.json(
        { ok: false, message: "Gagal menyimpan data RSVP." },
        { status: 500 }
      );
    }

    return Response.json({ ok: true });
  } catch (error) {
    return Response.json(
      { ok: false, message: "Server belum terkonfigurasi." },
      { status: 500 }
    );
  }
}
