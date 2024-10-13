import { Request, Response } from "express";
import { UserRepository } from "../../domain/repositories/user.repository";
import { CreateUserDto, UpdateUserDto } from "../../domain/dtos";
import { AuthService } from "../../infrastructure/services/auth.services";


export class UsersController{

    constructor(private readonly userRepository:UserRepository){

    }

    public getUsers=async (req:Request,resp:Response)=> {
        const user= await this.userRepository.getAll();
        resp.json(user);
    }

    public getUserById=async(req:Request,resp:Response)=>{
        const id=+req.params.id
        try {
            const user= await this.userRepository.findById(id);
            return resp.json(user);
        } catch (error) {
            resp.status(400).json(error);
        }
    }

    public createUser=async (req:Request,resp:Response)=>{
        try {
            const [error,createUserDto]=CreateUserDto.create(req.body);  
            if (error) return resp.status(400).json({error});
            const authService= new AuthService(this.userRepository);
            const user= await authService.register(createUserDto!);
            resp.json(user);  
        } catch (error) {
        return resp.json({error});
            
        }

    }

    public updateUser=(req:Request,resp:Response)=>{
        const id=+req.params.id
        const [error,updateUserDto]=UpdateUserDto.create({...req.body,id}); 
        if (error) return resp.status(400).json({error});
     
        const updateUser=this.userRepository.updateById(updateUserDto!);

       return resp.json(updateUser);
    }

    public deleteUser=(req:Request,resp:Response)=>{
        const id=+req.params.id
        const user=this.userRepository.deleteById(id);
        return resp.json(user);
    }

    public login=async (req:Request,resp:Response)=> {
        const [error,createUserDto]=CreateUserDto.create(req.body);  
        try {
            const authService= new AuthService(this.userRepository);
            const user= await authService.loginUser(createUserDto!);
             return resp.json(user);
        } catch (error) {
        return resp.json({error});

        }
     
    }
}