import { NextFunction, Request, Response } from 'express';
import { JwtAdapter } from '../../config/jwt.adapter';
import { UserRepository } from '../../domain/repositories/user.repository';
import { UserEntity } from '../../domain/entities/user.entity';
import { UserDataSourceImp } from '../../infrastructure/datasource/user.datasource.impl';
import { UserRepositoryImpl } from '../../infrastructure/repositories/user.repository.impl';


export class AuthMiddleware {


   static async validateJWT( req: Request, res: Response, next: NextFunction ) {

    const authorization = req.header('Authorization');
    if( !authorization ) return res.status(401).json({ error: 'No token provided' });
    if ( !authorization.startsWith('Bearer ') ) return res.status(401).json({ error: 'Invalid Bearer token' });

    const token = authorization.split(' ').at(1) || '';


    try {

      const payload = await JwtAdapter.validateToken<{ id: number }>(token);
      if ( !payload ) return res.status(401).json({ error: 'Invalid token' })
     
      const userDataSource= new UserDataSourceImp();
      const userRepository= new UserRepositoryImpl(userDataSource);
      
      const user = await userRepository.findById( payload.id );
      if ( !user ) return res.status(401).json({ error: 'Invalid token - user' });

      // todo: validar si el usuario está activo

      req.body.user = UserEntity.fromJson(user);;

      next();

    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });

    }
    
  }




}


