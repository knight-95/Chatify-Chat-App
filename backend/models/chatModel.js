/*What are all the things that a chat is going to contain
chatName
isGroupChat
list of users
latestMessage
groupAdmin */

const mongoose = require('mongoose')
const chatModel = mongoose.Schema(
    {
        // trim implies there are no trailing spaces behind and after
        chatName: { type: String, trim: true},
        isGroupChat: {type: Boolean, default:false},

        // it has to be an array since a single chat will have two users and Group chat will have more than two users
        users:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }],
        latestMessage: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
        },
        groupAdmin:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    },
    {
        timestamps: true,
    }
);
const Chat = mongoose.model("Chat", chatModel);
module.exports = Chat;