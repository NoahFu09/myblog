import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const PGA001 = () => {
    const navigate = useNavigate();
    const [code, setCode] = useState();
    const [codes, setCodes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.post('/common/getCodes', { code });
                setCodes(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [code]);

    return (
        <div className="PGA001">
            <div className="container">
                <div className="title">
                    <h2>(PGA001) 代碼類別維護</h2>
                    <hr />
                </div>
                <div className="serach">
                    <input type="text" placeholder="請輸入要查詢的系統別" onChange={e => setCode(e.target.value)} />
                    <Link to={'/manage/pga002'}>新增</Link>
                </div>

                <div className="showdata">
                    <table>
                        <thead>
                            <tr id="header" className="header">
                                <th colSpan={2}>系統別</th>
                                <th colSpan={2}>代碼類別</th>
                                <th>代碼代號長度</th>
                                <th>備註長度</th>
                            </tr>
                        </thead>
                        <tbody>
                            {codes.map((code, i) => (
                                <tr
                                    key={i}
                                    id={code.CM_006_CLNO}
                                    className="code"
                                    onClick={() => {
                                        navigate('/manage/PGA002', { state: codes[i] });
                                    }}
                                >
                                    <td id="data" align="left" colSpan={1}>
                                        {code.CM_006_SYS}
                                    </td>
                                    <td id="data" align="left" colSpan={1}>
                                        {code.CM_011_SNAM}
                                    </td>
                                    <td id="data" align="left" colSpan={1}>
                                        {code.CM_006_CLNO}
                                    </td>
                                    <td id="data" align="left" colSpan={1}>
                                        {code.CM_006_CLNM}
                                    </td>
                                    <td id="data" align="right">
                                        {code.CM_006_CDLN}
                                    </td>
                                    <td id="data" align="right">
                                        {code.CM_006_NMLN}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PGA001;
