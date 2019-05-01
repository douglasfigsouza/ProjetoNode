'use strict';
const pecaModel = require('../../model/peca/pecaModel');

exports.get = async(id) => {
    return await pecaModel.findById(id);
};

exports.getAll = async(limite, pagina) => {
    return await pecaModel.findAll({ 
        limit: limite, 
        offset: pagina
     });
};

exports.post = async(peca) => {
    await pecaModel.create(peca);
};

exports.put = async(peca) => {
  await pecaModel.update(peca, {
            where: { id: peca.id } 
    });
};

exports.delete = async(id) => {
    await pecaModel.destroy({
        where: { id: id }
      });
};