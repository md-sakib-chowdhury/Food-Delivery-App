// // import { Link, useNavigate } from 'react-router-dom'
// // import { useAuth } from '../context/AuthContext'
// // import { useCart } from '../context/CartContext'

// // const Navbar = () => {
// //     const { user, logout } = useAuth()
// //     const { cartItems } = useCart()
// //     const navigate = useNavigate()

// //     const handleLogout = () => {
// //         logout()
// //         navigate('/')
// //     }

// //     return (
// //         <nav className="bg-green-400 shadow-md sticky top-0 z-50">
// //             <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">

// //                 <Link to="/" className="text-2xl font-bold text-orange-500">
// //                     🍔 BanglaEats
// //                 </Link>

// //                 <div className="flex items-center gap-6">
// //                     <Link to="/" className="text-gray-600 hover:text-orange-500">
// //                         Home
// //                     </Link>
// //                     <Link to="/menu" className="text-gray-600 hover:text-orange-500">
// //                         Menu
// //                     </Link>

// //                     <Link to="/cart" className="relative text-gray-600 hover:text-orange-500">
// //                         🛒
// //                         {cartItems.length > 0 && (
// //                             <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
// //                                 {cartItems.length}
// //                             </span>
// //                         )}
// //                     </Link>

// //                     {user ? (
// //                         <div className="flex items-center gap-3">
// //                             <span className="text-gray-600 text-sm">Hi, {user.name}</span>
// //                             {user.role === 'admin' && (
// //                                 <Link to="/admin" className="text-purple-600 hover:text-purple-800 text-sm">
// //                                     Admin
// //                                 </Link>
// //                             )}
// //                             <button
// //                                 onClick={handleLogout}
// //                                 className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 text-sm"
// //                             >
// //                                 Logout
// //                             </button>
// //                         </div>
// //                     ) : (
// //                         <Link
// //                             to="/login"
// //                             className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 text-sm"
// //                         >
// //                             Login
// //                         </Link>
// //                     )}
// //                 </div>
// //             </div>
// //         </nav>
// //     )
// // }

// // export default Navbar
// import { Link, useNavigate } from 'react-router-dom'
// import { useAuth } from '../context/AuthContext'
// import { useCart } from '../context/CartContext'

// const Navbar = () => {
//     const { user, logout } = useAuth()
//     const { cartItems } = useCart()
//     const navigate = useNavigate()

//     const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

//     const handleLogout = () => {
//         logout()
//         navigate('/')
//     }

//     return (
//         <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
//             <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">

//                 {/* Logo */}
//                 <Link to="/" className="flex items-center gap-2">
//                     <div className="w-9 h-9 bg-orange-500 rounded-xl flex items-center justify-center text-white text-lg font-bold shadow">
//                         🍔
//                     </div>
//                     <span className="text-xl font-bold text-gray-800">
//                         Bangla<span className="text-orange-500">Eats</span>
//                     </span>
//                 </Link>

//                 {/* Nav Links */}
//                 <div className="hidden md:flex items-center gap-1">
//                     <Link to="/" className="px-4 py-2 rounded-lg text-gray-600 hover:text-orange-500 hover:bg-orange-50 font-medium text-sm transition">
//                         Home
//                     </Link>
//                     <Link to="/menu" className="px-4 py-2 rounded-lg text-gray-600 hover:text-orange-500 hover:bg-orange-50 font-medium text-sm transition">
//                         Menu
//                     </Link>
//                     {user && (
//                         <Link to="/orders" className="px-4 py-2 rounded-lg text-gray-600 hover:text-orange-500 hover:bg-orange-50 font-medium text-sm transition">
//                             My Orders
//                         </Link>
//                     )}
//                 </div>

//                 {/* Right Side */}
//                 <div className="flex items-center gap-3">

//                     {/* Cart Button */}
//                     <Link to="/cart" className="relative flex items-center gap-2 bg-orange-50 hover:bg-orange-100 border border-orange-200 px-4 py-2 rounded-xl transition group">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                             <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//                         </svg>
//                         <span className="text-orange-500 font-semibold text-sm">Cart</span>
//                         {totalItems > 0 && (
//                             <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow">
//                                 {totalItems}
//                             </span>
//                         )}
//                     </Link>

//                     {user ? (
//                         <div className="flex items-center gap-2">
//                             {/* User Profile */}
//                             <Link
//                                 to="/profile"
//                                 className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-gray-100 transition"
//                             >
//                                 <div className="w-7 h-7 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
//                                     {user.name?.charAt(0).toUpperCase()}
//                                 </div>
//                                 <span className="text-gray-700 text-sm font-medium hidden md:block">
//                                     {user.name}
//                                 </span>
//                             </Link>

//                             {/* Admin Badge */}
//                             {user.role === 'admin' && (
//                                 <Link
//                                     to="/admin"
//                                     className="flex items-center gap-1 bg-purple-50 border border-purple-200 text-purple-600 px-3 py-2 rounded-xl text-sm font-medium hover:bg-purple-100 transition"
//                                 >
//                                     <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//                                     </svg>
//                                     Admin
//                                 </Link>
//                             )}

//                             {/* Logout */}
//                             <button
//                                 onClick={handleLogout}
//                                 className="flex items-center gap-1 bg-gray-100 hover:bg-red-50 hover:text-red-500 text-gray-600 px-3 py-2 rounded-xl text-sm font-medium transition"
//                             >
//                                 <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
//                                 </svg>
//                                 Logout
//                             </button>
//                         </div>
//                     ) : (
//                         <Link
//                             to="/login"
//                             className="bg-orange-500 text-white px-5 py-2 rounded-xl hover:bg-orange-600 text-sm font-bold transition shadow-sm"
//                         >
//                             Login
//                         </Link>
//                     )}
//                 </div>
//             </div>
//         </nav>
//     )
// }

// export default Navbar
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useCart } from '../context/CartContext'

const Navbar = () => {
    const { user, logout } = useAuth()
    const { cartItems } = useCart()
    const navigate = useNavigate()

    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

    const handleLogout = () => {
        logout()
        navigate('/')
    }

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&display=swap');

                .be-nav {
                    font-family: 'Sora', sans-serif;
                    background: #ffffff;
                    border-bottom: 1px solid #f1f0eb;
                    position: sticky;
                    top: 0;
                    z-index: 50;
                    box-shadow: 0 1px 12px rgba(0,0,0,0.04);
                }

                .be-nav-inner {
                    max-width: 1120px;
                    margin: 0 auto;
                    padding: 0 1.5rem;
                    height: 62px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 16px;
                }

                /* Logo */
                .be-logo {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    text-decoration: none;
                    flex-shrink: 0;
                }
                .be-logo-icon {
                    width: 36px;
                    height: 36px;
                    border-radius: 10px;
                    background: linear-gradient(135deg, #fb923c, #ea580c);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 18px;
                    box-shadow: 0 2px 8px rgba(234,88,12,0.25);
                }
                .be-logo-text {
                    font-size: 19px;
                    font-weight: 700;
                    color: #1c1917;
                    letter-spacing: -0.3px;
                }
                .be-logo-text span {
                    color: #f97316;
                }

                /* Nav links */
                .be-links {
                    display: flex;
                    align-items: center;
                    gap: 2px;
                }
                @media (max-width: 640px) {
                    .be-links { display: none; }
                }
                .be-link {
                    padding: 7px 14px;
                    border-radius: 8px;
                    font-size: 13.5px;
                    font-weight: 500;
                    color: #78716c;
                    text-decoration: none;
                    transition: background 0.15s, color 0.15s;
                    white-space: nowrap;
                }
                .be-link:hover {
                    background: #fff7ed;
                    color: #f97316;
                }
                .be-link.active {
                    color: #f97316;
                    background: #fff7ed;
                }

                /* Right side */
                .be-right {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    flex-shrink: 0;
                }

                /* Cart */
                .be-cart {
                    position: relative;
                    display: flex;
                    align-items: center;
                    gap: 7px;
                    padding: 7px 15px;
                    border-radius: 10px;
                    border: 1px solid #fed7aa;
                    background: #fff7ed;
                    color: #f97316;
                    font-size: 13.5px;
                    font-weight: 600;
                    text-decoration: none;
                    transition: background 0.15s, border-color 0.15s;
                    font-family: 'Sora', sans-serif;
                }
                .be-cart:hover {
                    background: #ffedd5;
                    border-color: #fdba74;
                }
                .be-cart-icon {
                    width: 17px;
                    height: 17px;
                    stroke: #f97316;
                    fill: none;
                    stroke-width: 2;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    flex-shrink: 0;
                }
                .be-cart-badge {
                    position: absolute;
                    top: -7px;
                    right: -7px;
                    background: #f97316;
                    color: white;
                    font-size: 10px;
                    font-weight: 700;
                    border-radius: 50%;
                    width: 19px;
                    height: 19px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 2px solid white;
                    font-family: 'Sora', sans-serif;
                }

                /* Divider */
                .be-divider {
                    width: 1px;
                    height: 22px;
                    background: #e7e5e4;
                    flex-shrink: 0;
                }

                /* User button */
                .be-user-btn {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 5px 11px 5px 5px;
                    border-radius: 10px;
                    border: 1px solid #e7e5e4;
                    background: white;
                    text-decoration: none;
                    transition: background 0.15s, border-color 0.15s;
                    cursor: pointer;
                }
                .be-user-btn:hover {
                    background: #fafaf9;
                    border-color: #d6d3d1;
                }
                .be-avatar {
                    width: 28px;
                    height: 28px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #fb923c, #ea580c);
                    color: white;
                    font-size: 12px;
                    font-weight: 700;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-family: 'Sora', sans-serif;
                    flex-shrink: 0;
                }
                .be-user-name {
                    font-size: 13.5px;
                    font-weight: 500;
                    color: #1c1917;
                    font-family: 'Sora', sans-serif;
                }
                @media (max-width: 768px) {
                    .be-user-name { display: none; }
                }

                /* Admin badge */
                .be-admin {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    padding: 7px 12px;
                    border-radius: 10px;
                    border: 1px solid #e9d5ff;
                    background: #faf5ff;
                    color: #7c3aed;
                    font-size: 13px;
                    font-weight: 600;
                    text-decoration: none;
                    transition: background 0.15s;
                    font-family: 'Sora', sans-serif;
                }
                .be-admin:hover {
                    background: #f3e8ff;
                    border-color: #d8b4fe;
                }
                .be-admin-icon {
                    width: 15px;
                    height: 15px;
                    stroke: #7c3aed;
                    fill: none;
                    stroke-width: 2;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    flex-shrink: 0;
                }

                /* Logout */
                .be-logout {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    padding: 7px 12px;
                    border-radius: 10px;
                    border: 1px solid #e7e5e4;
                    background: transparent;
                    color: #78716c;
                    font-size: 13.5px;
                    font-weight: 500;
                    cursor: pointer;
                    transition: background 0.15s, color 0.15s, border-color 0.15s;
                    font-family: 'Sora', sans-serif;
                }
                .be-logout:hover {
                    background: #fef2f2;
                    color: #ef4444;
                    border-color: #fecaca;
                }
                .be-logout-icon {
                    width: 15px;
                    height: 15px;
                    stroke: currentColor;
                    fill: none;
                    stroke-width: 2;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    flex-shrink: 0;
                }

                /* Login */
                .be-login {
                    padding: 8px 20px;
                    border-radius: 10px;
                    background: #f97316;
                    color: white;
                    font-size: 13.5px;
                    font-weight: 700;
                    border: none;
                    cursor: pointer;
                    text-decoration: none;
                    transition: background 0.15s, transform 0.1s;
                    font-family: 'Sora', sans-serif;
                    display: inline-flex;
                    align-items: center;
                    box-shadow: 0 2px 8px rgba(249,115,22,0.3);
                }
                .be-login:hover {
                    background: #ea580c;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 12px rgba(249,115,22,0.35);
                }
                .be-login:active {
                    transform: translateY(0);
                }
            `}</style>

            <nav className="be-nav">
                <div className="be-nav-inner">

                    {/* Logo */}
                    <Link to="/" className="be-logo">
                        <div className="be-logo-icon">🍔</div>
                        <span className="be-logo-text">
                            Bangla<span>Eats</span>
                        </span>
                    </Link>

                    {/* Nav Links */}
                    <div className="be-links">
                        <Link to="/" className="be-link">Home</Link>
                        <Link to="/menu" className="be-link">Menu</Link>
                        {user && (
                            <Link to="/orders" className="be-link">My Orders</Link>
                        )}
                    </div>

                    {/* Right Side */}
                    <div className="be-right">

                        {/* Cart */}
                        <Link to="/cart" className="be-cart">
                            <svg className="be-cart-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            Cart
                            {totalItems > 0 && (
                                <span className="be-cart-badge">{totalItems}</span>
                            )}
                        </Link>

                        <div className="be-divider" />

                        {user ? (
                            <>
                                {/* User Profile */}
                                <Link to="/profile" className="be-user-btn">
                                    <div className="be-avatar">
                                        {user.name?.charAt(0).toUpperCase()}
                                    </div>
                                    <span className="be-user-name">{user.name}</span>
                                </Link>

                                {/* Admin Badge */}
                                {user.role === 'admin' && (
                                    <Link to="/admin" className="be-admin">
                                        <svg className="be-admin-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                        Admin
                                    </Link>
                                )}

                                {/* Logout */}
                                <button className="be-logout" onClick={handleLogout}>
                                    <svg className="be-logout-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                    </svg>
                                    Logout
                                </button>
                            </>
                        ) : (
                            <Link to="/login" className="be-login">
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar