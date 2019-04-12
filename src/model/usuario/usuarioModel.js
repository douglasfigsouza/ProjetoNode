const Sequelize = require("sequelize");
const sequelize = require("../../../bin/database/database.js");

const Usuario = sequelize.define("Usuarios", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  Nome: {
    allowNull: false,
    type: Sequelize.STRING(255),
    validate: {
      len: [2, 255]
    }
  },
  Login: {
    allowNull: false,
    type: Sequelize.STRING(40),
    validate: {
      len: [2, 40]
    }
  },
  Senha: {
    allowNull: false,
    type: Sequelize.STRING(8),
    validate: {
      len: [2, 8]
    }
  }, 
  dataCad:{
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

module.exports = Usuario;
