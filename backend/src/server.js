const express = require('express');
const cors = require('cors');

class Server {
  constructor() {
    this.app = express();

    this.port = process.env.PORT;

    this.path = '/api';

    //Conectar a base de datos MONGODB
    //this.connectDB();
    //Middlewares
    this.middlewares();
    //Routing
    this.routes();
  }


  middlewares() {
    //cors
    this.app.use(cors());

    //Leer y parsear JSON en BODY
    this.app.use(express.json());

    //PUBLIC DIRECTORY
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.use(this.path, require('./routes/routes.js'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server funcionando en puerto: ${this.port}`);
    });
  }
}

module.exports = Server;
