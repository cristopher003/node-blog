import { Request, Response } from "express";
import { CreateProductDto } from "../../domain/dtos";
import { ProductRepository } from "../../domain/repositories/product.repository";
import { UpdateProductDto } from "../../domain/dtos/product/update-product.dto";

export class ProductController{

    constructor(private readonly productRepositiry:ProductRepository){

    }

    public getProducts=async (req:Request,resp:Response)=> {
        try {
            const product= await this.productRepositiry.getAll();
            resp.json(product);  
        } catch (error) {
            resp.json(error);  
        }
 
    }

    public getProductById=async(req:Request,resp:Response)=>{
        const id=+req.params.id
        try {
            const product= await this.productRepositiry.findById(id);
            return resp.json(product);
        } catch (error) {
            resp.status(400).json(error);
        }
    }

    public createProduct=async (req:Request,resp:Response)=>{
        try {
            const [error,createProductDto]=CreateProductDto.create(req.body);  
            if (error) return resp.status(400).json({error});
            const product= await this.productRepositiry.create(createProductDto!); 
            resp.json(product); 
        } catch (error) {
            resp.json(error); 
        }

    }

    public updateProduct=async (req:Request,resp:Response)=>{
        const id=+req.params.id
        const [error,updateProductDto]=UpdateProductDto.create({...req.body,id}); 
        if (error) return resp.status(400).json({error});
    
        const updateProduct= await this.productRepositiry.updateById(updateProductDto!);
     
       return resp.json(updateProduct);
    }

    public deleteProduct=async(req:Request,resp:Response)=>{
        const id=+req.params.id
        const product=await this.productRepositiry.deleteById(id);
        return resp.json(product);
    }


    public getProductByCategory=async(req:Request,resp:Response)=>{
        const category=req.params.category
        try {
            const product= await this.productRepositiry.findByCategory(category);
            return resp.json(product);
        } catch (error) {
            resp.status(400).json(error);
        }
    }
}