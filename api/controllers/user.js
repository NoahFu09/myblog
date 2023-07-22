import jwt from 'jsonwebtoken';
import { db } from '../db.js';
import bcrypt from 'bcryptjs';

export const updateUser = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json('Not authenticated!');

    jwt.verify(token, 'jwtkey', (err, userInfo) => {
        if (err) return res.status(403).json('token is not valid!');

        const q = 'SELECT * FROM users WHERE username=? ';

        db.query(q, req.body.username, (err, data) => {
            if (err) return res.json(err);
            //CHECK password
            const isPasswordCorrect = bcrypt.compareSync(req.body.oldpassword, data[0].password);

            if (!isPasswordCorrect) return res.status(400).json('舊密碼輸入不正確，請重新輸入!');

            if (Object.keys(req.body.password).length < 6) return res.status(400).json('新密碼長度輸入不正確，請重新輸入!');

            if (req.body.password != req.body.checkpassword) return res.status(400).json('新密碼或確認密碼輸入不正確，請重新輸入!');

            //替密碼加入雜奏
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(req.body.password, salt);

            const q = 'UPDATE users SET password=? WHERE username=?';

            db.query(q, [hash, req.body.username], (err, data) => {
                if (err) return res.json(err);

                return res.status(200).json('更新成功!');
            });
        });
    });
};
