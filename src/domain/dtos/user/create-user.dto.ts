export class CreateUserDto{
  
  private constructor(
    public readonly   email  :   string,
    public readonly name :  string,
  ){
    }

 public static create(props:{[key:string]:any}):[string?,CreateUserDto?]{

    const{email,name}=props;

    // implement validaciones

    return[undefined,new CreateUserDto(email,name)];
 }
}