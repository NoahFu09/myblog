import { db } from '../db.js';
import bcrypt from 'bcryptjs';

export const register = (req, res) => {
    //檢查 USER 是否存在
    const q = 'SELECT * FROM users WHERE email=? OR username=?';

    db.query(q, [req.body.email, req.body.username], (err, data) => {
        if (err) return res.json(err);
        if (data.length) return res.status(409).json('此用戶已存在，請嘗試其它名稱!');

        //替密碼加入雜奏
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const q = 'INSERT INTO users(`username`,`email`,`password`) VALUES (?)';

        const values = [req.body.username, req.body.email, hash];

        db.query(q, [values], (err, data) => {
            if (err) return res.json(err);
            return res.status(200).json('帳號已建立成功！');
        });
    });
};

export const login = (req, res) => {};

export const logout = (req, res) => {};
