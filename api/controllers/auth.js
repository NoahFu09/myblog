import { db } from '../db.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { now } from './common.js';

export const register = (req, res) => {
    //檢查 USER 是否存在
    const q = 'SELECT * FROM py_001 WHERE py_001_mail=? OR py_001_usid=?';

    db.query(q, [req.body.email, req.body.userid], (err, data) => {
        if (err) return res.json(err);
        if (data.length) return res.status(409).json('此用戶已存在，請嘗試其它名稱!');

        //替密碼加入雜奏
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const q = 'INSERT INTO py_001 VALUES (?)';
        const values = [req.body.userid, req.body.userid, hash, req.body.email, '', '', '', '', '', '', now(), 'admin', now(), 'admin'];

        db.query(q, [values], (err, data) => {
            if (err) return res.json(err);
            return res.status(200).json('帳號已建立成功！');
        });
    });
};

export const login = (req, res) => {
    // CHECK USER

    const q = 'SELECT * FROM users WHERE username=?';

    db.query(q, [req.body.username], (err, data) => {
        if (err) return res.json(err);
        if (data.length === 0) return res.status(404).json('找不到此用戶!');

        // CHECK password
        const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password); // true

        if (!isPasswordCorrect) return res.status(400).json('錯誤的帳號或密碼!');

        const token = jwt.sign({ id: data[0].id, level: data[0].level }, 'jwtkey');
        const { password, level, ...other } = data[0];

        //只有透過API才可以取到 access_token
        return res.cookie('access_token', token, { httpOnly: true }).status(200).json(other);
    });
};

export const logout = (req, res) => {
    res.clearCookie('access_token', { sameSite: 'none', secure: true }).status(200).json('使用者已登出');
};
