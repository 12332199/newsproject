const express = require("express");
const cors = require('cors');
const dotenv = require('dotenv');
const connDB = require("./config/db");
const cookieParser = require('cookie-parser')
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser())

app.use(express.static("public"));

//routes
app.use('/api/news/category',require('./routes/catRoutes'));
app.use('/api/news',require("./routes/newsRoute"))
app.use('/api/user',require("./routes/userRoute"))
app.use('/api/news/subscriber',require("./routes/SubsRoute"))


const port = 6969 || process.env.PORT
connDB();
app.listen(port,()=>{
    console.log(`Server Running On Port ${port}`)
})