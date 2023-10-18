import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SY001 = () => {
    const [code, setCode] = useState();
    const [codes, setCodes] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.post('/SY_001/code', { code });
                setCodes(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    });

    return (
        <div className="sy_001">
            <div className="container">
                <div className="title">
                    <h2>代碼類別維護</h2>
                    <hr />
                </div>
                <div className="serach">
                    <input type="text" placeholder="請輸入要查詢的分類代號" onChange={e => setCode(e.target.value)} />
                    <Link to={'/manage/sy001edit'}>新增</Link>
                </div>

                <div className="showdata">
                    <table>
                        <thead>
                            <tr>
                                <th colSpan={2}>系統別</th>
                                <th colSpan={2}>代碼類別</th>
                                <th>代碼代號長度</th>
                                <th>備註長度</th>
                                <th>特殊處理</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td id="data" align="left" colSpan={1}>
                                    PO
                                </td>
                                <td id="data" align="left" colSpan={1}>
                                    文章系統
                                </td>
                                <td id="data" align="left" colSpan={1}>
                                    A1
                                </td>
                                <td id="data" align="left" colSpan={1}>
                                    文章分類主項
                                </td>
                                <td id="data" align="right">
                                    3
                                </td>
                                <td id="data" align="right">
                                    40
                                </td>
                                <td id="data" align="left"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default SY001;
