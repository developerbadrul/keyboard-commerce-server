import { demoProducts } from "../../fakeData/demodata"
import { TProducts } from "./products.interface"
import { ProductsModal } from "./products.model"


const getAllProductFromDb = async (search: string, minPrice: number | null, maxPrice: number | null, sort: string) => {
    const query: any = {};

    //search by name & brand
    if (search) {
        query.$or = [
            { title: { $regex: search, $options: "i" } },
            { brand: { $regex: search, $options: "i" } }
        ];
    }

    //Filter by price range
    if (minPrice != null || maxPrice != null) {
        query.price = {};
        if (minPrice != null) query.price.$gte = minPrice;
        if (maxPrice != null) query.price.$lte = maxPrice;
    }

    //sorting by price
    let sortOption: any = {};
    if (sort === "priceAsc") {
        sortOption.price = 1;
    } else if (sort === "priceDesc") {
        sortOption.price = -1
    }

    // console.log("query in service",query);


    const result = await ProductsModal.find(query).sort(sortOption)
    return result
}


const addNewProductInDb = async (product: TProducts) => {
    const result = await ProductsModal.create(product)
    // console.log(result);
    return result

}


const updateProductInDb = async (productId: string, updateData: Partial<TProducts>) => {
    const result = await ProductsModal.findByIdAndUpdate(productId, updateData, { new: true });
    return result
}

export const ProductService = {
    getAllProductFromDb,
    addNewProductInDb,
    updateProductInDb
}