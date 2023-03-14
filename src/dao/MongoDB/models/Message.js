import mongoose from "mongoose"
const messageCollection = "messages"

const messageSchema = new mongoose.Schema({
    user: {type:String, require:true, max:50},
    message: {type:String, require:true, max:100}
})

export const messageModel = mongoose.model(messageCollection, messageSchema)