import axios from 'axios'

const api = axios.create({ baseURL: '${import.meta.env.VITE_API_URL}' })

api.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config
})

export const registerUser = (data) => api.post('/auth/register', data)
export const loginUser = (data) => api.post('/auth/login', data)
export const getFoods = () => api.get('/food')
export const placeOrder = (data) => api.post('/orders/place', data)
export const getMyOrders = () => api.get('/orders/user')
export const getOrderById = (id) => api.get(`/orders/${id}`)
export const getActiveCoupons = () => api.get('/coupons/active')

export default api