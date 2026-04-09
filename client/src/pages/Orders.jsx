import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { getMyOrders } from '../services/api'

const statusColor = {
    'Pending': 'bg-yellow-100 text-yellow-700',
    'Preparing': 'bg-blue-100 text-blue-700',
    'On The Way': 'bg-purple-100 text-purple-700',
    'Delivered': 'bg-green-100 text-green-700',
    'Cancelled': 'bg-red-100 text-red-700',
}

const Orders = () => {
    const { user } = useAuth()
    const navigate = useNavigate()
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!user) return navigate('/login')
        getMyOrders().then(res => {
            if (res.data.success) setOrders(res.data.orders)
            setLoading(false)
        })
    }, [])

    if (loading) return (
        <div className="text-center py-20 text-gray-400">
            <div className="text-5xl mb-4">📦</div>
            <p>লোড হচ্ছে...</p>
        </div>
    )

    return (
        <div className="max-w-4xl mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">আমার Orders</h2>

            {orders.length === 0 ? (
                <div className="text-center py-20 text-gray-400">
                    <div className="text-5xl mb-4">📦</div>
                    <p className="text-xl mb-4">কোনো order নেই</p>
                    <button
                        onClick={() => navigate('/menu')}
                        className="bg-orange-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-orange-600"
                    >
                        Menu দেখো
                    </button>
                </div>
            ) : (
                <div className="flex flex-col gap-4">
                    {orders.map(order => (
                        <div key={order._id} className="bg-white rounded-2xl shadow p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <p className="text-gray-400 text-sm font-mono">
                                        Order #{order._id.slice(-6).toUpperCase()}
                                    </p>
                                    <p className="text-gray-400 text-xs mt-1">
                                        {new Date(order.createdAt).toLocaleDateString('bn-BD', {
                                            year: 'numeric', month: 'long', day: 'numeric'
                                        })}
                                    </p>
                                </div>
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor[order.status] || 'bg-gray-100 text-gray-600'}`}>
                                    {order.status}
                                </span>
                            </div>

                            <div className="flex flex-col gap-2 mb-4">
                                {order.items.map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-lg" />
                                        <div className="flex-1">
                                            <p className="font-medium text-gray-800">{item.name}</p>
                                            <p className="text-sm text-gray-400">x{item.quantity} × ৳{item.price}</p>
                                        </div>
                                        <p className="font-bold text-gray-700">৳{item.price * item.quantity}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                                <span className="text-gray-500 text-sm">
                                    {order.paymentMethod} · {order.payment ? '✅ Paid' : '⏳ Unpaid'}
                                </span>
                                <div className="flex items-center gap-4">
                                    <span className="font-bold text-orange-500 text-lg">৳{order.amount}</span>
                                    {order.status !== 'Delivered' && order.status !== 'Cancelled' && (
                                        <button
                                            onClick={() => navigate(`/track/${order._id}`)}
                                            className="bg-orange-50 text-orange-500 px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-100"
                                        >
                                            Track করো
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Orders