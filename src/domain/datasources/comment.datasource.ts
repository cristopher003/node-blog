import { CreateCommentDto } from "../dtos/comment/create-comment.dto";
import { UpdateCommentDto } from "../dtos/comment/update-comment.dto";
import { CommentEntity } from "../entities/comment.entity";


export abstract class CommentDataSource{
    abstract create(createCommentDto:CreateCommentDto):Promise<CommentEntity>;
    abstract getAll():Promise<CommentEntity[]>;
    abstract findById(id:number):Promise<CommentEntity>;
    abstract updateById(updateCommentDto:UpdateCommentDto):Promise<CommentEntity>;
    abstract deleteById(id:number):Promise<CommentEntity>;

}