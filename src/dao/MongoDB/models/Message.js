import managerMongoDB from "../../../db/managerMongoDB.js"

const schema = {
    name: {type:String, require:true, max:50},
    email: {type:String, require:true, max:50},
    message: {type:String, require:true}
}

export class ManagerMessageMongoDB extends managerMongoDB {
    constructor () {
        super(process.env.MONGODBURL, "messages", schema)
        //Own attributes
    }
    //Own methods
} 