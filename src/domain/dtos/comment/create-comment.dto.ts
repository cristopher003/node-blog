export class CreateCommentDto{
  
  private constructor(

    public readonly postId:number,
    public readonly authorId:number,
    public readonly content:string,
  ){
    }

 public static create(props:{[key:string]:any}):[string?,CreateCommentDto?]{

    const{postId,authorId,content}=props;

    // implement validaciones

    return[undefined,new CreateCommentDto(postId,authorId,content)];
 }
}