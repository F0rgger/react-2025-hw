import {IProduct} from "./IProduct.ts";

export type IProductResponseModelType = {
    total: number;
    skip: number;
    limit: number;
    products: IProduct[];

}