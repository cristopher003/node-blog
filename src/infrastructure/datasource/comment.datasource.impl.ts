import { prisma } from "../../data/postgres";
import { CommentDataSource } from "../../domain/datasources/comment.datasource";
import { CreateCommentDto } from "../../domain/dtos/comment/create-comment.dto";
import { UpdateCommentDto } from "../../domain/dtos/comment/update-comment.dto";
import { CommentEntity } from "../../domain/entities/comment.entity";



export class CommentDataSourceImp implements CommentDataSource {
   
   async create(createCommentDto: CreateCommentDto): Promise<CommentEntity> {
        const Comment= await prisma.comment.create({
            data:createCommentDto!
        })

      return CommentEntity.fromJson(Comment);
    }
    
    async getAll(): Promise<CommentEntity[]> {
        const comments= await prisma.comment.findMany();
        return comments.map(comment=>CommentEntity.fromJson(comment));
    }

    async findById(id: number): Promise<CommentEntity> {
        const comment= await prisma.comment.findFirst({
            where:{id}
        });

        if (!comment) throw 'Post with id not found';
        return CommentEntity.fromJson(comment);

    }

   async updateById(updateCommentDto: UpdateCommentDto): Promise<CommentEntity> {
       await this.findById(updateCommentDto.id);
       const updateComment=prisma.comment.update({
        where:{id:updateCommentDto.id},
        data:updateCommentDto.values
    });
    return CommentEntity.fromJson(updateComment);
    }

    async deleteById(id: number): Promise<CommentEntity> {
       await this.findById(id);
       const deleted=await prisma.comment.delete({
        where:{id}
       }) ;
      return CommentEntity.fromJson(deleted);
    }


}