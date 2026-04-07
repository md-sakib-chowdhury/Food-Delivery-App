import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'
import { placeOrder } from '../services/api'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const { cartItems, updateQuantity, removeFromCart, clearCart, totalAmount } = useCart()
    const { user } = useAuth()
    const navigate = useNavigate()

    const handleOrder = async () => {
        if (!user) return navigate('/login')
        try {
            const res = await placeOrder({
                items: cartItems.map(i => ({
                    foodId: i._id, name: i.name,
                    price: i.price, quantity: i.quantity, image: i.image
                })),
                amount: totalAmount + 50,
                address: { street: 'Dhaka', city: 'Dhaka' },
                paymentMethod: 'COD'
            })
            if (res.data.success) {
                clearCart()
                navigate(`/track/${res.data.order._id}`)
            }
        } catch {
            alert('Order দিতে সমস্যা হয়েছে!')
        }
    }

    if (cartItems.length === 0) {
        return (
            <div className="text-center py-20">
                <div className="text-6xl mb-4">🛒</div>
                <p className="text-xl text-gray-500">Cart খালি আছে</p>
                <button onClick={() => navigate('/menu')} className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">
                    Menu দেখো
                </button>
            </div>
        )
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">তোমার Cart 🛒</h2>
            <div className="flex flex-col gap-4 mb-6">
                {cartItems.map(item => (
                    <div key={item._id} className="bg-white rounded-2xl shadow p-4 flex items-center gap-4">
                        <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-xl" />
                        <div className="flex-1">
                            <h3 className="font-bold text-gray-800">{item.name}</h3>
                            <p className="text-orange-500 font-bold">৳{item.price}</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <button onClick={() => updateQuantity(item._id, item.quantity - 1)} className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">-</button>
                            <span className="font-bold">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item._id, item.quantity + 1)} className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">+</button>
                        </div>
                        <div className="text-right">
                            <p className="font-bold text-gray-800">৳{item.price * item.quantity}</p>
                            <button onClick={() => removeFromCart(item._id)} className="text-red-500 text-sm hover:text-red-700">Remove</button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-white rounded-2xl shadow p-6">
                <div className="flex justify-between mb-2 text-gray-600">
                    <span>Subtotal</span><span>৳{totalAmount}</span>
                </div>
                <div className="flex justify-between mb-2 text-gray-600">
                    <span>Delivery Fee</span><span>৳50</span>
                </div>
                <div className="flex justify-between font-bold text-lg border-t pt-3 mt-3">
                    <span>Total</span><span className="text-orange-500">৳{totalAmount + 50}</span>
                </div>
                <button onClick={handleOrder} className="w-full mt-4 bg-orange-500 text-white py-3 rounded-xl font-bold hover:bg-orange-600 transition">
                    Order করুন
                </button>
            </div>
        </div>
    )
}

export default Cart