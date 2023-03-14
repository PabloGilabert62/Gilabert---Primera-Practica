import { Router } from "express"
import { messageModel } from "../dao/MongoDB/models/Message.js" 

const chatRouter = Router()

chatRouter.get("/", async (req, res) => {
    try {
        const messages = await messageModel.find()
        res.send({result: "succes", values: messages})
    } catch (error) {
        res.send("Error in users --> " + error.message)
    }
})

chatRouter.post("/", async (req, res) => {
    try {
        const {user, message} = req.body

        console.log(`\nUser: ${user}\nMessage: ${message}`)
        
        const result = await messageModel.create({
            user,
            message
        })
        res.send({result: "succes", result : result})
    } catch (error) {
        res.send("Error in users: " + error.message)
    }
})

export default chatRouter