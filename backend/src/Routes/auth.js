// src/routes/auth.ts
import { Router} from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../Models/User.js';

const router = Router();

// Register
router.post('/register', async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    const user = new User({ name, email, password, role });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

// Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user)  
    {
        res.status(400).json({ error: 'Invalid email' });
        return 
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
        res.status(400).json({ error: 'Invalid password' });
        return 
    }

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token, user });
});


export default router;
