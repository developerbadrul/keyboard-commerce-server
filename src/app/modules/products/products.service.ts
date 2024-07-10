import { demoProducts } from "../../fakeData/demodata"
import { TProducts } from "./products.interface"
import { ProductsModal } from "./products.model"


const getAllProductFromDb = async () => {
    const result = await ProductsModal.find()
    return result
}


const addNewProductInDb = async (product: TProducts) => {
    const result = await ProductsModal.create(product)
    // console.log(result);
    return result

}


export const ProductService = {
    getAllProductFromDb,
    addNewProductInDb
}