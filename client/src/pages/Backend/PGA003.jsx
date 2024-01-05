import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const PGA003 = () => {
    const navigate = useNavigate();
    const [_dclnos, setDclno] = useState([]);
    const [_dsystem, setDsystem] = useState([]);

    const [sys, setSys] = useState('PO');
    const [cdno, setCdno] = useState();
    const [codes, setCodes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const res = await axios.post('/common/getCM007', { code });
                // setCodes(res.data);

                const res_dclnos = await axios.get(`/common/getSystem`);
                setDsystem(res_dclnos.data);

                const res_dsystem = await axios.get(`/common/getClno${sys}`);
                setDclno(res_dsystem.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);

    const handleClick = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('/common/getCM007', { sys, cndo });
            alert(res.data);
            navigate('/manage/category');
        } catch (err) {
            console.log(err);
            setResData(err.response.data);
        }
    };

    return (
        <div className="PGA003">
            <div className="container">
                <div className="title">
                    <h2>(PGA003) 代碼代號維護</h2>
                    <hr />
                </div>
                <div className="serach">
                    <div>
                        <span>系統:</span>
                        <select name="sys" id="sys" onChange={e => setSys(e.target.value)}>
                            {system.map((sys, i) => (
                                <option key={i} id={'sys_' + sys.CM_011_SYSM} value={sys.CM_011_SYSM}>
                                    {sys.CM_011_SYSM + ' ' + sys.CM_011_SNAM}
                                </option>
                            ))}
                        </select>
                        <span>代碼類別:</span>
                        <select name="clno" id="clno">
                            {clnos.map((clno, i) => (
                                <option key={i} value={clno.CM_006_CLNO}>
                                    {clno.CM_006_CLNO + ' ' + clno.CM_006_CLNM}
                                </option>
                            ))}
                        </select>
                        <span>代碼:</span>
                        <input type="text" id="cdno" onChange={e => setCdno(e.target.value)} />
                    </div>
                    <input type="button" value="查詢" onClick={handleClick} />
                    <Link to={'/manage/pga002'}>新增</Link>
                </div>

                <div className="showdata">
                    <table>
                        <thead>
                            <tr id="header" className="header">
                                <th colSpan={2}>系統別</th>
                                <th colSpan={2}>代碼類別</th>
                                <th>代碼代號</th>
                                <th>代碼代號說明</th>
                                <th>備註</th>
                                <th>參數一</th>
                                <th>參數二</th>
                            </tr>
                        </thead>
                        <tbody>
                            {codes.map((code, i) => (
                                <tr
                                    key={i}
                                    id={code.CM_006_CLNO}
                                    className="code"
                                    onClick={() => {
                                        navigate('/manage/PGA004', { state: codes[i] });
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

export default PGA003;
