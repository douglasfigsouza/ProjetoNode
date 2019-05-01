const Sequelize = require("sequelize"),
  sequelize = require("../../../bin/database/database.js");
  

const Servicos = sequelize.define("Servicos", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
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
  usuarioAlt: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
}, {
  timestamps : false
});

module.exports =  Servicos;