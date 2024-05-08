import { CommentDataSource } from "../../domain/datasources/comment.datasource";
import { CreateCommentDto } from "../../domain/dtos/comment/create-comment.dto";
import { UpdateCommentDto } from "../../domain/dtos/comment/update-comment.dto";
import { CommentEntity } from "../../domain/entities/comment.entity";
import { CommentRepository } from "../../domain/repositories/comment.repository";



export class CommentRepositoryImpl implements CommentRepository{

    constructor(private readonly datasource:CommentDataSource){}

    create(createCommentDto: CreateCommentDto): Promise<CommentEntity> {
        return this.datasource.create(createCommentDto);
    }
    getAll(): Promise<CommentEntity[]> {
        return this.datasource.getAll();
    }
    findById(id: number): Promise<CommentEntity> {
        return this.datasource.findById(id);
    }
    updateById(updateCommentDto: UpdateCommentDto): Promise<CommentEntity> {
        return this.datasource.updateById(updateCommentDto);
    }
    deleteById(id: number): Promise<CommentEntity> {
        return this.datasource.deleteById(id);

    }

}