const supabase = require('../database/db');

const checkRole = (role) => {
    return async (req, res, next) => {
    if (req.user.role !== role)   {
        return res.status(403).json({ error: "Acceso denegado: no eres admin" }); 
    }
    next();
    };
}
module.exports = checkRole;