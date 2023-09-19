const express = require('express')
require('dotenv').config()
const app = express()
const PORT = process.env.PORT || 3000

// middleware
app.use(express.json())


app.listen(PORT, (req, res) => {
    console.log(`Server running on port ${PORT}...`)
})