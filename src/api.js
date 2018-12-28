'use strict';
const http = require('http');
const {Pool} = require('pg');

const testDB = async () => {
    const config = {
        user: 'ubuntu',
        database: 'teewa_bot_dev',
        password: '123456',
        host: 'docker',
        port: 5432,
        max: 10, // max number of clients in the pool
        idleTimeoutMillis: 30000
    };

    const pool = new Pool(config);
    const res = await pool.query('SELECT NOW()');
    console.log('Success: ', res.rows[0].now);
    await pool.end();
};

testDB();

http.createServer((req, res) => {
  res.writeHead(200);
  res.end('hey');
}).listen(process.env.PORT || 3000, () => {
  console.log('App listening on port 3000');
});

console.log(process.env);
