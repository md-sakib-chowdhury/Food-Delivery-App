// import { Link } from 'react-router-dom'



// const Home = () => {
//     return (
//         <div>
//             {/* Hero Section */}
//             <div className="bg-orange-500 text-white py-20 px-4 text-center">
//                 <h1 className="text-5xl font-bold mb-4">ক্ষুধা লেগেছে? 🍔</h1>
//                 <p className="text-xl mb-8">Dhaka-তে সেরা খাবার দ্রুত ডেলিভারি</p>
//                 <Link
//                     to="/menu"
//                     className="bg-white text-orange-500 px-8 py-3 rounded-full font-bold text-lg hover:bg-orange-100"
//                 >
//                     এখনই Order করো
//                 </Link>
//             </div>

//             {/* Categories */}
//             <div className="max-w-6xl mx-auto px-4 py-12">
//                 <h2 className="text-2xl font-bold text-gray-800 mb-6">Category</h2>
//                 <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
//                     {[
//                         { name: 'Burger', icon: '🍔' },
//                         { name: 'Pizza', icon: '🍕' },
//                         { name: 'Biryani', icon: '🍛' },
//                         { name: 'Chicken', icon: '🍗' },
//                         { name: 'Dessert', icon: '🍰' },
//                     ].map(cat => (
//                         <Link
//                             to="/menu"
//                             key={cat.name}
//                             className="flex flex-col items-center bg-white rounded-2xl p-6 shadow hover:shadow-md hover:-translate-y-1 transition"
//                         >
//                             <span className="text-4xl mb-2">{cat.icon}</span>
//                             <span className="text-gray-700 font-medium">{cat.name}</span>
//                         </Link>
//                     ))}
//                 </div>
//             </div>

//             {/* Features */}
//             <div className="bg-orange-50 py-12 px-4">
//                 <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
//                     <div className="bg-white rounded-2xl p-8 shadow">
//                         <div className="text-4xl mb-3">⚡</div>
//                         <h3 className="text-lg font-bold text-gray-800 mb-2">দ্রুত ডেলিভারি</h3>
//                         <p className="text-gray-500">মাত্র ৩০ মিনিটে আপনার দরজায়</p>
//                     </div>
//                     <div className="bg-white rounded-2xl p-8 shadow">
//                         <div className="text-4xl mb-3">🍽️</div>
//                         <h3 className="text-lg font-bold text-gray-800 mb-2">সেরা মান</h3>
//                         <p className="text-gray-500">সেরা রেস্টুরেন্ট থেকে তাজা খাবার</p>
//                     </div>
//                     <div className="bg-white rounded-2xl p-8 shadow">
//                         <div className="text-4xl mb-3">💳</div>
//                         <h3 className="text-lg font-bold text-gray-800 mb-2">সহজ পেমেন্ট</h3>
//                         <p className="text-gray-500">bKash, Card বা Cash on Delivery</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Home


// import { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import { getFoods } from '../services/api'
// import { useCart } from '../context/CartContext'

// const Home = () => {
//     const [foods, setFoods] = useState([])
//     const { addToCart } = useCart()

//     useEffect(() => {
//         getFoods().then(res => {
//             if (res.data.success) setFoods(res.data.foods.slice(0, 6))
//         })
//     }, [])

//     return (
//         <div>
//             {/* Hero Section */}
//             <div className="relative bg-gradient-to-r from-orange-500 to-orange-400 text-white overflow-hidden">
//                 <div className="max-w-6xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-10">
//                     <div className="flex-1">
//                         <span className="bg-white text-orange-500 text-sm font-bold px-4 py-1 rounded-full mb-4 inline-block">
//                             🚀 ৩০ মিনিটে ডেলিভারি
//                         </span>
//                         <h1 className="text-5xl font-bold mb-4 leading-tight">
//                             ক্ষুধা লাগলে<br />
//                             <span className="text-yellow-300">BanglaEats</span> আছে!
//                         </h1>
//                         <p className="text-orange-100 text-lg mb-8">
//                             Dhaka-তে সেরা রেস্টুরেন্ট থেকে তাজা খাবার, দ্রুত ডেলিভারি
//                         </p>
//                         <div className="flex gap-4">
//                             <Link
//                                 to="/menu"
//                                 className="bg-white text-orange-500 px-8 py-3 rounded-full font-bold text-lg hover:bg-orange-50 transition shadow-lg"
//                             >
//                                 এখনই Order করো 🍔
//                             </Link>
//                             <Link
//                                 to="/orders"
//                                 className="border-2 border-white text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-orange-500 transition"
//                             >
//                                 My Orders
//                             </Link>
//                         </div>
//                     </div>
//                     <div className="flex-1 text-center text-9xl hidden md:block">
//                         🍔
//                     </div>
//                 </div>

//                 {/* Wave */}
//                 <div className="absolute bottom-0 left-0 right-0">
//                     <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M0 60L1440 60L1440 30C1440 30 1080 0 720 0C360 0 0 30 0 30L0 60Z" fill="#f9fafb" />
//                     </svg>
//                 </div>
//             </div>

//             {/* Stats */}
//             <div className="bg-gray-50 py-8">
//                 <div className="max-w-6xl mx-auto px-4 grid grid-cols-3 gap-4 text-center">
//                     <div>
//                         <div className="text-3xl font-bold text-orange-500">৫০০+</div>
//                         <div className="text-gray-500 text-sm">খুশি Customer</div>
//                     </div>
//                     <div>
//                         <div className="text-3xl font-bold text-orange-500">৩০+</div>
//                         <div className="text-gray-500 text-sm">মিনিটে Delivery</div>
//                     </div>
//                     <div>
//                         <div className="text-3xl font-bold text-orange-500">১০০+</div>
//                         <div className="text-gray-500 text-sm">Food Item</div>
//                     </div>
//                 </div>
//             </div>

//             {/* Categories */}
//             <div className="max-w-6xl mx-auto px-4 py-12">
//                 <h2 className="text-2xl font-bold text-gray-800 mb-6">Category বেছে নাও</h2>
//                 <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
//                     {[
//                         { name: 'Burger', icon: '🍔' },
//                         { name: 'Pizza', icon: '🍕' },
//                         { name: 'Biryani', icon: '🍛' },
//                         { name: 'Chicken', icon: '🍗' },
//                         { name: 'Dessert', icon: '🍰' },
//                     ].map(cat => (
//                         <Link
//                             to={`/menu`}
//                             key={cat.name}
//                             className="flex flex-col items-center bg-white rounded-2xl p-6 shadow hover:shadow-md hover:-translate-y-1 transition cursor-pointer"
//                         >
//                             <span className="text-4xl mb-2">{cat.icon}</span>
//                             <span className="text-gray-700 font-medium">{cat.name}</span>
//                         </Link>
//                     ))}
//                 </div>
//             </div>

//             {/* Featured Foods */}
//             {foods.length > 0 && (
//                 <div className="max-w-6xl mx-auto px-4 pb-12">
//                     <div className="flex justify-between items-center mb-6">
//                         <h2 className="text-2xl font-bold text-gray-800">🔥 Featured Foods</h2>
//                         <Link to="/menu" className="text-orange-500 font-medium hover:underline">
//                             সব দেখো →
//                         </Link>
//                     </div>
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                         {foods.map(food => (
//                             <div key={food._id} className="bg-white rounded-2xl shadow hover:shadow-md transition overflow-hidden group">
//                                 <div className="relative overflow-hidden">
//                                     <img
//                                         src={food.image}
//                                         alt={food.name}
//                                         className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
//                                     />
//                                     <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
//                                         {food.category}
//                                     </span>
//                                 </div>
//                                 <div className="p-4">
//                                     <h3 className="text-lg font-bold text-gray-800 mb-1">{food.name}</h3>
//                                     <p className="text-gray-400 text-sm mb-3 line-clamp-2">{food.description}</p>
//                                     <div className="flex justify-between items-center">
//                                         <span className="text-orange-500 font-bold text-xl">৳{food.price}</span>
//                                         <button
//                                             onClick={() => addToCart(food)}
//                                             className="bg-orange-500 text-white px-4 py-2 rounded-xl hover:bg-orange-600 text-sm font-medium transition"
//                                         >
//                                             + Cart এ যোগ করো
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             )}

//             {/* Features */}
//             <div className="bg-orange-50 py-16 px-4">
//                 <div className="max-w-6xl mx-auto">
//                     <h2 className="text-2xl font-bold text-gray-800 text-center mb-10">কেন BanglaEats?</h2>
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
//                         <div className="bg-white rounded-2xl p-8 shadow">
//                             <div className="text-5xl mb-4">⚡</div>
//                             <h3 className="text-lg font-bold text-gray-800 mb-2">দ্রুত ডেলিভারি</h3>
//                             <p className="text-gray-500">মাত্র ৩০ মিনিটে আপনার দরজায় পৌঁছে যাবে</p>
//                         </div>
//                         <div className="bg-white rounded-2xl p-8 shadow">
//                             <div className="text-5xl mb-4">🍽️</div>
//                             <h3 className="text-lg font-bold text-gray-800 mb-2">সেরা মান</h3>
//                             <p className="text-gray-500">সেরা রেস্টুরেন্ট থেকে তাজা ও সুস্বাদু খাবার</p>
//                         </div>
//                         <div className="bg-white rounded-2xl p-8 shadow">
//                             <div className="text-5xl mb-4">💳</div>
//                             <h3 className="text-lg font-bold text-gray-800 mb-2">সহজ পেমেন্ট</h3>
//                             <p className="text-gray-500">bKash, Card বা Cash on Delivery — যেকোনো উপায়ে</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Footer */}
//             <footer className="bg-gray-800 text-gray-400 py-10 px-4 text-center">
//                 <div className="text-2xl font-bold text-white mb-2">🍔 BanglaEats</div>
//                 <p className="text-sm">Dhaka, Bangladesh | © 2026 BanglaEats. All rights reserved.</p>
//             </footer>
//         </div>
//     )
// }

// export default Home


import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getFoods } from '../services/api'
import { useCart } from '../context/CartContext'

const Home = () => {
    const [foods, setFoods] = useState([])
    const [addedId, setAddedId] = useState(null)
    const { addToCart } = useCart()

    useEffect(() => {
        getFoods().then(res => {
            if (res.data.success) setFoods(res.data.foods.slice(0, 6))
        })
    }, [])

    const handleAdd = (food) => {
        addToCart(food)
        setAddedId(food._id)
        setTimeout(() => setAddedId(null), 1200)
    }

    return (
        <div style={{ fontFamily: "'Sora', 'Hind Siliguri', sans-serif" }}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Hind+Siliguri:wght@400;500;600&display=swap');

                .hero-bg {
                    background: linear-gradient(135deg, #ff6b00 0%, #ff8c00 40%, #ffb347 100%);
                    position: relative;
                    overflow: hidden;
                }
                .hero-bg::before {
                    content: '';
                    position: absolute;
                    top: -80px; right: -80px;
                    width: 400px; height: 400px;
                    background: rgba(255,255,255,0.08);
                    border-radius: 50%;
                }
                .hero-bg::after {
                    content: '';
                    position: absolute;
                    bottom: -60px; left: -60px;
                    width: 300px; height: 300px;
                    background: rgba(255,255,255,0.06);
                    border-radius: 50%;
                }
                .blob {
                    position: absolute;
                    top: 20px; right: 10%;
                    width: 220px; height: 220px;
                    background: rgba(255,255,255,0.1);
                    border-radius: 60% 40% 70% 30% / 50% 60% 40% 50%;
                    animation: blobAnim 6s ease-in-out infinite;
                }
                @keyframes blobAnim {
                    0%, 100% { border-radius: 60% 40% 70% 30% / 50% 60% 40% 50%; }
                    50% { border-radius: 40% 60% 30% 70% / 60% 40% 60% 40%; }
                }
                .food-emoji {
                    animation: floatAnim 3s ease-in-out infinite;
                    display: inline-block;
                }
                @keyframes floatAnim {
                    0%, 100% { transform: translateY(0px) rotate(-3deg); }
                    50% { transform: translateY(-16px) rotate(3deg); }
                }
                .stat-card {
                    background: rgba(255,255,255,0.15);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255,255,255,0.25);
                    border-radius: 20px;
                    padding: 20px;
                    text-align: center;
                    color: white;
                    transition: transform 0.2s;
                }
                .stat-card:hover { transform: translateY(-4px); }
                .cat-card {
                    background: white;
                    border-radius: 20px;
                    padding: 28px 16px;
                    text-align: center;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.07);
                    transition: all 0.25s cubic-bezier(.4,0,.2,1);
                    cursor: pointer;
                    border: 2px solid transparent;
                    text-decoration: none;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .cat-card:hover {
                    border-color: #ff6b00;
                    transform: translateY(-6px);
                    box-shadow: 0 12px 32px rgba(255,107,0,0.15);
                }
                .cat-card .cat-icon {
                    font-size: 2.8rem;
                    margin-bottom: 10px;
                    transition: transform 0.3s;
                }
                .cat-card:hover .cat-icon { transform: scale(1.2) rotate(-5deg); }
                .food-card {
                    background: white;
                    border-radius: 24px;
                    overflow: hidden;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.07);
                    transition: all 0.3s cubic-bezier(.4,0,.2,1);
                }
                .food-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 20px 48px rgba(255,107,0,0.15);
                }
                .food-card img {
                    transition: transform 0.4s ease;
                }
                .food-card:hover img { transform: scale(1.07); }
                .add-btn {
                    background: #ff6b00;
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 14px;
                    font-weight: 600;
                    font-size: 0.875rem;
                    cursor: pointer;
                    transition: all 0.2s;
                }
                .add-btn:hover { background: #e55a00; transform: scale(1.05); }
                .add-btn.added { background: #22c55e; }
                .feature-card {
                    background: white;
                    border-radius: 24px;
                    padding: 36px 28px;
                    box-shadow: 0 4px 24px rgba(0,0,0,0.06);
                    transition: transform 0.25s;
                    position: relative;
                    overflow: hidden;
                }
                .feature-card::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    height: 4px;
                    background: linear-gradient(90deg, #ff6b00, #ffb347);
                }
                .feature-card:hover { transform: translateY(-6px); }
                .section-title {
                    font-size: 1.75rem;
                    font-weight: 800;
                    color: #1a1a2e;
                    margin-bottom: 8px;
                }
                .section-sub {
                    color: #6b7280;
                    margin-bottom: 32px;
                    font-size: 0.95rem;
                }
                .badge {
                    background: linear-gradient(135deg, #fff7ed, #ffedd5);
                    color: #ff6b00;
                    font-size: 0.75rem;
                    font-weight: 700;
                    padding: 5px 14px;
                    border-radius: 100px;
                    border: 1px solid #fed7aa;
                    display: inline-block;
                    margin-bottom: 16px;
                    letter-spacing: 0.5px;
                    text-transform: uppercase;
                }
                .wave-divider svg { display: block; }
            `}</style>

            {/* ── HERO ── */}
            <div className="hero-bg" style={{ minHeight: '560px', display: 'flex', alignItems: 'center' }}>
                <div className="blob" />
                <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '60px 24px', display: 'flex', alignItems: 'center', gap: '48px', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
                    <div style={{ flex: 1, minWidth: '280px' }}>
                        <div className="badge">🚀 ৩০ মিনিটে ডেলিভারি</div>
                        <h1 style={{ fontSize: 'clamp(2.2rem,5vw,3.4rem)', fontWeight: 800, color: 'white', lineHeight: 1.15, marginBottom: '20px' }}>
                            ক্ষুধা লাগলে<br />
                            <span style={{ color: '#fff176', textShadow: '0 2px 12px rgba(0,0,0,0.15)' }}>BanglaEats</span> আছে!
                        </h1>
                        <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: '1.1rem', marginBottom: '32px', lineHeight: 1.7 }}>
                            Dhaka-র সেরা রেস্টুরেন্ট থেকে তাজা খাবার,<br />দ্রুত ও নির্ভরযোগ্য ডেলিভারি
                        </p>
                        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                            <Link to="/menu" style={{
                                background: 'white', color: '#ff6b00',
                                padding: '14px 32px', borderRadius: '100px',
                                fontWeight: 700, fontSize: '1rem',
                                textDecoration: 'none', boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                                transition: 'transform 0.2s',
                                display: 'inline-block'
                            }}
                                onMouseEnter={e => e.target.style.transform = 'scale(1.04)'}
                                onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                            >
                                এখনই Order করো 🍔
                            </Link>
                            <Link to="/orders" style={{
                                background: 'rgba(255,255,255,0.15)',
                                backdropFilter: 'blur(10px)',
                                border: '2px solid rgba(255,255,255,0.5)',
                                color: 'white',
                                padding: '14px 28px', borderRadius: '100px',
                                fontWeight: 600, fontSize: '1rem',
                                textDecoration: 'none', transition: 'all 0.2s',
                                display: 'inline-block'
                            }}>
                                My Orders →
                            </Link>
                        </div>
                    </div>
                    <div style={{ flex: '0 0 auto', textAlign: 'center' }}>
                        <span className="food-emoji" style={{ fontSize: '9rem', filter: 'drop-shadow(0 16px 32px rgba(0,0,0,0.2))' }}>🍔</span>
                    </div>
                </div>

                {/* Stats bar */}
                {/* <div style={{
                    position: 'absolute', bottom: '24px', left: '50%', transform: 'translateX(-50%)',
                    display: 'flex', gap: '16px', zIndex: 2, flexWrap: 'wrap', justifyContent: 'center'
                }}>
                    {[
                        { val: '৫০০+', label: 'খুশি Customer', icon: '😊' },
                        { val: '৩০ মিনিট', label: 'দ্রুত Delivery', icon: '⚡' },
                        { val: '১০০+', label: 'Food Item', icon: '🍽️' },
                    ].map(s => (
                        <div key={s.val} className="stat-card" style={{ minWidth: '130px' }}>
                            <div style={{ fontSize: '1.5rem', marginBottom: '4px' }}>{s.icon}</div>
                            <div style={{ fontSize: '1.3rem', fontWeight: 800 }}>{s.val}</div>
                            <div style={{ fontSize: '0.78rem', opacity: 0.85 }}>{s.label}</div>
                        </div>
                    ))}
                </div> */}

                {/* Wave */}
                <div className="wave-divider" style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
                    <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 80L1440 80L1440 40C1200 10 960 0 720 0C480 0 240 20 0 40L0 80Z" fill="#f9fafb" />
                    </svg>
                </div>
            </div>

            {/* ── CATEGORIES ── */}
            <div style={{ background: '#f9fafb', padding: '80px 24px 60px' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <div className="badge">🍽️ Category</div>
                        <div className="section-title">কী খেতে চাও আজ?</div>
                        <p className="section-sub">তোমার পছন্দের category বেছে নাও</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '16px' }}>
                        {[
                            { name: 'Burger', icon: '🍔', color: '#fff7ed' },
                            { name: 'Pizza', icon: '🍕', color: '#fef2f2' },
                            { name: 'Biryani', icon: '🍛', color: '#fefce8' },
                            { name: 'Chicken', icon: '🍗', color: '#f0fdf4' },
                            { name: 'Dessert', icon: '🍰', color: '#fdf4ff' },
                        ].map(cat => (
                            <Link to="/menu" key={cat.name} className="cat-card" style={{ background: cat.color }}>
                                <div className="cat-icon">{cat.icon}</div>
                                <span style={{ fontWeight: 700, color: '#374151', fontSize: '0.95rem' }}>{cat.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── FEATURED FOODS ── */}
            {foods.length > 0 && (
                <div style={{ background: 'white', padding: '60px 24px' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '36px', flexWrap: 'wrap', gap: '12px' }}>
                            <div>
                                <div className="badge">🔥 Hot Picks</div>
                                <div className="section-title">Featured Foods</div>
                            </div>
                            <Link to="/menu" style={{ color: '#ff6b00', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                সব দেখো <span style={{ fontSize: '1.2rem' }}>→</span>
                            </Link>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
                            {foods.map(food => (
                                <div key={food._id} className="food-card">
                                    <div style={{ position: 'relative', overflow: 'hidden', height: '200px' }}>
                                        <img src={food.image} alt={food.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        <span style={{
                                            position: 'absolute', top: '12px', left: '12px',
                                            background: '#ff6b00', color: 'white',
                                            fontSize: '0.72rem', fontWeight: 700,
                                            padding: '4px 12px', borderRadius: '100px',
                                            letterSpacing: '0.5px'
                                        }}>{food.category}</span>
                                    </div>
                                    <div style={{ padding: '20px' }}>
                                        <h3 style={{ fontWeight: 700, fontSize: '1.05rem', color: '#1a1a2e', marginBottom: '6px' }}>{food.name}</h3>
                                        <p style={{ color: '#9ca3af', fontSize: '0.85rem', marginBottom: '16px', lineHeight: 1.6, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                            {food.description}
                                        </p>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <span style={{ fontSize: '1.3rem', fontWeight: 800, color: '#ff6b00' }}>৳{food.price}</span>
                                            <button
                                                className={`add-btn ${addedId === food._id ? 'added' : ''}`}
                                                onClick={() => handleAdd(food)}
                                            >
                                                {addedId === food._id ? '✅ Added!' : '+ Cart এ যোগ করো'}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* ── WHY BANGLAEATS ── */}
            <div style={{ background: '#fff7ed', padding: '80px 24px' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                        <div className="badge">💡 কেন আমরা</div>
                        <div className="section-title">কেন BanglaEats?</div>
                        <p className="section-sub">Dhaka-র সেরা food delivery experience</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
                        {[
                            { icon: '⚡', title: 'দ্রুত ডেলিভারি', desc: 'মাত্র ৩০ মিনিটে তোমার দরজায়। রাস্তা যতই জ্যাম থাকুক!', color: '#fef9c3' },
                            { icon: '🍽️', title: 'সেরা মান', desc: 'Dhaka-র সেরা রেস্টুরেন্ট থেকে তাজা ও সুস্বাদু খাবার।', color: '#dcfce7' },
                            { icon: '💳', title: 'সহজ পেমেন্ট', desc: 'bKash, Card বা Cash on Delivery — তোমার মতো করে।', color: '#dbeafe' },
                            { icon: '🎟️', title: 'Special Offers', desc: 'নিয়মিত coupon ও discount পাও। বেশি খাও, কম খরচ করো!', color: '#fce7f3' },
                        ].map(f => (
                            <div key={f.title} className="feature-card">
                                <div style={{ width: '60px', height: '60px', background: f.color, borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', marginBottom: '20px' }}>
                                    {f.icon}
                                </div>
                                <h3 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#1a1a2e', marginBottom: '10px' }}>{f.title}</h3>
                                <p style={{ color: '#6b7280', lineHeight: 1.7, fontSize: '0.9rem' }}>{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── CTA BANNER ── */}
            <div style={{
                background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
                padding: '72px 24px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '280px', height: '280px', background: 'rgba(255,107,0,0.1)', borderRadius: '50%' }} />
                <div style={{ position: 'absolute', bottom: '-40px', left: '-40px', width: '200px', height: '200px', background: 'rgba(255,107,0,0.08)', borderRadius: '50%' }} />
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🍔🍕🍛🍗🍰</div>
                    <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 800, color: 'white', marginBottom: '12px' }}>
                        এখনই Order করো!
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '32px', fontSize: '1.05rem' }}>
                        প্রথম order এ special discount পাও
                    </p>
                    <Link to="/menu" style={{
                        background: 'linear-gradient(135deg, #ff6b00, #ff8c00)',
                        color: 'white',
                        padding: '16px 40px',
                        borderRadius: '100px',
                        fontWeight: 700,
                        fontSize: '1.05rem',
                        textDecoration: 'none',
                        boxShadow: '0 8px 24px rgba(255,107,0,0.4)',
                        display: 'inline-block',
                        transition: 'transform 0.2s'
                    }}
                        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        Menu দেখো →
                    </Link>
                </div>
            </div>

            {/* ── FOOTER ── */}
            <footer style={{ background: '#0f0f1a', padding: '48px 24px 32px', color: 'rgba(255,255,255,0.5)' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '32px', marginBottom: '36px' }}>
                        <div>
                            <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'white', marginBottom: '10px' }}>🍔 BanglaEats</div>
                            <p style={{ fontSize: '0.88rem', lineHeight: 1.7, maxWidth: '240px' }}>
                                Dhaka-র সেরা food delivery platform। তাজা খাবার, দ্রুত ডেলিভারি।
                            </p>
                        </div>
                        <div>
                            <div style={{ color: 'white', fontWeight: 700, marginBottom: '14px', fontSize: '0.9rem', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Quick Links</div>
                            {['Home', 'Menu', 'My Orders'].map(l => (
                                <div key={l} style={{ marginBottom: '8px' }}>
                                    <Link to={l === 'Home' ? '/' : l === 'Menu' ? '/menu' : '/orders'}
                                        style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}
                                        onMouseEnter={e => e.target.style.color = '#ff6b00'}
                                        onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.5)'}
                                    >{l}</Link>
                                </div>
                            ))}
                        </div>
                        <div>
                            <div style={{ color: 'white', fontWeight: 700, marginBottom: '14px', fontSize: '0.9rem', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Payment</div>
                            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                                {['💵 COD', '📱 bKash', '💳 Card'].map(p => (
                                    <span key={p} style={{ background: 'rgba(255,255,255,0.08)', padding: '6px 14px', borderRadius: '8px', fontSize: '0.82rem', color: 'rgba(255,255,255,0.7)' }}>{p}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '24px', textAlign: 'center', fontSize: '0.82rem' }}>
                        © 2026 BanglaEats · Dhaka, Bangladesh · সব অধিকার সংরক্ষিত
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Home