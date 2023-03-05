import express from "express";
import { register, login, logout } from "../controllers/auth.js";

const router = express.Router();


//    Here is  i am able to register our app and i am using here 
//    .post method because we are going to send our user information
//    and end point will be register 
//    and i had create to register funtion here
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

export default router;
