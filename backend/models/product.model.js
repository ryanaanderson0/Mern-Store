import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema({
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    review: { type: String, required: true }
},{
    timestamp: true
})

const productSchema =  mongoose.Schema({
   //use mongoose objectID to reference user data
   user: {
       type: mongoose.Schema.Types.ObjectId,
       required: true,
       ref: 'User'
   },
   name: {
        type: String,
        require: true,
        unique: true,
    },
    image: {
        type: String,
        require: true,
    },
    notes: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    year: {
        type: Number,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    countInStock: {
        type: Number,
        require: true,
    },
    rating: {
        type: Number,
        require: true,
        default: 0
    },
    numReviews: {
        type: Number,
        require: true,
        defualt: 0
    },
    reviews: [reviewSchema]

}, {
    timestamps: true
})

const Product = mongoose.model('Product', productSchema)

export default Product;