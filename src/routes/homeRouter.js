import { Router } from "express"

const homeRouter = Router()

homeRouter.get("/", (req, res) => {
    res.send("Hi from home")
})

export default homeRouter