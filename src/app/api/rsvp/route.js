import { getSupabaseAdmin } from "@/lib/supabaseAdmin";

const requiredFields = ["name", "attendance", "message"];
const allowedAttendance = new Set(["hadir", "tidak-hadir", "masih-ragu"]);
const maxMessageLength = 500;

export async function GET() {
  try {
    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase
      .from("rsvp")
      .select("id, name, attendance, message, created_at")
      .order("created_at", { ascending: false });

    if (error) {
      return Response.json({ ok: false, data: [] }, { status: 500 });
    }

    // Count stats
    const hadir = data.filter((r) => r.attendance === "hadir").length;
    const tidakHadir = data.filter((r) => r.attendance === "tidak-hadir").length;

    return Response.json({ ok: true, data, hadir, tidakHadir, total: data.length });
  } catch {
    return Response.json({ ok: false, data: [] }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const data = await request.formData();
    const payload = Object.fromEntries(data.entries());

    const missing = requiredFields.filter((field) => !payload[field]);
    if (missing.length) {
      return Response.json(
        { ok: false, message: "Mohon lengkapi semua data." },
        { status: 400 }
      );
    }

    const name = typeof payload.name === "string" ? payload.name.trim() : "";
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

    const insertPayload = {
      name,
      attendance,
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
  } catch {
    return Response.json(
      { ok: false, message: "Server belum terkonfigurasi." },
      { status: 500 }
    );
  }
}
