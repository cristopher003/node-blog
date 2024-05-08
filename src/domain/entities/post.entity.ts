import { CommentEntity } from "./comment.entity";
import { UserEntity } from "./user.entity";

export class PostEntity{
constructor(
    public id:string,
    public title:string,
    public content:string,
    public published:boolean,
    public categories:string[],
    public tags:string[],
    public authorId:string,
){  }

public static fromJson(object:{[key:string]:any}):PostEntity{
    const {id,title,content,published,categories,tags,authorId}=object;
    // validaciones 
   return new PostEntity(id,title,content,published,categories,tags,authorId);
}
}