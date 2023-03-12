import "dotenv/config"
import * as path from "path"
import { __dirname } from "./path.js"
import {engine} from "express-handlebars"
import express from "express"
import { Server } from "socket.io"
import { getManagerMessages } from "./dao/daoManager.js"
import chatRouter from "./routes/chatRouter.js"
import homeRouter from "./routes/homeRouter.js"

// SERVER
    const app = express()
    const PORT = 8080
    const server = app.listen(PORT, () => {
        console.log(`Server on port ${PORT}`
    )})
//

//Midlewares
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))
    app.engine("handlebars", engine())
    app.set("view engine", "handlebars")
    app.set("views", path.resolve(__dirname, "./views"))
//

// IO
    const io = new Server(server)
    io.on("connection", async (socket) => {
        socket.on("message", async (info) => {
            const data = await getManagerMessages()
            const managerMessage = new data.ManagerMessageMongoDB
            managerMessage.addElements([info]).then(() => {
                managerMessage.getElements().then((messages) => {
                    console.log(messages)
                    socket.emmit("allMessages", messages)
                })
            })
        })
    })
//

//Routes
    app.use("/", express.static(__dirname + "/public"))
    app.use("/", homeRouter)
    app.use("/chat", chatRouter)
//