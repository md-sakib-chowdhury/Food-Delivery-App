// import { useState, useEffect } from 'react'
// import { useAuth } from '../context/AuthContext'
// import { useNavigate } from 'react-router-dom'
// import api from '../services/api'

// const Admin = () => {
//     const { user } = useAuth()
//     const navigate = useNavigate()
//     const [foods, setFoods] = useState([])
//     const [formData, setFormData] = useState({
//         name: '', description: '', price: '', category: 'Burger', image: ''
//     })
//     const [message, setMessage] = useState('')

//     useEffect(() => {
//         if (!user || user.role !== 'admin') navigate('/')
//         loadFoods()
//     }, [])

//     const loadFoods = async () => {
//         const res = await api.get('/food')
//         if (res.data.success) setFoods(res.data.foods)
//     }

//     const handleAdd = async (e) => {
//         e.preventDefault()
//         try {
//             const res = await api.post('/food/add', {
//                 ...formData,
//                 price: Number(formData.price)
//             })
//             if (res.data.success) {
//                 setMessage('Food add হয়েছে!')
//                 setFormData({ name: '', description: '', price: '', category: 'Burger', image: '' })
//                 loadFoods()
//             }
//         } catch {
//             setMessage('Error হয়েছে!')
//         }
//     }

//     const handleDelete = async (id) => {
//         await api.delete(`/food/${id}`)
//         loadFoods()
//     }

//     return (
//         <div className="max-w-6xl mx-auto px-4 py-8">
//             <h2 className="text-3xl font-bold text-gray-800 mb-8">Admin Dashboard</h2>

//             <div className="bg-white rounded-2xl shadow p-6 mb-8">
//                 <h3 className="text-xl font-bold text-gray-800 mb-4">নতুন Food যোগ করো</h3>
//                 {message && <div className="bg-green-50 text-green-600 p-3 rounded-lg mb-4">{message}</div>}
//                 <form onSubmit={handleAdd} className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <input
//                         type="text" placeholder="Food এর নাম"
//                         className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500"
//                         value={formData.name}
//                         onChange={e => setFormData({ ...formData, name: e.target.value })}
//                         required
//                     />
//                     <input
//                         type="number" placeholder="দাম (৳)"
//                         className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500"
//                         value={formData.price}
//                         onChange={e => setFormData({ ...formData, price: e.target.value })}
//                         required
//                     />
//                     <input
//                         type="text" placeholder="Description"
//                         className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500"
//                         value={formData.description}
//                         onChange={e => setFormData({ ...formData, description: e.target.value })}
//                         required
//                     />
//                     <select
//                         className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500"
//                         value={formData.category}
//                         onChange={e => setFormData({ ...formData, category: e.target.value })}
//                     >
//                         <option>Burger</option>
//                         <option>Pizza</option>
//                         <option>Biryani</option>
//                         <option>Chicken</option>
//                         <option>Dessert</option>
//                     </select>
//                     <input
//                         type="text" placeholder="Image URL"
//                         className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 md:col-span-2"
//                         value={formData.image}
//                         onChange={e => setFormData({ ...formData, image: e.target.value })}
//                         required
//                     />
//                     <button
//                         type="submit"
//                         className="md:col-span-2 bg-orange-500 text-white py-3 rounded-lg font-bold hover:bg-orange-600"
//                     >
//                         Food যোগ করো
//                     </button>
//                 </form>
//             </div>

//             <div className="bg-white rounded-2xl shadow p-6">
//                 <h3 className="text-xl font-bold text-gray-800 mb-4">সব Food ({foods.length})</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                     {foods.map(food => (
//                         <div key={food._id} className="border border-gray-200 rounded-xl p-4">
//                             <img src={food.image} alt={food.name} className="w-full h-32 object-cover rounded-lg mb-3" />
//                             <h4 className="font-bold text-gray-800">{food.name}</h4>
//                             <p className="text-orange-500 font-bold">৳{food.price}</p>
//                             <p className="text-gray-500 text-sm">{food.category}</p>
//                             <button
//                                 onClick={() => handleDelete(food._id)}
//                                 className="mt-3 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 text-sm"
//                             >
//                                 Delete
//                             </button>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Admin

import { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import api from '../services/api'

const CATEGORIES = ['Burger', 'Pizza', 'Biryani', 'Chicken', 'Dessert']

const Admin = () => {
    const { user } = useAuth()
    const navigate = useNavigate()
    const [activeTab, setActiveTab] = useState('dashboard')
    const [foods, setFoods] = useState([])
    const [orders, setOrders] = useState([])
    const [formData, setFormData] = useState({
        name: '', description: '', price: '', category: 'Burger', image: ''
    })
    const [message, setMessage] = useState('')
    const [editingFood, setEditingFood] = useState(null)

    useEffect(() => {
        if (!user || user.role !== 'admin') navigate('/')
        loadFoods()
        loadOrders()
    }, [])

    const loadFoods = async () => {
        const res = await api.get('/food')
        if (res.data.success) setFoods(res.data.foods)
    }

    const loadOrders = async () => {
        try {
            const res = await api.get('/orders/user')
            if (res.data.success) setOrders(res.data.orders)
        } catch { }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (editingFood) {
                await api.put(`/food/${editingFood._id}`, { ...formData, price: Number(formData.price) })
                setMessage('Food update হয়েছে!')
                setEditingFood(null)
            } else {
                await api.post('/food/add', { ...formData, price: Number(formData.price) })
                setMessage('Food add হয়েছে!')
            }
            setFormData({ name: '', description: '', price: '', category: 'Burger', image: '' })
            loadFoods()
            setTimeout(() => setMessage(''), 3000)
        } catch {
            setMessage('Error হয়েছে!')
        }
    }

    const handleEdit = (food) => {
        setEditingFood(food)
        setFormData({
            name: food.name,
            description: food.description,
            price: food.price,
            category: food.category,
            image: food.image
        })
        setActiveTab('add')
    }

    const handleDelete = async (id) => {
        if (!window.confirm('Delete করবে?')) return
        await api.delete(`/food/${id}`)
        loadFoods()
    }

    const totalRevenue = orders.reduce((sum, o) => sum + o.amount, 0)

    const statusColor = {
        'Pending': 'bg-yellow-100 text-yellow-700',
        'Preparing': 'bg-blue-100 text-blue-700',
        'On The Way': 'bg-purple-100 text-purple-700',
        'Delivered': 'bg-green-100 text-green-700',
        'Cancelled': 'bg-red-100 text-red-700',
    }

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="w-64 bg-white shadow-lg flex flex-col">
                <div className="p-6 border-b border-gray-100">
                    <div className="text-2xl font-bold text-orange-500">🍔 BanglaEats</div>
                    <div className="text-sm text-gray-400 mt-1">Admin Panel</div>
                </div>

                <nav className="flex-1 p-4 flex flex-col gap-1">
                    {[
                        { id: 'dashboard', icon: '📊', label: 'Dashboard' },
                        { id: 'add', icon: '➕', label: 'Food Add করো' },
                        { id: 'foods', icon: '🍽️', label: 'সব Foods' },
                        { id: 'orders', icon: '📦', label: 'Orders' },
                    ].map(item => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition font-medium ${activeTab === item.id
                                ? 'bg-orange-500 text-white'
                                : 'text-gray-600 hover:bg-orange-50 hover:text-orange-500'
                                }`}
                        >
                            <span>{item.icon}</span>
                            <span>{item.label}</span>
                        </button>
                    ))}
                </nav>

                <div className="p-4 border-t border-gray-100">
                    <button
                        onClick={() => navigate('/')}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-500 hover:bg-gray-100 transition"
                    >
                        <span>🏠</span>
                        <span>Home এ যাও</span>
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-8 overflow-y-auto">

                {/* Dashboard Tab */}
                {activeTab === 'dashboard' && (
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Overview</h2>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                            <div className="bg-white rounded-2xl p-6 shadow text-center">
                                <div className="text-3xl mb-2">🍽️</div>
                                <div className="text-3xl font-bold text-orange-500">{foods.length}</div>
                                <div className="text-gray-500 text-sm mt-1">মোট Foods</div>
                            </div>
                            <div className="bg-white rounded-2xl p-6 shadow text-center">
                                <div className="text-3xl mb-2">📦</div>
                                <div className="text-3xl font-bold text-blue-500">{orders.length}</div>
                                <div className="text-gray-500 text-sm mt-1">মোট Orders</div>
                            </div>
                            <div className="bg-white rounded-2xl p-6 shadow text-center">
                                <div className="text-3xl mb-2">✅</div>
                                <div className="text-3xl font-bold text-green-500">
                                    {orders.filter(o => o.status === 'Delivered').length}
                                </div>
                                <div className="text-gray-500 text-sm mt-1">Delivered</div>
                            </div>
                            <div className="bg-white rounded-2xl p-6 shadow text-center">
                                <div className="text-3xl mb-2">💰</div>
                                <div className="text-3xl font-bold text-purple-500">৳{totalRevenue}</div>
                                <div className="text-gray-500 text-sm mt-1">মোট Revenue</div>
                            </div>
                        </div>

                        {/* Recent Orders */}
                        <div className="bg-white rounded-2xl shadow p-6">
                            <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Orders</h3>
                            {orders.length === 0 ? (
                                <div className="text-center py-10 text-gray-400">কোনো order নেই</div>
                            ) : (
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="border-b border-gray-100">
                                                <th className="text-left py-3 px-2 text-gray-500">Order ID</th>
                                                <th className="text-left py-3 px-2 text-gray-500">Items</th>
                                                <th className="text-left py-3 px-2 text-gray-500">Amount</th>
                                                <th className="text-left py-3 px-2 text-gray-500">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {orders.slice(0, 5).map(order => (
                                                <tr key={order._id} className="border-b border-gray-50 hover:bg-gray-50">
                                                    <td className="py-3 px-2 text-gray-400 font-mono text-xs">
                                                        #{order._id.slice(-6).toUpperCase()}
                                                    </td>
                                                    <td className="py-3 px-2 text-gray-700">
                                                        {order.items.map(i => i.name).join(', ').slice(0, 30)}...
                                                    </td>
                                                    <td className="py-3 px-2 font-bold text-orange-500">৳{order.amount}</td>
                                                    <td className="py-3 px-2">
                                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor[order.status] || 'bg-gray-100 text-gray-600'}`}>
                                                            {order.status}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Add Food Tab */}
                {activeTab === 'add' && (
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">
                            {editingFood ? 'Food Edit করো' : 'নতুন Food যোগ করো'}
                        </h2>
                        <div className="bg-white rounded-2xl shadow p-8 max-w-2xl">
                            {message && (
                                <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-xl mb-6">
                                    ✅ {message}
                                </div>
                            )}
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-sm font-medium text-gray-600 mb-1 block">Food এর নাম *</label>
                                        <input
                                            type="text"
                                            placeholder="যেমন: Chicken Burger"
                                            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500"
                                            value={formData.name}
                                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-gray-600 mb-1 block">দাম (৳) *</label>
                                        <input
                                            type="number"
                                            placeholder="যেমন: 250"
                                            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500"
                                            value={formData.price}
                                            onChange={e => setFormData({ ...formData, price: e.target.value })}
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-600 mb-1 block">Description *</label>
                                    <textarea
                                        placeholder="Food এর বিবরণ লিখো"
                                        rows={3}
                                        className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 resize-none"
                                        value={formData.description}
                                        onChange={e => setFormData({ ...formData, description: e.target.value })}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-600 mb-1 block">Category *</label>
                                    <select
                                        className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500"
                                        value={formData.category}
                                        onChange={e => setFormData({ ...formData, category: e.target.value })}
                                    >
                                        {CATEGORIES.map(c => <option key={c}>{c}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-600 mb-1 block">Image URL *</label>
                                    <input
                                        type="text"
                                        placeholder="https://images.unsplash.com/..."
                                        className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500"
                                        value={formData.image}
                                        onChange={e => setFormData({ ...formData, image: e.target.value })}
                                        required
                                    />
                                    {formData.image && (
                                        <img src={formData.image} alt="preview" className="mt-3 h-32 w-full object-cover rounded-xl" />
                                    )}
                                </div>
                                <div className="flex gap-3">
                                    <button
                                        type="submit"
                                        className="flex-1 bg-orange-500 text-white py-3 rounded-xl font-bold hover:bg-orange-600 transition"
                                    >
                                        {editingFood ? '✅ Update করো' : '➕ Food যোগ করো'}
                                    </button>
                                    {editingFood && (
                                        <button
                                            type="button"
                                            onClick={() => { setEditingFood(null); setFormData({ name: '', description: '', price: '', category: 'Burger', image: '' }) }}
                                            className="px-6 bg-gray-200 text-gray-700 py-3 rounded-xl font-bold hover:bg-gray-300"
                                        >
                                            Cancel
                                        </button>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {/* Foods List Tab */}
                {activeTab === 'foods' && (
                    <div>
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-gray-800">সব Foods ({foods.length})</h2>
                            <button
                                onClick={() => setActiveTab('add')}
                                className="bg-orange-500 text-white px-5 py-2 rounded-xl font-bold hover:bg-orange-600"
                            >
                                ➕ নতুন Food
                            </button>
                        </div>
                        {foods.length === 0 ? (
                            <div className="bg-white rounded-2xl shadow p-20 text-center text-gray-400">
                                <div className="text-5xl mb-4">🍽️</div>
                                <p>কোনো food নেই। Add করো!</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                {foods.map(food => (
                                    <div key={food._id} className="bg-white rounded-2xl shadow overflow-hidden hover:shadow-md transition">
                                        <div className="relative">
                                            <img src={food.image} alt={food.name} className="w-full h-44 object-cover" />
                                            <span className="absolute top-3 right-3 bg-white text-orange-500 text-xs font-bold px-3 py-1 rounded-full shadow">
                                                {food.category}
                                            </span>
                                        </div>
                                        <div className="p-4">
                                            <h3 className="font-bold text-gray-800 text-lg mb-1">{food.name}</h3>
                                            <p className="text-gray-400 text-sm mb-3 line-clamp-2">{food.description}</p>
                                            <div className="flex justify-between items-center">
                                                <span className="text-orange-500 font-bold text-xl">৳{food.price}</span>
                                                <div className="flex gap-2">
                                                    <button
                                                        onClick={() => handleEdit(food)}
                                                        className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-100"
                                                    >
                                                        ✏️ Edit
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(food._id)}
                                                        className="bg-red-50 text-red-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-100"
                                                    >
                                                        🗑️ Delete
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {/* Orders Tab */}
                {/* {activeTab === 'orders' && (
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">সব Orders</h2>
                        <div className="bg-white rounded-2xl shadow overflow-hidden">
                            {orders.length === 0 ? (
                                <div className="text-center py-20 text-gray-400">
                                    <div className="text-5xl mb-4">📦</div>
                                    <p>কোনো order নেই</p>
                                </div>
                            ) : (
                                <table className="w-full text-sm">
                                    <thead className="bg-gray-50 border-b border-gray-100">
                                        <tr>
                                            <th className="text-left py-4 px-6 text-gray-500 font-medium">Order ID</th>
                                            <th className="text-left py-4 px-6 text-gray-500 font-medium">Items</th>
                                            <th className="text-left py-4 px-6 text-gray-500 font-medium">Amount</th>
                                            <th className="text-left py-4 px-6 text-gray-500 font-medium">Payment</th>
                                            <th className="text-left py-4 px-6 text-gray-500 font-medium">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orders.map(order => (
                                            <tr key={order._id} className="border-b border-gray-50 hover:bg-gray-50">
                                                <td className="py-4 px-6 font-mono text-xs text-gray-400">
                                                    #{order._id.slice(-6).toUpperCase()}
                                                </td>
                                                <td className="py-4 px-6 text-gray-700 max-w-xs">
                                                    {order.items.map(i => `${i.name} x${i.quantity}`).join(', ')}
                                                </td>
                                                <td className="py-4 px-6 font-bold text-orange-500">৳{order.amount}</td>
                                                <td className="py-4 px-6">
                                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${order.payment ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-500'}`}>
                                                        {order.payment ? 'Paid' : 'COD'}
                                                    </span>
                                                </td>
                                                <td className="py-4 px-6">
                                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor[order.status] || 'bg-gray-100 text-gray-600'}`}>
                                                        {order.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    </div>
                )} */}

                {activeTab === 'orders' && (
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">সব Orders</h2>
                        <div className="bg-white rounded-2xl shadow overflow-hidden">
                            {orders.length === 0 ? (
                                <div className="text-center py-20 text-gray-400">
                                    <div className="text-5xl mb-4">📦</div>
                                    <p>কোনো order নেই</p>
                                </div>
                            ) : (
                                <table className="w-full text-sm">
                                    <thead className="bg-gray-50 border-b border-gray-100">
                                        <tr>
                                            <th className="text-left py-4 px-6 text-gray-500 font-medium">Order ID</th>
                                            <th className="text-left py-4 px-6 text-gray-500 font-medium">Items</th>
                                            <th className="text-left py-4 px-6 text-gray-500 font-medium">Amount</th>
                                            <th className="text-left py-4 px-6 text-gray-500 font-medium">Payment</th>
                                            <th className="text-left py-4 px-6 text-gray-500 font-medium">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orders.map(order => (
                                            <tr key={order._id} className="border-b border-gray-50 hover:bg-gray-50">
                                                <td className="py-4 px-6 font-mono text-xs text-gray-400">
                                                    #{order._id.slice(-6).toUpperCase()}
                                                </td>
                                                <td className="py-4 px-6 text-gray-700 max-w-xs">
                                                    {order.items.map(i => `${i.name} x${i.quantity}`).join(', ')}
                                                </td>
                                                <td className="py-4 px-6 font-bold text-orange-500">৳{order.amount}</td>
                                                <td className="py-4 px-6">
                                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${order.payment ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-500'}`}>
                                                        {order.payment ? 'Paid' : 'COD'}
                                                    </span>
                                                </td>
                                                <td className="py-4 px-6">
                                                    <select
                                                        value={order.status}
                                                        onChange={async (e) => {
                                                            await api.put(`/orders/${order._id}/status`, { status: e.target.value })
                                                            loadOrders()
                                                        }}
                                                        className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-orange-500"
                                                    >
                                                        <option>Pending</option>
                                                        <option>Preparing</option>
                                                        <option>On The Way</option>
                                                        <option>Delivered</option>
                                                        <option>Cancelled</option>
                                                    </select>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Admin