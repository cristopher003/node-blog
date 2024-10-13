import { Router } from "express";
import { ProductController } from "./controller";
import { ProductDataSourceImp } from "../../infrastructure/datasource/product.datasource.impl";

import { AuthMiddleware } from "../middlewares/auth.middleware";
import { ProductRepositoryImpl } from "../../infrastructure/repositories/product.repository.impl";


export class ProductRoutes{

static get routes():Router{

    const routes=Router();

    const dataSource= new ProductDataSourceImp();
    const productRepository= new ProductRepositoryImpl(dataSource);
    const productsController=new ProductController(productRepository);



    routes.get('/',[ AuthMiddleware.validateJWT ],productsController.getProducts);
    // routes.get('/',[ authMiddleware.validateJWT ],productsController.getPost);
    routes.get('/:id',[ AuthMiddleware.validateJWT ],productsController.getProductById);
    routes.post('/',[ AuthMiddleware.validateJWT ],productsController.createProduct);
    routes.put('/:id',[ AuthMiddleware.validateJWT ],productsController.updateProduct);
    routes.delete('/:id',[ AuthMiddleware.validateJWT ],productsController.deleteProduct);

   

    return routes;
    }

}