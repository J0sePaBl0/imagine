const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabaseUrl = process.env.POSTGRE_URL;
const supabaseKey = process.env.POSTGRE_ANON_PUBLIC_KEY;

if (!supabaseUrl || !supabaseKey) {
    throw new Error('Supabase URL and Key must be defined in .env file');
}

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
