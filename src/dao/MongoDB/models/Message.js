import managerMongoDB from "../../../db/managerMongoDB.js"

const schema = {
    user: {type:String, require:true, max:50},
    message: {type:String, require:true, max:100}
}

export class ManagerMessageMongoDB extends managerMongoDB {
    constructor () {
        super(process.env.MONGODBURL, "messages", schema)
        //Own attributes
    }
    //Own methods
}