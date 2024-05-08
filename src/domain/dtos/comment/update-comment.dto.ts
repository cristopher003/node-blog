export class UpdateCommentDto{
  
  private constructor(
    public readonly   id  :   number,
    public readonly postId:string,
    public readonly content:string,
  ){
    }

    get values() {
      const returnObj: {[key: string]: any} = {};
  
      returnObj.content=this.content;
      returnObj.postId=this.postId;
     
      return returnObj;
    }
  

 public static create(props:{[key:string]:any}):[string?,UpdateCommentDto?]{

    const{id,postId,content}=props;

    // implement validaciones

    return[undefined,new UpdateCommentDto(id,postId,content)];
 }
}