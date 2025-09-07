import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from "mongoose";
import chatbotRoutes from './routes/chatbot.route.js'

const app = express()
dotenv.config()

const port = process.env.PORT || 3000

// middleware
app.use(express.json());
app.use(cors());

// database connection code
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
  console.log("Connected to MongoDB")
}).catch((error)=>{
  console.log("❌ Error while connecting to MongoDB: ", error)
})

// defining Routes
app.use("/bot/v1/", chatbotRoutes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
