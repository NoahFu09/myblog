import mysql from 'mysql';

export const db = mysql.createConnection({
    host: '',
    user: 'root',
    password: 'nickfu2021',
    database: 'blog',
});
