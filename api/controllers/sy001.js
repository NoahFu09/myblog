import { db } from '../db.js';

export const getCodes = (req, res) => {
    const q = req.body.code ? 'SELECT * FROM blog.cm_006 WHERE CM_006_CLNO=?' : 'SELECT * FROM blog.cm_006';
    db.query(q, [req.body.code], (err, data) => {
        if (err) return res.status(500).send(err);

        return res.status(200).json(data);
    });
};
