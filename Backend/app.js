import express  from "express"
import  dotenv  from "dotenv"
import connectDB from "./config/db.js"
dotenv.config();
const app=express()
import cors from 'cors'

import cookieParser from "cookie-parser"

//cookies and filemiddleware
app.use(cookieParser())
app.use(cors())


// morgan middlewares
import morgan from "morgan"
app.use(morgan("tiny"))

// regular middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// import all routes here
import userRoutes from "./routes/userRoutes.js"
import voterRoutes from "./routes/votingRoutes.js"

// router middleware
app.use("/api/v1",userRoutes);
app.use("/api/voting",voterRoutes);

export default app;