import { bcryptAdapter } from "../../../config/bcrypt.adapter";

export class CreateUserDto{
  
  private constructor(
    public readonly   email  :   string,
    public readonly name :  string,
    public readonly password :  string,
  ){
    }

 public static create(props:{[key:string]:any}):[string?,CreateUserDto?]{

    const{email,name,password}=props;

    // implement validaciones

    return[undefined,new CreateUserDto(email,name,password)];
 }
}