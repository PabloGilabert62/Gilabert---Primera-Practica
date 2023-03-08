//Si es 1 es MongoDB, si no, Postresql
export const getManagerProduct = async () => {
    const modelProduct = process.env.SELECTEDDB === 1 ? 
    await import("./MongoDB/models/Product") :
    await import("./Postresql/models/Product")
    return modelProduct
}

export const getManagerMessage = async () => {
    const modelMessage = process.env.SELECTEDDB === 1 ? 
    await import("./MongoDB/models/Message") :
    await import("./Postresql/models/Message")
    return modelMessage
}