'use strict';
const mecanicoServicoModel = require('../../model/servico/mecanicoServicoModel'),
    servicoModel = require('../../model/servico/servicoModel'), 
    pecasServicosModel = require('../servicoService/pecasServicosModel'); 

const servicoRepository = require('../../repository/servico/servicoRepository');

exports.post = async(servico) => {
    await servicoRepository.post(servico){
};

exports.put = async(usuario) => {
    await servicoRepository.put(servico)
};

exports.delete = async(id) => {
    await servicoRepository.delete(id);
};