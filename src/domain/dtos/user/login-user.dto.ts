import { bcryptAdapter } from "../../../config/bcrypt.adapter";

export class LoginUserDto{
  
  private constructor(
    public readonly   email  :   string,
    public readonly password :  string,
  ){
    }

 public static create(props:{[key:string]:any}):[string?,LoginUserDto?]{

    const{email,password}=props;

    return[undefined,new LoginUserDto(email,password)];
 }
}