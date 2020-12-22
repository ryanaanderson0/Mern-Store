import mongoose from 'mongoose'

const userSchema = new Schema({
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
        type: Boolean,
        required: true,
        default: false
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