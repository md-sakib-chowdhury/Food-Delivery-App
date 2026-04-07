import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useCart } from '../context/CartContext'

const Navbar = () => {
    const { user, logout } = useAuth()
    const { cartItems } = useCart()
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate('/')
    }

    return (
        <nav className="bg-green-400 shadow-md sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">

                <Link to="/" className="text-2xl font-bold text-orange-500">
                    🍔 BanglaEats
                </Link>

                <div className="flex items-center gap-6">
                    <Link to="/" className="text-gray-600 hover:text-orange-500">
                        Home
                    </Link>
                    <Link to="/menu" className="text-gray-600 hover:text-orange-500">
                        Menu
                    </Link>

                    <Link to="/cart" className="relative text-gray-600 hover:text-orange-500">
                        🛒
                        {cartItems.length > 0 && (
                            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                {cartItems.length}
                            </span>
                        )}
                    </Link>

                    {user ? (
                        <div className="flex items-center gap-3">
                            <span className="text-gray-600 text-sm">Hi, {user.name}</span>
                            {user.role === 'admin' && (
                                <Link to="/admin" className="text-purple-600 hover:text-purple-800 text-sm">
                                    Admin
                                </Link>
                            )}
                            <button
                                onClick={handleLogout}
                                className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 text-sm"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <Link
                            to="/login"
                            className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 text-sm"
                        >
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar