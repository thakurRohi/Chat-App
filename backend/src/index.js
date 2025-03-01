
import express from "express"
import authRoutes from "./routes/auth.route.js";
import dotenv from "dotenv"
import { connectDB } from "./lib/db.js";
import cookiesParser from "cookie-parser";

dotenv.config()
const app = express()
const PORT = process.env.PORT 

app.use(express.json())
app.use(cookiesParser())
app.use("/api/auth",authRoutes)

app.listen(PORT,()=>{
    console.log("server is srunning on port "+PORT)
    connectDB()
})

