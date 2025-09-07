import mongoose from "mongoose";

const botSchema = mongoose.Schema({
    text:{
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    Timestamp:{
        type: Date,
        default: Date.now
    }
})

const Bot = mongoose.model("Bot", botSchema)
export default Bot;