var mysql = require('mysql');

class dbPool {
  constructor(options) {
    this._options = options;
    this._pool  = mysql.createPool({
      connectionLimit : 10,
      host            : 'localhost',
      user            : 'ttads',
      password        : 'maria',
      database        : 'ttads'
    });
  }

  run(query, callback){
    this._pool.getConnection((err,conn)=>{
      conn.query('SELECT id, name from client', function (error, results, fields) {
        if (error) throw error;
        callback(results);
      });
      conn.release();
    });
  }
  close(){
    this._pool.end();
  }
}

module.exports = dbPool;
