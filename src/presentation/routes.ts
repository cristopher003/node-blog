import { Router } from "express";
import { PostRoutes } from "./posts/routes";
import { UserRoutes } from "./users/routes";

export class AppRoutes{
    static get routes():Router{
    const routes=Router();
        routes.use('/post',PostRoutes.routes);
        routes.use('/user',UserRoutes.routes);

        return routes;
    }
}