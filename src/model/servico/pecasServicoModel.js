const Sequelize = require("sequelize"),
  sequelize = require("../../../bin/database/database.js"); 
  

const PecaServico = sequelize.define("PecasServicos", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  servicoId: {  
    type: Sequelize.INTEGER,
    references: { model: 'Servicos', key: 'id' },
    allowNull: false
  }, 
  pecaId: {  
    type: Sequelize.INTEGER,
    references: { model: 'Pecas', key: 'id' },
    allowNull: false
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
  }
});

module.exports =  PecaServico;