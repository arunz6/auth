import mongoose  from "mongoose";
import config from "./config.js";




async function connecttodb() {
  mongoose.connect(config.MONGOURI)
  .then(()=>{
console.log("db is connected ")
  })
  .catch((err)=>{
    console.log(`db is not connected ${err}`)
  })
}


export default connecttodb