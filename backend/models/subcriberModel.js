const mongoose = require('mongoose')


const  SubsSchema = new mongoose.Schema(
    {
        email:{
            type:String,
            required:true,
            unique:true
        },
       
    }
)

const subsModel = mongoose.model('subscribers', SubsSchema)

module.exports =  subsModel