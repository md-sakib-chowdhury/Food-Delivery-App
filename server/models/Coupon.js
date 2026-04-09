import mongoose from 'mongoose'

const couponSchema = new mongoose.Schema({
    code: { type: String, required: true, unique: true, uppercase: true },
    discount: { type: Number, required: true },
    type: { type: String, enum: ['percent', 'fixed'], default: 'percent' },
    minOrder: { type: Number, default: 0 },
    maxUses: { type: Number, default: 100 },
    usedCount: { type: Number, default: 0 },
    active: { type: Boolean, default: true }
}, { timestamps: true })

export default mongoose.model('Coupon', couponSchema)