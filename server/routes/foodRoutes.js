// import express from 'express'
// import Food from '../models/Food.js'
// import authMiddleware from '../middleware/authMiddleware.js'

// const router = express.Router()

// router.get('/', async (req, res) => {
//     try {
//         const foods = await Food.find({ available: true })
//         res.json({ success: true, foods })
//     } catch (err) {
//         res.json({ success: false, message: err.message })
//     }
// })

// router.get('/:category', async (req, res) => {
//     try {
//         const foods = await Food.find({ category: req.params.category, available: true })
//         res.json({ success: true, foods })
//     } catch (err) {
//         res.json({ success: false, message: err.message })
//     }
// })

// router.post('/add', authMiddleware, async (req, res) => {
//     try {
//         const food = new Food(req.body)
//         await food.save()
//         res.json({ success: true, food })
//     } catch (err) {
//         res.json({ success: false, message: err.message })
//     }
// })
// router.put('/:id', authMiddleware, async (req, res) => {
//     try {
//         const food = await Food.findByIdAndUpdate(req.params.id, req.body, { new: true })
//         res.json({ success: true, food })
//     } catch (err) {
//         res.json({ success: false, message: err.message })
//     }
// })

// router.delete('/:id', authMiddleware, async (req, res) => {
//     try {
//         await Food.findByIdAndDelete(req.params.id)
//         res.json({ success: true, message: 'Food deleted' })
//     } catch (err) {
//         res.json({ success: false, message: err.message })
//     }
// })

// export default router

import express from 'express'
import Food from '../models/Food.js'
import authMiddleware from '../middleware/authMiddleware.js'

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const foods = await Food.find({ available: true })
        res.json({ success: true, foods })
    } catch (err) {
        res.json({ success: false, message: err.message })
    }
})

router.get('/:category', async (req, res) => {
    try {
        const foods = await Food.find({ category: req.params.category, available: true })
        res.json({ success: true, foods })
    } catch (err) {
        res.json({ success: false, message: err.message })
    }
})

router.post('/add', authMiddleware, async (req, res) => {
    try {
        const food = new Food(req.body)
        await food.save()
        res.json({ success: true, food })
    } catch (err) {
        res.json({ success: false, message: err.message })
    }
})

router.put('/:id', authMiddleware, async (req, res) => {
    try {
        const food = await Food.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json({ success: true, food })
    } catch (err) {
        res.json({ success: false, message: err.message })
    }
})

router.delete('/:id', authMiddleware, async (req, res) => {
    try {
        await Food.findByIdAndDelete(req.params.id)
        res.json({ success: true, message: 'Food deleted' })
    } catch (err) {
        res.json({ success: false, message: err.message })
    }
})

export default router