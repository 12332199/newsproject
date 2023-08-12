const mongoose = require('mongoose');


const connDB = async () =>{
  try {
    await mongoose.connect(process.env.MONGO);
    console.log('Database connected successfully');

  //   const fetched_data = await mongoose.connection.db.collections("newscontents");
  //   fetched_data.find({}).toArray(function(err,data){
  //     if(err) console.log(err)
  //     else{
  //       global.newscontents = data
  //       console.log([ global.newscontents])
  // }})
  } catch (error) {
    console.log(error);
  }
}



module.exports = connDB