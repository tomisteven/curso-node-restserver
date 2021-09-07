const express = require("express")
const cors = require("cors")

class Server {
    constructor() {
        //crear una instancia de express
        this.app = express();
        //puerto en el que se enruta
        this.port = process.env.PORT;

        //contiene las rutas del usuario que puede usar el servidor
        this.usuariosPath = '../api/usuarios';

        //middlewares = tareas 
        this.middlewares();

        //cors 
        this.app.use(cors());


        //rutas
        this.routes();
    }

    //mildwares es una funcion que se ejecuta antes de que se ejecute cualquier ruta
    middlewares() {
        //directorio publico
        this.app.use(express.static('public'));

        //convertir los datos que llegan en json
        this.app.use(express.json());
    }

    //rutas de la app
    routes() {
        this.app.use('/api/usuarios', require('../routes/usuarios'));
    }

    //puerto en el que se enruta
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server on port ${this.port}`)
        })
    }




}


module.exports = Server;