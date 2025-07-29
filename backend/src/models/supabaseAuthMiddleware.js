const supabase = require('../database/db');

export const supabaseAuthMiddleware = async (req, res, next) => {
    let authHeader = req.headers.authorization;
        if (!authHeader) {
        return res.status(401).json({ message: 'Unauthorized' });
        }
        const token = authHeader.split(' ')[1];
        let { data, error } = await supabase.auth.getUser(token);
        if (error) {
        console.error('Error getting auth user:', error.message);
        return res.status(401).json({ message: 'Unauthorized' });
        }
        let authId = data.user.id;
        let user = await getUserByAuthId(authId);
        req.user = user;     
        return next();
};