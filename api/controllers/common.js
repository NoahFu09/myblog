import { db } from '../db.js';

export const getCodes = (req, res) => {
    const q = req.body.code ? 'SELECT * FROM blog.cm_006 WHERE CM_006_CLNO=?' : 'SELECT * FROM blog.cm_006';
    db.query(q, [req.body.code], (err, data) => {
        if (err) return res.status(500).send(err);

        return res.status(200).json(data);
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
