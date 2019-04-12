const status = require("http-status");
const servicoRepository = require("../../repository/servico/servicoRepository");

exports.get = async(request, response, next) => {
    id = request.params.id;
    try {
        var data = await servicoRepository.get(id);
        response.status(status.OK).send(data);          
    } catch (error) {
        response.status(status.BAD_REQUEST).send({
            message : "Falha ao buscar servico", 
            error : error
      });
    }    
};

exports.post = async(request, response, next) => {
  if(!contract.isValid()){
    response.status(status.BAD_REQUEST).send(contract.errors()).end();
    return;
  }

  try {
      await servicoRepository.post(request.body);    
      response.status(status.OK).send();
  } catch (error) {
      response.status(status.BAD_REQUEST).send({
        message:"Falha ao cadastrar servico", 
        error : error
      });
  }
};
