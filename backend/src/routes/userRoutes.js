const express = require('express');
const router = express.Router();
const { createUser, loginUser, getUserById } = require('../models/Users');

// Register a new user
router.post('/', async (req, res) => {
    const { name, email, password, address } = req.body;

    if (!email || !password) {
        return res.status(400).json({ 
            error: 'Email and password are required' 
        });
    }

    try {
        const newUser = await createUser(name, email, password, address);
        res.status(201).json(newUser);
    } catch (error) {
        console.error('User creation error:', error);
        res.status(500).json({ 
            error: error.message || 'Failed to create user' 
        });
    }
});
/*
// Login user
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ 
            error: 'Email and password are required' 
        });
    }

    try {
        const user = await loginUser(email, password);
        res.json(user);
    } catch (error) {
        console.error('Login error:', error);
        res.status(401).json({ 
            error: error.message || 'Login failed' 
        });
    }
});

// Get user by ID (protected route)
router.get('/:id', async (req, res) => {
    try {
        const user = await getUserById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Error getting user' });
    }
});
*/
module.exports = router;