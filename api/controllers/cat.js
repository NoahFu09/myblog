import { db } from '../db.js';
import { now } from './common.js';

export const getCategories = (req, res) => {
    const q = req.body.cat ? 'SELECT * FROM blog.po_001 WHERE po_001_cnam LIKE ?' : 'SELECT * FROM po_001';

    db.query(q, ['%' + req.body.cat + '%'], (err, data) => {
        if (err) return res.status(500).send(err);

        return res.status(200).json(data);
    });
};

export const addCategories = (req, res) => {
    const q = 'SELECT * FROM blog.po_001 WHERE po_001_cat1=?';

    db.query(q, [req.body.cat1], (err, data) => {
        if (err) return res.status(500).send(err);
        if (data.length) return res.status(409).json('分類代號(主)已存在!');

        const q = 'INSERT INTO po_001 VALUES (?)';
        const value = [req.body.cat1, req.body.cnam, '', '', '', '', '', now(), now()];

        db.query(q, value, (err, data) => {
            if (err) return res.status(500).send(err);
            return res.status(200).json('分類代號(主)存檔成功！');
        });
    });
};
