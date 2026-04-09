// import { useCart } from '../context/CartContext'
// import { useAuth } from '../context/AuthContext'
// import { placeOrder } from '../services/api'
// import { useNavigate } from 'react-router-dom'

// const Cart = () => {
//     const { cartItems, updateQuantity, removeFromCart, clearCart, totalAmount } = useCart()
//     const { user } = useAuth()
//     const navigate = useNavigate()

//     const handleOrder = async () => {
//         if (!user) return navigate('/login')
//         try {
//             const res = await placeOrder({
//                 items: cartItems.map(i => ({
//                     foodId: i._id, name: i.name,
//                     price: i.price, quantity: i.quantity, image: i.image
//                 })),
//                 amount: totalAmount + 50,
//                 address: { street: 'Dhaka', city: 'Dhaka' },
//                 paymentMethod: 'COD'
//             })
//             if (res.data.success) {
//                 clearCart()
//                 navigate(`/track/${res.data.order._id}`)
//             }
//         } catch {
//             alert('Order দিতে সমস্যা হয়েছে!')
//         }
//     }

//     if (cartItems.length === 0) {
//         return (
//             <div className="text-center py-20">
//                 <div className="text-6xl mb-4">🛒</div>
//                 <p className="text-xl text-gray-500">Cart খালি আছে</p>
//                 <button onClick={() => navigate('/menu')} className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">
//                     Menu দেখো
//                 </button>
//             </div>
//         )
//     }

//     return (
//         <div className="max-w-4xl mx-auto px-4 py-8">
//             <h2 className="text-3xl font-bold text-gray-800 mb-6">তোমার Cart 🛒</h2>
//             <div className="flex flex-col gap-4 mb-6">
//                 {cartItems.map(item => (
//                     <div key={item._id} className="bg-white rounded-2xl shadow p-4 flex items-center gap-4">
//                         <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-xl" />
//                         <div className="flex-1">
//                             <h3 className="font-bold text-gray-800">{item.name}</h3>
//                             <p className="text-orange-500 font-bold">৳{item.price}</p>
//                         </div>
//                         <div className="flex items-center gap-3">
//                             <button onClick={() => updateQuantity(item._id, item.quantity - 1)} className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">-</button>
//                             <span className="font-bold">{item.quantity}</span>
//                             <button onClick={() => updateQuantity(item._id, item.quantity + 1)} className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">+</button>
//                         </div>
//                         <div className="text-right">
//                             <p className="font-bold text-gray-800">৳{item.price * item.quantity}</p>
//                             <button onClick={() => removeFromCart(item._id)} className="text-red-500 text-sm hover:text-red-700">Remove</button>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             <div className="bg-white rounded-2xl shadow p-6">
//                 <div className="flex justify-between mb-2 text-gray-600">
//                     <span>Subtotal</span><span>৳{totalAmount}</span>
//                 </div>
//                 <div className="flex justify-between mb-2 text-gray-600">
//                     <span>Delivery Fee</span><span>৳50</span>
//                 </div>
//                 <div className="flex justify-between font-bold text-lg border-t pt-3 mt-3">
//                     <span>Total</span><span className="text-orange-500">৳{totalAmount + 50}</span>
//                 </div>
//                 <button onClick={handleOrder} className="w-full mt-4 bg-orange-500 text-white py-3 rounded-xl font-bold hover:bg-orange-600 transition">
//                     Order করুন
//                 </button>
//             </div>
//         </div>
//     )
// }

// export default Cart
import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'
import { placeOrder } from '../services/api'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const { cartItems, updateQuantity, removeFromCart, clearCart, totalAmount } = useCart()
    const { user } = useAuth()
    const navigate = useNavigate()
    const [showAddress, setShowAddress] = useState(false)
    const [address, setAddress] = useState({
        name: user?.name || '',
        phone: '',
        street: '',
        area: '',
        city: 'Dhaka',
        bkashNumber: '',
        transactionId: ''
    })
    const [paymentMethod, setPaymentMethod] = useState('COD')

    const handleOrder = async () => {
        if (!user) return navigate('/login')
        if (!address.phone || !address.street || !address.area) {
            alert('সব তথ্য দিন!')
            return
        }
        if (paymentMethod === 'bKash' && (!address.bkashNumber || !address.transactionId)) {
            alert('bKash নম্বর এবং Transaction ID দিন!')
            return
        }
        try {
            const res = await placeOrder({
                items: cartItems.map(i => ({
                    foodId: i._id, name: i.name,
                    price: i.price, quantity: i.quantity, image: i.image
                })),
                amount: totalAmount + 50,
                address,
                paymentMethod,
                payment: paymentMethod !== 'COD'
            })
            if (res.data.success) {
                clearCart()
                const orderId = res.data.order._id
                if (paymentMethod === 'bKash') {
                    alert(`✅ Order Confirm হয়েছে!\n\nOrder ID: #${orderId.slice(-6).toUpperCase()}\n\nতোমার bKash payment verify করা হবে এবং SMS পাবে।\n\nধন্যবাদ! 🎉`)
                } else if (paymentMethod === 'COD') {
                    alert(`✅ Order Confirm হয়েছে!\n\nOrder ID: #${orderId.slice(-6).toUpperCase()}\n\nDelivery man আসলে cash দিন।\n\nধন্যবাদ! 🎉`)
                } else {
                    alert(`✅ Order Confirm হয়েছে!\n\nOrder ID: #${orderId.slice(-6).toUpperCase()}\n\nধন্যবাদ! 🎉`)
                }
                navigate(`/track/${orderId}`)
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
                <button
                    onClick={() => navigate('/menu')}
                    className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600"
                >
                    Menu দেখো
                </button>
            </div>
        )
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">তোমার Cart 🛒</h2>

            {/* Cart Items */}
            <div className="flex flex-col gap-4 mb-6">
                {cartItems.map(item => (
                    <div key={item._id} className="bg-white rounded-2xl shadow p-4 flex items-center gap-4">
                        <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-xl" />
                        <div className="flex-1">
                            <h3 className="font-bold text-gray-800">{item.name}</h3>
                            <p className="text-orange-500 font-bold">৳{item.price}</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => updateQuantity(item._id, item.quantity - 1)}
                                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                            >-</button>
                            <span className="font-bold">{item.quantity}</span>
                            <button
                                onClick={() => updateQuantity(item._id, item.quantity + 1)}
                                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                            >+</button>
                        </div>
                        <div className="text-right">
                            <p className="font-bold text-gray-800">৳{item.price * item.quantity}</p>
                            <button
                                onClick={() => removeFromCart(item._id)}
                                className="text-red-500 text-sm hover:text-red-700"
                            >Remove</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Address Form */}
            {showAddress && (
                <div className="bg-white rounded-2xl shadow p-6 mb-6">
                    <h3 className="font-bold text-gray-800 mb-4">📍 Delivery Address</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-sm text-gray-500 mb-1 block">নাম *</label>
                            <input
                                type="text"
                                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500"
                                value={address.name}
                                onChange={e => setAddress({ ...address, name: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="text-sm text-gray-500 mb-1 block">ফোন নম্বর *</label>
                            <input
                                type="text"
                                placeholder="01XXXXXXXXX"
                                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500"
                                value={address.phone}
                                onChange={e => setAddress({ ...address, phone: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="text-sm text-gray-500 mb-1 block">রাস্তা/বাড়ি নম্বর *</label>
                            <input
                                type="text"
                                placeholder="যেমন: বাড়ি ৫, রোড ১২"
                                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500"
                                value={address.street}
                                onChange={e => setAddress({ ...address, street: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="text-sm text-gray-500 mb-1 block">এলাকা *</label>
                            <input
                                type="text"
                                placeholder="যেমন: ধানমন্ডি, মিরপুর"
                                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500"
                                value={address.area}
                                onChange={e => setAddress({ ...address, area: e.target.value })}
                            />
                        </div>
                    </div>

                    {/* Payment Method */}
                    <div className="mt-4">
                        <label className="text-sm text-gray-500 mb-2 block">Payment Method</label>
                        <div className="flex gap-3 flex-wrap">
                            {['COD', 'bKash', 'Card'].map(method => (
                                <button
                                    key={method}
                                    onClick={() => setPaymentMethod(method)}
                                    className={`px-5 py-2 rounded-xl border-2 font-medium transition ${paymentMethod === method
                                        ? 'border-orange-500 bg-orange-50 text-orange-500'
                                        : 'border-gray-200 text-gray-500'
                                        }`}
                                >
                                    {method === 'COD' ? '💵 Cash on Delivery' : method === 'bKash' ? '📱 bKash' : '💳 Card'}
                                </button>
                            ))}
                        </div>

                        {/* bKash Form */}
                        {paymentMethod === 'bKash' && (
                            <div className="mt-4 bg-pink-50 border border-pink-200 rounded-xl p-4">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-2xl">📱</span>
                                    <span className="font-bold text-pink-600">bKash Payment</span>
                                </div>
                                <p className="text-sm text-gray-600 mb-3">
                                    আমাদের bKash নম্বরে Send Money করুন: <strong className="text-pink-600">01712345678</strong>
                                </p>
                                <div className="flex flex-col gap-3">
                                    <div>
                                        <label className="text-sm text-gray-500 mb-1 block">তোমার bKash নম্বর *</label>
                                        <input
                                            type="text"
                                            placeholder="01XXXXXXXXX"
                                            className="w-full border border-pink-200 rounded-xl px-4 py-3 focus:outline-none focus:border-pink-400 bg-white"
                                            value={address.bkashNumber}
                                            onChange={e => setAddress({ ...address, bkashNumber: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="text-sm text-gray-500 mb-1 block">Transaction ID *</label>
                                        <input
                                            type="text"
                                            placeholder="যেমন: 8N7A6B5C4D"
                                            className="w-full border border-pink-200 rounded-xl px-4 py-3 focus:outline-none focus:border-pink-400 bg-white"
                                            value={address.transactionId}
                                            onChange={e => setAddress({ ...address, transactionId: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <p className="text-xs text-gray-400 mt-2">
                                    * Send Money করার পর Transaction ID টা এখানে দিন
                                </p>
                            </div>
                        )}

                        {/* Card Form */}
                        {paymentMethod === 'Card' && (
                            <div className="mt-4 bg-blue-50 border border-blue-200 rounded-xl p-4">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-2xl">💳</span>
                                    <span className="font-bold text-blue-600">Card Payment</span>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <input
                                        type="text"
                                        placeholder="Card Number: XXXX XXXX XXXX XXXX"
                                        className="w-full border border-blue-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-400 bg-white"
                                    />
                                    <div className="grid grid-cols-2 gap-3">
                                        <input
                                            type="text"
                                            placeholder="Expiry: MM/YY"
                                            className="w-full border border-blue-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-400 bg-white"
                                        />
                                        <input
                                            type="text"
                                            placeholder="CVV: XXX"
                                            className="w-full border border-blue-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-400 bg-white"
                                        />
                                    </div>
                                </div>
                                <p className="text-xs text-gray-400 mt-2">* Demo purposes only</p>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Order Summary */}
            <div className="bg-white rounded-2xl shadow p-6">
                <div className="flex justify-between mb-2 text-gray-600">
                    <span>Subtotal</span><span>৳{totalAmount}</span>
                </div>
                <div className="flex justify-between mb-2 text-gray-600">
                    <span>Delivery Fee</span><span>৳50</span>
                </div>
                <div className="flex justify-between font-bold text-lg border-t pt-3 mt-3">
                    <span>Total</span>
                    <span className="text-orange-500">৳{totalAmount + 50}</span>
                </div>

                {!showAddress ? (
                    <button
                        onClick={() => { if (!user) navigate('/login'); else setShowAddress(true) }}
                        className="w-full mt-4 bg-orange-500 text-white py-3 rounded-xl font-bold hover:bg-orange-600 transition"
                    >
                        Checkout করুন
                    </button>
                ) : (
                    <button
                        onClick={handleOrder}
                        className="w-full mt-4 bg-green-500 text-white py-3 rounded-xl font-bold hover:bg-green-600 transition"
                    >
                        ✅ Order Confirm করুন
                    </button>
                )}
            </div>
        </div>
    )
}

export default Cart