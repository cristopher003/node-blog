"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class PostsController {
    constructor() {
        this.getPost = (req, resp) => {
            // const post= await prisma.post.findMany();
            console.log("sss");
            resp.json({ 'post': "ggg" });
        };
        this.getPostById = (req, resp) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const post = yield postgres_1.prisma.post.findFirst({
                where: { id }
            });
            post ? resp.json(post) : resp.status(400).json({
                error: 'Text property is required'
            });
        });
        this.createPost = (req, resp) => __awaiter(this, void 0, void 0, function* () {
            const [error, createPostDto] = dtos_1.CreatePostDto.create(req.body);
            if (error)
                return resp.status(400).json({ error });
            const post = yield postgres_1.prisma.post.create({
                data: createPostDto
            });
            resp.json(post);
        });
        this.updatePost = (req, resp) => {
            const id = +req.params.id;
            const updatePost = postgres_1.prisma.post.update({
                where: { id },
                data: {}
            });
            resp.json(updatePost);
        };
        this.deletePost = (req, resp) => {
            const id = req.params.id;
        };
    }
}
exports.PostsController = PostsController;
