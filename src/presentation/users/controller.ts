import { Request, Response } from "express";
import { UserRepository } from "../../domain/repositories/user.repository";
import { CreateUserDto, UpdateUserDto } from "../../domain/dtos";


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
      
        const post= await this.userRepository.create(createUserDto!);
    
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
        const post=this.userRepository.deleteById(id);
        return resp.json(post);
    }
}