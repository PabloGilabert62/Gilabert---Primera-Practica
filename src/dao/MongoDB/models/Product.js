import managerMongoDB from "../../../db/managerMongoDB.js"

const schema = {
    name: {type:String, require:true, max:50},
    price: {type:Number, require:true},
    stock: {type:Number, require:true},
    category: {type:String, require: true, max:50}
}

export class ManagerMessageMongoDB extends managerMongoDB {
    constructor () {
        super(process.env.MONGODBURL, "products", schema)
        //Own attributes
    }
    //Own methods
} 