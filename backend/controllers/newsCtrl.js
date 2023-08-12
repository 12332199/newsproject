const newsModel = require("../models/newsModel")


const addNews = async(req,res)=>{
    try {
        const {title,description,category,subdesc} = req.body
       
        const news = await newsModel({
            photo:req.file.filename,
            title,
            description,
            category,
            subdesc
            
        }).save()

        res.status(201).send({
           
            message:"News Added Successfully",
            news
        })
    
    } catch (error) {
        console.log(error)
        res.status(501).send({
            message:"found error",
            error
        })
    }
}




const getNews = async(req,res)=>{
    try {
         const news = await  newsModel.find({})
         res.status(201).json({
            totalnews:news.length,
            message:"Get All News",
            news
        })
    } catch (error) {
        console.log(error)
        res.status(501).send({
            message:"found error",
            error
        })
    }
}

const getSinNews = async(req,res)=>{
    try {
         const {id} = req.params
         const news = await newsModel.findById(id);
         res.status(201).json(news)
    } catch (error) {
        console.log(error)  
              res.status(501).send({
            message:"found error",
            error
        })
    }
}




const updateNews = async(req,res)=>{
    try {
        const {id} = req.params;
         const {title,description,category,subdesc} = req.body;
      
       
        const news = await newsModel.findByIdAndUpdate(id,{photo:req.file,title,description,category,subdesc},{new:true})

       
        await news.save() 
        res.status(201).json({
            message:"updated Successfully",
            news
        })
    } catch (error) {
        console.log(error)
        res.status(501).send({
            message:"found error",
            error
        })
    }
}



const deleteNews = async(req,res)=>{
    try {
         const news = await newsModel.findByIdAndDelete(req.params.id)
         res.status(201).json({
         message:" News Deleted",
            news
        })
    } catch (error) {
        console.log(error)
        res.status(501).send({
            message:"found error",
            error
        })
    }
}




///serach cont

const serachNews = async(req,res)=>{
    try {
        const { keyword } = req.params;
        const resutls = await newsModel
          .find({
            $or: [
              { title: { $regex: keyword, $options: "i" } },
              { description: { $regex: keyword, $options: "i" } },
            ],
          });
          
        res.json(resutls);
      } catch (error) {
        console.log(error);
        res.status(400).send({
          success: false,
          message: "Error In Search Product API",
          error,
        });
      }
}


//breaking news api

const BNews = async(req,res)=>{
  
    try {
        const result = await newsModel.aggregate([{$match:{category:"breaking-news"}}])
        res.json(result)

    } catch (error) {
        console.log(error)
    }
}

///top news api

const TopNews = async(req,res)=>{
  
    try {
        const result = await newsModel.aggregate([{$match:{category:"top-news"}}])
        res.json(result)

    } catch (error) {
        console.log(error)
    }
}


//filter category wise api

const catFilter = async(req,res)=>{
    try {
        const { keyword } = req.params;

        const result = await newsModel.aggregate([
            {$match : {category: new RegExp(keyword,"i")}}
        ])
        res.json(result)
    } catch (error) {
        console.log(error)
    }
}

 const findWithQuery = async(req,res)=>{
    try {
       let items
       if(!req.query.category){
        items = await newsModel.find()
       }else{
        items =await newsModel.find({category:req.query.category})
       }

       res.json(items)
    } catch (error) {
        console.log(error)
    }
 }

module.exports = {addNews,getNews,getSinNews,updateNews,deleteNews,serachNews,BNews,TopNews,catFilter,findWithQuery}