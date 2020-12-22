import mongoose from 'mongoose'

const orderSchema = new Schema({
   user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User'
    },
    orderItems: [
        {
            name: {type: String, required: true},
            quantity: {type: Number, required: true},
            image: {type: String, required: true},
            price: {type: Number, required: true},
            name: {
                type: mongoose.Shchema.Types.ObjectId,
                required: true,
                ref: 'Product'
            }
        }
    ],
    shippingAddress: {
        address: { type: String, required: true},
        city: { type: String, required: true},
        zipCode: { type: String, required: true}
    },
    paymentMethod: {
        type: String,
        required: true,
    },
    taxPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    shippingPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    totalPrice: {
        type: Number,
        required: true,
        default: 0.0
    }
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

export default User;