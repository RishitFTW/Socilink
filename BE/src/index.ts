import express from 'express';
import AuthRouter from './routes/auth';
import router from './routes/cruds';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();

const app=express();
app.use(express.json());

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI as string;
const SECRET_KEY=process.env.SECRET_KEY

mongoose.connect(MONGO_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use('/api/v1/auth', AuthRouter)
app.use('/api/v1/check',router)


app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
});