const Sequelize = require("sequelize"),
  sequelize = require("../../../bin/database/database.js");
  

const Peca = sequelize.define("Pecas", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  usuarioId: {
    type: Sequelize.INTEGER,
    references: { model: 'Usuarios', key: 'id' },
      allowNull: false
  },
  descricao: {
    allowNull: true,
    type: Sequelize.STRING(200),
    validate: {
      len: [2, 200]
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
  }, dataCad:{
    allowNull: false,
    type: Sequelize.DATE, 
  }, 
  dataAlt:{
    allowNull: false,
    type: Sequelize.DATE, 
  }, 
  usuaCad: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  usuarioAlt: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
}, {
  timestamps : false
});

module.exports =  Peca;