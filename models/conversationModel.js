const mongoose = require('mongoose');

const Conversation = new mongoose.Schema(
    {
        members:{
            type:Array
        }

    },
    {
        timestamps:true
    }
);

const conversationModel = mongoose.model("conversation",Conversation)
module.exports = conversationModel;