import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getOrderById } from '../services/api'

const steps = ['Pending', 'Preparing', 'On The Way', 'Delivered']

const OrderTracking = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [order, setOrder] = useState(null)

    useEffect(() => {
        const load = async () => {
            try {
                const res = await getOrderById(id)
                if (res.data.success) setOrder(res.data.order)
            } catch { }
        }
        load()
        const interval = setInterval(load, 10000)
        return () => clearInterval(interval)
    }, [id])

    if (!order) return (
        <div className="text-center py-20 text-gray-400">
            <div className="text-5xl mb-4">📦</div>
            <p>Order লোড হচ্ছে...</p>
        </div>
    )

    const currentStep = steps.indexOf(order.status)

    return (
        <div className="max-w-2xl mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Order Tracking</h2>
            <p className="text-gray-400 text-sm mb-8">
                Order ID: #{order._id.slice(-6).toUpperCase()}
            </p>

            {/* Status Steps */}
            <div className="bg-white rounded-2xl shadow p-8 mb-6">
                <div className="flex justify-between items-center relative">
                    <div className="absolute top-5 left-0 right-0 h-1 bg-gray-200 z-0">
                        <div
                            className="h-1 bg-orange-500 transition-all duration-500"
                            style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
                        />
                    </div>
                    {steps.map((step, i) => (
                        <div key={step} className="flex flex-col items-center z-10">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-2 ${i <= currentStep
                                ? 'bg-orange-500 border-orange-500 text-white'
                                : 'bg-white border-gray-300 text-gray-400'
                                }`}>
                                {i < currentStep ? '✓' : i + 1}
                            </div>
                            <span className={`text-xs mt-2 font-medium ${i <= currentStep ? 'text-orange-500' : 'text-gray-400'}`}>
                                {step}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Order Details */}
            <div className="bg-white rounded-2xl shadow p-6 mb-6">
                <h3 className="font-bold text-gray-800 mb-4">Order Details</h3>
                {order.items.map((item, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
                        <div className="flex items-center gap-3">
                            <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-lg" />
                            <div>
                                <p className="font-medium text-gray-800">{item.name}</p>
                                <p className="text-sm text-gray-400">x{item.quantity}</p>
                            </div>
                        </div>
                        <p className="font-bold text-orange-500">৳{item.price * item.quantity}</p>
                    </div>
                ))}
                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span className="text-orange-500">৳{order.amount}</span>
                </div>
            </div>

            <button
                onClick={() => navigate('/menu')}
                className="w-full bg-orange-500 text-white py-3 rounded-xl font-bold hover:bg-orange-600 transition"
            >
                আরো Order করো
            </button>
        </div>
    )
}

export default OrderTracking