import  express, { Router }  from "express";


interface Options{
    port:number,
    routes:Router
}

export class Server{

    private app=express();
    private readonly port: number;
    private readonly routes:Router;

    constructor(options:Options){
       const {port,routes}=options;
       this.port=port;
       this.routes=routes;
    
    }

    async start(){

        //Middlewares
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:true}))
        //Routes

        this.app.use(this.routes);
        this.app.use((req, res) => {
            res.status(404).send('Ruta no encontrada');
        });

        this.app.listen(this.port,()=>{
         console.log("server runing");     
        });
    }
}