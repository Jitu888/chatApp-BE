const userModel = require('../models/user')
const {hash_password,match_password} = require('../utilities/bcrypt');
const {generate_token} = require('../utilities/jwt')

exports.register = async (req,res)=>{
    console.log(req.body)
    const pass = await hash_password(req.body.password)
    


    
    req.body.password = pass
    
    
    const newUser = req.body
    console.log(req.body)
    await userModel(req.body).save((err,result)=>{
        if(err){
            console.log(err)
            res.status(400).send(err)
        }
        else{
            console.log(result)
            res.status(200).send(result)
        }

    })

   } 

   exports.login = async(req,res)=>{
    try{
     console.log(req.body.email,req.body)
    const result = await userModel.findOne({email:req.body.email})
    if(!result){
        res.status(404).send({err:"user found"})
    }
    else{


    const hash = result.password
    console.log(hash)
    const pass_compare = await match_password(req.body?.password,hash)

    
    
    if(pass_compare){
        const {password , isAdmin, ...otherdetails} = result._doc
     const token =  generate_token(req.body?.userInfo);
    res.status(200).send({...otherdetails, token });
    }
    else{
        res.status(400).send({error:"password not matched"})
    }
    }
}
catch(err){
   res.status(403).send(err)
}
}



