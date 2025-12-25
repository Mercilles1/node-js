const express = require('express')
const connectDB = require('./db')
const User = require('./userModel')

const app = express()
app.use(express.json())

connectDB()

// GET - hammasi
app.get('/users', async (req, res) => {
    const users = await User.find()
    res.json(users)
})

// GET - bitta user
app.get('/users/:id', async (req, res) => {
    const user = await User.findById(req.params.id)
    if (!user) return res.status(404).json({ msg: "User not found" })
    res.json(user)
})

// POST - yangi user
app.post('/users', async (req, res) => {
    const { name, age } = req.body
    const newUser = await User.create({ name, age })
    res.status(201).json(newUser)
})

// PUT - to‘liq update
app.put('/users/:id', async (req, res) => {
    const user = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
    if (!user) return res.status(404).json({ msg: "User not found" })
    res.json(user)
})

// PATCH - qisman update
app.patch('/users/:id', async (req, res) => {
    const user = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
    if (!user) return res.status(404).json({ msg: "User not found" })
    res.json(user)
})

// DELETE
app.delete('/users/:id', async (req, res) => {
    await User.findByIdAndDelete(req.params.id)
    res.json({ msg: "User deleted" })
})

const PORT = 5000
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`))
