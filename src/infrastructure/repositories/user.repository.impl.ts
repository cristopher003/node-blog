import { UserDataSource } from "../../domain/datasources/user.datasource";
import { CreateUserDto, UpdateUserDto } from "../../domain/dtos";
import { UserEntity } from "../../domain/entities/user.entity";
import { UserRepository } from "../../domain/repositories/user.repository";


export class UserRepositoryImpl implements UserRepository{

    constructor(private readonly datasource:UserDataSource){}

    create(createUserDto: CreateUserDto): Promise<UserEntity> {
        return this.datasource.create(createUserDto);
    }
    getAll(): Promise<UserEntity[]> {
        return this.datasource.getAll();
    }
    findById(id: number): Promise<UserEntity> {
        return this.datasource.findById(id);
    }
    findByEmail(email: string): Promise<UserEntity | null> {
        return this.datasource.findByEmail(email);
    }
    updateById(updateUserDto: UpdateUserDto): Promise<UserEntity> {
        return this.datasource.updateById(updateUserDto);
    }
    deleteById(id: number): Promise<UserEntity> {
        return this.datasource.deleteById(id);

    }

}