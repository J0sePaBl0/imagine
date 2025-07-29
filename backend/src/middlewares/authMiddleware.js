import { supabaseAuthMiddleware } from './supabaseAuthMiddleware';

const supabase = require('../database/db');


export const authMiddleware = async (req, res, next) => {
supabaseAuthMiddleware(req, res, next)
}