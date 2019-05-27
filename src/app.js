const express = require('express'), 
    bodyParser = require('body-parser'),
    mecanicoRoute = require("./routes/mecanicoRoute"),
    servicoRoute = require("./routes/servicosRoute"),
    usuarioRoute = require("./routes/usuarioRoute");
    pecaRoute = require("./routes/pecaRoute");
    var cors = require('cors')

const app = express();

app.use(cors());
//toda requisição passa pelo bodyParser convertendo para o fomato de json
app.use(bodyParser.json({
    limit : "5mb"
}));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use("/usuario", usuarioRoute);
app.use("/mecanico", mecanicoRoute);
app.use("/servico", servicoRoute);
app.use("/peca", pecaRoute);

module.exports = app;


