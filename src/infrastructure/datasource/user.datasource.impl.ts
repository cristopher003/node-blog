import { prisma } from "../../data/postgres";
import { UserDataSource } from "../../domain/datasources/user.datasource";
import { CreateUserDto, UpdateUserDto } from "../../domain/dtos";
import { UserEntity } from "../../domain/entities/user.entity";


export class UserDataSourceImp implements UserDataSource {

   async create(createUserDto: CreateUserDto): Promise<UserEntity> {
        const user= await prisma.user.create({
            data:createUserDto!
        })

      return UserEntity.fromJson(user);
    }
    
    async getAll(): Promise<UserEntity[]> {
        const user= await prisma.user.findMany();
        return user.map(user=>UserEntity.fromJson(user));
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


   async updateById(updateUserDto: UpdateUserDto): Promise<UserEntity> {
       await this.findById(updateUserDto.id);
       const updateUser= await prisma.user.update({
        where:{id:updateUserDto.id},
        data:updateUserDto.values
    });
    return UserEntity.fromJson(updateUser);
    }

    async deleteById(id: number): Promise<UserEntity> {
       await this.findById(id);
       const deleted=await prisma.user.delete({
        where:{id}
       }) ;
      return UserEntity.fromJson(deleted);
    }


}