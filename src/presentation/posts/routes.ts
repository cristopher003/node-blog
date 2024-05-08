import { Router } from "express";
import { PostsController } from "./controller";
import { PostDataSourceImp } from "../../infrastructure/datasource/post.datasource.impl";
import { PostRepositoryImpl } from "../../infrastructure/repositories/post.repository.impl";
import { CommentRepositoryImpl } from "../../infrastructure/repositories/comment.repository.impl";
import { CommentDataSourceImp } from "../../infrastructure/datasource/comment.datasource.impl";
import { CommentsController } from "./comments.controller";
import { AuthMiddleware } from "../middlewares/auth.middleware";


export class PostRoutes{

static get routes():Router{

    const routes=Router();

    const dataSource= new PostDataSourceImp();
    const postReposytory= new PostRepositoryImpl(dataSource);
    const postsController=new PostsController(postReposytory);

    const commentDataSource= new CommentDataSourceImp();
    const commentReposytory= new CommentRepositoryImpl(commentDataSource);
    const commentsController=new CommentsController(commentReposytory);



    routes.get('/',[ AuthMiddleware.validateJWT ],postsController.getPost);
    // routes.get('/',[ authMiddleware.validateJWT ],postsController.getPost);
    routes.get('/:id',[ AuthMiddleware.validateJWT ],postsController.getPostById);
    routes.post('/',[ AuthMiddleware.validateJWT ],postsController.createPost);
    routes.put('/:id',[ AuthMiddleware.validateJWT ],postsController.updatePost);
    routes.delete('/:id',[ AuthMiddleware.validateJWT ],postsController.deletePost);

    // definir /categories
    // definir /tag 
    routes.get('/tags/:tag', [AuthMiddleware.validateJWT], postsController.getPostsByTag);
    routes.get('/categories/:category', [AuthMiddleware.validateJWT], postsController.getPostsByCategory);

    routes.post('/comment',commentsController.createComment);
    routes.get('/comment/:id',commentsController.getCommentById);
    routes.put('/comment/:id',commentsController.updateComment);
    routes.delete('/comment/:id',commentsController.deleteComment);
  
    

    return routes;
    }

}