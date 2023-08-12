const bcrypt = require("bcryptjs")
 const jwt = require("jsonwebtoken")
const userModel = require("../models/userModel")



const Register = async(req,res)=>{
   try {
      const {name,email,password} = req.body
   const hashpassword = await  bcrypt.hash(password,10)

   const register = await userModel({
    name,
    email,
    password:hashpassword
   }).save()


   res.status(201).json({
    success:true,
    register
})
    
   } catch (error) {
    console.log(error)
    res.status(500).json({
        success:false,
        error
    })
   }
}


const Login = async(req,res)=>{
  try {
    const {email,password} = req.body
    if(!email || !password){
      res.status(404).send({
        success:false,
        message:"Invalid Password or Email"
      })
    }
    //check user
    const user = await userModel.findOne({email})
    if(!user){
      res.status(404).send({
        success:false,
        message:'Email is not Registrer'
      })
    }
    const match = await bcrypt.compare(password,user.password)
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }
    const token = await jwt.sign({_id:user._id},process.env.JWT_SECRET,{
      expiresIn:'1d'
    })
    res.status(200).send({
      success:true,
      message:"Login SuccessFully",
      user:{
        _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      },
      token
    })
  } catch (error) {
    console.log(error)
  res.status(500).send({
      success:false,
      message:"Registration error",
      error
  })
  }
}





module.exports = {Register,Login}