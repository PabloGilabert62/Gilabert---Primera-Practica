import "dotenv/config"
import express  from "express"
import { Server } from "socket.io"
import getManagerMessage from "./dao/daoManager.js"

const app = express()
const managerMessage = getManagerMessage()

//Midlewares
    app.use(express.json())
    app.use(express.urlencoded({extended:true}))
//

// Server
    app.set("port", process.env.PORT || 8080)
    const server = app.listen(app.get("port"), () => console.log("Server on port => " + app.get("port")))
//

// IO
    const io = new Server(server)
    io.on("connection", (socket) => {
        socket.on("messages", () => {
            managerMessage.addElements()
            try{
                managerMessage.getElements()
                console.log(messages)
                socket.emit("All messages", messages)
            } catch (error) {
                console.log("Error --> " + error)
            }
        })
    })
//