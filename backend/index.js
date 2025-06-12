import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoute from "./routes/userRoute.js"
import messageRoute from "./routes/messageRoute.js"
import cookieParser from "cookie-parser";
import cors from "cors";
import {app,server} from "./socket/socket.js"
import path from "path";
dotenv.config({});


const PORT = process.env.PORT || 5000;

const _dirname = path.resolve();

//middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());
const corsOption={
    origin:"http://localhost:5173",
    credentials:true
}

app.use(cors(corsOption));

app.use("/api/v1/user",userRoute);
app.use("/api/v1/message" , messageRoute);

// serve frontend
app.use(express.static(path.join(_dirname, "/frontend/dist")));

app.get(/(.*)/, (_, res) => {
    res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"));
});

server.listen(PORT,()=>{
    connectDB();
})
