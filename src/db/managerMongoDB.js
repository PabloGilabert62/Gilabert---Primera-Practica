import mongoose from "mongoose"

export class ManagerMongoDB {
    #url
    constructor (url, colection, schema) {
        this.#url = url
        this.colection = colection
        this.schema = new mongoose.Schema(schema)
        this.model = mongoose.model(this.colection, this.schema)
    }

    async #setConection () {
        try {
            await mongoose.connect(this.#url)
        } catch(error) {
            console.log("Error in MongoDB conection: " + error)
        }
    }

    async getElements () {
        this.#setConection()
        try {
            const elements = await this.model.find()
            return elements
        } catch(error) {
            console.log("Error in consult of all elements in MongoDB: " + error)
        }
    }

    async getElementById (id) {
        this.#setConection()
        try {
            const element = await this.model.findById(id)
            return element
        } catch(error) {
            console.log("Error in consult of element in MongoDB: " + error)
        }
    }

    async addElements (element) { ///Add one or more elements
        this.#setConection()
        try {
            const message = await this.model.insertMany(element)
            return message
        } catch(error) {
            console.log("Error in insert of element/s in MongoDB: " + error)
        }
    }

    async updateElement (id, info) {
        this.#setConection()
        try {
            const message = await this.model.findByIdAndUpdate(id, info)
            return message
        } catch(error) {
            console.log("Error in update of element in MongoDB: " + error)
        }
    }

    async deleteElement (id) {
        this.#setConection()
        try {
            const response = await this.model.findByIdAndRemove(id)
            return response
        } catch(error) {
            console.log("Error in remove of element in MongoDB: " + error)
        }
    }
}