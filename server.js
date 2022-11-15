const express  = require('express');
const app = express();
const port = 1111;
const mongoose = require('mongoose');
const signinsignupRoute = require('./routes/signinsignupRoute')
const employeeRoutes = require('./routes/employeeRoute');
const conversationRoutes = require('./routes/conversationRoute');
const messageRoutes = require('./routes/messageRoute');
const userRoutes = require("./routes/userRoute")
app.use(express.json());
app.use("/img",express.static('uploads'));
const helmet = require('helmet');
const morgan = require('morgan')

const cors = require('cors')
app.use(cors())
// app.use(helmet());
// app.use(morgan("common"));
app.use('/',signinsignupRoute);
app.use('/',employeeRoutes);
app.use('/',messageRoutes);
app.use('/',conversationRoutes);
app.use('/',userRoutes)




function db_init(){
    const uri = "mongodb+srv://@cluster0.0lsnx.mongodb.net/?retryWrites=true&w=majority";
    mongoose.connect(uri,(err)=>{
          if(!err){
             console.log("db connected")
          }
          else{
            console.log(err)
          }     
    })
};
db_init()



module.exports = app;