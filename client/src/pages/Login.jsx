import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { loginUser, registerUser } from '../services/api'

const Login = () => {
    const [isLogin, setIsLogin] = useState(true)
    const [formData, setFormData] = useState({ name: '', email: '', password: '' })
    const [error, setError] = useState('')
    const { login } = useAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try {
            const res = isLogin
                ? await loginUser({ email: formData.email, password: formData.password })
                : await registerUser(formData)

            if (res.data.success) {
                login(res.data.user, res.data.token)
                navigate('/')
            } else {
                setError(res.data.message)
            }
        } catch {
            setError('Something went wrong!')
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
                <div className="text-center mb-8">
                    <div className="text-5xl mb-3">🍔</div>
                    <h2 className="text-2xl font-bold text-gray-800">
                        {isLogin ? 'Login করুন' : 'Register করুন'}
                    </h2>
                </div>

                {error && (
                    <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4 text-sm">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {!isLogin && (
                        <input
                            type="text"
                            placeholder="আপনার নাম"
                            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500"
                            value={formData.name}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                            required
                        />
                    )}
                    <input
                        type="email"
                        placeholder="Email"
                        className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500"
                        value={formData.password}
                        onChange={e => setFormData({ ...formData, password: e.target.value })}
                        required
                    />
                    <button
                        type="submit"
                        className="bg-orange-500 text-white py-3 rounded-lg font-bold hover:bg-orange-600 transition"
                    >
                        {isLogin ? 'Login' : 'Register'}
                    </button>
                </form>

                <p className="text-center text-gray-500 text-sm mt-6">
                    {isLogin ? 'Account নেই?' : 'Already account আছে?'}
                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-orange-500 font-bold ml-1"
                    >
                        {isLogin ? 'Register করুন' : 'Login করুন'}
                    </button>
                </p>
            </div>
        </div>
    )
}

export default Login