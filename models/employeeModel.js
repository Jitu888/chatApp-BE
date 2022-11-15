const mongoose = require('mongoose')

const model = mongoose.Schema({
      name: {
            type: String,
            required: true
      },
      gender:{
            type:String,
            
      },
      dateOfBirth:{
            type:String,
            
      },
      city: {
            type:String,
            
      },
      qualification: {
            type: String,
            
      },
      role:{
            type: String,
      
      },
      profilePic: {
            type: String
      },
      
    }); 
     


const employeeModel = mongoose.model("employee", model)
module.exports = employeeModel;