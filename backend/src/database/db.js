const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

//URL from supabase database settings 
const supabaseUrl = process.env.POSTGRE_URL;
//secret key not anon
const supabaseKey = process.env.POSTGRE_ANON_PUBLIC_KEY;

if (!supabaseUrl || !supabaseKey) {
    throw new Error('Supabase URL and Key must be defined in .env file');
}

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
