const Sequelize = require("sequelize"),
  sequelize = require("../../../bin/database/database.js");

const Mecanico = sequelize.define("Mecanicos", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  nome: {
    allowNull: false,
    type: Sequelize.STRING(255),
    validate: {
      len: [2, 255]
    }
  },
  rua: {
    allowNull: true,
    type: Sequelize.STRING(255),
    validate: {
      len: [2, 255]
    }
  },
  bairro: {
    allowNull: false,
    type: Sequelize.STRING(255),
    validate: {
      len: [2, 255]
    }
  },
  numero: {
    allowNull: true,
    type: Sequelize.INTEGER
  },
  fone: {
    allowNull: true,
    type: Sequelize.DECIMAL
  },
  cpf: {
    allowNull: true,
    type: Sequelize.DECIMAL
  },
  rg: {
    allowNull: true,
    type: Sequelize.STRING(10)
  }, 
  dataCad:{
    allowNull: false,
    type: Sequelize.DATE,
    defaultValue : Date.now
  }, 
  dataAlt:{
    allowNull: true,
    type: Sequelize.DATE
  }, 
  usuaCad: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  usuarioAlt: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
}, {
  timestamps : false
});

module.exports = Mecanico;
