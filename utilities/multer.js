const multer = require('multer');
const path = require('path');
const fs = require('node:fs/promises');

var storage = multer.diskStorage({
    destination:"./uploads",
    
    
    // function(req,file,cb){
    //     console.log(path.join(__dirname,"../uploads"))
    //     cb(null,path.join(__dirname,"../uploads"))
    
    filename:function(req,file,cb){
        let ext = path.extname(file.originalname)
        const fileName = `${file.fieldname + new Date().getTime()}.${ext}`;

        console.log("...................",file)
        cb(null,fileName)
        
    }
})


var upload = multer({
    storage:storage,
    fileFilter:function(req,file,callback){
        console.log(file)
        if(
            file.mimetype == "image/png" ||
            file.mimetype == "image/jpeg"
            
        ){
            callback(null,true)
        }
        else{
            console.log("image should be either in jpg or png")
            callback(null, false)
        }
    },
    limits:{
        fileSize: 1024*1024*5
    }

})
 
module.exports = upload