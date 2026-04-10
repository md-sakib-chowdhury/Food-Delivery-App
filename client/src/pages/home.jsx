import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getFoods, getActiveCoupons } from '../services/api'
import { useCart } from '../context/CartContext'

const OffersSection = () => {
    const [coupons, setCoupons] = useState([])

    useEffect(() => {
        getActiveCoupons().then(res => {
            if (res.data.success) setCoupons(res.data.coupons)
        })
    }, [])

    if (coupons.length === 0) return null

    return (
        <div className="max-w-6xl mx-auto px-4 pb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">🎟️ Current Offers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {coupons.map(c => (
                    <div key={c.code} className="bg-gradient-to-r from-orange-500 to-orange-400 rounded-2xl p-5 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-white opacity-10 rounded-full -mr-8 -mt-8"></div>
                        <div className="absolute bottom-0 left-0 w-16 h-16 bg-white opacity-10 rounded-full -ml-6 -mb-6"></div>
                        <div className="relative">
                            <div className="text-3xl font-bold mb-1">
                                {c.type === 'percent' ? `${c.discount}% OFF` : `৳${c.discount} OFF`}
                            </div>
                            <p className="text-orange-100 text-sm mb-3">
                                {c.minOrder > 0 ? `সর্বনিম্ন ৳${c.minOrder} এর order এ` : 'যেকোনো order এ'}
                            </p>
                            <div className="flex items-center justify-between">
                                <div className="bg-white bg-opacity-20 border-2 border-dashed border-white border-opacity-50 rounded-lg px-4 py-2">
                                    <span className="font-bold text-lg tracking-widest">{c.code}</span>
                                </div>
                                <button
                                    onClick={() => { navigator.clipboard.writeText(c.code); alert(`"${c.code}" copied! 🎉`) }}
                                    className="bg-white text-orange-500 px-4 py-2 rounded-lg font-bold text-sm hover:bg-orange-50 transition"
                                >
                                    Copy করো
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

const Home = () => {
    const [foods, setFoods] = useState([])
    const { addToCart } = useCart()

    useEffect(() => {
        getFoods().then(res => {
            if (res.data.success) setFoods(res.data.foods.slice(0, 6))
        })
    }, [])

    return (
        <div>
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-orange-500 to-orange-400 text-white overflow-hidden">
                <div className="max-w-6xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-10">
                    <div className="flex-1">
                        <span className="bg-white text-orange-500 text-sm font-bold px-4 py-1 rounded-full mb-4 inline-block">
                            🚀 ৩০ মিনিটে ডেলিভারি
                        </span>
                        <h1 className="text-5xl font-bold mb-4 leading-tight">
                            ক্ষুধা লাগলে<br />
                            <span className="text-yellow-300">BanglaEats</span> আছে!
                        </h1>
                        <p className="text-orange-100 text-lg mb-8">
                            Dhaka-তে সেরা রেস্টুরেন্ট থেকে তাজা খাবার, দ্রুত ডেলিভারি
                        </p>
                        <div className="flex gap-4 flex-wrap">
                            <Link
                                to="/menu"
                                className="bg-white text-orange-500 px-8 py-3 rounded-full font-bold text-lg hover:bg-orange-50 transition shadow-lg"
                            >
                                এখনই Order করো 🍔
                            </Link>
                            <Link
                                to="/orders"
                                className="border-2 border-white text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-orange-500 transition"
                            >
                                My Orders
                            </Link>
                        </div>
                    </div>
                    <div className="flex-1 text-center text-9xl hidden md:block">
                        🍔
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 60L1440 60L1440 30C1440 30 1080 0 720 0C360 0 0 30 0 30L0 60Z" fill="#f9fafb" />
                    </svg>
                </div>
            </div>

            {/* Stats */}
            <div className="bg-gray-50 py-8">
                <div className="max-w-6xl mx-auto px-4 grid grid-cols-3 gap-4 text-center">
                    <div>
                        <div className="text-3xl font-bold text-orange-500">৫০০+</div>
                        <div className="text-gray-500 text-sm">খুশি Customer</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-orange-500">৩০+</div>
                        <div className="text-gray-500 text-sm">মিনিটে Delivery</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-orange-500">১০০+</div>
                        <div className="text-gray-500 text-sm">Food Item</div>
                    </div>
                </div>
            </div>

            {/* Categories */}
            <div className="max-w-6xl mx-auto px-4 py-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Category বেছে নাও</h2>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                    {[
                        { name: 'Burger', icon: '🍔' },
                        { name: 'Pizza', icon: '🍕' },
                        { name: 'Biryani', icon: '🍛' },
                        { name: 'Chicken', icon: '🍗' },
                        { name: 'Dessert', icon: '🍰' },
                    ].map(cat => (
                        <Link
                            to="/menu"
                            key={cat.name}
                            className="flex flex-col items-center bg-white rounded-2xl p-6 shadow hover:shadow-md hover:-translate-y-1 transition cursor-pointer"
                        >
                            <span className="text-4xl mb-2">{cat.icon}</span>
                            <span className="text-gray-700 font-medium">{cat.name}</span>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Featured Foods */}
            {foods.length > 0 && (
                <div className="max-w-6xl mx-auto px-4 pb-12">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">🔥 Featured Foods</h2>
                        <Link to="/menu" className="text-orange-500 font-medium hover:underline">
                            সব দেখো →
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {foods.map(food => (
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
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-gray-800 mb-1">{food.name}</h3>
                                    <p className="text-gray-400 text-sm mb-3 line-clamp-2">{food.description}</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-orange-500 font-bold text-xl">৳{food.price}</span>
                                        <button
                                            onClick={() => addToCart(food)}
                                            className="bg-orange-500 text-white px-4 py-2 rounded-xl hover:bg-orange-600 text-sm font-medium transition"
                                        >
                                            + Cart এ যোগ করো
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Current Offers */}
            <OffersSection />

            {/* Features */}
            <div className="bg-orange-50 py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-800 text-center mb-10">কেন BanglaEats?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        <div className="bg-white rounded-2xl p-8 shadow">
                            <div className="text-5xl mb-4">⚡</div>
                            <h3 className="text-lg font-bold text-gray-800 mb-2">দ্রুত ডেলিভারি</h3>
                            <p className="text-gray-500">মাত্র ৩০ মিনিটে আপনার দরজায় পৌঁছে যাবে</p>
                        </div>
                        <div className="bg-white rounded-2xl p-8 shadow">
                            <div className="text-5xl mb-4">🍽️</div>
                            <h3 className="text-lg font-bold text-gray-800 mb-2">সেরা মান</h3>
                            <p className="text-gray-500">সেরা রেস্টুরেন্ট থেকে তাজা ও সুস্বাদু খাবার</p>
                        </div>
                        <div className="bg-white rounded-2xl p-8 shadow">
                            <div className="text-5xl mb-4">💳</div>
                            <h3 className="text-lg font-bold text-gray-800 mb-2">সহজ পেমেন্ট</h3>
                            <p className="text-gray-500">bKash, Card বা Cash on Delivery — যেকোনো উপায়ে</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-800 text-gray-400 py-10 px-4 text-center">
                <div className="text-2xl font-bold text-white mb-2">🍔 BanglaEats</div>
                <p className="text-sm">Dhaka, Bangladesh | © 2026 BanglaEats. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Home