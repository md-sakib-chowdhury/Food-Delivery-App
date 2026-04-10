import express from 'express'
import Coupon from '../models/Coupon.js'
import authMiddleware from '../middleware/authMiddleware.js'

const router = express.Router()

// Coupon check করো
router.post('/apply', authMiddleware, async (req, res) => {
    try {
        const { code, orderAmount } = req.body
        const coupon = await Coupon.findOne({ code: code.toUpperCase(), active: true })

        if (!coupon) return res.json({ success: false, message: 'Coupon পাওয়া যায়নি!' })
        if (coupon.usedCount >= coupon.maxUses) return res.json({ success: false, message: 'Coupon এর limit শেষ!' })
        if (orderAmount < coupon.minOrder) return res.json({ success: false, message: `সর্বনিম্ন ৳${coupon.minOrder} এর order লাগবে!` })

        const discount = coupon.type === 'percent'
            ? Math.round(orderAmount * coupon.discount / 100)
            : coupon.discount

        res.json({ success: true, discount, code: coupon.code, type: coupon.type, value: coupon.discount })
    } catch (err) {
        res.json({ success: false, message: err.message })
    }
})

// Admin — Coupon বানাও
router.post('/create', authMiddleware, async (req, res) => {
    try {
        const coupon = new Coupon(req.body)
        await coupon.save()
        res.json({ success: true, coupon })
    } catch (err) {
        res.json({ success: false, message: err.message })
    }
})

// সব Coupon দেখো
router.get('/all', authMiddleware, async (req, res) => {
    try {
        const coupons = await Coupon.find().sort({ createdAt: -1 })
        res.json({ success: true, coupons })
    } catch (err) {
        res.json({ success: false, message: err.message })
    }
})
router.get('/active', async (req, res) => {
    try {
        const coupons = await Coupon.find({ active: true }).select('code discount type minOrder')
        res.json({ success: true, coupons })
    } catch (err) {
        res.json({ success: false, message: err.message })
    }
})
export default router