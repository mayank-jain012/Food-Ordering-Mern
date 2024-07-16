import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";
import userModel from "../models/userModel.js";
import nodemailer from "nodemailer"

//create token
const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET);
}
const sendWelcomeEmail = async (email) => {
    console.log(email)
    try {
      // Create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        service:"gmail",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: "mayankjain12feb@gmail.com",
          pass: "dyqb tszc somg bwsv"
        }
      });
  
      // Send welcome email
     const info= await transporter.sendMail({
        from: '"GERICHT" <gericht@gmail.com>',
        to: email,
        subject: 'Welcome to Our Website',
        text: 'Thank you for signing up with us. We hope you enjoy our services!'
      });
  
      console.log('Welcome email sent successfully');
      console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    } catch (error) {
      console.error('Error sending welcome email:', error.message);
    }
  };
//login user
const loginUser = async (req,res) => {
    const {email, password} = req.body;
    try{
        const user = await userModel.findOne({email})
        if(!user){
            return res.json({success:false,message: "User does not exist"})
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.json({success:false,message: "Invalid credentials"})
        }
        sendWelcomeEmail(email)
        const token = createToken(user._id)
        res.json({success:true,token})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

//register user
const registerUser = async (req,res) => {
    const {name, email, password} = req.body;
    try{
        //check if user already exists
        const exists = await userModel.findOne({email})
        if(exists){
            return res.json({success:false,message: "User already exists"})
        }
        // validating email format & strong password
        if(!validator.isEmail(email)){
            return res.json({success:false,message: "Please enter a valid email"})
        }
        if(password.length<8){
            return res.json({success:false,message: "Please enter a strong password"})
        }
        // hashing user password
        
        const salt = await bcrypt.genSalt(10); // the more no. round the more time it will take
        const hashedPassword = await bcrypt.hash(password, salt)
        const newUser = new userModel({name, email, password: hashedPassword})
        const user = await newUser.save()
        const token = createToken(user._id)
        sendWelcomeEmail(email)
        res.json({success:true,token})
    } catch(error){
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

export {loginUser, registerUser}