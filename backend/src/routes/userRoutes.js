const express = require('express');
const router = express.Router();
const { createUser, loginUser, getUserByAuthId,createAuthUser, authLogin, deleteUser } = require('../models/Users');
const supabaseAuthMiddleware = require('../middlewares/auth');
const checkRole = require('../middlewares/checkRole');
const supabase = require('../database/db');

router.post('/signup', async (req, res) => {
    try {
        const { name, email, password, address, role = 'user' } = req.body;
        const authId = await createAuthUser(email,password);
        await createUser({auth_id: authId, name, email, address, role});
        res.status(200).json({ 
        success: true,
        message: "Successfully registered",
        user: { name: name, email: email, address: address, role: role }
        });
    } catch (error) {
        console.error('User creation error:', error);
        res.status(400).json({ 
        success: false,
        message: "Failed to signup",
        });
    }
});

// Login user
router.post('/login', async (req, res) => {
  const {email, password} = req.body;  
  try {
      const data = await authLogin(email, password);
      res.status(200).send(data);
    } catch (error) {
      res.status(400).send("Failed to login")
    }
});

// Get user by ID (protected route)
router.get('/profile', supabaseAuthMiddleware, (req, res) => {
    res.json({ 
        success: true,
        user: req.user 
    });
});

router.post('/:id/promoteUser', supabaseAuthMiddleware, checkRole('admin'), async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase
        .from('users')
        .update({ role: 'admin' })
        .eq('auth_id', id)
        .select();
        try {
            if (error) {
                console.error('Error promoting user:', error);
                return res.status(400).json({ 
                    success: false,
                    message: "Failed to promote user"
                });
            }
            return res.json({ success: true, user: data[0] }); 
        } catch (err) {
                console.error('Error en el servidor:', err);
                return res.status(500).json({ error: "Error interno" });
        }
        
});
router.delete('/:id/delete', supabaseAuthMiddleware, checkRole('admin'), async (req, res) => {
    const { id } = req.params;
    try {
        await deleteUser(id);
        return res.json({ success: true, message: "User deleted successfully" });
    } catch (err) {
        console.error('Error en el servidor:', err);
        return res.status(500).json({ error: "Error interno" });
    }
});
module.exports = router;