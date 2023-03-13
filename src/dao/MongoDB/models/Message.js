// import managerMongoDB from "../../../db/managerMongoDB.js"
import mongoose from "mongoose"

const messageCollection = "messages" //Name of my collection

const messageSchema = new mongoose.Schema({
    user: {type:String, require:true, max:50},
    message: {type:String, require:true, max:100}
})

// export class ManagerMessageMongoDB extends managerMongoDB {
//     constructor () {
//         super(process.env.MONGODBURL, "messages", schema)
//     }
// }

const messageModel = mongoose.model(messageCollection, messageSchema)

export default messageModel