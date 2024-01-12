import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const PGA001 = () => {
    const navigate = useNavigate();
    const [defaultSystem, setDefaultSystem] = useState([]);

    const [system, setSystem] = useState('CM');
    const [clno, setClno] = useState();
    const [showData, setShowData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                //系統別下拉
                const resDefaultSystem = await axios.get(`/common/getSystem`);
                setDefaultSystem(resDefaultSystem.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [system, clno]);

    const handleClick = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('/common/getCM006', { system, clno });
            setShowData(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="PGA001">
            <div className="container">
                <div className="title">
                    <h2>(PGA001) 代碼類別維護</h2>
                    <hr />
                </div>
                <div className="serach">
                    <span>系統:</span>
                    <select name="sys" className="sel_sys" onChange={e => setSystem(e.target.value)}>
                        {defaultSystem.map((sys, i) => (
                            <option key={i} id={'sys_' + sys.CM_011_SYSM} value={sys.CM_011_SYSM}>
                                {sys.CM_011_SYSM + ' ' + sys.CM_011_SNAM}
                            </option>
                        ))}
                    </select>
                    <span>代碼類別:</span>
                    <input type="text" className="inp_clno" onChange={e => setClno(e.target.value)} />
                    <input type="button" className="btn_inq" value="查詢" onClick={handleClick} />
                    <input
                        type="button"
                        className="btn_add"
                        value="新增"
                        onClick={() => {
                            navigate('/manage/pga002');
                        }}
                    />
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
                            {showData.map((data, i) => (
                                <tr
                                    key={i}
                                    id={data.CM_006_CLNO}
                                    className="code"
                                    onClick={() => {
                                        navigate('/manage/pga002', { state: data });
                                    }}
                                >
                                    <td id="data" align="left" colSpan={1}>
                                        {data.CM_006_SYS}
                                    </td>
                                    <td id="data" align="left" colSpan={1}>
                                        {data.CM_011_SNAM}
                                    </td>
                                    <td id="data" align="left" colSpan={1}>
                                        {data.CM_006_CLNO}
                                    </td>
                                    <td id="data" align="left" colSpan={1}>
                                        {data.CM_006_CLNM}
                                    </td>
                                    <td id="data" align="right">
                                        {data.CM_006_CDLN}
                                    </td>
                                    <td id="data" align="right">
                                        {data.CM_006_NMLN}
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
