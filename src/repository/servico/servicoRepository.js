'use strict';
const mecanicoServicoModel = require('../../model/servico/mecanicoServicoModel'),
    servicoModel = require('../../model/servico/servicoModel');


exports.get = async(id) => {
    return await servicoModel.findById(id);
};

exports.getAll = async(limite, pagina) => {
    return await servicoModel.findAll({ 
        limit: limite, 
        offset: pagina
     });
};

exports.post = async(servico) => {
    await servicoModel.create(servico);
};

exports.put = async(usuario) => {
  await servicoModel.update(servico, {
            where: { id: servico.id } 
    });
};

exports.delete = async(id) => {
    await servicoModel.destroy({
        where: { id: id }
      });
};