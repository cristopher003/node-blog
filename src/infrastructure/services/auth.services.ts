import { bcryptAdapter } from "../../config/bcrypt.adapter";
import { JwtAdapter } from "../../config/jwt.adapter";
import { CreateUserDto } from "../../domain/dtos";
import { LoginUserDto } from "../../domain/dtos/user/login-user.dto";
import { UserEntity } from "../../domain/entities/user.entity";
import { CustomError } from "../../domain/errors/custom.error";
import { UserRepository } from "../../domain/repositories/user.repository";



export class AuthService {
    
      // DI
  constructor(
    private readonly userRepository: UserRepository,
  ) {}


    public  async register(createUserDto: CreateUserDto) {
        const existUser = await this.userRepository.findByEmail(createUserDto.email );
        if ( existUser ) throw CustomError.badRequest('Email already exist');
       
        try {
            const newPasswoord=  bcryptAdapter.hash(createUserDto.password );
            const user= await this.userRepository.create({...createUserDto!,password:newPasswoord});
            const token = await JwtAdapter.generateToken({ email: user.email });
            if ( !token ) throw CustomError.internalServer('Error while creating JWT');
      
            return { 
              user,
              token: token,
            };
      
          } catch (error) {
            throw CustomError.internalServer(`${ error }`);
          }
    }


    public async loginUser( loginUserDto: LoginUserDto ) {

        const existUser = await this.userRepository.findByEmail( loginUserDto.email );
        if (!existUser) throw CustomError.badRequest('Email not exist');
          
        const isMatching = bcryptAdapter.compare( loginUserDto.password, existUser.password );
    
        if ( !isMatching ) throw CustomError.badRequest('Password is not valid');
    
        const { password, ...userEntity} = UserEntity.fromJson( existUser );

        
        const token = await JwtAdapter.generateToken({ id: existUser.id });
        if ( !token ) throw CustomError.internalServer('Error while creating JWT');

        return {
          user: userEntity,
          token: token,
        }
    
      }
    
    
}
