import { Request, Response } from "express";
import { CommentRepository } from "../../domain/repositories/comment.repository";
import { CreateCommentDto } from "../../domain/dtos/comment/create-comment.dto";
import { UpdateCommentDto } from "../../domain/dtos/comment/update-comment.dto";


export class CommentsController{

    constructor(private readonly commentRepository:CommentRepository){

    }

    public getComments=async (req:Request,resp:Response)=> {
  
        const comment= await this.commentRepository.getAll();
        resp.json(comment);
    }

    public getCommentById=async(req:Request,resp:Response)=>{
        const id=+req.params.id
        try {
            const post= await this.commentRepository.findById(id);
            return resp.json(post);
        } catch (error) {
            resp.status(400).json(error);
        }
    }

    public createComment=async (req:Request,resp:Response)=>{
        const [error,createCommentDto]=CreateCommentDto.create(req.body);  
        if (error) return resp.status(400).json({error});
      try {
        const post= await this.commentRepository.create(createCommentDto!);
        resp.json(post) 
      } catch (error) {
        resp.status(400).json(error);
      };
    }

    public updateComment=async(req:Request,resp:Response)=>{
        const id=+req.params.id
        const [error,updateCommentDto]=UpdateCommentDto.create({...req.body,id}); 
        if (error) return resp.status(400).json({error});
        try {
            const updatePost= await this.commentRepository.updateById(updateCommentDto!);
            return resp.json(updatePost); 
        } catch (error) {
            resp.status(400).json(error);
        }
   
    }

    public deleteComment=async(req:Request,resp:Response)=>{
        const id=+req.params.id
        try {
            const comment=await this.commentRepository.deleteById(id);
            return resp.json(comment); 
        } catch (error) {
            resp.status(400).json(error); 
        }
   
    }
}