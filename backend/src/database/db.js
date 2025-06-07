import { createClient } from '@supabase/supabase-js'

const supabaseUrl = env.POSTGRE_URL
const supabaseKey = process.env.POSTGRE_ANON_PUBLIC_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;
