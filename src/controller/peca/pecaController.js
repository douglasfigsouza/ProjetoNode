const status = require("http-status");
const ValidationContract = require("../../validators/fluent-validator");
const pecaRepository = require("../../repository/pecaRepository/pecaRepository");

exports.get = async(request, response, next) => {
    id = request.params.id;
    try {
        var data = await pecaRepository.get(id);
        response.status(status.OK).send(data);          
    } catch (error) {
        response.status(status.BAD_REQUEST).send({
            message : "Falha ao buscar peça", 
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
        var data = await pecaRepository.getAll(limite,pagina);
        response.status(status.BAD_REQUEST).send(data);
    } catch (error) {
        response.status(status.BAD_REQUEST).send({
            message : "Falha ao buscar peças", 
            error : error
        });
    };
};

exports.post = async(request, response, next) => {
  const contract = new ValidationContract();
  contract.hasMinLen(request.body.descricao, 3, "A descrição deve conter pelo menos três caracteres!");

  if(!contract.isValid()){
    response.status(status.BAD_REQUEST).send(contract.errors()).end();
    return;
  }

  try {
      await pecaRepository.post(request.body);    
      response.status(status.OK).send();
  } catch (error) {
      response.status(status.BAD_REQUEST).send({
        message:"Falha ao cadastrar peça", 
        error : error
      });
  }
};

exports.put = async(request, response, next) => {
  try {
    var data = await pecaRepository.get(request.body.id)
    if (data) {
      await pecaRepository.put(request.body)
      response.status(status.OK).send();
    }else{
      response.status(status.NOT_FOUND).send({
        message : "Peça nao encontrada!"
      });
    }
  } catch (error) {
    response.status(status.BAD_REQUEST).send({
      message: "Falha ao atualizar peça",
      error : error
    });
  }
};

exports.delete = async(request, response, next) => {
  try {
    var data = await pecaRepository.get(request.body.id); 
    if(data){
      await pecaRepository.delete(request.body.id)
      response.status(status.OK).send();
    }else{
      response.status(status.NOT_FOUND).send({
        message : "Peça não encontrada!"
      });
    }
  } catch (error) {
    response.status(status.BAD_REQUEST).send({
      message : "Falha ao deletar peça", 
      error : error
    });
  };
};
