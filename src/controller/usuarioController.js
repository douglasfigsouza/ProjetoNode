const Usuario = require("../model/usuario/usuarioModel");
const status = require("http-status");
const ValidationContract = require("../validators/fluent-validator");
const usuarioRepository = require("../repository/usuario/usuarioRepository");

exports.get = async(request, response, next) => {
    id = request.params.id;
    try {
        var data = await usuarioRepository.get(id);
        response.status(status.OK).send(data);          
    } catch (error) {
        response.status(status.BAD_REQUEST).send({
            message : "Falha ao buscar usuarios", 
            error : error
      });
    }    
};

exports.getAll = async(request, response, next) => {
    let limite = parseInt(request.query.limite || 0);
    let pagina = parseInt(request.query.pagina || 0);

    if (!Number.isInteger(limite) || !Number.isInteger(pagina)) {
      response.status(status.BAD_REQUEST).send();
    }

    const ITENS_POR_PAGINA = 10;

    limite = limite > ITENS_POR_PAGINA || limite <= 0 ? ITENS_POR_PAGINA : limite;
    pagina = pagina <= 0 ? 0 : pagina * limite;

    try {
        var data = await usuarioRepository.getAll(limite,pagina);
        response.status(status.BAD_REQUEST).send(data);
    } catch (error) {
        response.status(status.BAD_REQUEST).send({
            message : "Falha ao buscar usuarios", 
            error : error
        });
    };
};

exports.post = async(request, response, next) => {
  const contract = new ValidationContract();
  contract.hasMinLen(request.body.Nome, 3, "O nome deve conter pelo menos três caracteres!");

  if(!contract.isValid()){
    response.status(status.BAD_REQUEST).send(contract.errors()).end();
    return;
  }

  try {
      await usuarioRepository.post(request.body);    
      response.status(status.OK).send();
  } catch (error) {
      response.status(status.BAD_REQUEST).send({
        message:"Falha ao cadastrar usuário", 
        error : error
      });
  }
};

exports.put = async(request, response, next) => {
  try {
    var data = await usuarioRepository.get(request.body.id)
    if (data) {
      await usuarioRepository.put(request.body)
      response.status(status.OK).send();
    }else{
      response.status(status.NOT_FOUND).send({
        message : "Usuário não encontrado!"
      });
    }
  } catch (error) {
    response.status(status.BAD_REQUEST).send({
      message: "Falha ao atualizar usuário",
      error : error
    });
  }
};

exports.delete = async(request, response, next) => {
  try {
    var data = await usuarioRepository.get(request.body.id); 
    if(data){
      await usuarioRepository.delete(request.body.id)
      response.status(status.OK).send();
    }else{
      response.status(status.NOT_FOUND).send({
        message : "Usuário não encontrado!"
      });
    }
  } catch (error) {
    response.status(status.BAD_REQUEST).send({
      message : "Falha ao deletar usuário", 
      error : error
    });
  };
};
