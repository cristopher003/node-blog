import { Router } from "express";
import { PostsController } from "./controller";
import { PostDataSourceImp } from "../../infrastructure/datasource/post.datasource.impl";
import { PostRepositoryImpl } from "../../infrastructure/repositories/post.repository.impl";
import { CommentRepositoryImpl } from "../../infrastructure/repositories/comment.repository.impl";
import { CommentDataSourceImp } from "../../infrastructure/datasource/comment.datasource.impl";
import { CommentsController } from "./comments.controller";


export class PostRoutes{

static get routes():Router{

    const routes=Router();

    const dataSource= new PostDataSourceImp();
    const postReposytory= new PostRepositoryImpl(dataSource);
    const postsController=new PostsController(postReposytory);

    const commentDataSource= new CommentDataSourceImp();
    const commentReposytory= new CommentRepositoryImpl(commentDataSource);
    const commentsController=new CommentsController(commentReposytory);

    // routes.get('/',postsController.getPost);
    // routes.get('/:id',postsController.getPostById);
    // routes.post('/',postsController.createPost);
    // routes.put('/:id',postsController.updatePost);
    // routes.delete('/:id',postsController.deletePost);

    routes.get('/comments',commentsController.getComments);
    routes.get('/comments/:id',commentsController.getCommentById);


    return routes;
    }

}