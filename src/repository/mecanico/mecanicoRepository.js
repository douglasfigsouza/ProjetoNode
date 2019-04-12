'use strict';
const mecanicoModel = require('../../model/mecanico/mecanicoModel');

exports.get = async(id) => {
    return await mecanicoModel.findById(id);
};

exports.getAll = async(limite, pagina) => {
    return await mecanicoModel.findAll({ 
        limit: limite, 
        offset: pagina
     });
};

exports.post = async(mecanico) => {
    await mecanicoModel.create(mecanico);
};

exports.put = async(usuario) => {
  await mecanicoModel.update(mecanico, {
            where: { id: mecanico.id } 
    });
};

exports.delete = async(id) => {
    await mecanicoModel.destroy({
        where: { id: id }
      });
};