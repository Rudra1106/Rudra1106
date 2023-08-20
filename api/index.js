import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/User_routes.js'

dotenv.config()

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Connected to Mongodb");
}).catch((err) => {
    console.log(err);
})

const app = express();
const PORT = 8000;

app.use("/api/user", userRoutes)

app.listen(PORT , () => {
    console.log(`server running on port ${PORT}`);
})