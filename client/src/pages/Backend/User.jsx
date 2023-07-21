import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/authContext';

const User = () => {
    const { currentUser } = useContext(AuthContext);

    const [password, setPassword] = useState('');

    const [checkpassword, setCheckpassword] = useState('');

    console.log(checkpassword);
    return (
        <div className="user">
            <div className="container">
                <table>
                    <thead>
                        <tr>
                            <th colSpan="2">用戶設定</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>帳號</td>
                            <td>
                                <input type="text" disabled="disabled" defaultValue={currentUser?.username} />
                            </td>
                        </tr>
                        <tr>
                            <td>電子信箱</td>
                            <td>
                                <input type="text" disabled="disabled" defaultValue={currentUser?.email} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span className="star">*</span>密碼
                            </td>
                            <td>
                                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span className="star">*</span>再次確認密碼
                            </td>
                            <td>
                                <input type="password" value={checkpassword} onChange={e => setCheckpassword(e.target.value)} />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="errmsg">密碼與確認密碼不符，請重新輸入!</div>
                <input type="button" className="submit" value="存檔" />
            </div>
        </div>
    );
};

export default User;
