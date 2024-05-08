import { CommentEntity } from "./comment.entity";
import { PostEntity } from "./post.entity";

export class UserEntity{
constructor(
    public id:string,
    public email:string,
    public name:string,
    public password:string,
){  }

public static fromJson(object:{[key:string]:any}):UserEntity{
    const {id,email,name,password}=object;
    // validaciones 
   return new UserEntity(id,email,name,password);
}
}