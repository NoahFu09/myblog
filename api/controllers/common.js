import { db } from '../db.js';
import jwt from 'jsonwebtoken';

export const getCodes = (req, res) => {
    const q = req.body.code ? 'SELECT * FROM blog.cm_006 WHERE CM_006_CLNO=?' : 'SELECT * FROM blog.cm_006';
    db.query(q, [req.body.code], (err, data) => {
        if (err) return res.status(500).send(err);

        return res.status(200).json(data);
    });
};

export const getSystem = (req, res) => {
    const q = 'SELECT CM_011_SYSM,CM_011_SNAM FROM CM_011';
    db.query(q, null, (err, data) => {
        if (err) return res.status(500).send(err);

        return res.status(200).json(data);
    });
};

export const insCM006 = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json('Not authenticated!');

    jwt.verify(token, 'jwtkey', (err, userInfo) => {
        if (err) return res.status(403).json('token is not valid!');

        const q = 'SELECT * FROM cm_006 WHERE CM_006_SYS=? AND CM_006_CLNO=?';

        db.query(q, [req.body.sys, req.body.clno], (err, data) => {
            if (err) return res.json(err);
            if (data.length) return res.status(409).json('此代碼已存在，請嘗試其它名稱!');

            const q = 'INSERT INTO cm_006 VALUES (?)';
            const value = [
                req.body.sys,
                req.body.clno,
                req.body.clnm,
                req.body.cdln,
                req.body.nmln,
                date(),
                time(),
                'admin',
                date(),
                time(),
                'admin',
            ];

            db.query(q, [value], (err, data) => {
                if (err) return res.json(err);

                return res.status(200).json('更新成功!');
            });
        });
    });
};

export const now = () => {
    let date_ob = new Date();

    //current date
    let date = ('0' + date_ob.getDate()).slice(-2);

    //current month
    let month = ('0' + (date_ob.getMonth() + 1)).slice(-2);

    //current year
    let year = date_ob.getFullYear();

    //current hours
    let hours = date_ob.getHours();

    //current minutes
    let minutes = date_ob.getMinutes();

    //current seconds
    let seconds = date_ob.getSeconds();

    let current = year + '-' + month + '-' + date + ' ' + hours + '-' + minutes + '-' + seconds;
    return current;
};

export const date = () => {
    let date_ob = new Date();

    //current date
    let date = ('0' + date_ob.getDate()).slice(-2);

    //current month
    let month = ('0' + (date_ob.getMonth() + 1)).slice(-2);

    //current year
    let year = date_ob.getFullYear();

    let current = year + '-' + month + '-' + date;
    return current;
};

export const time = () => {
    let date_ob = new Date();

    //current hours
    let hours = date_ob.getHours();

    //current minutes
    let minutes = date_ob.getMinutes();

    //current seconds
    let seconds = date_ob.getSeconds();

    let current = hours + ':' + minutes + ':' + seconds;
    return current;
};
