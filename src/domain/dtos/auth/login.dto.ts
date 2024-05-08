export class LoginDto{
  
    private constructor(
      public readonly   email  :   string,
      public readonly password :  string,
    ){
      }
  
   public static create(props:{[key:string]:any}):[string?,LoginDto?]{
  
      const{email,password}=props;
  
      // implement validaciones
  
      return[undefined,new LoginDto(email,password)];
   }
  }