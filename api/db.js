import mysql from 'mysql';

export const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'qwer1@34',
    database: 'blog',
});
