const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'en1ehf30yom7txe7.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'y3307raxgb7uh96n',
    password: 'zjbybfrgql8o7vms',
    database: 'dayshpq3dwnvujm6',
    multipleStatements: true
  });

  mysqlConnection.connect(function (err) {
    if (err) {
      console.error(err);
      return;
    } else {
      console.log('Ahora estamos en Linea :D');
    }
  });

  module.exports = mysqlConnection;