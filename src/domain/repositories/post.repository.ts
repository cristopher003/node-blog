import { CreatePostDto } from "../dtos";
import { UpdatePostDto } from "../dtos/post/update-post.dto";
import { PostEntity } from "../entities/post.entity";

export abstract class PostRepository{
    abstract create(createPostDto:CreatePostDto):Promise<PostEntity>;
    abstract getAll():Promise<PostEntity[]>;
    abstract findById(id:number):Promise<PostEntity>;
    abstract updateById(updatePostDto:UpdatePostDto):Promise<PostEntity>;
    abstract deleteById(id:number):Promise<PostEntity>;

}