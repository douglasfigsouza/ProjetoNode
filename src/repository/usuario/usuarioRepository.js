'use strict';
const usuarioModel = require('../../model/usuario/usuarioModel');

exports.get = async(id) => {
    return await usuarioModel.findById(id, {
            attributes:['Nome', 'Login', 'Senha'] // especifica quais colunas devem ser exibidas
        });
};

exports.getAll = async(limite, pagina) => {
    return await usuarioModel.findAll({ 
        limit: limite, 
        offset: pagina
     });
};

exports.post = async(usuario) => {
    await usuarioModel.create(usuario);
};

exports.put = async(usuario) => {
  await usuarioModel.update(usuario, {
            where: { id: usuario.id } 
    });
};

exports.delete = async(id) => {
    await usuarioModel.destroy({
        where: { id: id }
      });
};