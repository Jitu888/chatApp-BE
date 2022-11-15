const employeeModel = require('../models/employeeModel');


exports.createEmployee = async (req,res)=>{
    console.log("67845678987643456",req.file)
    const urls =  `http://localhost:1111/img/${req.file.filename}` 

    console.log(urls)
    req.body.profilePic = urls
    const data = req.body
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>..",data)
   await employeeModel(data).save((err,result)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(200).send({result})
        }

    })

}


exports.getAllEmployee = async(req,res)=>{
    console.log(req.body,"qwerty")
    try{
    // const {min,max,...others} = req.query
    const data = await employeeModel.find().limit()
    res.status(200).send({result:data})
    }
    catch(error){
      res.send(error)
    }
}



exports.getEmployee = async(req,res)=>{
    console.log(req.query,"qazxdsdfgh")
    try{
    // const {min,max,...others} = req.query
    const data = await employeeModel.findById({_id:req.query.id})
    res.status(200).send(data)
    }
    catch(error){
      res.send(error)
    }
}
















exports.deleteEmployee = async(req,res)=>{
    try{
        await employeeModel.findByIdAndDelete(req.query.id);
        res.status(200).send("Employee has been deleted")
    }
    catch(error){
        res.send(error)
    }

}



exports.updateEmployee = async(req,res)=>{
    try{
       const updatedEmployee = await employeeModel.findByIdAndUpdate(req.query.id,{$set:req.body},{new:true});
        res.status(200).send(updatedEmployee)
    }
    catch(error){
        res.send(error)
    }

}


