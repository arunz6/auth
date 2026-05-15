import mongoose from "mongoose";


const userSchema  =  new mongoose.Schema({
  username:{
    type:String,
    require:[true,"username is require "],
    unique:[true,"username must be unique"]
  },
  email:{
    type:String,
    require:[true,"email is require "],
    unique:[true,"email must be unique"]
  },
  password:{
    type:String,
    require:[true,"password is require "],
   
  },
  verified:{
    type:Boolean,
    default:false
  }
})


const userModel = mongoose.model("user", userSchema)

export default userModel