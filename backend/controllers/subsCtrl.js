const subsModel = require("../models/subcriberModel")

const addSubs = async(req,res)=>{
    try {
    const {email} = req.body
    const check = await subsModel.find({email});
    if(!check){
        res.status(201).send({
            message:"Email already exist"
        })
    }

    const subs = await subsModel({
        email:email
    }).save()
    res.status(200).send({
        message:"Thanks For Subscribing",
        subs
    })
    } catch (error) {
        res.status(400).send({
            message:"Error Found",
            
        }) 
    }
}


const getSubs = async(req,res)=>{
    try {
         const subs = await subsModel.find({})
         res.status(200).json(subs) 

    } catch (error) {
        res.status(400).send({
            message:"Error Found",
            
        }) 
    }
}


module.exports = {
    getSubs,
    addSubs
}