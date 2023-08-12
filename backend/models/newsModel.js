const mongoose = require('mongoose')


const newsSchema = new mongoose.Schema({
    photo:{
        type:String,
        require:true
    },
    title:{
        type:String,
        require:true
    }, 
    description:{
        type:String,
        require:true
    },
    category: {
        type:String,
        require:true
      },
     subdesc:{
        type:String,
        require:true
    }
},{timestamps:true})


const newsModel = mongoose.model('newscontent',newsSchema)

module.exports = newsModel