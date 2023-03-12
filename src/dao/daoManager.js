const getManagerProduct = async () => {
    const modelProduct = process.env.SELECTEDDB
    await import("./MongoDB/models/Product")
    return modelProduct
}

export default getManagerProduct