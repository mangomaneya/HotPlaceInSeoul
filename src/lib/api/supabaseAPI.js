import { createClient } from '@supabase/supabase-js';

const supabaseURL = import.meta.env.VITE_HIS_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_HIS_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseURL, supabaseKey);

export default supabase;
