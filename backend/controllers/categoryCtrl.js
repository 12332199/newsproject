const catModel = require("../models/catModel")
var slugify = require('slugify')


const addCat = async(req,res)=>{
  
    try {
        const {name} = req.body
        const existingCat = await catModel.findOne({name})
        if(existingCat){
            return res.status(200).send({
                message:"Category is already exist"
            })
        }

        const category = await catModel({
            name,
            slug:slugify(name)
        }).save()

        res.status(200).send({
            message:"Category added Succesfully",
            category
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message:"error Found",
            error
        })
    }


}


const getAllCat = async(req,res)=>{
try {
    const category = await catModel.find({});
res.status(200).json(category)
} catch (error) {
    console.log(error)
        res.status(500).send({
            message:"error Found",
            error
        })
}

}
const getSinCat = async(req,res)=>{
    try {
       
        const  category = await catModel.findOne({slug:req.params.slug});
        res.status(200).send({
            message:"Get Category",
            category
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message:"error Found",
            error
        })
    }
}
const updateCat = async(req,res)=>{
  try {
    const {id} = req.params
    const {name} = req.body
    const category = await catModel.findByIdAndUpdate(id,{name,slug:slugify(name)},{new:true});

    res.status(200).send({
        totalCategory:category.lenght,
        message:"Updated Successfully",
        category
    })
  } catch (error) {
    console.log(error)
    res.status(500).send({
        message:"error Found",
        error
    })
  }
}

const deleteCat = async(req,res)=>{
  try {
     const category = await catModel.findByIdAndDelete(req.params.id);
     
    res.status(200).send({
        message:"Deleted Successfully",
        category
    })

  } catch (error) {
    console.log(error)
    res.status(500).send({
        message:"error Found",
        error
    })
  }
}


module.exports ={deleteCat,updateCat,getSinCat,getAllCat,addCat}