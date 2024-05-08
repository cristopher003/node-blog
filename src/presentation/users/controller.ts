import { Request, Response } from "express";
import { UserRepository } from "../../domain/repositories/user.repository";
import { CreateUserDto, UpdateUserDto } from "../../domain/dtos";
import { AuthService } from "../../infrastructure/services/auth.services";


export class UsersController{

    constructor(private readonly userRepository:UserRepository){

    }

    public getUsers=async (req:Request,resp:Response)=> {
        const post= await this.userRepository.getAll();
        resp.json(post);
    }

    public getUserById=async(req:Request,resp:Response)=>{
        const id=+req.params.id
        try {
            const post= await this.userRepository.findById(id);
            return resp.json(post);
        } catch (error) {
            resp.status(400).json(error);
        }
    }

    public createUser=async (req:Request,resp:Response)=>{
        const [error,createUserDto]=CreateUserDto.create(req.body);  
        if (error) return resp.status(400).json({error});
        const authService= new AuthService(this.userRepository);
        const post= await authService.register(createUserDto!);
        resp.json(post);
    }

    public updateUser=(req:Request,resp:Response)=>{
        const id=+req.params.id
        const [error,updateUserDto]=UpdateUserDto.create({...req.body,id}); 
        if (error) return resp.status(400).json({error});
     
        const updatePost=this.userRepository.updateById(updateUserDto!);

       return resp.json(updatePost);
    }

    public deleteUser=(req:Request,resp:Response)=>{
        const id=+req.params.id
        const user=this.userRepository.deleteById(id);
        return resp.json(user);
    }

    public login=async (req:Request,resp:Response)=> {
        const [error,createUserDto]=CreateUserDto.create(req.body);  
        const authService= new AuthService(this.userRepository);
        const user= await authService.loginUser(createUserDto!);
        return resp.json(user);
    }
}