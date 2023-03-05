import { db } from "../db.js";
import bcrypt from "bcryptjs"; // this library is used bcoz password save in database in bycrypt form  
import jwt from "jsonwebtoken";


                    // check existing user from my app 
export const register = (req, res) => {
                

  const q = "SELECT * FROM users WHERE email = ? OR username = ?";
  db.query(q, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.length) return res.status(409).json("User already exits!!");

    // hash the password and create a user

    // encrpt your password here hashSync function use
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);



    // this function use we are going insert our user to our database this query 

    // open register.jsx usestate hook
    const q = "INSERT INTO users (`username`,`email`,`password`) VALUES (?)";

    const values = [req.body.username, req.body.email, hash];

    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      console.log(data, "DATA");
      return res.status(200).json("User has been created");
    });
  });
};

export const login = (req, res) => {
  // check user already to login 

  const q = "SELECT * FROM users WHERE username =?";

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.length === 0) return res.status(404).json("User not found!!");

    // check password correct or not
    // data[0] = data here but by default its retuns as an array not only our user object
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!isPasswordCorrect)
      return res.status(400).json("Wrong username or password");

    // create token here ----   
    const token = jwt.sign({ id: data[0].id }, "jwtkey");

    const { password, ...other } = data[0];

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(other);     // json(other) :- other is will pass because check data to cookie 
                        // but i cannot send my password so this is use others
  });
};

export const logout = (req, res) => {

   res.clearCookie("access_token",{
    sameSite:"none",
    secure:true
   }).status(200).json("User has been logged out..")
};
