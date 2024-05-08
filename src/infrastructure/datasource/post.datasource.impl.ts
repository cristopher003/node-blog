import { prisma } from "../../data/postgres";
import { PostDataSource } from "../../domain/datasources/post.datasource";
import { CreatePostDto } from "../../domain/dtos";
import { UpdatePostDto } from "../../domain/dtos/post/update-post.dto";
import { PostEntity } from "../../domain/entities/post.entity";

export class PostDataSourceImp implements PostDataSource {
   
   async create(createPostDto: CreatePostDto): Promise<PostEntity> {
        const post= await prisma.post.create({
            data:{...createPostDto!}
        })

      return PostEntity.fromJson(post);
    }
    
    async getAll(): Promise<PostEntity[]> {
        const post= await prisma.post.findMany();
        return post.map(post=>PostEntity.fromJson(post));
    }

    async findById(id: number): Promise<PostEntity> {
        const post= await prisma.post.findFirst({
            where:{id}
        });

        if (!post) throw 'Post with id not found';
        return PostEntity.fromJson(post);

    }

   async updateById(updatePostDto: UpdatePostDto): Promise<PostEntity> {
       await this.findById(updatePostDto.id);
       const updatePost=prisma.post.update({
        where:{id:updatePostDto.id},
        data:updatePostDto.values
    });
    return PostEntity.fromJson(updatePost);
    }

    async deleteById(id: number): Promise<PostEntity> {
       await this.findById(id);
       const deleted=await prisma.post.delete({
        where:{id}
       }) ;
      return PostEntity.fromJson(deleted);
    }


}