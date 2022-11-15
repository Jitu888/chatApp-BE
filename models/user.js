const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        username : {
            type:String,
            required:true,
            min:3,
            max:20
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true,
            min:6
        },
        profilePicture:{
             type:String,
             default:""
        },
        coverPicture:{
            type:String,
            default:""
       },
       followers:{
         type:Array,
         default:[]
       },
       followings:{
          type:Array,
          default:[]
       },
       idAdmin:{
          type:Boolean,
          default:false
       },
       
       
       
        
},
{
    timestamps:true
}
    
)

const userModel = mongoose.model("userdatas",userSchema);
module.exports = userModel