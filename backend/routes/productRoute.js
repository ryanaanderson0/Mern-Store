import express from 'express'
import Product from '../models/product.model.js'
import asyncHandler from 'express-async-handler'

const router = express.Router()

// GET all product from from /api/products
router.get('/', asyncHandler(async (req, res) => {

    const product = await Product.find({})

    res.json(product)
  }))

//GET single product by ID from /api/products/id
router.get('/:id', asyncHandler( async(req, res) => {
    const product = await Product.findById(req.params.id)
    
    if(product) {
        res.json(product)
    } else {
        res.status(404).json({ message: 'Product Not Found'})
    }

  }))
  


export default router