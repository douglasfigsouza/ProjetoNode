const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const Usuario = sequelize.define("Usuario", {
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
  }
});

module.exports = Usuario;
