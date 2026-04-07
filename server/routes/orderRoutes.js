import express from 'express'
import Order from '../models/Order.js'
import authMiddleware from '../middleware/authMiddleware.js'

const router = express.Router()

router.post('/place', authMiddleware, async (req, res) => {
    try {
        const order = new Order({ userId: req.userId, ...req.body })
        await order.save()
        res.json({ success: true, order })
    } catch (err) {
        res.json({ success: false, message: err.message })
    }
})

router.get('/user', authMiddleware, async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.userId }).sort({ createdAt: -1 })
        res.json({ success: true, orders })
    } catch (err) {
        res.json({ success: false, message: err.message })
    }
})

router.get('/:id', authMiddleware, async (req, res) => {
    try {
        const order = await Order.findById(req.params.id)
        res.json({ success: true, order })
    } catch (err) {
        res.json({ success: false, message: err.message })
    }
})

router.put('/:id/status', authMiddleware, async (req, res) => {
    try {
        const order = await Order.findByIdAndUpdate(
            req.params.id,
            { status: req.body.status },
            { new: true }
        )
        res.json({ success: true, order })
    } catch (err) {
        res.json({ success: false, message: err.message })
    }
})

export default router