import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])

    const addToCart = (food) => {
        setCartItems(prev => {
            const exists = prev.find(item => item._id === food._id)
            if (exists) {
                return prev.map(item =>
                    item._id === food._id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            }
            return [...prev, { ...food, quantity: 1 }]
        })
    }

    const removeFromCart = (id) => {
        setCartItems(prev => prev.filter(item => item._id !== id))
    }

    const updateQuantity = (id, quantity) => {
        if (quantity === 0) return removeFromCart(id)
        setCartItems(prev =>
            prev.map(item => item._id === id ? { ...item, quantity } : item)
        )
    }

    const clearCart = () => setCartItems([])

    const totalAmount = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity, 0
    )

    return (
        <CartContext.Provider value={{
            cartItems, addToCart, removeFromCart, updateQuantity, clearCart, totalAmount
        }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)