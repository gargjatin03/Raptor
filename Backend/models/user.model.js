import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    sender:{
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        enum: ['user']
    },
    text:{
        type: String,
        required: true
    },
    Timestamp:{
        type: Date,
        default: Date.now
    }
})

const User = mongoose.model("user", userSchema)

export default User;