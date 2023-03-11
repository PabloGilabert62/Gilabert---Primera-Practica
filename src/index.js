import "dotenv/config"
import express  from "express"
import socket  from "socket.io"
import getManagerMessage from "./dao/daoManager.js"

const app = express()
const managerMessage = new getManagerMessage()

//Midlewares
    app.use(express.json())
    app.use(express.urlencoded({extended:true}))
//

// Server
    app.set("port", process.env.PORT || 8080)
    const server = app.listen(app.get("port"), () => console.log("Server on port => " + app.get("port")))
//

// IO
    const io = socket(server)
    io.on("connection", (socket) => {
        socket.on("messages", info => {
            managerMessage.addElements([info]).then(() => {
                managerMessage.getElements().then((messages) => {
                    console.log(messages)
                    socket.emit("All messages", messages)
                })
            })
        })
    })
//