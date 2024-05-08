export class CommentEntity{
constructor(
    public id:string,
    public postId:string,
    public authorId:string,
    public content:string,
){  }

public static fromJson(object:{[key:string]:any}):CommentEntity{
    const {id,postId,authorId,content}=object;
    // validaciones 
   return new CommentEntity(id,postId,authorId,content);
}
}