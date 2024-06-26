import { Request, Response } from "express";
import { CreatePostDto } from "../../domain/dtos";
import { PostRepository } from "../../domain/repositories/post.repository";
import { UpdatePostDto } from "../../domain/dtos/post/update-post.dto";

export class PostsController{

    constructor(private readonly postRepositiry:PostRepository){

    }

    public getPost=async (req:Request,resp:Response)=> {
        const post= await this.postRepositiry.getAll();
        resp.json(post);
    }

    public getPostById=async(req:Request,resp:Response)=>{
        const id=+req.params.id
        try {
            const post= await this.postRepositiry.findById(id);
            return resp.json(post);
        } catch (error) {
            resp.status(400).json(error);
        }
    }

    public createPost=async (req:Request,resp:Response)=>{
        const [error,createPostDto]=CreatePostDto.create(req.body);  
        if (error) return resp.status(400).json({error});
      
        const post= await this.postRepositiry.create(createPostDto!);
    
        resp.json(post);
    }

    public updatePost=async (req:Request,resp:Response)=>{
        const id=+req.params.id
        const [error,updatePostDto]=UpdatePostDto.create({...req.body,id}); 
        if (error) return resp.status(400).json({error});
    
        const updatePost= await this.postRepositiry.updateById(updatePostDto!);
     
       return resp.json(updatePost);
    }

    public deletePost=async(req:Request,resp:Response)=>{
        const id=+req.params.id
        const post=await this.postRepositiry.deleteById(id);
        return resp.json(post);
    }

    public getPostsByTag=async(req:Request,resp:Response)=>{
        const tag=req.params.tag;

        try {
            const posts= await this.postRepositiry.findByTag(tag);

            return resp.json(posts);
        } catch (error) {
            resp.status(400).json(error);
        }
    }

    public getPostsByCategory=async(req:Request,resp:Response)=>{
        const category=req.params.category
        try {
            const post= await this.postRepositiry.findByCategory(category);
            return resp.json(post);
        } catch (error) {
            resp.status(400).json(error);
        }
    }
}