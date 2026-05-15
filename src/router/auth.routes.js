import { Router } from "express"
import authController from "../controller/auth.controller.js";


const authroutes = Router();


//  /api/auth/register
authroutes.post("/register",authController.register)

authroutes.post("/getme",authController.getme)

authroutes.post("/refreshtoken",authController.resfeshtoken)
authroutes.get("/logout",authController.logout)
authroutes.get ("/logout-all",authController.logoutall)
authroutes.post("/login",authController.login)
authroutes.get("/verify-email",authController.verifyemail)











export default authroutes
