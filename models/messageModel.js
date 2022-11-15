const mongoose = require('mongoose');

const Message = new mongoose.Schema(
    {
       conversationId:{
        type:String
       },
        sender:{
            type:String
        },
        text:{
            type:String
        }
    },
    {
        timestamps:true
    }
);

const MessageModel = mongoose.model("Message",Message)
module.exports = MessageModel;