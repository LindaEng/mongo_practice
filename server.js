const express = require('express')
const mongoose = require('mongoose')
const app = express()
const productRoutes = require('./routes/productRoutes')
const errorMiddleWare = require('./middleware/errorMiddleware')

const cors = require('cors')

require('dotenv').config()
const MONGO_URL = process.env.MONGO_URL 
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.use('/api/products', productRoutes)


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/blog', (req, res) => {
    res.send('MYBLOG')
})

app.use(errorMiddleWare)

mongoose.set("strictQuery", false)
mongoose.connect(MONGO_URL).then(()=> {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log('Server running on port 3000'))
}).catch((err) => console.log(err))