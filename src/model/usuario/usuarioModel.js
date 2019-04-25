const Sequelize = require("sequelize");
const sequelize = require("../../../bin/database/database.js");

const Usuario = sequelize.define("Usuarios", {
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
  login: {
    allowNull: false,
    type: Sequelize.STRING(40),
    validate: {
      len: [2, 40]
    }
  },
  senha: {
    allowNull: false,
    type: Sequelize.STRING(8),
    validate: {
      len: [2, 8]
    }
  }, 
  dataCad:{
    allowNull: false,
    type: Sequelize.DATE,
    defaultValue : Date.now 
  }, 
  dataAlt:{
    allowNull: true,
    type: Sequelize.DATE, 
  }, 
  usuaCad: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  usuaAlt: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  telefone: {
    type: Sequelize.STRING(8)
  },
}, {
  timestamps : false
});

module.exports = Usuario;
