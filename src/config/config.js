module.exports = {
  development: {
    database: {
      options: {
        instanceName: 'MSSQLEXPRESS'
      },
      name: 'Spolier',
      user:'sa',
      password: 'root',
      host: 'DOUGLASDAMA-PC',
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
