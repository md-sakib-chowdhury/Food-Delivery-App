import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="bg-orange-500 text-white py-20 px-4 text-center">
                <h1 className="text-5xl font-bold mb-4">ক্ষুধা লেগেছে? 🍔</h1>
                <p className="text-xl mb-8">Dhaka-তে সেরা খাবার দ্রুত ডেলিভারি</p>
                <Link
                    to="/menu"
                    className="bg-white text-orange-500 px-8 py-3 rounded-full font-bold text-lg hover:bg-orange-100"
                >
                    এখনই Order করো
                </Link>
            </div>

            {/* Categories */}
            <div className="max-w-6xl mx-auto px-4 py-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Category</h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {[
                        { name: 'Burger', icon: '🍔' },
                        { name: 'Pizza', icon: '🍕' },
                        { name: 'Biryani', icon: '🍛' },
                        { name: 'Chicken', icon: '🍗' },
                        { name: 'Dessert', icon: '🍰' },
                    ].map(cat => (
                        <Link
                            to="/menu"
                            key={cat.name}
                            className="flex flex-col items-center bg-white rounded-2xl p-6 shadow hover:shadow-md hover:-translate-y-1 transition"
                        >
                            <span className="text-4xl mb-2">{cat.icon}</span>
                            <span className="text-gray-700 font-medium">{cat.name}</span>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Features */}
            <div className="bg-orange-50 py-12 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div className="bg-white rounded-2xl p-8 shadow">
                        <div className="text-4xl mb-3">⚡</div>
                        <h3 className="text-lg font-bold text-gray-800 mb-2">দ্রুত ডেলিভারি</h3>
                        <p className="text-gray-500">মাত্র ৩০ মিনিটে আপনার দরজায়</p>
                    </div>
                    <div className="bg-white rounded-2xl p-8 shadow">
                        <div className="text-4xl mb-3">🍽️</div>
                        <h3 className="text-lg font-bold text-gray-800 mb-2">সেরা মান</h3>
                        <p className="text-gray-500">সেরা রেস্টুরেন্ট থেকে তাজা খাবার</p>
                    </div>
                    <div className="bg-white rounded-2xl p-8 shadow">
                        <div className="text-4xl mb-3">💳</div>
                        <h3 className="text-lg font-bold text-gray-800 mb-2">সহজ পেমেন্ট</h3>
                        <p className="text-gray-500">bKash, Card বা Cash on Delivery</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home