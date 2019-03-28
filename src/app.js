const express = require('express');
const bodyParser = require('body-parser');
const usuarioRoute = require("./routes/usuarioRoute");

const app = express();
const router = express.Router();

//toda requisição passa pelo bodyParser convertendo para o fomato de json
app.use(bodyParser.json({
    limit : "5mb"
}));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use("/", usuarioRoute);

module.exports = app;


