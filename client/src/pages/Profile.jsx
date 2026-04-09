import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate, Link } from 'react-router-dom'
import api from '../services/api'

const Profile = () => {
    const { user, login, logout } = useAuth()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: user?.name || '',
        phone: user?.phone || '',
        address: user?.address || ''
    })
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')

    if (!user) {
        navigate('/login')
        return null
    }

    const handleUpdate = async (e) => {
        e.preventDefault()
        try {
            const res = await api.put('/auth/profile', formData)
            if (res.data.success) {
                login(res.data.user, localStorage.getItem('token'))
                setMessage('Profile update হয়েছে! ✅')
                setTimeout(() => setMessage(''), 3000)
            }
        } catch {
            setError('Update করতে সমস্যা হয়েছে!')
        }
    }

    const handleLogout = () => {
        logout()
        navigate('/')
    }

    return (
        <div className="max-w-2xl mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">আমার Profile</h2>

            {/* Profile Card */}
            <div className="bg-white rounded-2xl shadow p-8 mb-6">
                <div className="flex items-center gap-5 mb-8">
                    <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                        {user.name?.charAt(0).toUpperCase()}
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-800">{user.name}</h3>
                        <p className="text-gray-400">{user.email}</p>
                        <span className={`text-xs font-bold px-3 py-1 rounded-full mt-1 inline-block ${user.role === 'admin'
                            ? 'bg-purple-100 text-purple-600'
                            : 'bg-orange-100 text-orange-600'
                            }`}>
                            {user.role === 'admin' ? '👑 Admin' : '👤 Customer'}
                        </span>
                    </div>
                </div>

                {message && (
                    <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-xl mb-6">
                        {message}
                    </div>
                )}
                {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl mb-6">
                        {error}
                    </div>
                )}

                <form onSubmit={handleUpdate} className="flex flex-col gap-4">
                    <div>
                        <label className="text-sm font-medium text-gray-600 mb-1 block">নাম</label>
                        <input
                            type="text"
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500"
                            value={formData.name}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-600 mb-1 block">Email</label>
                        <input
                            type="email"
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50 text-gray-400 cursor-not-allowed"
                            value={user.email}
                            disabled
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-600 mb-1 block">ফোন নম্বর</label>
                        <input
                            type="text"
                            placeholder="01XXXXXXXXX"
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500"
                            value={formData.phone}
                            onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-600 mb-1 block">ডিফল্ট Address</label>
                        <textarea
                            rows={3}
                            placeholder="তোমার delivery address"
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 resize-none"
                            value={formData.address}
                            onChange={e => setFormData({ ...formData, address: e.target.value })}
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-orange-500 text-white py-3 rounded-xl font-bold hover:bg-orange-600 transition"
                    >
                        Profile Update করো
                    </button>
                </form>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-2xl shadow p-6 mb-6">
                <h3 className="font-bold text-gray-800 mb-4">Quick Links</h3>
                <div className="flex flex-col gap-2">
                    <Link
                        to="/orders"
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-orange-50 text-gray-600 hover:text-orange-500 transition"
                    >
                        <span>📦</span> আমার Orders দেখো
                    </Link>
                    <Link
                        to="/menu"
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-orange-50 text-gray-600 hover:text-orange-500 transition"
                    >
                        <span>🍔</span> Menu দেখো
                    </Link>
                    {user.role === 'admin' && (
                        <Link
                            to="/admin"
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-purple-50 text-gray-600 hover:text-purple-500 transition"
                        >
                            <span>👑</span> Admin Dashboard
                        </Link>
                    )}
                </div>
            </div>

            <button
                onClick={handleLogout}
                className="w-full bg-red-50 text-red-500 py-3 rounded-xl font-bold hover:bg-red-100 transition border border-red-200"
            >
                🚪 Logout
            </button>
        </div>
    )
}

export default Profile