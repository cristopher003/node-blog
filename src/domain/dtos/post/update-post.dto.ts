export class UpdatePostDto{
  
  private constructor(
    public readonly   id  :   number,
    public readonly   title  :   string,
    public readonly content :  string,
    public readonly published  :boolean 
  ){
    }

    get values() {
      const returnObj: {[key: string]: any} = {};
  
      returnObj.title=this.title;
      returnObj.content=this.content;
      returnObj.published=this.published;
     
      return returnObj;
    }
  

 public static create(props:{[key:string]:any}):[string?,UpdatePostDto?]{

    const{id,title,content,published}=props;

    // implement validaciones

    return[undefined,new UpdatePostDto(id,title,content,published)];
 }
}