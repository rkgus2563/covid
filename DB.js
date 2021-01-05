const mysql = require('mysql');

const connectionInfo = {
    user : 'yy_20102',
    password:'1234',
    host:'gondr.asuscomm.com',
    database:'yy_20102'
};

const con = mysql.createConnection(connectionInfo);

module.exports.con = con;