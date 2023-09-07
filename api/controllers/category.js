import { db } from '../db.js';
import { now } from './common.js';
import jwt from 'jsonwebtoken';

export const getCategories = (req, res) => {
    const q = req.body.cat ? 'SELECT * FROM blog.po_001 WHERE po_001_cnam LIKE ?' : 'SELECT * FROM po_001';

    db.query(q, ['%' + req.body.cat + '%'], (err, data) => {
        if (err) return res.status(500).send(err);

        return res.status(200).json(data);
    });
};

export const addCategories = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json('未經過授權!');

    jwt.verify(token, 'jwtkey', (err, userInfo) => {
        if (err) return res.status(401).json('授權未經過許可!');
    });

    if (Object.keys(req.body.cat1).length < 3) return res.status(400).json('分類代號長度至少3碼!');
    if (Object.keys(req.body.cnam).length < 2) return res.status(400).json('分類中文長度至少2碼!');

    const q = 'SELECT * FROM blog.po_001 WHERE po_001_cat1=?';

    db.query(q, [req.body.cat1], (err, data) => {
        if (err) return res.status(500).send(err);
        if (data.length) return res.status(409).json('分類代號: ' + req.body.cat1 + ' 已存在，請重新輸入謝謝!');

        const q = 'INSERT INTO blog.po_001 VALUES (?)';
        const value = [req.body.cat1, req.body.cnam, '', '', '', '', '', now(), now()];

        db.query(q, [value], (err, data) => {
            if (err) return res.status(500).send(err);
            return res.status(200).json('存檔成功!');
        });
    });
};
