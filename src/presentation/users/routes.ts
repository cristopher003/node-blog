import { Router } from "express";
import { UsersController } from "./controller";
import { UserDataSourceImp } from "../../infrastructure/datasource/user.datasource.impl";
import { UserRepositoryImpl } from "../../infrastructure/repositories/user.repository.impl";



export class UserRoutes{

static get routes():Router{

    const routes=Router();

    const dataSource= new UserDataSourceImp();
    const userReposytory= new UserRepositoryImpl(dataSource);
    const usersController=new UsersController(userReposytory);

    routes.get('/',usersController.getUsers);
    routes.post('/login',usersController.login);

    // todo
//configurar estas rutas
    routes.get('/:id',usersController.getUserById);
    routes.post('/',usersController.createUser);
    routes.put('/:id',usersController.updateUser);
    routes.delete('/:id',usersController.deleteUser);


    return routes;
    }

}