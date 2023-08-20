import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/authContext';
import axios from 'axios';

const User = () => {
    const { currentUser } = useContext(AuthContext);

    const [res, setRespone] = useState();

    const [inputs, setInputs] = useState({
        userid: currentUser?.py_001_usid,
        // username: '',
        oldpassword: '',
        password: '',
        checkpassword: '',
    });

    const handleChange = e => {
        //這邊用參數 e 表示 username、oldpassword、password、checkpassword
        //就不用重複寫 const [property, setProperty] = useState();
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));

        //有重新輸入就把錯誤訊息洗掉，可加可不加，有些政府網站好像不會清
        setRespone('');
    };

    const handleSubmit = async e => {
        try {
            const res = await axios.post('/users/', inputs);
            setRespone(res.data);

            //submit成功，重新設定預設值，記得html元素要有value 屬性才吃的到
            //而且如果這邊預設值只給 oldpassword、password、checkpassword
            //再下一次 submit 會沒有 username property
            setInputs({ userid: currentUser?.py_001_usid, oldpassword: '', password: '', checkpassword: '' });
        } catch (err) {
            setRespone(err.response.data);
            setInputs({ userid: currentUser?.py_001_usid, oldpassword: '', password: '', checkpassword: '' });
        }
    };

    return (
        <div className="userbackend">
            <h2>用戶設定</h2>
            <hr />

            <input type="text" placeholder="帳號" disabled="disabled" name="userid" defaultValue={currentUser?.py_001_usid} onChange={handleChange} />

            <input type="text" placeholder="電子信箱" disabled="disabled" name="email" defaultValue={currentUser?.py_001_mail} />

            {/* <input
                type="text"
                placeholder={'暱稱 (現在的暱稱:' + currentUser?.py_001_unme + ')'}
                name="username"
                value={inputs.username}
                onChange={handleChange}
            /> */}

            <input type="password" placeholder="舊密碼" name="oldpassword" value={inputs.oldpassword} onChange={handleChange} />

            <input type="password" placeholder="新密碼" name="password" value={inputs.password} onChange={handleChange} />

            <input type="password" placeholder="再次輸入新密碼" name="checkpassword" value={inputs.checkpassword} onChange={handleChange} />

            {res && <p className="respone">{res}</p>}
            <input type="button" id="btn_OKY" className="submit" value="存檔" onClick={handleSubmit} />
            {/* <table>
                <thead>
                    <tr>
                        <th colSpan="2">用戶設定</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>帳號</td>
                        <td>
                            <input type="text" disabled="disabled" name="username" defaultValue={currentUser?.username} onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td>電子信箱</td>
                        <td>
                            <input type="text" disabled="disabled" name="email" defaultValue={currentUser?.email} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span className="star">*</span>舊密碼
                        </td>
                        <td>
                            <input type="password" name="oldpassword" value={inputs.oldpassword} onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span className="star">*</span>新密碼
                        </td>
                        <td>
                            <input type="password" name="password" value={inputs.password} onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span className="star">*</span>再次確認密碼
                        </td>
                        <td>
                            <input type="password" name="checkpassword" value={inputs.checkpassword} onChange={handleChange} />
                        </td>
                    </tr>
                </tbody>
            </table>
            {res && <p className="respone">{res}</p>}
            <input type="button" className="submit" value="存檔" onClick={handleSubmit} /> */}
        </div>
    );
};

export default User;
