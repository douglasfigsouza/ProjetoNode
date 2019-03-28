module.exports = {
  development: {
    database: {
      options: {
        //instanceName: 'MSSQLEXPRESS'//empresa
        instanceName: 'SQLEXPRESS'// casa
      },
      name: 'GesAutoDb',
      user:'sa',
      password: 'root',
      //host: 'DOUGLASDAMA-PC',//empresa
      host:'DESKTOP-3B6NEP8', //casa
      port: 1433,
      dialect: 'mssql'
    }
  },
  production: {
    database: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT
    }
  }
};
