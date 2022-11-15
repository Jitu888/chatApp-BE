const userModel = require("../models/user")



exports.getUser = async(req,res)=>{
    // console.log(req.query,"qazxdsdfgh")
    try{
    // const {min,max,...others} = req.query
    const data = await userModel.findOne({_id:req.query.id})
    res.status(200).send(data)
    }
    catch(error){
      res.send(error)
    }
}


exports.updateUser = async(req,res)=>{

       if(req.body.userId === req.query.id || req.user.isAdmin){
            if(req.body.password){
              try{
                const pass = await hash_password(req.body.password)
                req.body.password = pass

              }
              catch(err){
                  return res.status(500).send(err)
              }
            }
            try{
               const user = await userModel.findByIdAndUpdate(req.query.id,{$set:req.body});
               res.status(200).send("account is updated")
            }
            catch(err){
              return res.status(500).send(err)
            }
       }
       else{
          return res.status(403).send("you are not authorised")
       }
  }


  exports.followUser = async(req,res) =>{
    if(req.body.userId !== req.query.id){
       try{
            const user = await userModel.findById(req.query.id);
            const currentUser = await userModel.findById(req.body.userId);
            console.log(user,req.body.userId)
            if(!user.followings.includes(req.body.userId)){
                await user.updateOne({$push:{followings:req.body.userId},new:true})
                await currentUser.updateOne({$push:{followers:req.query.id},new:true})
                res.status(200).send("user has been followed")
            }
            else{
              res.status(403).send("you alraedy follow this user")
            }
            
       }
       catch(err){

       }



    }
    else{
        res.status(403).send("you can't follow yourself")
    }
  }



  exports.unfollowUser = async(req,res) =>{
    if(req.body.userId !== req.query.id){
       try{
            const user = await userModel.findById(req.query.id);
            const currentUser = await userModel.findById(req.body.userId);
            console.log(user,req.body.userId)
            if(user.followings.includes(req.body.userId)){
                await user.updateOne({$pull:{followings:req.body.userId}})
                await currentUser.updateOne({$pull:{followers:req.query.id}})
                res.status(200).send("user has been unfollowed")
            }
            else{
              res.status(403).send("you alraedy unfollow this user")
            }
            
       }
       catch(err){

       }



    }
    else{
        res.status(403).send("you can't unfollow yourself")
    }
  }