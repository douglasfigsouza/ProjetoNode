const status = require("http-status");
const mecanicoRepository = require("../../repository/mecanico/mecanicoRepository");

exports.get = async(request, response, next) => {
    id = request.params.id;
    try {
        var data = await mecanicoRepository.get(id);
        response.status(status.OK).send(data);          
    } 
    catch (error) {
        response.status(status.BAD_REQUEST).send({
            message : "Falha ao buscar mecanico", 
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
        var data = await mecanicoRepository.getAll(limite,pagina);
        response.status(status.BAD_REQUEST).send(data);
    } 
    catch (error) {
        response.status(status.BAD_REQUEST).send({
            message : "Falha ao buscar mecanicos", 
            error : error
        });
    };
};

exports.post = async(request, response, next) => {
  try {
      await mecanicoRepository.post(request.body);    
      response.status(status.OK).send();
  } 
  catch (error) {
      response.status(status.BAD_REQUEST).send({
        message:"Falha ao cadastrar mecanico", 
        error : error
      });
  }
};

exports.put = async(request, response, next) => {
  try {
    var data = await mecanicoRepository.get(request.body.id)
    if (data) {
      await mecanicoRepository.put(request.body)
      response.status(status.OK).send();
    }
    else{
      response.status(status.NOT_FOUND).send({
        message : "Mecanico não encontrado!"
      });
    }
  } catch (error) {
    response.status(status.BAD_REQUEST).send({
      message: "Falha ao atualizar mecanico",
      error : error
    });
  }
};

exports.delete = async(request, response, next) => {
  try {
    var data = await mecanicoRepository.get(request.body.id); 
    if(data){
      await mecanicoRepository.delete(request.body.id)
      response.status(status.OK).send();
    }
    else{
      response.status(status.NOT_FOUND).send({
        message : "Mecânico não encontrado!"
      });
    }
  } 
  catch (error) {
    response.status(status.BAD_REQUEST).send({
      message : "Falha ao deletar mecanico", 
      error : error
    });
  };
};
