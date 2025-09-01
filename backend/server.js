import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { connectDB } from './utils/connectDB'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 4000
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

connectDB()

app.use("/api/user",(req,res)=>{
    res.status(200).json({message:"User Router"})
})


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})


