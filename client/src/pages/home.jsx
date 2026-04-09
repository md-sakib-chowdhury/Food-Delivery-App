

// import { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import { getFoods } from '../services/api'
// import { useCart } from '../context/CartContext'

// const Home = () => {
//     const [foods, setFoods] = useState([])
//     const [addedId, setAddedId] = useState(null)
//     const { addToCart } = useCart()

//     useEffect(() => {
//         getFoods().then(res => {
//             if (res.data.success) setFoods(res.data.foods.slice(0, 6))
//         })
//     }, [])

//     const handleAdd = (food) => {
//         addToCart(food)
//         setAddedId(food._id)
//         setTimeout(() => setAddedId(null), 1200)
//     }

//     return (
//         <div style={{ fontFamily: "'Sora', 'Hind Siliguri', sans-serif" }}>
//             <style>{`
//                 @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Hind+Siliguri:wght@400;500;600&display=swap');

//                 .hero-bg {
//                     background: linear-gradient(135deg, #ff6b00 0%, #ff8c00 40%, #ffb347 100%);
//                     position: relative;
//                     overflow: hidden;
//                 }
//                 .hero-bg::before {
//                     content: '';
//                     position: absolute;
//                     top: -80px; right: -80px;
//                     width: 400px; height: 400px;
//                     background: rgba(255,255,255,0.08);
//                     border-radius: 50%;
//                 }
//                 .hero-bg::after {
//                     content: '';
//                     position: absolute;
//                     bottom: -60px; left: -60px;
//                     width: 300px; height: 300px;
//                     background: rgba(255,255,255,0.06);
//                     border-radius: 50%;
//                 }
//                 .blob {
//                     position: absolute;
//                     top: 20px; right: 10%;
//                     width: 220px; height: 220px;
//                     background: rgba(255,255,255,0.1);
//                     border-radius: 60% 40% 70% 30% / 50% 60% 40% 50%;
//                     animation: blobAnim 6s ease-in-out infinite;
//                 }
//                 @keyframes blobAnim {
//                     0%, 100% { border-radius: 60% 40% 70% 30% / 50% 60% 40% 50%; }
//                     50% { border-radius: 40% 60% 30% 70% / 60% 40% 60% 40%; }
//                 }
//                 .food-emoji {
//                     animation: floatAnim 3s ease-in-out infinite;
//                     display: inline-block;
//                 }
//                 @keyframes floatAnim {
//                     0%, 100% { transform: translateY(0px) rotate(-3deg); }
//                     50% { transform: translateY(-16px) rotate(3deg); }
//                 }
//                 .stat-card {
//                     background: rgba(255,255,255,0.15);
//                     backdrop-filter: blur(10px);
//                     border: 1px solid rgba(255,255,255,0.25);
//                     border-radius: 20px;
//                     padding: 20px;
//                     text-align: center;
//                     color: white;
//                     transition: transform 0.2s;
//                 }
//                 .stat-card:hover { transform: translateY(-4px); }
//                 .cat-card {
//                     background: white;
//                     border-radius: 20px;
//                     padding: 28px 16px;
//                     text-align: center;
//                     box-shadow: 0 4px 20px rgba(0,0,0,0.07);
//                     transition: all 0.25s cubic-bezier(.4,0,.2,1);
//                     cursor: pointer;
//                     border: 2px solid transparent;
//                     text-decoration: none;
//                     display: flex;
//                     flex-direction: column;
//                     align-items: center;
//                 }
//                 .cat-card:hover {
//                     border-color: #ff6b00;
//                     transform: translateY(-6px);
//                     box-shadow: 0 12px 32px rgba(255,107,0,0.15);
//                 }
//                 .cat-card .cat-icon {
//                     font-size: 2.8rem;
//                     margin-bottom: 10px;
//                     transition: transform 0.3s;
//                 }
//                 .cat-card:hover .cat-icon { transform: scale(1.2) rotate(-5deg); }
//                 .food-card {
//                     background: white;
//                     border-radius: 24px;
//                     overflow: hidden;
//                     box-shadow: 0 4px 20px rgba(0,0,0,0.07);
//                     transition: all 0.3s cubic-bezier(.4,0,.2,1);
//                 }
//                 .food-card:hover {
//                     transform: translateY(-8px);
//                     box-shadow: 0 20px 48px rgba(255,107,0,0.15);
//                 }
//                 .food-card img {
//                     transition: transform 0.4s ease;
//                 }
//                 .food-card:hover img { transform: scale(1.07); }
//                 .add-btn {
//                     background: #ff6b00;
//                     color: white;
//                     border: none;
//                     padding: 10px 20px;
//                     border-radius: 14px;
//                     font-weight: 600;
//                     font-size: 0.875rem;
//                     cursor: pointer;
//                     transition: all 0.2s;
//                 }
//                 .add-btn:hover { background: #e55a00; transform: scale(1.05); }
//                 .add-btn.added { background: #22c55e; }
//                 .feature-card {
//                     background: white;
//                     border-radius: 24px;
//                     padding: 36px 28px;
//                     box-shadow: 0 4px 24px rgba(0,0,0,0.06);
//                     transition: transform 0.25s;
//                     position: relative;
//                     overflow: hidden;
//                 }
//                 .feature-card::before {
//                     content: '';
//                     position: absolute;
//                     top: 0; left: 0; right: 0;
//                     height: 4px;
//                     background: linear-gradient(90deg, #ff6b00, #ffb347);
//                 }
//                 .feature-card:hover { transform: translateY(-6px); }
//                 .section-title {
//                     font-size: 1.75rem;
//                     font-weight: 800;
//                     color: #1a1a2e;
//                     margin-bottom: 8px;
//                 }
//                 .section-sub {
//                     color: #6b7280;
//                     margin-bottom: 32px;
//                     font-size: 0.95rem;
//                 }
//                 .badge {
//                     background: linear-gradient(135deg, #fff7ed, #ffedd5);
//                     color: #ff6b00;
//                     font-size: 0.75rem;
//                     font-weight: 700;
//                     padding: 5px 14px;
//                     border-radius: 100px;
//                     border: 1px solid #fed7aa;
//                     display: inline-block;
//                     margin-bottom: 16px;
//                     letter-spacing: 0.5px;
//                     text-transform: uppercase;
//                 }
//                 .wave-divider svg { display: block; }
//             `}</style>

//             {/* ── HERO ── */}
//             <div className="hero-bg" style={{ minHeight: '560px', display: 'flex', alignItems: 'center' }}>
//                 <div className="blob" />
//                 <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '60px 24px', display: 'flex', alignItems: 'center', gap: '48px', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
//                     <div style={{ flex: 1, minWidth: '280px' }}>
//                         <div className="badge">🚀 ৩০ মিনিটে ডেলিভারি</div>
//                         <h1 style={{ fontSize: 'clamp(2.2rem,5vw,3.4rem)', fontWeight: 800, color: 'white', lineHeight: 1.15, marginBottom: '20px' }}>
//                             ক্ষুধা লাগলে<br />
//                             <span style={{ color: '#fff176', textShadow: '0 2px 12px rgba(0,0,0,0.15)' }}>BanglaEats</span> আছে!
//                         </h1>
//                         <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: '1.1rem', marginBottom: '32px', lineHeight: 1.7 }}>
//                             Dhaka-র সেরা রেস্টুরেন্ট থেকে তাজা খাবার,<br />দ্রুত ও নির্ভরযোগ্য ডেলিভারি
//                         </p>
//                         <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
//                             <Link to="/menu" style={{
//                                 background: 'white', color: '#ff6b00',
//                                 padding: '14px 32px', borderRadius: '100px',
//                                 fontWeight: 700, fontSize: '1rem',
//                                 textDecoration: 'none', boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
//                                 transition: 'transform 0.2s',
//                                 display: 'inline-block'
//                             }}
//                                 onMouseEnter={e => e.target.style.transform = 'scale(1.04)'}
//                                 onMouseLeave={e => e.target.style.transform = 'scale(1)'}
//                             >
//                                 এখনই Order করো 🍔
//                             </Link>
//                             <Link to="/orders" style={{
//                                 background: 'rgba(255,255,255,0.15)',
//                                 backdropFilter: 'blur(10px)',
//                                 border: '2px solid rgba(255,255,255,0.5)',
//                                 color: 'white',
//                                 padding: '14px 28px', borderRadius: '100px',
//                                 fontWeight: 600, fontSize: '1rem',
//                                 textDecoration: 'none', transition: 'all 0.2s',
//                                 display: 'inline-block'
//                             }}>
//                                 My Orders →
//                             </Link>
//                         </div>
//                     </div>
//                     <div style={{ flex: '0 0 auto', textAlign: 'center' }}>
//                         <span className="food-emoji" style={{ fontSize: '9rem', filter: 'drop-shadow(0 16px 32px rgba(0,0,0,0.2))' }}>🍔</span>
//                     </div>
//                 </div>

//                 {/* Stats bar */}
//                 {/* <div style={{
//                     position: 'absolute', bottom: '24px', left: '50%', transform: 'translateX(-50%)',
//                     display: 'flex', gap: '16px', zIndex: 2, flexWrap: 'wrap', justifyContent: 'center'
//                 }}>
//                     {[
//                         { val: '৫০০+', label: 'খুশি Customer', icon: '😊' },
//                         { val: '৩০ মিনিট', label: 'দ্রুত Delivery', icon: '⚡' },
//                         { val: '১০০+', label: 'Food Item', icon: '🍽️' },
//                     ].map(s => (
//                         <div key={s.val} className="stat-card" style={{ minWidth: '130px' }}>
//                             <div style={{ fontSize: '1.5rem', marginBottom: '4px' }}>{s.icon}</div>
//                             <div style={{ fontSize: '1.3rem', fontWeight: 800 }}>{s.val}</div>
//                             <div style={{ fontSize: '0.78rem', opacity: 0.85 }}>{s.label}</div>
//                         </div>
//                     ))}
//                 </div> */}

//                 {/* Wave */}
//                 <div className="wave-divider" style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
//                     <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M0 80L1440 80L1440 40C1200 10 960 0 720 0C480 0 240 20 0 40L0 80Z" fill="#f9fafb" />
//                     </svg>
//                 </div>
//             </div>

//             {/* ── CATEGORIES ── */}
//             <div style={{ background: '#f9fafb', padding: '80px 24px 60px' }}>
//                 <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
//                     <div style={{ textAlign: 'center', marginBottom: '40px' }}>
//                         <div className="badge">🍽️ Category</div>
//                         <div className="section-title">কী খেতে চাও আজ?</div>
//                         <p className="section-sub">তোমার পছন্দের category বেছে নাও</p>
//                     </div>
//                     <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '16px' }}>
//                         {[
//                             { name: 'Burger', icon: '🍔', color: '#fff7ed' },
//                             { name: 'Pizza', icon: '🍕', color: '#fef2f2' },
//                             { name: 'Biryani', icon: '🍛', color: '#fefce8' },
//                             { name: 'Chicken', icon: '🍗', color: '#f0fdf4' },
//                             { name: 'Dessert', icon: '🍰', color: '#fdf4ff' },
//                         ].map(cat => (
//                             <Link to="/menu" key={cat.name} className="cat-card" style={{ background: cat.color }}>
//                                 <div className="cat-icon">{cat.icon}</div>
//                                 <span style={{ fontWeight: 700, color: '#374151', fontSize: '0.95rem' }}>{cat.name}</span>
//                             </Link>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             {/* ── FEATURED FOODS ── */}
//             {foods.length > 0 && (
//                 <div style={{ background: 'white', padding: '60px 24px' }}>
//                     <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
//                         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '36px', flexWrap: 'wrap', gap: '12px' }}>
//                             <div>
//                                 <div className="badge">🔥 Hot Picks</div>
//                                 <div className="section-title">Featured Foods</div>
//                             </div>
//                             <Link to="/menu" style={{ color: '#ff6b00', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
//                                 সব দেখো <span style={{ fontSize: '1.2rem' }}>→</span>
//                             </Link>
//                         </div>
//                         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
//                             {foods.map(food => (
//                                 <div key={food._id} className="food-card">
//                                     <div style={{ position: 'relative', overflow: 'hidden', height: '200px' }}>
//                                         <img src={food.image} alt={food.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
//                                         <span style={{
//                                             position: 'absolute', top: '12px', left: '12px',
//                                             background: '#ff6b00', color: 'white',
//                                             fontSize: '0.72rem', fontWeight: 700,
//                                             padding: '4px 12px', borderRadius: '100px',
//                                             letterSpacing: '0.5px'
//                                         }}>{food.category}</span>
//                                     </div>
//                                     <div style={{ padding: '20px' }}>
//                                         <h3 style={{ fontWeight: 700, fontSize: '1.05rem', color: '#1a1a2e', marginBottom: '6px' }}>{food.name}</h3>
//                                         <p style={{ color: '#9ca3af', fontSize: '0.85rem', marginBottom: '16px', lineHeight: 1.6, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
//                                             {food.description}
//                                         </p>
//                                         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                                             <span style={{ fontSize: '1.3rem', fontWeight: 800, color: '#ff6b00' }}>৳{food.price}</span>
//                                             <button
//                                                 className={`add-btn ${addedId === food._id ? 'added' : ''}`}
//                                                 onClick={() => handleAdd(food)}
//                                             >
//                                                 {addedId === food._id ? '✅ Added!' : '+ Cart এ যোগ করো'}
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             )}

//             {/* ── WHY BANGLAEATS ── */}
//             <div style={{ background: '#fff7ed', padding: '80px 24px' }}>
//                 <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
//                     <div style={{ textAlign: 'center', marginBottom: '48px' }}>
//                         <div className="badge">💡 কেন আমরা</div>
//                         <div className="section-title">কেন BanglaEats?</div>
//                         <p className="section-sub">Dhaka-র সেরা food delivery experience</p>
//                     </div>
//                     <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
//                         {[
//                             { icon: '⚡', title: 'দ্রুত ডেলিভারি', desc: 'মাত্র ৩০ মিনিটে তোমার দরজায়। রাস্তা যতই জ্যাম থাকুক!', color: '#fef9c3' },
//                             { icon: '🍽️', title: 'সেরা মান', desc: 'Dhaka-র সেরা রেস্টুরেন্ট থেকে তাজা ও সুস্বাদু খাবার।', color: '#dcfce7' },
//                             { icon: '💳', title: 'সহজ পেমেন্ট', desc: 'bKash, Card বা Cash on Delivery — তোমার মতো করে।', color: '#dbeafe' },
//                             { icon: '🎟️', title: 'Special Offers', desc: 'নিয়মিত coupon ও discount পাও। বেশি খাও, কম খরচ করো!', color: '#fce7f3' },
//                         ].map(f => (
//                             <div key={f.title} className="feature-card">
//                                 <div style={{ width: '60px', height: '60px', background: f.color, borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', marginBottom: '20px' }}>
//                                     {f.icon}
//                                 </div>
//                                 <h3 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#1a1a2e', marginBottom: '10px' }}>{f.title}</h3>
//                                 <p style={{ color: '#6b7280', lineHeight: 1.7, fontSize: '0.9rem' }}>{f.desc}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             {/* ── CTA BANNER ── */}
//             <div style={{
//                 background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
//                 padding: '72px 24px',
//                 textAlign: 'center',
//                 position: 'relative',
//                 overflow: 'hidden'
//             }}>
//                 <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '280px', height: '280px', background: 'rgba(255,107,0,0.1)', borderRadius: '50%' }} />
//                 <div style={{ position: 'absolute', bottom: '-40px', left: '-40px', width: '200px', height: '200px', background: 'rgba(255,107,0,0.08)', borderRadius: '50%' }} />
//                 <div style={{ position: 'relative', zIndex: 1 }}>
//                     <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🍔🍕🍛🍗🍰</div>
//                     <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 800, color: 'white', marginBottom: '12px' }}>
//                         এখনই Order করো!
//                     </h2>
//                     <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '32px', fontSize: '1.05rem' }}>
//                         প্রথম order এ special discount পাও
//                     </p>
//                     <Link to="/menu" style={{
//                         background: 'linear-gradient(135deg, #ff6b00, #ff8c00)',
//                         color: 'white',
//                         padding: '16px 40px',
//                         borderRadius: '100px',
//                         fontWeight: 700,
//                         fontSize: '1.05rem',
//                         textDecoration: 'none',
//                         boxShadow: '0 8px 24px rgba(255,107,0,0.4)',
//                         display: 'inline-block',
//                         transition: 'transform 0.2s'
//                     }}
//                         onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
//                         onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
//                     >
//                         Menu দেখো →
//                     </Link>
//                 </div>
//             </div>

//             {/* ── FOOTER ── */}
//             <footer style={{ background: '#0f0f1a', padding: '48px 24px 32px', color: 'rgba(255,255,255,0.5)' }}>
//                 <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
//                     <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '32px', marginBottom: '36px' }}>
//                         <div>
//                             <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'white', marginBottom: '10px' }}>🍔 BanglaEats</div>
//                             <p style={{ fontSize: '0.88rem', lineHeight: 1.7, maxWidth: '240px' }}>
//                                 Dhaka-র সেরা food delivery platform। তাজা খাবার, দ্রুত ডেলিভারি।
//                             </p>
//                         </div>
//                         <div>
//                             <div style={{ color: 'white', fontWeight: 700, marginBottom: '14px', fontSize: '0.9rem', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Quick Links</div>
//                             {['Home', 'Menu', 'My Orders'].map(l => (
//                                 <div key={l} style={{ marginBottom: '8px' }}>
//                                     <Link to={l === 'Home' ? '/' : l === 'Menu' ? '/menu' : '/orders'}
//                                         style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}
//                                         onMouseEnter={e => e.target.style.color = '#ff6b00'}
//                                         onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.5)'}
//                                     >{l}</Link>
//                                 </div>
//                             ))}
//                         </div>
//                         <div>
//                             <div style={{ color: 'white', fontWeight: 700, marginBottom: '14px', fontSize: '0.9rem', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Payment</div>
//                             <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
//                                 {['💵 COD', '📱 bKash', '💳 Card'].map(p => (
//                                     <span key={p} style={{ background: 'rgba(255,255,255,0.08)', padding: '6px 14px', borderRadius: '8px', fontSize: '0.82rem', color: 'rgba(255,255,255,0.7)' }}>{p}</span>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                     <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '24px', textAlign: 'center', fontSize: '0.82rem' }}>
//                         © 2026 BanglaEats · Dhaka, Bangladesh · সব অধিকার সংরক্ষিত
//                     </div>
//                 </div>
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
                .cat-card {
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
                .stat-item-hover {
                    transition: transform 0.2s;
                }
                .stat-item-hover:hover { transform: translateY(-3px); }
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
            <div className="hero-bg" style={{ minHeight: '520px', display: 'flex', flexDirection: 'column' }}>
                <div className="blob" />

                {/* Hero content */}
                <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '60px 24px 48px', display: 'flex', alignItems: 'center', gap: '48px', flexWrap: 'wrap', position: 'relative', zIndex: 1, width: '100%' }}>
                    <div style={{ flex: 1, minWidth: '280px' }}>
                        <div style={{
                            background: 'rgba(255,255,255,0.18)',
                            border: '1px solid rgba(255,255,255,0.35)',
                            color: '#fff',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            padding: '5px 14px',
                            borderRadius: '100px',
                            display: 'inline-block',
                            marginBottom: '14px',
                            letterSpacing: '0.6px',
                            textTransform: 'uppercase',
                        }}>🚀 ৩০ মিনিটে ডেলিভারি</div>
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
                                display: 'inline-block', transition: 'transform 0.2s',
                            }}
                                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
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
                                display: 'inline-block',
                            }}>
                                My Orders →
                            </Link>
                        </div>
                    </div>
                    <div style={{ flex: '0 0 auto', textAlign: 'center' }}>
                        <span className="food-emoji" style={{ fontSize: '9rem', filter: 'drop-shadow(0 16px 32px rgba(0,0,0,0.2))' }}>🍔</span>
                    </div>
                </div>

                {/* Wave */}
                <div className="wave-divider" style={{ position: 'relative', marginTop: 'auto' }}>
                    <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 80L1440 80L1440 40C1200 10 960 0 720 0C480 0 240 20 0 40L0 80Z" fill="#f9fafb" />
                    </svg>
                </div>
            </div>

            {/* ── STATS ── */}
            <div style={{ background: '#f9fafb', padding: '0 24px' }}>
                <div style={{
                    maxWidth: '1100px',
                    margin: '-52px auto 0',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 16px 48px rgba(255,107,0,0.14)',
                    position: 'relative',
                    zIndex: 10,
                }}>
                    {[
                        { val: '৫০০+', label: 'খুশি Customer', icon: '😊' },
                        { val: '৩০ মিনিট', label: 'দ্রুত Delivery', icon: '⚡' },
                        { val: '১০০+', label: 'Food Item', icon: '🍽️' },
                        { val: '৪.৯★', label: 'Customer Rating', icon: '⭐' },
                    ].map((s, i) => (
                        <div key={s.val} className="stat-item-hover" style={{
                            background: '#fff',
                            padding: '24px 16px',
                            textAlign: 'center',
                            borderRight: i < 3 ? '1px solid #ffe4c4' : 'none',
                        }}>
                            <div style={{ fontSize: '22px', marginBottom: '6px' }}>{s.icon}</div>
                            <div style={{ fontSize: '1.45rem', fontWeight: 800, color: '#ff6b00', lineHeight: 1 }}>{s.val}</div>
                            <div style={{ fontSize: '0.72rem', color: '#b36b30', marginTop: '6px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.4px' }}>{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── CATEGORIES ── */}
            <div style={{ background: '#f9fafb', padding: '72px 24px 60px' }}>
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
                                            letterSpacing: '0.5px',
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
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
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
                overflow: 'hidden',
            }}>
                <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '280px', height: '280px', background: 'rgba(255,107,0,0.1)', borderRadius: '50%' }} />
                <div style={{ position: 'absolute', bottom: '-40px', left: '-40px', width: '200px', height: '200px', background: 'rgba(255,107,0,0.08)', borderRadius: '50%' }} />
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: '16px', letterSpacing: '6px' }}>🍔🍕🍛🍗🍰</div>
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
                        transition: 'transform 0.2s',
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
                                    <Link
                                        to={l === 'Home' ? '/' : l === 'Menu' ? '/menu' : '/orders'}
                                        style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}
                                        onMouseEnter={e => e.currentTarget.style.color = '#ff6b00'}
                                        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
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