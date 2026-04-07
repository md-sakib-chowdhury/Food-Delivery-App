import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'

const router = express.Router()

router.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body
        const exists = await User.findOne({ email })
        if (exists) return res.json({ success: false, message: 'User already exists' })

        const hashed = await bcrypt.hash(password, 10)
        const user = new User({ name, email, password: hashed })
        await user.save()

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' })
        res.json({ success: true, token, user: { name: user.name, email: user.email, role: user.role } })
    } catch (err) {
        res.json({ success: false, message: err.message })
    }
})

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (!user) return res.json({ success: false, message: 'User not found' })

        const match = await bcrypt.compare(password, user.password)
        if (!match) return res.json({ success: false, message: 'Wrong password' })

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' })
        res.json({ success: true, token, user: { name: user.name, email: user.email, role: user.role } })
    } catch (err) {
        res.json({ success: false, message: err.message })
    }
})

export default router