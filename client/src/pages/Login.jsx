// import { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { useAuth } from '../context/AuthContext'
// import { loginUser, registerUser } from '../services/api'

// const Login = () => {
//     const [isLogin, setIsLogin] = useState(true)
//     const [formData, setFormData] = useState({ name: '', email: '', password: '' })
//     const [error, setError] = useState('')
//     const { login } = useAuth()
//     const navigate = useNavigate()

//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         setError('')
//         try {
//             const res = isLogin
//                 ? await loginUser({ email: formData.email, password: formData.password })
//                 : await registerUser(formData)

//             if (res.data.success) {
//                 login(res.data.user, res.data.token)
//                 navigate('/')
//             } else {
//                 setError(res.data.message)
//             }
//         } catch {
//             setError('Something went wrong!')
//         }
//     }

//     return (
//         <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
//             <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
//                 <div className="text-center mb-8">
//                     <div className="text-5xl mb-3">🍔</div>
//                     <h2 className="text-2xl font-bold text-gray-800">
//                         {isLogin ? 'Login করুন' : 'Register করুন'}
//                     </h2>
//                 </div>

//                 {error && (
//                     <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4 text-sm">
//                         {error}
//                     </div>
//                 )}

//                 <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//                     {!isLogin && (
//                         <input
//                             type="text"
//                             placeholder="আপনার নাম"
//                             className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500"
//                             value={formData.name}
//                             onChange={e => setFormData({ ...formData, name: e.target.value })}
//                             required
//                         />
//                     )}
//                     <input
//                         type="email"
//                         placeholder="Email"
//                         className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500"
//                         value={formData.email}
//                         onChange={e => setFormData({ ...formData, email: e.target.value })}
//                         required
//                     />
//                     <input
//                         type="password"
//                         placeholder="Password"
//                         className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500"
//                         value={formData.password}
//                         onChange={e => setFormData({ ...formData, password: e.target.value })}
//                         required
//                     />
//                     <button
//                         type="submit"
//                         className="bg-orange-500 text-white py-3 rounded-lg font-bold hover:bg-orange-600 transition"
//                     >
//                         {isLogin ? 'Login' : 'Register'}
//                     </button>
//                 </form>

//                 <p className="text-center text-gray-500 text-sm mt-6">
//                     {isLogin ? 'Account নেই?' : 'Already account আছে?'}
//                     <button
//                         onClick={() => setIsLogin(!isLogin)}
//                         className="text-orange-500 font-bold ml-1"
//                     >
//                         {isLogin ? 'Register করুন' : 'Login করুন'}
//                     </button>
//                 </p>
//             </div>
//         </div>
//     )
// }

// export default Login
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { loginUser, registerUser } from '../services/api'

const Login = () => {
    const [isLogin, setIsLogin] = useState(true)
    const [formData, setFormData] = useState({ name: '', email: '', password: '' })
    const [error, setError] = useState('')
    const [showPassword, setShowPassword] = useState(false)
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

                    {/* ✅ Password field with toggle */}
                    <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-12 focus:outline-none focus:border-orange-500"
                            value={formData.password}
                            onChange={e => setFormData({ ...formData, password: e.target.value })}
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                            {showPassword ? (
                                // Eye-off icon (password দেখা যাচ্ছে)
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                </svg>
                            ) : (
                                // Eye icon (password লুকানো)
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            )}
                        </button>
                    </div>

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