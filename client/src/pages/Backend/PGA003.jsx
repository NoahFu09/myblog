import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const PGA003 = () => {
    const navigate = useNavigate();
    const [defaultSystem, setDefaultSystem] = useState([]);
    const [defaultClnos, setDefaultClno] = useState([]);

    const [system, setSystem] = useState();
    const [clno, setClno] = useState();
    const [cdno, setCdno] = useState();
    const [showData, setShowData] = useState([]);

    useEffect(() => {
        const fetchDefaultData = async () => {
            try {
                //預設系統別下拉
                const resDefaultSystem = await axios.get(`/common/getSystem`);
                setDefaultSystem(resDefaultSystem.data);
                //預設代碼類別下拉
                const resDefaultClno = await axios.get(`/common/getClno${resDefaultSystem.data[0].CM_011_SYSM}`);
                setDefaultClno(resDefaultClno.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchDefaultData();
    }, []);

    const handleChange = async e => {
        //取得代碼類別下拉
        const resClno = await axios.get(`/common/getClno${e}`);
        setDefaultClno(resClno.data);
    };

    const handleClick = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('/common/getCM007', { system, clno, cdno });
            setShowData(res.data);
        } catch (err) {
            console.log(err);
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
                        <select name="sys" className="sel_sys" onChange={e => handleChange(e.target.value)}>
                            {defaultSystem.map((sys, i) => (
                                <option key={i} id={'sys_' + sys.CM_011_SYSM} value={sys.CM_011_SYSM}>
                                    {sys.CM_011_SYSM + ' ' + sys.CM_011_SNAM}
                                </option>
                            ))}
                        </select>
                        <span>代碼類別:</span>
                        <select name="clno" className="sel_clno">
                            {defaultClnos.map((clno, i) => (
                                <option key={i} value={clno.CM_006_CLNO}>
                                    {clno.CM_006_CLNO + ' ' + clno.CM_006_CLNM}
                                </option>
                            ))}
                        </select>
                        <span>代碼:</span>
                        <input type="text" className="inp_cdno" onChange={e => setCdno(e.target.value)} />
                    </div>
                    <input type="button" value="查詢" className="btn_SEL" onClick={handleClick} />
                    <Link to={'/manage/pga004'} className="btn_ADD">
                        新增
                    </Link>
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
                            {showData.map((data, i) => (
                                <tr
                                    key={i}
                                    id={data.CM_006_CLNO}
                                    className="code"
                                    onClick={() => {
                                        navigate('/manage/PGA004', { state: data[i] });
                                    }}
                                >
                                    <td id="data" align="left" colSpan={1}>
                                        {data.CM_007_SYS}
                                    </td>
                                    <td id="data" align="left" colSpan={1}>
                                        {data.CM_011_SNAM}
                                    </td>
                                    <td id="data" align="left" colSpan={1}>
                                        {data.CM_007_CLNO}
                                    </td>
                                    <td id="data" align="left" colSpan={1}>
                                        {data.CM_006_CLNM}
                                    </td>
                                    <td id="data" align="left">
                                        {data.CM_007_CDNO}
                                    </td>
                                    <td id="data" align="left">
                                        {data.CM_007_CDNM}
                                    </td>
                                    <td id="data" align="left">
                                        {data.CM_007_CDPS}
                                    </td>
                                    <td id="data" align="left">
                                        {data.CM_007_CDP1}
                                    </td>
                                    <td id="data" align="right">
                                        {data.CM_007_CDP2}
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
