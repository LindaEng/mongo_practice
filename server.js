const express = require('express')
const mongoose = require('mongoose')
const app = express()
const productRoutes = require('./routes/productRoutes')
const errorMiddleWare = require('./middleware/errorMiddleware')

require('dotenv').config()
const MONGO_URL = process.env.MONGO_URL 
const PORT = process.env.PORT || 3000


app.use(express.json())

app.use('/api/products', productRoutes)



app.get('/', (req, res) => {
    console.log("IS IT THERE?",process.env.NODE_ENV)
    throw Error("BROKEN")
    // res.send('Hello World!')
})

app.get('/blog', (req, res) => {
    res.send('MYBLOG')
})

app.use(errorMiddleWare)

app.listen(PORT, () => console.log('Server running on port 3000'))

mongoose.connect(MONGO_URL).then(()=> {
    console.log('Connected to MongoDB')
}).catch((err) => console.log(err))