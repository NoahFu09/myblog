import { db } from '../db.js';

export const getCategories = (req, res) => {
    const q = req.body.cat ? 'SELECT * FROM blog.po_001 WHERE po_001_cnam LIKE ?' : 'SELECT * FROM po_001';

    db.query(q, ['%' + req.body.cat + '%'], (err, data) => {
        if (err) return res.status(500).send(err);

        return res.status(200).json(data);
    });
};
