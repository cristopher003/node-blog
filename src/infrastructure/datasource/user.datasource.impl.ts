import { prisma } from "../../data/postgres";
import { UserDataSource } from "../../domain/datasources/user.datasource";
import { CreateUserDto, UpdateUserDto } from "../../domain/dtos";
import { UserEntity } from "../../domain/entities/user.entity";


export class UserDataSourceImp implements UserDataSource {
   
   async create(createPostDto: CreateUserDto): Promise<UserEntity> {
        const user= await prisma.user.create({
            data:createPostDto!
        })

      return UserEntity.fromJson(user);
    }
    
    async getAll(): Promise<UserEntity[]> {
        const post= await prisma.post.findMany();
        return post.map(post=>UserEntity.fromJson(post));
    }

    async findById(id: number): Promise<UserEntity> {
        const post= await prisma.post.findFirst({
            where:{id}
        });

        if (!post) throw 'Post with id not found';
        return UserEntity.fromJson(post);

    }

   async updateById(updatePostDto: UpdateUserDto): Promise<UserEntity> {
       await this.findById(updatePostDto.id);
       const updatePost=prisma.post.update({
        where:{id:updatePostDto.id},
        data:updatePostDto.values
    });
    return UserEntity.fromJson(updatePost);
    }

    async deleteById(id: number): Promise<UserEntity> {
       await this.findById(id);
       const deleted=await prisma.post.delete({
        where:{id}
       }) ;
      return UserEntity.fromJson(deleted);
    }


}