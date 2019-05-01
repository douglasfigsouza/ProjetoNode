const Sequelize = require("sequelize"),
  sequelize = require("../../../bin/database/database.js");
  

const MecanicoServico = sequelize.define("MecanicosServicos", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  servicoId: {  
    type: Sequelize.INTEGER,
    references: { model: 'Servicos', key: 'id' },
    allowNull: true
  }, 
  mecanicoId: {  
    type: Sequelize.INTEGER,
    references: { model: 'Mecanicos', key: 'id'},
    allowNull: false
  }, 
  descricao: {
    allowNull: true,
    type: Sequelize.STRING(1000),
    validate: {
      len: [2, 1000]
    },
  }, 
  valor: {
    allowNull: true,
    type: Sequelize.DECIMAL
  }, 
  observacao: {
    allowNull: true,
    type: Sequelize.STRING(500),
    validate: {
      len: [2, 1000]
    },
  }, 
});

module.exports =  MecanicoServico;