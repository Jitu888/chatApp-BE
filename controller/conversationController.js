const ConversationModel = require('../models/conversationModel')


exports.createConversation = async(req,res)=>{
        const newConversation = new ConversationModel({
            members:[req.body.senderId,req.body.receiverId]
        });
        try{
           const saveConversation = await newConversation.save();
           res.status(200).send(saveConversation)
        }   
        catch(error ){
           res.status(500).send(err)       
        }
}


exports.getConversation = async(req,res)=>{
    console.log(req.query.id)
    try{
         const result = await ConversationModel.find({
            members:{$in:req.query.id},
         });
         res.status(200).send(result)
    }
    catch(err){
        res.status(500).send(err)
    }
}