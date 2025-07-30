const express = require('express');
const router = express.Router();
const { createUser, loginUser, getUserByAuthId,createAuthUser, authLogin } = require('../models/Users');
const supabaseAuthMiddleware = require('../middlewares/auth');

router.post('/signup', async (req, res) => {
    try {
        const { name, email, password, address } = req.body;
        const authId = await createAuthUser(email,password);
        await createUser({auth_id: authId, name, email, address});
        res.status(200).json({ 
        success: true,
        message: "Successfully registered",
        user: { name: name, email: email, address: address }
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

module.exports = router;