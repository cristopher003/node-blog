
// import { bcryptAdapter } from '../../config/bcrypt.adapter';
// import { envs } from '../../config/envs';
// import { JwtAdapter } from '../../config/jwt.adapter';
// import { CreateUserDto } from '../../domain/dtos';
// // import { CustomError, LoginUserDto, RegisterUserDto, UserEntity } from '../../domain';
// import { UserRepository } from '../../domain/repositories/user.repository';
// import { EmailService } from './email.service';




// export class AuthService {

//   // DI
//   constructor(
//     // DI - Email Service
//     private readonly emailService: EmailService,
//   ) {}


//   public async registerUser( UserRepository:UserRepository,registerUserDto: RegisterUserDto ) {

//     const existUser = await UserRepository.findOne({ email: registerUserDto.email });
//     if ( existUser ) throw CustomError.badRequest('Email already exist');

//     try {
//       const user =  CreateUserDto.create(registerUserDto);  
//       // Encriptar la contraseña
//       user.password = bcryptAdapter.hash( registerUserDto.password );
      
//       const token = await JwtAdapter.generateToken({ id: user.id });
//       if ( !token ) throw CustomError.internalServer('Error while creating JWT');

//       return { 
//         user,
//         token: token,
//       };

//     } catch (error) {
//       throw CustomError.internalServer(`${ error }`);
//     }

//   }


//   public async loginUser( loginUserDto: LoginUserDto ) {

//     const existUser = await UserRepository.findOne({ email: registerUserDto.email });
//     if (!user) throw CustomError.badRequest('Email not exist');

//     const isMatching = bcryptAdapter.compare( loginUserDto.password, user.password );
//     if ( !isMatching ) throw CustomError.badRequest('Password is not valid');


//     const { password, ...userEntity} = UserEntity.fromObject( user );
    
//     const token = await JwtAdapter.generateToken({ id: user.id });
//     if ( !token ) throw CustomError.internalServer('Error while creating JWT');

//     return {
//       user: userEntity,
//       token: token,
//     }

//   }


//   private sendEmailValidationLink = async( email: string ) => {

//     const token = await JwtAdapter.generateToken({ email });
//     if ( !token ) throw CustomError.internalServer('Error getting token');

//     const link = `${ envs.WEBSERVICE_URL }/auth/validate-email/${ token }`;
//     const html = `
//       <h1>Validate your email</h1>
//       <p>Click on the following link to validate your email</p>
//       <a href="${ link }">Validate your email: ${ email }</a>
//     `;

//     const options = {
//       to: email,
//       subject: 'Validate your email',
//       htmlBody: html,
//     }

//     const isSent = await this.emailService.sendEmail(options);
//     if ( !isSent ) throw CustomError.internalServer('Error sending email');

//     return true;
//   }



// }