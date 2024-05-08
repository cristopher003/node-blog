export class CreatePostDto{
  
  private constructor(
    public readonly   title  :   string,
    public readonly content :  string,
    public readonly published  :boolean ,
    public readonly categories:string[],
    public readonly tags:string[],
    public readonly authorId:number
  ){
    }

 public static create(props:{[key:string]:any}):[string?,CreatePostDto?]{

    const{title,content,published,categories,tags,authorId}=props;

    // implement validaciones


    return[undefined,new CreatePostDto(title,content,published,categories,tags,authorId)];
 }
}