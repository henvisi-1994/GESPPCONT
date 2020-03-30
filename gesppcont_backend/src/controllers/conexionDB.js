const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'liga2011',
    database: 'ERP',
    port: '5432'
});
module.exports=pool;