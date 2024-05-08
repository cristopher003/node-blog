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
        const post= await prisma.user.findMany();
        return post.map(post=>UserEntity.fromJson(post));
    }

    async findById(id: number): Promise<UserEntity> {
        const user= await prisma.user.findFirst({
            where:{id}
        });

        if (!user) throw 'User with id not found';
        return UserEntity.fromJson(user);

    }

   async findByEmail(email: string): Promise<UserEntity | null>  {
        const user= await prisma.user.findFirst({
            where:{email}
        });

        if (!user){ return null}

        return UserEntity.fromJson(user);
    }


   async updateById(updatePostDto: UpdateUserDto): Promise<UserEntity> {
       await this.findById(updatePostDto.id);
       const updatePost= await prisma.user.update({
        where:{id:updatePostDto.id},
        data:updatePostDto.values
    });
    return UserEntity.fromJson(updatePost);
    }

    async deleteById(id: number): Promise<UserEntity> {
       await this.findById(id);
       const deleted=await prisma.user.delete({
        where:{id}
       }) ;
      return UserEntity.fromJson(deleted);
    }


}