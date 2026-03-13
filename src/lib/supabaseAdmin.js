import { createClient } from "@supabase/supabase-js";

export const getSupabaseAdmin = () => {
  const url = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    throw new Error("Supabase env belum dikonfigurasi.");
  }

  return createClient(url, serviceRoleKey, {
    auth: {
      persistSession: false,
    },
  });
};
