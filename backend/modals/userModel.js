import mongoose from "mongoose";

const userModel =new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    username:{
        type:String,
        requiredt:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    ProfilePhoto:{
        type:String,
        default:""
    },
    gender:{
        type:String,
        enum:["male","female"],
        required:true
    }
},{timestamps:true});

export const User = mongoose.model("User",userModel)