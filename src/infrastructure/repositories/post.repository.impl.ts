import { PostDataSource } from "../../domain/datasources/post.datasource";
import { CreatePostDto } from "../../domain/dtos";
import { UpdatePostDto } from "../../domain/dtos/post/update-post.dto";
import { PostEntity } from "../../domain/entities/post.entity";
import { PostRepository } from "../../domain/repositories/post.repository";

export class PostRepositoryImpl implements PostRepository{

    constructor(private readonly datasource:PostDataSource){}
 

    create(createPostDto: CreatePostDto): Promise<PostEntity> {
        return this.datasource.create(createPostDto);
    }
    getAll(): Promise<PostEntity[]> {
        return this.datasource.getAll();
    }
    findById(id: number): Promise<PostEntity> {
        return this.datasource.findById(id);
    }
    updateById(updatePostDto: UpdatePostDto): Promise<PostEntity> {
        return this.datasource.updateById(updatePostDto);
    }
    deleteById(id: number): Promise<PostEntity> {
        return this.datasource.deleteById(id);
    }

    findByTag(tag: string): Promise<PostEntity[]> {
        return this.datasource.findByTag(tag);
    }
    findByCategory(category: string): Promise<PostEntity[]> {
        return this.datasource.findByCategory(category);
    }

}