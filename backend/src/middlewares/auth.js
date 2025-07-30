
const supabase = require('../database/db');
const { getUserByAuthId } = require('../models/Users');
// when you trying to acces a protected route, this middleware will check if the user is authenticated
// and if the user exists in your database, then it will attach the user to the request
const supabaseAuthMiddleware = async (req, res, next) => {
    try {
        // 1. Verificar si existe el token
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ error: "Token no proporcionado o formato incorrecto" });
        }

        // 2. Extraer el token
        const token = authHeader.split(' ')[1];

        // 3. Validar el token con Supabase
        const { data: { user: supabaseUser }, error } = await supabase.auth.getUser(token);
        if (error) {
            console.error("Error de autenticación:", error.message);
            return res.status(401).json({ error: "No tienes permisos para esto" });
        }

        // 4. Obtener el usuario de TU base de datos (no solo el de Supabase)
        const dbUser = await getUserByAuthId(supabaseUser.id);
        if (!dbUser) {
            return res.status(404).json({ error: "Usuario no encontrado en la base de datos" });
        }

        // 5. Adjuntar el usuario a `req` para usarlo en rutas protegidas
        req.user = dbUser;
        
        // 6. Continuar
        next();
    } catch (err) {
        console.error("Error en el middleware de autenticación:", err);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

module.exports = supabaseAuthMiddleware;