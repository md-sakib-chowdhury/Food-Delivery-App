import { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import api from '../services/api'

const Admin = () => {
    const { user } = useAuth()
    const navigate = useNavigate()
    const [foods, setFoods] = useState([])
    const [formData, setFormData] = useState({
        name: '', description: '', price: '', category: 'Burger', image: ''
    })
    const [message, setMessage] = useState('')

    useEffect(() => {
        if (!user || user.role !== 'admin') navigate('/')
        loadFoods()
    }, [])

    const loadFoods = async () => {
        const res = await api.get('/food')
        if (res.data.success) setFoods(res.data.foods)
    }

    const handleAdd = async (e) => {
        e.preventDefault()
        try {
            const res = await api.post('/food/add', {
                ...formData,
                price: Number(formData.price)
            })
            if (res.data.success) {
                setMessage('Food add হয়েছে!')
                setFormData({ name: '', description: '', price: '', category: 'Burger', image: '' })
                loadFoods()
            }
        } catch {
            setMessage('Error হয়েছে!')
        }
    }

    const handleDelete = async (id) => {
        await api.delete(`/food/${id}`)
        loadFoods()
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Admin Dashboard</h2>

            <div className="bg-white rounded-2xl shadow p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">নতুন Food যোগ করো</h3>
                {message && <div className="bg-green-50 text-green-600 p-3 rounded-lg mb-4">{message}</div>}
                <form onSubmit={handleAdd} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text" placeholder="Food এর নাম"
                        className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        required
                    />
                    <input
                        type="number" placeholder="দাম (৳)"
                        className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500"
                        value={formData.price}
                        onChange={e => setFormData({ ...formData, price: e.target.value })}
                        required
                    />
                    <input
                        type="text" placeholder="Description"
                        className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500"
                        value={formData.description}
                        onChange={e => setFormData({ ...formData, description: e.target.value })}
                        required
                    />
                    <select
                        className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500"
                        value={formData.category}
                        onChange={e => setFormData({ ...formData, category: e.target.value })}
                    >
                        <option>Burger</option>
                        <option>Pizza</option>
                        <option>Biryani</option>
                        <option>Chicken</option>
                        <option>Dessert</option>
                    </select>
                    <input
                        type="text" placeholder="Image URL"
                        className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 md:col-span-2"
                        value={formData.image}
                        onChange={e => setFormData({ ...formData, image: e.target.value })}
                        required
                    />
                    <button
                        type="submit"
                        className="md:col-span-2 bg-orange-500 text-white py-3 rounded-lg font-bold hover:bg-orange-600"
                    >
                        Food যোগ করো
                    </button>
                </form>
            </div>

            <div className="bg-white rounded-2xl shadow p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">সব Food ({foods.length})</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {foods.map(food => (
                        <div key={food._id} className="border border-gray-200 rounded-xl p-4">
                            <img src={food.image} alt={food.name} className="w-full h-32 object-cover rounded-lg mb-3" />
                            <h4 className="font-bold text-gray-800">{food.name}</h4>
                            <p className="text-orange-500 font-bold">৳{food.price}</p>
                            <p className="text-gray-500 text-sm">{food.category}</p>
                            <button
                                onClick={() => handleDelete(food._id)}
                                className="mt-3 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 text-sm"
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Admin