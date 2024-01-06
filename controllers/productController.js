const Product = require('../models/productModel')

const getProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json({products})
    } catch(error) {
        res.status(500).json({message: error.message})
    }
}

const getProductById = async (req, res) => {
    try {
        const {id} = req.params
        const product = await Product.findById(id)
        res.status(200).json({product})
    } catch(error) {
        res.status(500).json({message: error.message})
    }
}

const updateProduct = async (req, res) => {
    try {
        const {id} = req.params
        const product = await Product.findById(id)
        if(!product) {
            res.status(404).send({message: 'Product not found'})
        }
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body)
        res.status(200).send({product: updatedProduct})
    } catch (error) {
       res.status(500).send(error) 
    }
}

const deleteProduct = async (req, res) => {
    try {
        const {id} = req.params
        const product = await Product.findByIdAndDelete(id)
        if(!product) {
            res.status(404).send({message: 'Product not found'})
        }
        res.status(200).send({message: 'Product deleted successfully'})
    } catch (error) {
        res.status(500).send(error)
    }
}

const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(201).json({product})
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    createProduct
}