import { db } from '../db.js';
import jwt from 'jsonwebtoken';

export const getCodes = (req, res) => {
    const q = req.body.code
        ? 'SELECT T1.CM_006_SYS, T2.CM_011_SNAM, T1.CM_006_CLNO, T1.CM_006_CLNM, T1.CM_006_CDLN, T1.CM_006_NMLN FROM cm_006 T1, cm_011 T2 WHERE T1.CM_006_SYS=T2.CM_011_SYSM AND T1.CM_006_SYS=?'
        : 'SELECT T1.CM_006_SYS, T2.CM_011_SNAM, T1.CM_006_CLNO, T1.CM_006_CLNM, T1.CM_006_CDLN, T1.CM_006_NMLN FROM cm_006 T1, cm_011 T2 WHERE T1.CM_006_SYS=T2.CM_011_SYSM';
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

export const insertCM006 = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json('Not authenticated!');

    jwt.verify(token, 'jwtkey', (err, userInfo) => {
        if (err) return res.status(403).json('token is not valid!');

        const q = 'SELECT * FROM cm_006 WHERE CM_006_SYS=? AND CM_006_CLNO=?';

        db.query(q, [req.body.sys, req.body.clno], (err, data) => {
            if (err) return res.json(err);
            if (data.length) return res.status(409).json('代碼已存在，請嘗試其它代碼!');

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

export const updateCM006 = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json('沒有經過授權!');

    jwt.verify(token, 'jwtkey', (err, userInfo) => {
        if (err) return res.status(401).json('授權未經過許可!');

        const q = 'SELECT * FROM blog.cm_006 WHERE CM_006_SYS=? AND CM_006_CLNO=?';
        const values = [req.body.sys, req.body.clno];

        db.query(q, [...values], (err, data) => {
            if (err) return res.json(err);
            if (!data.length) return res.status(409).json('代碼類別: ' + req.body.sys + ' / ' + req.body.clno + ' 不存在，請檢查謝謝!');

            const q =
                'UPDATE blog.cm_006 SET CM_006_CLNM=?,CM_006_CDLN=?,CM_006_NMLN=?, CM_006_UPDT=? ,CM_006_UPTM=? WHERE CM_006_SYS=? AND CM_006_CLNO=?';
            const values = [req.body.clnm, req.body.cdln, req.body.nmln, date(), time(), req.body.sys, req.body.clno];

            db.query(q, [...values], (err, data) => {
                if (err) return res.status(500).send(err);
                return res.status(200).json('更新成功!');
            });
        });
    });
};

export const deleteCM006 = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json('未經過授權!');

    jwt.verify(token, 'jwtkey', (err, userInfo) => {
        if (err) return res.status(401).json('授權未經過許可!');
    });
    const q = 'SELECT * FROM cm_006 WHERE CM_006_SYS=? AND CM_006_CLNO=?';
    const value = [req.body.sys, req.body.clno];

    db.query(q, [...value], (err, data) => {
        if (err) return res.status(500).send(err);
        if (!data.length) return res.status(409).json('代碼類別: ' + req.body.sys + ' / ' + req.body.clno + ' 不存在，請檢查謝謝!');

        const q = 'DELETE FROM cm_006 WHERE CM_006_SYS=? AND CM_006_CLNO=?';

        db.query(q, [...value], (err, data) => {
            if (err) return res.status(500).send(err);
            return res.status(200).json('刪除成功!');
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
