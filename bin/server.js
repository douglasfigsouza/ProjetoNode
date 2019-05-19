const app = require('../src/app');
const http = require('http');
const debug = require('debug')('nodestr:server');
const sequelize = require("../bin/database/database.js");

const port = process.env.PORT || 5000;
const server = http.createServer(app);

//force true cria as tabelas sempre 
sequelize.sync({ force: false }).then(() => {
    app.set("port", port);
    server.listen(port);
  });

server.on('error', onError);
server.on('listening', onListening);
console.log("Api rodando na porta " + port);
//função que verifica se existem uma porta disponivel
function normalizePort(val){
    const port  = parseInt(val, 10);

    if(isNaN(port))
        return val;

    if(port >= 0)
        return port;

    return false;
}
//tratativa de erros servidor
function onError(error){

    if(error.syscall !== 'listen')
        throw error;

    const bind = typeof(port === 'string')
        ? 'Pipe' + port
        : 'Port' + port;

    switch(error.code){
        case 'EACCES':
            console.error(bind + ' Privilégios elevados são requeridos');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' Já está em uso');
            process.exit(1);
            break;
        default: 
            throw error;
    }
}

function onListening (){
    const addr = server.address();
    const bind = typeof(addr) === 'string'
        ? 'pipe' + addr
        : 'port' + addr.port;
    debug('Listening on' + bind);
}