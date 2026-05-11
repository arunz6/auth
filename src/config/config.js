import dotenv from "dotenv"

dotenv.config();

if (!process.env.MONGOURI) {
    throw new Error("MONGO_URI is not defined in environment variables");
}

if(!process.env.JWTKEY){
  throw new error("jwt secret is missing in environment variables")
}

const config = {
  MONGOURI : process.env.MONGOURI ,
  JWTKEY :process.env.JWTKEY ,
  
  

}

export default config