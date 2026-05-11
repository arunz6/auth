import userModel from "../models/user.model.js";
import config from "../config/config.js";
import crypto from "crypto";
import jwt from "jsonwebtoken"


async function register (req , res ) {
  const {username ,email ,password} = req.body

  const isalreadyregisterd =  await userModel.findOne({
    $or:[
      {username},{email}
    ]
  })


  if (isalreadyregisterd){
   return res.status(409).json({
      message:"username or email is already rigistered "
    })
  }
    const hashedPassword = crypto.createHash("sha256").update(password).digest("hex");
    const user = await userModel.create({
      username,
      email,
      password:hashedPassword
    })


    const token = jwt.sign({id:user._id},config.JWTKEY,{
      expiresIn:"1d "
    })

    res.status(201).json({
      message:"user registed donee",
      user:{
        username:user.username,
        email:user.email
      },token
    })

  
}







export default {register,}