export class UpdatePostDto{
  
  private constructor(
    public readonly   id  :   number,
    public readonly   title  :   string,
    public readonly content :  string,
    public readonly published  :boolean,
    public readonly categories:string[],
    public readonly tags:string[],
    public readonly authorId:number
  ){
    }

    get values() {
      const returnObj: {[key: string]: any} = {};
  
      returnObj.title=this.title;
      returnObj.content=this.content;
      returnObj.published=this.published;
      returnObj.categories=this.categories;
      returnObj.tags=this.tags;
      returnObj.authorId=this.authorId;
      return returnObj;
    }
  

 public static create(props:{[key:string]:any}):[string?,UpdatePostDto?]{

    const{id,title,content,published,categories,tags,authorId}=props;

    // implement validaciones
// validar id
    return[undefined,new UpdatePostDto(id,title,content,published,categories,tags,authorId)];
 }
}