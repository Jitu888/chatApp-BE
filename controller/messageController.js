const MessageModel = require('../models/messageModel');

exports. sendMessage = async(req,res)=>{
    const newMessage = new MessageModel(req.body);
    
    try{
        const result = await newMessage.save()
        res.status(200).send(result)
    }    
    catch(err){
        res.status(500).send(err)
    } 
} 


exports.recieveMessage = async(req,res)=>{
    try{
        const messages = await MessageModel.find({
            convesationId :req.query.id
        });
        res.status(200).send(messages)
    }
    catch(err){
        res.status(500).send(err)
    }
}