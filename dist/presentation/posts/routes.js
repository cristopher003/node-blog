"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class PostRoutes {
    static get routes() {
        const routes = (0, express_1.Router)();
        const postsController = new controller_1.PostsController();
        routes.get('/', postsController.getPost);
        routes.get('/:id', postsController.getPostById);
        routes.post('/', postsController.createPost);
        routes.put('/:id', postsController.updatePost);
        routes.delete('/:id', postsController.deletePost);
        return routes;
    }
}
exports.PostRoutes = PostRoutes;
