import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
   name: {
        type: String,
        require: true,
        unique: true,
        trim: true,
        minlength: 5
    },
    email: {
        type: String,
        require: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
    }
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

export default User;