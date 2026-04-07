import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    items: [{ foodId: String, name: String, price: Number, quantity: Number, image: String }],
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: {
        type: String, default: 'Pending',
        enum: ['Pending', 'Preparing', 'On The Way', 'Delivered', 'Cancelled']
    },
    payment: { type: Boolean, default: false },
    paymentMethod: { type: String, default: 'COD' }
}, { timestamps: true })

export default mongoose.model('Order', orderSchema)