import { useState, useEffect } from 'react'
import { getFoods } from '../services/api'
import { useCart } from '../context/CartContext'

const Menu = () => {
    const [foods, setFoods] = useState([])
    const [category, setCategory] = useState('All')
    const { addToCart } = useCart()

    const categories = ['All', 'Burger', 'Pizza', 'Biryani', 'Chicken', 'Dessert']

    useEffect(() => {
        getFoods().then(res => {
            if (res.data.success) setFoods(res.data.foods)
        })
    }, [])

    const filtered = category === 'All'
        ? foods
        : foods.filter(f => f.category === category)

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">আমাদের Menu</h2>

            <div className="flex gap-3 flex-wrap mb-8">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setCategory(cat)}
                        className={`px-5 py-2 rounded-full font-medium transition ${category === cat
                            ? 'bg-orange-500 text-white'
                            : 'bg-white text-gray-600 border border-gray-300 hover:border-orange-500'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {filtered.length === 0 ? (
                <div className="text-center py-20 text-gray-400">
                    <div className="text-6xl mb-4">🍽️</div>
                    <p className="text-xl">এখনো কোনো food নেই</p>
                    <p className="text-sm mt-2">Admin panel থেকে food add করুন</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map(food => (
                        <div key={food._id} className="bg-white rounded-2xl shadow hover:shadow-md transition overflow-hidden">
                            <img src={food.image} alt={food.name} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-lg font-bold text-gray-800 mb-1">{food.name}</h3>
                                <p className="text-gray-500 text-sm mb-3">{food.description}</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-orange-500 font-bold text-lg">৳{food.price}</span>
                                    <button
                                        onClick={() => addToCart(food)}
                                        className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 text-sm"
                                    >
                                        Cart এ যোগ করো
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Menu