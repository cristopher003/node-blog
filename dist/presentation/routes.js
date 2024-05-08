"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const express_1 = require("express");
const routes_1 = require("./posts/routes");
class AppRoutes {
    static get routes() {
        const routes = (0, express_1.Router)();
        routes.use('/post', routes_1.PostRoutes.routes);
        return routes;
    }
}
exports.AppRoutes = AppRoutes;
