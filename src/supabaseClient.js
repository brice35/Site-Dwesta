// src/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tpvmudtwpwrsigxlywpp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwdm11ZHR3cHdyc2lneGx5d3BwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0OTE2NzIsImV4cCI6MjA3MDA2NzY3Mn0.gsvr8VEfyGNHBAwfwDgJQ2Iww3N8ARkvSRUMSi7G3Jc";
export const supabase = createClient(supabaseUrl, supabaseKey);
