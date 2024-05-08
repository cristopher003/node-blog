export class UpdateUserDto{
  
  private constructor(
    public readonly   id  :   number,
    public readonly   email  :   string,
    public readonly   name :  string,
  ){
    }

    get values() {
      const returnObj: {[key: string]: any} = {};
  
      returnObj.title=this.email;
      returnObj.content=this.name;
     
      return returnObj;
    }
  

 public static create(props:{[key:string]:any}):[string?,UpdateUserDto?]{

    const{id,email,name}=props;

    // implement validaciones

    return[undefined,new UpdateUserDto(id,email,name)];
 }
}