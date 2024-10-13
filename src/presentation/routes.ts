import { Router } from "express";
import { ProductRoutes } from "./products/routes";
import { UserRoutes } from "./users/routes";

export class AppRoutes{
    static get routes():Router{
    const routes=Router();
        routes.use('/product',ProductRoutes.routes);
        routes.use('/user',UserRoutes.routes);

        return routes;
    }
}