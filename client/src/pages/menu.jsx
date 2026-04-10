import { useState, useEffect } from 'react'
import { getFoods, getActiveCoupons } from '../services/api'
import { useCart } from '../context/CartContext'

const OfferBanner = () => {
    const [coupons, setCoupons] = useState([])
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        getActiveCoupons().then(res => {
            if (res.data.success) setCoupons(res.data.coupons)
        })
        const timer = setInterval(() => setCurrent(prev => prev + 1), 3000)
        return () => clearInterval(timer)
    }, [])

    if (coupons.length === 0) return null

    const c = coupons[current % coupons.length]

    return (
        <div className="bg-gradient-to-r from-orange-500 to-orange-400 rounded-2xl p-4 mb-6 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
                <span className="text-2xl">🎟️</span>
                <div>
                    <span className="font-bold">Special Offer! </span>
                    <span className="text-orange-100">
                        {c.type === 'percent' ? `${c.discount}% OFF` : `৳${c.discount} OFF`}
                        {c.minOrder > 0 ? ` — সর্বনিম্ন ৳${c.minOrder} এর order এ` : ''}
                    </span>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <div className="bg-white bg-opacity-20 border-2 border-dashed border-white border-opacity-60 rounded-lg px-4 py-1">
                    <span className="font-bold tracking-widest">{c.code}</span>
                </div>
                <button
                    onClick={() => { navigator.clipboard.writeText(c.code); alert(`"${c.code}" copied! 🎉`) }}
                    className="bg-white text-orange-500 px-3 py-1 rounded-lg font-bold text-sm hover:bg-orange-50"
                >
                    Copy
                </button>
            </div>
        </div>
    )
}

const Menu = () => {
    const [foods, setFoods] = useState([])
    const [category, setCategory] = useState('All')
    const [search, setSearch] = useState('')
    const { addToCart, cartItems } = useCart()

    const categories = ['All', 'Burger', 'Pizza', 'Biryani', 'Chicken', 'Dessert']

    useEffect(() => {
        getFoods().then(res => {
            if (res.data.success) setFoods(res.data.foods)
        })
    }, [])

    const filtered = foods
        .filter(f => category === 'All' || f.category === category)
        .filter(f => f.name.toLowerCase().includes(search.toLowerCase()) ||
            f.description.toLowerCase().includes(search.toLowerCase()))

    const getCartQuantity = (id) => {
        const item = cartItems.find(i => i._id === id)
        return item ? item.quantity : 0
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">আমাদের Menu</h2>

            {/* Offer Banner */}
            <OfferBanner />

            {/* Search Bar */}
            <div className="relative mb-6">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">🔍</span>
                <input
                    type="text"
                    placeholder="খাবার খুঁজো... (যেমন: Burger, Biryani)"
                    className="w-full border border-gray-200 rounded-2xl pl-12 pr-4 py-4 focus:outline-none focus:border-orange-500 bg-white shadow-sm text-gray-700"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                {search && (
                    <button
                        onClick={() => setSearch('')}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xl"
                    >✕</button>
                )}
            </div>

            {/* Category Filters */}
            <div className="flex gap-3 flex-wrap mb-8">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setCategory(cat)}
                        className={`px-5 py-2 rounded-full font-medium transition ${category === cat
                            ? 'bg-orange-500 text-white shadow-md'
                            : 'bg-white text-gray-600 border border-gray-300 hover:border-orange-500'}`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {search && (
                <p className="text-gray-500 text-sm mb-4">
                    "{search}" এর জন্য {filtered.length}টি ফলাফল
                </p>
            )}

            {filtered.length === 0 ? (
                <div className="text-center py-20 text-gray-400">
                    <div className="text-6xl mb-4">🍽️</div>
                    <p className="text-xl">কোনো food পাওয়া যায়নি</p>
                    <p className="text-sm mt-2">অন্য keyword দিয়ে search করো</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map(food => (
                        <div key={food._id} className="bg-white rounded-2xl shadow hover:shadow-md transition overflow-hidden group">
                            <div className="relative overflow-hidden">
                                <img
                                    src={food.image}
                                    alt={food.name}
                                    className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                                />
                                <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                    {food.category}
                                </span>
                                {food.rating && (
                                    <span className="absolute top-3 right-3 bg-white text-yellow-500 text-xs font-bold px-3 py-1 rounded-full shadow">
                                        ⭐ {food.rating.toFixed(1)}
                                    </span>
                                )}
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-bold text-gray-800 mb-1">{food.name}</h3>
                                <p className="text-gray-400 text-sm mb-3 line-clamp-2">{food.description}</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-orange-500 font-bold text-xl">৳{food.price}</span>
                                    {getCartQuantity(food._id) > 0 ? (
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm text-green-600 font-medium">
                                                ✅ Cart এ আছে ({getCartQuantity(food._id)})
                                            </span>
                                            <button
                                                onClick={() => addToCart(food)}
                                                className="bg-orange-500 text-white px-3 py-2 rounded-xl hover:bg-orange-600 text-sm"
                                            >+</button>
                                        </div>
                                    ) : (
                                        <button
                                            onClick={() => addToCart(food)}
                                            className="bg-orange-500 text-white px-4 py-2 rounded-xl hover:bg-orange-600 text-sm font-medium transition"
                                        >
                                            + Cart এ যোগ করো
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

export default Menu