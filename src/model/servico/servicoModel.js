const Sequelize = require("sequelize"),
  sequelize = require("../../../bin/database/database.js");
  

const Servicos = sequelize.define("Servicos", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  usuarioId: {
    type: Sequelize.INTEGER,
    allowNull: false
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

module.exports =  Servicos;