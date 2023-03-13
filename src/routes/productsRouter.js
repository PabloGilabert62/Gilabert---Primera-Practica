import { Router } from "express"

const productsRouter = Router()

productsRouter.get("/", (req, res) => {
    res.render("products", [])
})

export default productsRouter