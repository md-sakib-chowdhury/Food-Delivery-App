// // import { useState, useEffect } from 'react'

// // import { Link } from 'react-router-dom'
// // import { getFoods, getActiveCoupons } from '../services/api'
// // import { useCart } from '../context/CartContext'

// // const OffersSection = () => {
// //     const [coupons, setCoupons] = useState([])

// //     useEffect(() => {
// //         getActiveCoupons().then(res => {
// //             if (res.data.success) setCoupons(res.data.coupons)
// //         })
// //     }, [])

// //     if (coupons.length === 0) return null

// //     return (
// //         <div className="max-w-6xl mx-auto px-4 pb-12">
// //             <h2 className="text-2xl font-bold text-gray-800 mb-6">🎟️ Current Offers</h2>
// //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// //                 {coupons.map(c => (
// //                     <div key={c.code} className="bg-gradient-to-r from-orange-500 to-orange-400 rounded-2xl p-5 text-white relative overflow-hidden">
// //                         <div className="absolute top-0 right-0 w-24 h-24 bg-white opacity-10 rounded-full -mr-8 -mt-8"></div>
// //                         <div className="absolute bottom-0 left-0 w-16 h-16 bg-white opacity-10 rounded-full -ml-6 -mb-6"></div>
// //                         <div className="relative">
// //                             <div className="text-3xl font-bold mb-1">
// //                                 {c.type === 'percent' ? `${c.discount}% OFF` : `৳${c.discount} OFF`}
// //                             </div>
// //                             <p className="text-orange-100 text-sm mb-3">
// //                                 {c.minOrder > 0 ? `সর্বনিম্ন ৳${c.minOrder} এর order এ` : 'যেকোনো order এ'}
// //                             </p>
// //                             <div className="flex items-center justify-between">
// //                                 <div className="bg-white bg-opacity-20 border-2 border-dashed border-white border-opacity-50 rounded-lg px-4 py-2">
// //                                     <span className="font-bold text-lg tracking-widest">{c.code}</span>
// //                                 </div>
// //                                 <button
// //                                     onClick={() => { navigator.clipboard.writeText(c.code); alert(`"${c.code}" copied! 🎉`) }}
// //                                     className="bg-white text-orange-500 px-4 py-2 rounded-lg font-bold text-sm hover:bg-orange-50 transition"
// //                                 >
// //                                     Copy করো
// //                                 </button>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 ))}
// //             </div>
// //         </div>
// //     )
// // }

// // const Home = () => {
// //     const [foods, setFoods] = useState([])
// //     const { addToCart } = useCart()

// //     useEffect(() => {
// //         getFoods().then(res => {
// //             if (res.data.success) setFoods(res.data.foods.slice(0, 6))
// //         })
// //     }, [])

// //     return (
// //         <div>
// //             {/* Hero Section */}
// //             <div className="relative bg-gradient-to-r from-orange-500 to-orange-400 text-white overflow-hidden">
// //                 <div className="max-w-6xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-10">
// //                     <div className="flex-1">
// //                         <span className="bg-white text-orange-500 text-sm font-bold px-4 py-1 rounded-full mb-4 inline-block">
// //                             🚀 ৩০ মিনিটে ডেলিভারি
// //                         </span>
// //                         <h1 className="text-5xl font-bold mb-4 leading-tight">
// //                             ক্ষুধা লাগলে<br />
// //                             <span className="text-yellow-300">BanglaEats</span> আছে!
// //                         </h1>
// //                         <p className="text-orange-100 text-lg mb-8">
// //                             Dhaka-তে সেরা রেস্টুরেন্ট থেকে তাজা খাবার, দ্রুত ডেলিভারি
// //                         </p>
// //                         <div className="flex gap-4 flex-wrap">
// //                             <Link
// //                                 to="/menu"
// //                                 className="bg-white text-orange-500 px-8 py-3 rounded-full font-bold text-lg hover:bg-orange-50 transition shadow-lg"
// //                             >
// //                                 এখনই Order করো 🍔
// //                             </Link>
// //                             <Link
// //                                 to="/orders"
// //                                 className="border-2 border-white text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-orange-500 transition"
// //                             >
// //                                 My Orders
// //                             </Link>
// //                         </div>
// //                     </div>
// //                     <div className="flex-1 text-center text-9xl hidden md:block">
// //                         🍔
// //                     </div>
// //                 </div>
// //                 <div className="absolute bottom-0 left-0 right-0">
// //                     <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
// //                         <path d="M0 60L1440 60L1440 30C1440 30 1080 0 720 0C360 0 0 30 0 30L0 60Z" fill="#f9fafb" />
// //                     </svg>
// //                 </div>
// //             </div>

// //             {/* Stats */}
// //             <div className="bg-gray-50 py-8">
// //                 <div className="max-w-6xl mx-auto px-4 grid grid-cols-3 gap-4 text-center">
// //                     <div>
// //                         <div className="text-3xl font-bold text-orange-500">৫০০+</div>
// //                         <div className="text-gray-500 text-sm">খুশি Customer</div>
// //                     </div>
// //                     <div>
// //                         <div className="text-3xl font-bold text-orange-500">৩০+</div>
// //                         <div className="text-gray-500 text-sm">মিনিটে Delivery</div>
// //                     </div>
// //                     <div>
// //                         <div className="text-3xl font-bold text-orange-500">১০০+</div>
// //                         <div className="text-gray-500 text-sm">Food Item</div>
// //                     </div>
// //                 </div>
// //             </div>

// //             {/* Categories */}
// //             <div className="max-w-6xl mx-auto px-4 py-12">
// //                 <h2 className="text-2xl font-bold text-gray-800 mb-6">Category বেছে নাও</h2>
// //                 <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
// //                     {[
// //                         { name: 'Burger', icon: '🍔' },
// //                         { name: 'Pizza', icon: '🍕' },
// //                         { name: 'Biryani', icon: '🍛' },
// //                         { name: 'Chicken', icon: '🍗' },
// //                         { name: 'Dessert', icon: '🍰' },
// //                     ].map(cat => (
// //                         <Link
// //                             to="/menu"
// //                             key={cat.name}
// //                             className="flex flex-col items-center bg-white rounded-2xl p-6 shadow hover:shadow-md hover:-translate-y-1 transition cursor-pointer"
// //                         >
// //                             <span className="text-4xl mb-2">{cat.icon}</span>
// //                             <span className="text-gray-700 font-medium">{cat.name}</span>
// //                         </Link>
// //                     ))}
// //                 </div>
// //             </div>

// //             {/* Featured Foods */}
// //             {foods.length > 0 && (
// //                 <div className="max-w-6xl mx-auto px-4 pb-12">
// //                     <div className="flex justify-between items-center mb-6">
// //                         <h2 className="text-2xl font-bold text-gray-800">🔥 Featured Foods</h2>
// //                         <Link to="/menu" className="text-orange-500 font-medium hover:underline">
// //                             সব দেখো →
// //                         </Link>
// //                     </div>
// //                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //                         {foods.map(food => (
// //                             <div key={food._id} className="bg-white rounded-2xl shadow hover:shadow-md transition overflow-hidden group">
// //                                 <div className="relative overflow-hidden">
// //                                     <img
// //                                         src={food.image}
// //                                         alt={food.name}
// //                                         className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
// //                                     />
// //                                     <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
// //                                         {food.category}
// //                                     </span>
// //                                 </div>
// //                                 <div className="p-4">
// //                                     <h3 className="text-lg font-bold text-gray-800 mb-1">{food.name}</h3>
// //                                     <p className="text-gray-400 text-sm mb-3 line-clamp-2">{food.description}</p>
// //                                     <div className="flex justify-between items-center">
// //                                         <span className="text-orange-500 font-bold text-xl">৳{food.price}</span>
// //                                         <button
// //                                             onClick={() => addToCart(food)}
// //                                             className="bg-orange-500 text-white px-4 py-2 rounded-xl hover:bg-orange-600 text-sm font-medium transition"
// //                                         >
// //                                             + Cart এ যোগ করো
// //                                         </button>
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                         ))}
// //                     </div>
// //                 </div>
// //             )}

// //             {/* Current Offers */}
// //             <OffersSection />

// //             {/* Features */}
// //             <div className="bg-orange-50 py-16 px-4">
// //                 <div className="max-w-6xl mx-auto">
// //                     <h2 className="text-2xl font-bold text-gray-800 text-center mb-10">কেন BanglaEats?</h2>
// //                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
// //                         <div className="bg-white rounded-2xl p-8 shadow">
// //                             <div className="text-5xl mb-4">⚡</div>
// //                             <h3 className="text-lg font-bold text-gray-800 mb-2">দ্রুত ডেলিভারি</h3>
// //                             <p className="text-gray-500">মাত্র ৩০ মিনিটে আপনার দরজায় পৌঁছে যাবে</p>
// //                         </div>
// //                         <div className="bg-white rounded-2xl p-8 shadow">
// //                             <div className="text-5xl mb-4">🍽️</div>
// //                             <h3 className="text-lg font-bold text-gray-800 mb-2">সেরা মান</h3>
// //                             <p className="text-gray-500">সেরা রেস্টুরেন্ট থেকে তাজা ও সুস্বাদু খাবার</p>
// //                         </div>
// //                         <div className="bg-white rounded-2xl p-8 shadow">
// //                             <div className="text-5xl mb-4">💳</div>
// //                             <h3 className="text-lg font-bold text-gray-800 mb-2">সহজ পেমেন্ট</h3>
// //                             <p className="text-gray-500">bKash, Card বা Cash on Delivery — যেকোনো উপায়ে</p>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>

// //             {/* Footer */}
// //             <footer className="bg-gray-800 text-gray-400 py-10 px-4 text-center">
// //                 <div className="text-2xl font-bold text-white mb-2">🍔 BanglaEats</div>
// //                 <p className="text-sm">Dhaka, Bangladesh | © 2026 BanglaEats. All rights reserved.</p>
// //             </footer>
// //         </div>
// //     )
// // }

// // export default Home

// import { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import { getFoods, getActiveCoupons } from '../services/api'
// import { useCart } from '../context/CartContext'

// /* ── Unsplash hero background image (food spread, free to use) ── */
// const HERO_BG = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1400&auto=format&fit=crop&q=85'

// /* ── Offers Section ── */
// const OffersSection = () => {
//     const [coupons, setCoupons] = useState([])

//     useEffect(() => {
//         getActiveCoupons().then(res => {
//             if (res.data.success) setCoupons(res.data.coupons)
//         })
//     }, [])

//     if (coupons.length === 0) return null

//     return (
//         <div className="px-4 pb-12 max-w-6xl mx-auto">
//             <h2 className="text-2xl font-bold text-gray-800 mb-6">🎟️ Current Offers</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {coupons.map(c => (
//                     <div
//                         key={c.code}
//                         className="relative overflow-hidden rounded-2xl p-6 flex items-center justify-between"
//                         style={{ background: '#FF5C00' }}
//                     >
//                         <div className="absolute top-0 right-0 w-28 h-28 rounded-full opacity-10 bg-white -mr-10 -mt-10 pointer-events-none" />
//                         <div className="absolute bottom-0 left-0 w-16 h-16 rounded-full opacity-10 bg-white -ml-6 -mb-6 pointer-events-none" />
//                         <div className="relative">
//                             <div className="text-3xl font-bold text-white">
//                                 {c.type === 'percent' ? `${c.discount}% OFF` : `৳${c.discount} OFF`}
//                             </div>
//                             <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.75)' }}>
//                                 {c.minOrder > 0 ? `সর্বনিম্ন ৳${c.minOrder} এর order এ` : 'যেকোনো order এ'}
//                             </p>
//                         </div>
//                         <div className="relative flex items-center gap-3">
//                             <div
//                                 className="text-white font-bold tracking-widest text-sm px-4 py-2 rounded-lg"
//                                 style={{ background: 'rgba(255,255,255,0.18)', border: '1.5px dashed rgba(255,255,255,0.5)' }}
//                             >
//                                 {c.code}
//                             </div>
//                             <button
//                                 onClick={() => { navigator.clipboard.writeText(c.code); alert(`"${c.code}" copied! 🎉`) }}
//                                 className="font-bold text-sm px-4 py-2 rounded-lg transition"
//                                 style={{ background: '#fff', color: '#FF5C00' }}
//                             >
//                                 Copy
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// /* ── How It Works Section ── */
// const HowItWorks = () => {
//     const steps = [
//         {
//             step: '01',
//             icon: '🍔',
//             title: 'খাবার বেছে নাও',
//             desc: 'Menu থেকে তোমার পছন্দের খাবার select করো এবং cart এ add করো।',
//         },
//         {
//             step: '02',
//             icon: '💳',
//             title: 'Payment করো',
//             desc: 'bKash, Card বা Cash on Delivery — যেকোনো সহজ উপায়ে payment করো।',
//         },
//         {
//             step: '03',
//             icon: '🛵',
//             title: 'ডেলিভারি পাও',
//             desc: 'মাত্র ৩০ মিনিটের মধ্যে গরম খাবার তোমার দরজায় পৌঁছে যাবে।',
//         },
//     ]

//     return (
//         <div className="py-16 px-4" style={{ background: '#fff' }}>
//             <div className="max-w-6xl mx-auto">
//                 <div className="text-center mb-12">
//                     <span
//                         className="inline-block text-sm font-medium px-4 py-1 rounded-full mb-3"
//                         style={{ background: '#FFF0E5', color: '#FF5C00' }}
//                     >
//                         মাত্র ৩টি ধাপ
//                     </span>
//                     <h2 className="text-3xl font-bold text-gray-800">কীভাবে কাজ করে?</h2>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
//                     {/* Connector line desktop */}
//                     <div
//                         className="hidden md:block absolute top-12 left-1/4 right-1/4 h-0.5"
//                         style={{ background: 'linear-gradient(to right, #FF5C00, #FFD166)' }}
//                     />

//                     {steps.map((s, i) => (
//                         <div key={i} className="flex flex-col items-center text-center relative">
//                             <div
//                                 className="w-24 h-24 rounded-full flex items-center justify-center mb-6 relative z-10"
//                                 style={{ background: '#FFF0E5', border: '3px solid #FF5C00' }}
//                             >
//                                 <span style={{ fontSize: 38 }}>{s.icon}</span>
//                                 <div
//                                     className="absolute -top-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
//                                     style={{ background: '#FF5C00' }}
//                                 >
//                                     {s.step}
//                                 </div>
//                             </div>
//                             <h3 className="text-lg font-bold text-gray-800 mb-2">{s.title}</h3>
//                             <p className="text-gray-400 text-sm leading-relaxed max-w-xs">{s.desc}</p>
//                             {i < steps.length - 1 && (
//                                 <div className="md:hidden text-2xl my-4" style={{ color: '#FF5C00' }}>↓</div>
//                             )}
//                         </div>
//                     ))}
//                 </div>

//                 <div className="text-center mt-12">
//                     <Link
//                         to="/menu"
//                         className="inline-block px-10 py-4 rounded-full font-bold text-lg text-white transition hover:opacity-90"
//                         style={{ background: '#FF5C00' }}
//                     >
//                         এখনই শুরু করো →
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     )
// }

// /* ── Main Home ── */
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
//             {/* ── Hero — full bleed background image ── */}
//             <div className="relative text-white overflow-hidden" style={{ minHeight: 580 }}>
//                 {/* Unsplash food background */}
//                 <img
//                     src={HERO_BG}
//                     alt=""
//                     aria-hidden="true"
//                     style={{
//                         position: 'absolute', inset: 0,
//                         width: '100%', height: '100%',
//                         objectFit: 'cover', objectPosition: 'center',
//                         zIndex: 0,
//                     }}
//                 />
//                 {/* Dark overlay — left heavy so text pops */}
//                 <div style={{
//                     position: 'absolute', inset: 0, zIndex: 1,
//                     background: 'linear-gradient(110deg, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.20) 100%)',
//                 }} />
//                 {/* Orange glow at bottom merges into wave */}
//                 <div style={{
//                     position: 'absolute', bottom: 0, left: 0, right: 0,
//                     height: 130, zIndex: 2,
//                     background: 'linear-gradient(to top, rgba(255,92,0,0.6) 0%, transparent 100%)',
//                 }} />

//                 {/* Content */}
//                 <div
//                     className="relative max-w-6xl mx-auto px-6 flex flex-col justify-center"
//                     style={{ zIndex: 3, minHeight: 580, paddingTop: 90, paddingBottom: 110 }}
//                 >
//                     {/* Badge */}
//                     <span
//                         className="inline-block text-sm font-medium px-4 py-1 rounded-full mb-6 self-start"
//                         style={{
//                             background: 'rgba(255,92,0,0.9)',
//                             border: '1px solid rgba(255,255,255,0.2)',
//                         }}
//                     >
//                         ⚡ ৩০ মিনিটে ডেলিভারি
//                     </span>

//                     {/* Headline */}
//                     <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: 10 }}>
//                         ক্ষুধা লাগলে
//                     </h1>

//                     {/* BanglaEats — gradient text, prominent */}
//                     <div style={{ marginBottom: 14 }}>
//                         <span style={{
//                             fontSize: 'clamp(2.8rem, 6vw, 5rem)',
//                             fontWeight: 900,
//                             letterSpacing: '-0.02em',
//                             background: 'linear-gradient(90deg, #FF5C00 0%, #FFD166 100%)',
//                             WebkitBackgroundClip: 'text',
//                             WebkitTextFillColor: 'transparent',
//                             backgroundClip: 'text',
//                             display: 'inline',
//                         }}>
//                             BanglaEats
//                         </span>
//                         <span style={{
//                             fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
//                             fontWeight: 800,
//                             marginLeft: 10,
//                             color: '#fff',
//                         }}>
//                             আছে!
//                         </span>
//                     </div>

//                     {/* Tagline */}
//                     <p style={{
//                         fontSize: 12,
//                         letterSpacing: '0.18em',
//                         textTransform: 'uppercase',
//                         color: '#FFD166',
//                         marginBottom: 20,
//                         fontWeight: 600,
//                         opacity: 0.9,
//                     }}>
//                         Dhaka's #1 Food Delivery Platform
//                     </p>

//                     <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.75)', maxWidth: 460, marginBottom: 36, lineHeight: 1.6 }}>
//                         Dhaka-তে সেরা রেস্টুরেন্ট থেকে তাজা খাবার, দ্রুত ডেলিভারি
//                     </p>

//                     <div className="flex gap-4 flex-wrap">
//                         <Link
//                             to="/menu"
//                             className="px-8 py-3 rounded-full font-bold text-lg transition"
//                             style={{
//                                 background: '#FF5C00',
//                                 color: '#fff',
//                                 boxShadow: '0 4px 24px rgba(255,92,0,0.5)',
//                             }}
//                         >
//                             এখনই Order করো 🍔
//                         </Link>
//                         <Link
//                             to="/orders"
//                             className="px-8 py-3 rounded-full font-bold text-lg transition"
//                             style={{
//                                 border: '2px solid rgba(255,255,255,0.45)',
//                                 color: '#fff',
//                                 background: 'rgba(255,255,255,0.08)',
//                             }}
//                         >
//                             My Orders
//                         </Link>
//                     </div>
//                 </div>

//                 {/* Wave */}
//                 <svg
//                     viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg"
//                     style={{ position: 'absolute', bottom: -1, left: 0, right: 0, zIndex: 4, display: 'block' }}
//                 >
//                     <path d="M0 60L1440 60L1440 30C1440 30 1080 0 720 0C360 0 0 30 0 30L0 60Z" fill="#FFF8F3" />
//                 </svg>
//             </div>

//             {/* ── Stats ── */}
//             <div style={{ background: '#FFF8F3', borderBottom: '0.5px solid #FFE0CC' }}>
//                 <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-3 divide-x divide-orange-100 text-center">
//                     {[
//                         { num: '৫০০+', label: 'খুশি Customer' },
//                         { num: '৩০', label: 'মিনিটে Delivery' },
//                         { num: '১০০+', label: 'Food Item' },
//                     ].map(s => (
//                         <div key={s.label}>
//                             <div className="text-3xl font-bold" style={{ color: '#FF5C00' }}>{s.num}</div>
//                             <div className="text-sm mt-1 text-gray-400">{s.label}</div>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* ── Categories ── */}

//             {/* ── Categories ── */}
//             <div className="max-w-6xl mx-auto px-4 py-12">
//                 <div className="flex items-center justify-between mb-7">
//                     <h2 className="text-2xl font-bold text-gray-800">Category বেছে নাও</h2>
//                     <Link to="/menu" className="text-sm font-medium hover:underline" style={{ color: '#FF5C00' }}>
//                         সব দেখো →
//                     </Link>
//                 </div>
//                 <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
//                     {[
//                         { name: 'Burger', icon: '🍔', count: '24 items' },
//                         { name: 'Pizza', icon: '🍕', count: '18 items' },
//                         { name: 'Biryani', icon: '🍛', count: '12 items' },
//                         { name: 'Chicken', icon: '🍗', count: '20 items' },
//                         { name: 'Dessert', icon: '🍰', count: '15 items' },
//                         { name: 'Drinks', icon: '🥤', count: '10 items' },
//                     ].map(cat => (
//                         <Link
//                             to="/menu"
//                             key={cat.name}
//                             className="group relative flex flex-col items-center rounded-2xl p-5 pb-4 transition hover:-translate-y-1 cursor-pointer overflow-hidden"
//                             style={{ border: '0.5px solid #f0e0d6', background: '#fff' }}
//                         >
//                             {/* hover bg tint */}
//                             <div
//                                 className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"
//                                 style={{ background: '#FFF5F0' }}
//                             />
//                             {/* icon box */}
//                             <div
//                                 className="relative z-10 flex items-center justify-center mb-3"
//                                 style={{
//                                     width: 56, height: 56,
//                                     borderRadius: 16,
//                                     background: '#FFF0E5',
//                                     fontSize: 26,
//                                 }}
//                             >
//                                 {cat.icon}
//                             </div>
//                             <span
//                                 className="relative z-10 text-sm font-semibold transition-colors group-hover:text-orange-500"
//                                 style={{ color: '#555' }}
//                             >
//                                 {cat.name}
//                             </span>
//                             <span className="relative z-10 text-xs mt-1" style={{ color: '#bbb' }}>
//                                 {cat.count}
//                             </span>
//                         </Link>
//                     ))}
//                 </div>
//             </div>
//             {/* ── How It Works ── */}
//             <HowItWorks />

//             {/* ── Featured Foods ── */}
//             {foods.length > 0 && (
//                 <div className="max-w-6xl mx-auto px-4 pb-12">
//                     <div className="flex justify-between items-center mb-6">
//                         <h2 className="text-2xl font-bold text-gray-800">🔥 Featured Foods</h2>
//                         <Link to="/menu" className="text-sm font-medium hover:underline" style={{ color: '#FF5C00' }}>
//                             সব দেখো →
//                         </Link>
//                     </div>
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                         {foods.map(food => (
//                             <div
//                                 key={food._id}
//                                 className="bg-white rounded-2xl overflow-hidden group transition hover:shadow-md"
//                                 style={{ border: '0.5px solid #f0e0d6' }}
//                             >
//                                 <div className="relative overflow-hidden">
//                                     <img
//                                         src={food.image}
//                                         alt={food.name}
//                                         className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
//                                     />
//                                     <span
//                                         className="absolute top-3 left-3 text-white text-xs font-bold px-3 py-1 rounded-full"
//                                         style={{ background: '#FF5C00' }}
//                                     >
//                                         {food.category}
//                                     </span>
//                                 </div>
//                                 <div className="p-4">
//                                     <h3 className="text-lg font-bold text-gray-800 mb-1">{food.name}</h3>
//                                     <p className="text-gray-400 text-sm mb-4 line-clamp-2">{food.description}</p>
//                                     <div className="flex justify-between items-center">
//                                         <span className="font-bold text-xl" style={{ color: '#FF5C00' }}>৳{food.price}</span>
//                                         <button
//                                             onClick={() => addToCart(food)}
//                                             className="text-white text-sm font-medium px-4 py-2 rounded-full transition hover:opacity-90"
//                                             style={{ background: '#FF5C00' }}
//                                         >
//                                             + Add to Cart
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             )}

//             {/* ── Coupons ── */}
//             <OffersSection />

//             {/* ── Why BanglaEats ── */}
//             <div style={{ background: '#FFF8F3' }} className="py-16 px-4">
//                 <div className="max-w-6xl mx-auto">
//                     {/* Header */}
//                     <div className="text-center mb-12">
//                         <span
//                             className="inline-block text-xs font-semibold px-4 py-1 rounded-full mb-3 uppercase tracking-widest"
//                             style={{ background: '#FFF0E5', color: '#FF5C00' }}
//                         >
//                             আমাদের সুবিধা
//                         </span>
//                         <h2 className="text-3xl font-bold text-gray-900 mb-2">কেন BanglaEats বেছে নেবে?</h2>
//                         <p className="text-gray-400 text-sm">Dhaka-তে সবচেয়ে ভালো food delivery experience আমরাই দিই</p>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
//                         {[
//                             {
//                                 icon: '⚡',
//                                 title: 'দ্রুত ডেলিভারি',
//                                 desc: 'মাত্র ৩০ মিনিটে আপনার দরজায় পৌঁছে যাবে — দেরি নেই, অপেক্ষা নেই।',
//                                 tag: '⏱ ৩০ min গ্যারান্টি',
//                                 accent: '#FF5C00',
//                                 iconBg: '#FFF0E5',
//                                 tagBg: '#FFF0E5',
//                                 tagColor: '#FF5C00',
//                             },
//                             {
//                                 icon: '🍽️',
//                                 title: 'সেরা মান',
//                                 desc: 'সেরা রেস্টুরেন্ট থেকে তাজা ও সুস্বাদু খাবার — প্রতিটি order এ quality নিশ্চিত।',
//                                 tag: '✓ Quality নিশ্চিত',
//                                 accent: '#1D9E75',
//                                 iconBg: '#E1F5EE',
//                                 tagBg: '#E1F5EE',
//                                 tagColor: '#0F6E56',
//                             },
//                             {
//                                 icon: '💳',
//                                 title: 'সহজ পেমেন্ট',
//                                 desc: 'bKash, Card বা Cash on Delivery — যেকোনো উপায়ে সহজে pay করো।',
//                                 tag: '🔒 Secure Payment',
//                                 accent: '#7F77DD',
//                                 iconBg: '#EEEDFE',
//                                 tagBg: '#EEEDFE',
//                                 tagColor: '#534AB7',
//                             },
//                         ].map(f => (
//                             <div
//                                 key={f.title}
//                                 className="bg-white rounded-3xl p-8 relative overflow-hidden text-left"
//                                 style={{ border: '0.5px solid #f0e0d6' }}
//                             >
//                                 {/* Top accent bar */}
//                                 <div
//                                     className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
//                                     style={{ background: f.accent }}
//                                 />
//                                 {/* Corner blob */}
//                                 <div
//                                     className="absolute bottom-0 right-0 w-20 h-20 rounded-full opacity-10 -mb-6 -mr-6"
//                                     style={{ background: f.accent }}
//                                 />
//                                 {/* Icon */}
//                                 <div
//                                     className="flex items-center justify-center mb-5"
//                                     style={{ width: 64, height: 64, borderRadius: 18, background: f.iconBg, fontSize: 30 }}
//                                 >
//                                     {f.icon}
//                                 </div>
//                                 <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
//                                 <p className="text-gray-400 text-sm leading-relaxed mb-5">{f.desc}</p>
//                                 {/* Tag */}
//                                 <span
//                                     className="inline-block text-xs font-semibold px-3 py-1 rounded-full"
//                                     style={{ background: f.tagBg, color: f.tagColor }}
//                                 >
//                                     {f.tag}
//                                 </span>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             {/* ── Footer ── */}
//             <footer style={{ background: '#111111', color: '#aaa' }}>
//                 {/* Main footer grid */}
//                 <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
//                     {/* Brand col */}
//                     <div className="md:col-span-2">
//                         <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
//                             <span style={{ fontSize: 28 }}>🍔</span>
//                             <span style={{
//                                 fontSize: 24,
//                                 fontWeight: 900,
//                                 background: 'linear-gradient(90deg, #FF5C00, #FFD166)',
//                                 WebkitBackgroundClip: 'text',
//                                 WebkitTextFillColor: 'transparent',
//                                 backgroundClip: 'text',
//                                 letterSpacing: '-0.02em',
//                             }}>BanglaEats</span>
//                         </div>
//                         <p style={{ fontSize: 14, lineHeight: 1.7, color: '#888', maxWidth: 300, marginBottom: 20 }}>
//                             Dhaka-তে সবচেয়ে দ্রুত ও সেরা food delivery platform। তাজা খাবার, সেরা রেস্টুরেন্ট, মাত্র ৩০ মিনিটে।
//                         </p>
//                         {/* Social icons */}
//                         <div style={{ display: 'flex', gap: 10 }}>
//                             {['f', 'in', 'ig'].map(s => (
//                                 <div key={s} style={{
//                                     width: 36, height: 36, borderRadius: 8,
//                                     background: '#222', border: '0.5px solid #333',
//                                     display: 'flex', alignItems: 'center', justifyContent: 'center',
//                                     fontSize: 12, color: '#666', fontWeight: 700, cursor: 'pointer',
//                                     textTransform: 'uppercase', letterSpacing: '0.05em',
//                                 }}>
//                                     {s}
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Quick links */}
//                     <div>
//                         <div style={{ fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 16, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
//                             Quick Links
//                         </div>
//                         {['Menu', 'My Orders', 'Cart', 'Offers & Coupons'].map(l => (
//                             <div key={l} style={{ marginBottom: 10 }}>
//                                 <span style={{ fontSize: 14, color: '#888', cursor: 'pointer' }}
//                                     onMouseEnter={e => e.target.style.color = '#FF5C00'}
//                                     onMouseLeave={e => e.target.style.color = '#888'}
//                                 >
//                                     {l}
//                                 </span>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Contact */}
//                     <div>
//                         <div style={{ fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 16, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
//                             Contact
//                         </div>
//                         {[
//                             { icon: '📍', text: 'Dhaka, Bangladesh' },
//                             { icon: '📞', text: '+880 1XXX-XXXXXX' },
//                             { icon: '✉️', text: 'hello@banglaeats.com' },
//                         ].map(c => (
//                             <div key={c.text} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 12 }}>
//                                 <span style={{ fontSize: 14, marginTop: 1 }}>{c.icon}</span>
//                                 <span style={{ fontSize: 13, color: '#777', lineHeight: 1.5 }}>{c.text}</span>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Bottom bar */}
//                 <div style={{ borderTop: '0.5px solid #222' }}>
//                     <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
//                         <p style={{ fontSize: 13, color: '#555' }}>
//                             © 2026 BanglaEats. All rights reserved.
//                         </p>
//                         <div style={{ display: 'flex', gap: 20 }}>
//                             {['Privacy Policy', 'Terms of Service', 'Refund Policy'].map(l => (
//                                 <span key={l} style={{ fontSize: 12, color: '#555', cursor: 'pointer' }}
//                                     onMouseEnter={e => e.target.style.color = '#FF5C00'}
//                                     onMouseLeave={e => e.target.style.color = '#555'}
//                                 >
//                                     {l}
//                                 </span>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </footer>
//         </div>
//     )
// }

// export default Home

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getFoods, getActiveCoupons } from '../services/api'
import { useCart } from '../context/CartContext'

const HERO_BG = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1400&auto=format&fit=crop&q=85'

/* ── Offers Section ── */
const OffersSection = () => {
    const [coupons, setCoupons] = useState([])

    useEffect(() => {
        getActiveCoupons().then(res => {
            if (res.data.success) setCoupons(res.data.coupons)
        })
    }, [])

    if (coupons.length === 0) return null

    return (
        <div className="px-4 pb-12 max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">🎟️ Current Offers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {coupons.map(c => (
                    <div key={c.code} className="relative overflow-hidden rounded-2xl p-6 flex items-center justify-between" style={{ background: '#FF5C00' }}>
                        <div className="absolute top-0 right-0 w-28 h-28 rounded-full opacity-10 bg-white -mr-10 -mt-10 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-16 h-16 rounded-full opacity-10 bg-white -ml-6 -mb-6 pointer-events-none" />
                        <div className="relative">
                            <div className="text-3xl font-bold text-white">
                                {c.type === 'percent' ? `${c.discount}% OFF` : `৳${c.discount} OFF`}
                            </div>
                            <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.75)' }}>
                                {c.minOrder > 0 ? `সর্বনিম্ন ৳${c.minOrder} এর order এ` : 'যেকোনো order এ'}
                            </p>
                        </div>
                        <div className="relative flex items-center gap-3">
                            <div className="text-white font-bold tracking-widest text-sm px-4 py-2 rounded-lg" style={{ background: 'rgba(255,255,255,0.18)', border: '1.5px dashed rgba(255,255,255,0.5)' }}>
                                {c.code}
                            </div>
                            <button
                                onClick={() => { navigator.clipboard.writeText(c.code); alert(`"${c.code}" copied! 🎉`) }}
                                className="font-bold text-sm px-4 py-2 rounded-lg transition"
                                style={{ background: '#fff', color: '#FF5C00' }}
                            >
                                Copy
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

/* ── Flash Deal Banner ── */
const FlashDealBanner = () => {
    const [time, setTime] = useState(5 * 3600 + 59 * 60 + 59)
    const [flipping, setFlipping] = useState({ h: false, m: false, s: false })
    const [voicePlayed, setVoicePlayed] = useState(false)

    const playVoice = () => {
        setVoicePlayed(true)
        window.speechSynthesis.cancel()
        const makeUtter = (text, pitch, rate) => {
            const utter = new SpeechSynthesisUtterance(text)
            utter.lang = 'en-US'
            utter.pitch = pitch
            utter.rate = rate
            utter.volume = 1
            return utter
        }
        const banglaPhonetic = makeUtter(
            'Khuda lagle BanglaEats e order koro! Ajker flash deal e trish percent chhad paccho!',
            1.95, 1.25
        )
        const englishLine = makeUtter(
            'Hey! Order now on BanglaEats and get thirty percent off! Limited time only, hurry up!',
            1.85, 1.35
        )
        banglaPhonetic.onend = () => window.speechSynthesis.speak(englishLine)
        window.speechSynthesis.speak(banglaPhonetic)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(prev => {
                const next = prev <= 0 ? 5 * 3600 + 59 * 60 + 59 : prev - 1
                const ph = Math.floor(prev / 3600)
                const pm = Math.floor((prev % 3600) / 60)
                const ps = prev % 60
                const nh = Math.floor(next / 3600)
                const nm = Math.floor((next % 3600) / 60)
                const ns = next % 60
                setFlipping({ h: ph !== nh, m: pm !== nm, s: ps !== ns })
                return next
            })
        }, 1000)

        // প্রথম click এ automatically voice play হবে
        const handleFirstClick = () => {
            playVoice()
            document.removeEventListener('click', handleFirstClick)
        }
        document.addEventListener('click', handleFirstClick)

        return () => {
            clearInterval(interval)
            document.removeEventListener('click', handleFirstClick)
        }
    }, [])

    const h = Math.floor(time / 3600)
    const m = Math.floor((time % 3600) / 60)
    const s = time % 60
    const pad = n => String(n).padStart(2, '0')

    const TimeBlock = ({ val, label, flip }) => (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{
                background: '#1e1e1e', border: '0.5px solid #333', borderRadius: 10,
                width: 56, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 26, fontWeight: 800, color: flip ? '#FF5C00' : '#fff', transition: 'color 0.15s',
            }}>
                {pad(val)}
            </div>
            <div style={{ fontSize: 10, color: '#555', marginTop: 5, letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}>
                {label}
            </div>
        </div>
    )

    return (
        <div style={{ background: '#111', position: 'relative', overflow: 'hidden' }}>
            <style>{`
                @keyframes be-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
                @keyframes be-bounce { from { transform: translateY(0) scale(1); } to { transform: translateY(-6px) scale(1.1); } }
                @keyframes be-pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.25; } }
                @keyframes be-glow { 0%,100% { box-shadow: 0 0 0 0 rgba(255,92,0,0); } 50% { box-shadow: 0 0 20px 6px rgba(255,92,0,0.4); } }
                @keyframes be-shine { 0% { left: -100%; } 60%,100% { left: 160%; } }
                .be-shine { position: absolute; top: 0; left: -100%; width: 60%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent); animation: be-shine 5s ease-in-out infinite; pointer-events: none; }
                .be-fire { display: inline-block; animation: be-bounce 0.7s ease-in-out infinite alternate; }
                .be-sep { font-size: 24px; font-weight: 800; color: #FF5C00; margin-bottom: 18px; animation: be-pulse 1s ease-in-out infinite; }
                .be-badge { background: #FF5C00; color: #fff; font-size: 28px; font-weight: 900; padding: 8px 20px; border-radius: 12px; animation: be-glow 2s ease-in-out infinite; }
                .be-cta { background: #fff; color: #111; font-size: 14px; font-weight: 700; padding: 12px 28px; border-radius: 99px; display: inline-block; transition: transform 0.15s, background 0.15s; text-decoration: none; }
                .be-cta:hover { background: #FFD166 !important; transform: scale(1.03); }
            `}</style>
            <div className="be-shine" />

            <div style={{ background: '#FF5C00', padding: '8px 0', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                <div style={{ display: 'inline-block', animation: 'be-marquee 18s linear infinite', fontSize: 12, fontWeight: 600, color: '#fff', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    {Array(2).fill('⚡ Flash Deal চলছে \u00a0•\u00a0 আজকেই Order করো \u00a0•\u00a0 ৩০ মিনিটে ডেলিভারি \u00a0•\u00a0 সীমিত সময়ের অফার \u00a0•\u00a0 এখনই সুযোগ নাও \u00a0•\u00a0 ').join('')}
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, padding: '28px 24px', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <span className="be-fire" style={{ fontSize: 36 }}>🔥</span>
                    <div>
                        <div style={{ fontSize: 11, fontWeight: 700, color: '#FF5C00', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 4 }}>⚡ Limited Time Offer</div>
                        <div style={{ fontSize: 22, fontWeight: 800, color: '#fff', lineHeight: 1.2 }}>আজকের Flash Deal!</div>
                        <div style={{ fontSize: 13, color: '#888', marginTop: 4 }}>যেকোনো order এ বিশাল ছাড় — সময় শেষ হওয়ার আগেই নাও</div>
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <TimeBlock val={h} label="ঘণ্টা" flip={flipping.h} />
                    <span className="be-sep">:</span>
                    <TimeBlock val={m} label="মিনিট" flip={flipping.m} />
                    <span className="be-sep">:</span>
                    <TimeBlock val={s} label="সেকেন্ড" flip={flipping.s} />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 10 }}>
                    <div className="be-badge">30% OFF</div>
                    <Link to="/menu" className="be-cta">এখনই Order করো →</Link>
                    <button
                        onClick={playVoice}
                        style={{
                            background: 'transparent', border: '1px solid rgba(255,255,255,0.2)',
                            color: '#aaa', fontSize: 12, padding: '6px 14px', borderRadius: 99,
                            cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6,
                        }}
                    >
                        🔊 {voicePlayed ? 'আবার শুনো' : 'Voice শুনো'}
                    </button>
                </div>
            </div>
        </div>
    )
}

/* ── How It Works ── */
const HowItWorks = () => {
    const steps = [
        { step: '01', icon: '🍔', title: 'খাবার বেছে নাও', desc: 'Menu থেকে তোমার পছন্দের খাবার select করো এবং cart এ add করো।' },
        { step: '02', icon: '💳', title: 'Payment করো', desc: 'bKash, Card বা Cash on Delivery — যেকোনো সহজ উপায়ে payment করো।' },
        { step: '03', icon: '🛵', title: 'ডেলিভারি পাও', desc: 'মাত্র ৩০ মিনিটের মধ্যে গরম খাবার তোমার দরজায় পৌঁছে যাবে।' },
    ]

    return (
        <div className="py-16 px-4" style={{ background: '#fff' }}>
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <span className="inline-block text-sm font-medium px-4 py-1 rounded-full mb-3" style={{ background: '#FFF0E5', color: '#FF5C00' }}>মাত্র ৩টি ধাপ</span>
                    <h2 className="text-3xl font-bold text-gray-800">কীভাবে কাজ করে?</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-0.5" style={{ background: 'linear-gradient(to right, #FF5C00, #FFD166)' }} />
                    {steps.map((s, i) => (
                        <div key={i} className="flex flex-col items-center text-center relative">
                            <div className="w-24 h-24 rounded-full flex items-center justify-center mb-6 relative z-10" style={{ background: '#FFF0E5', border: '3px solid #FF5C00' }}>
                                <span style={{ fontSize: 38 }}>{s.icon}</span>
                                <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: '#FF5C00' }}>
                                    {s.step}
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 mb-2">{s.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">{s.desc}</p>
                            {i < steps.length - 1 && <div className="md:hidden text-2xl my-4" style={{ color: '#FF5C00' }}>↓</div>}
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Link to="/menu" className="inline-block px-10 py-4 rounded-full font-bold text-lg text-white transition hover:opacity-90" style={{ background: '#FF5C00' }}>
                        এখনই শুরু করো →
                    </Link>
                </div>
            </div>
        </div>
    )
}

/* ── Main Home ── */
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
            {/* Hero */}
            <div className="relative text-white overflow-hidden" style={{ minHeight: 580 }}>
                <img src={HERO_BG} alt="" aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', zIndex: 0 }} />
                <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(110deg, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.20) 100%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 130, zIndex: 2, background: 'linear-gradient(to top, rgba(255,92,0,0.6) 0%, transparent 100%)' }} />

                <div className="relative max-w-6xl mx-auto px-6 flex flex-col justify-center" style={{ zIndex: 3, minHeight: 580, paddingTop: 90, paddingBottom: 110 }}>
                    <span className="inline-block text-sm font-medium px-4 py-1 rounded-full mb-6 self-start" style={{ background: 'rgba(255,92,0,0.9)', border: '1px solid rgba(255,255,255,0.2)' }}>
                        ⚡ ৩০ মিনিটে ডেলিভারি
                    </span>
                    <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: 10 }}>ক্ষুধা লাগলে</h1>
                    <div style={{ marginBottom: 14 }}>
                        <span style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: 900, letterSpacing: '-0.02em', background: 'linear-gradient(90deg, #FF5C00 0%, #FFD166 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', display: 'inline' }}>BanglaEats</span>
                        <span style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', fontWeight: 800, marginLeft: 10, color: '#fff' }}>আছে!</span>
                    </div>
                    <p style={{ fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#FFD166', marginBottom: 20, fontWeight: 600, opacity: 0.9 }}>Dhaka's #1 Food Delivery Platform</p>
                    <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.75)', maxWidth: 460, marginBottom: 36, lineHeight: 1.6 }}>Dhaka-তে সেরা রেস্টুরেন্ট থেকে তাজা খাবার, দ্রুত ডেলিভারি</p>
                    <div className="flex gap-4 flex-wrap">
                        <Link to="/menu" className="px-8 py-3 rounded-full font-bold text-lg transition" style={{ background: '#FF5C00', color: '#fff', boxShadow: '0 4px 24px rgba(255,92,0,0.5)' }}>এখনই Order করো 🍔</Link>
                        <Link to="/orders" className="px-8 py-3 rounded-full font-bold text-lg transition" style={{ border: '2px solid rgba(255,255,255,0.45)', color: '#fff', background: 'rgba(255,255,255,0.08)' }}>My Orders</Link>
                    </div>
                </div>

                <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', bottom: -1, left: 0, right: 0, zIndex: 4, display: 'block' }}>
                    <path d="M0 60L1440 60L1440 30C1440 30 1080 0 720 0C360 0 0 30 0 30L0 60Z" fill="#FFF8F3" />
                </svg>
            </div>

            {/* Stats */}
            <div style={{ background: '#FFF8F3', borderBottom: '0.5px solid #FFE0CC' }}>
                <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-3 divide-x divide-orange-100 text-center">
                    {[{ num: '৫০০+', label: 'খুশি Customer' }, { num: '৩০', label: 'মিনিটে Delivery' }, { num: '১০০+', label: 'Food Item' }].map(s => (
                        <div key={s.label}>
                            <div className="text-3xl font-bold" style={{ color: '#FF5C00' }}>{s.num}</div>
                            <div className="text-sm mt-1 text-gray-400">{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Categories */}
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="flex items-center justify-between mb-7">
                    <h2 className="text-2xl font-bold text-gray-800">Category বেছে নাও</h2>
                    <Link to="/menu" className="text-sm font-medium hover:underline" style={{ color: '#FF5C00' }}>সব দেখো →</Link>
                </div>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                    {[
                        { name: 'Burger', icon: '🍔', count: '24 items' },
                        { name: 'Pizza', icon: '🍕', count: '18 items' },
                        { name: 'Biryani', icon: '🍛', count: '12 items' },
                        { name: 'Chicken', icon: '🍗', count: '20 items' },
                        { name: 'Dessert', icon: '🍰', count: '15 items' },
                        { name: 'Drinks', icon: '🥤', count: '10 items' },
                    ].map(cat => (
                        <Link to="/menu" key={cat.name} className="group relative flex flex-col items-center rounded-2xl p-5 pb-4 transition hover:-translate-y-1 cursor-pointer overflow-hidden" style={{ border: '0.5px solid #f0e0d6', background: '#fff' }}>
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" style={{ background: '#FFF5F0' }} />
                            <div className="relative z-10 flex items-center justify-center mb-3" style={{ width: 56, height: 56, borderRadius: 16, background: '#FFF0E5', fontSize: 26 }}>{cat.icon}</div>
                            <span className="relative z-10 text-sm font-semibold transition-colors group-hover:text-orange-500" style={{ color: '#555' }}>{cat.name}</span>
                            <span className="relative z-10 text-xs mt-1" style={{ color: '#bbb' }}>{cat.count}</span>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Flash Deal Banner */}
            <FlashDealBanner />

            {/* How It Works */}
            <HowItWorks />

            {/* Featured Foods */}
            {foods.length > 0 && (
                <div className="max-w-6xl mx-auto px-4 pb-12">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">🔥 Featured Foods</h2>
                        <Link to="/menu" className="text-sm font-medium hover:underline" style={{ color: '#FF5C00' }}>সব দেখো →</Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {foods.map(food => (
                            <div key={food._id} className="bg-white rounded-2xl overflow-hidden group transition hover:shadow-md" style={{ border: '0.5px solid #f0e0d6' }}>
                                <div className="relative overflow-hidden">
                                    <img src={food.image} alt={food.name} className="w-full h-48 object-cover group-hover:scale-105 transition duration-300" />
                                    <span className="absolute top-3 left-3 text-white text-xs font-bold px-3 py-1 rounded-full" style={{ background: '#FF5C00' }}>{food.category}</span>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-gray-800 mb-1">{food.name}</h3>
                                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{food.description}</p>
                                    <div className="flex justify-between items-center">
                                        <span className="font-bold text-xl" style={{ color: '#FF5C00' }}>৳{food.price}</span>
                                        <button onClick={() => addToCart(food)} className="text-white text-sm font-medium px-4 py-2 rounded-full transition hover:opacity-90" style={{ background: '#FF5C00' }}>+ Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Coupons */}
            <OffersSection />

            {/* Why BanglaEats */}
            <div style={{ background: '#FFF8F3' }} className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="inline-block text-xs font-semibold px-4 py-1 rounded-full mb-3 uppercase tracking-widest" style={{ background: '#FFF0E5', color: '#FF5C00' }}>আমাদের সুবিধা</span>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">কেন BanglaEats বেছে নেবে?</h2>
                        <p className="text-gray-400 text-sm">Dhaka-তে সবচেয়ে ভালো food delivery experience আমরাই দিই</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {[
                            { icon: '⚡', title: 'দ্রুত ডেলিভারি', desc: 'মাত্র ৩০ মিনিটে আপনার দরজায় পৌঁছে যাবে — দেরি নেই, অপেক্ষা নেই।', tag: '⏱ ৩০ min গ্যারান্টি', accent: '#FF5C00', iconBg: '#FFF0E5', tagBg: '#FFF0E5', tagColor: '#FF5C00' },
                            { icon: '🍽️', title: 'সেরা মান', desc: 'সেরা রেস্টুরেন্ট থেকে তাজা ও সুস্বাদু খাবার — প্রতিটি order এ quality নিশ্চিত।', tag: '✓ Quality নিশ্চিত', accent: '#1D9E75', iconBg: '#E1F5EE', tagBg: '#E1F5EE', tagColor: '#0F6E56' },
                            { icon: '💳', title: 'সহজ পেমেন্ট', desc: 'bKash, Card বা Cash on Delivery — যেকোনো উপায়ে সহজে pay করো।', tag: '🔒 Secure Payment', accent: '#7F77DD', iconBg: '#EEEDFE', tagBg: '#EEEDFE', tagColor: '#534AB7' },
                        ].map(f => (
                            <div key={f.title} className="bg-white rounded-3xl p-8 relative overflow-hidden text-left" style={{ border: '0.5px solid #f0e0d6' }}>
                                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl" style={{ background: f.accent }} />
                                <div className="absolute bottom-0 right-0 w-20 h-20 rounded-full opacity-10 -mb-6 -mr-6" style={{ background: f.accent }} />
                                <div className="flex items-center justify-center mb-5" style={{ width: 64, height: 64, borderRadius: 18, background: f.iconBg, fontSize: 30 }}>{f.icon}</div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-5">{f.desc}</p>
                                <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full" style={{ background: f.tagBg, color: f.tagColor }}>{f.tag}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer style={{ background: '#111111', color: '#aaa' }}>
                <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
                    <div className="md:col-span-2">
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                            <span style={{ fontSize: 28 }}>🍔</span>
                            <span style={{ fontSize: 24, fontWeight: 900, background: 'linear-gradient(90deg, #FF5C00, #FFD166)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', letterSpacing: '-0.02em' }}>BanglaEats</span>
                        </div>
                        <p style={{ fontSize: 14, lineHeight: 1.7, color: '#888', maxWidth: 300, marginBottom: 20 }}>Dhaka-তে সবচেয়ে দ্রুত ও সেরা food delivery platform। তাজা খাবার, সেরা রেস্টুরেন্ট, মাত্র ৩০ মিনিটে।</p>
                        <div style={{ display: 'flex', gap: 10 }}>
                            {['f', 'in', 'ig'].map(s => (
                                <div key={s} style={{ width: 36, height: 36, borderRadius: 8, background: '#222', border: '0.5px solid #333', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, color: '#666', fontWeight: 700, cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s}</div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div style={{ fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 16, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Quick Links</div>
                        {['Menu', 'My Orders', 'Cart', 'Offers & Coupons'].map(l => (
                            <div key={l} style={{ marginBottom: 10 }}>
                                <span style={{ fontSize: 14, color: '#888', cursor: 'pointer' }} onMouseEnter={e => e.target.style.color = '#FF5C00'} onMouseLeave={e => e.target.style.color = '#888'}>{l}</span>
                            </div>
                        ))}
                    </div>
                    <div>
                        <div style={{ fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 16, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Contact</div>
                        {[{ icon: '📍', text: 'Dhaka, Bangladesh' }, { icon: '📞', text: '+880 1XXX-XXXXXX' }, { icon: '✉️', text: 'hello@banglaeats.com' }].map(c => (
                            <div key={c.text} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 12 }}>
                                <span style={{ fontSize: 14, marginTop: 1 }}>{c.icon}</span>
                                <span style={{ fontSize: 13, color: '#777', lineHeight: 1.5 }}>{c.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div style={{ borderTop: '0.5px solid #222' }}>
                    <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
                        <p style={{ fontSize: 13, color: '#555' }}>© 2026 BanglaEats. All rights reserved.</p>
                        <div style={{ display: 'flex', gap: 20 }}>
                            {['Privacy Policy', 'Terms of Service', 'Refund Policy'].map(l => (
                                <span key={l} style={{ fontSize: 12, color: '#555', cursor: 'pointer' }} onMouseEnter={e => e.target.style.color = '#FF5C00'} onMouseLeave={e => e.target.style.color = '#555'}>{l}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Home