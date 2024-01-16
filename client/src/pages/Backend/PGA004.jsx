import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const PGA004 = () => {
    const navigate = useNavigate();
    const state = useLocation().state;
    const [res, setRespone] = useState();
    const [defaultSystem, setDefaultSystem] = useState([]);
    const [defaultClnos, setDefaultClno] = useState([]);
    const [inputs, setInputs] = useState({
        sys: state ? state.CM_007_SYS : ' ',
        clno: state ? state.CM_007_CLNO : ' ',
        cdno: state ? state.CM_007_CDNO : ' ',
        cdnm: state ? state.CM_007_CDNM : ' ',
        cdps: state ? state.CM_007_CDPS : ' ',
        cdp1: state ? state.CM_007_CDP1 : ' ',
        cdp2: state ? state.CM_007_CDP2 : 0,
    });

    const handleChange = async e => {
        if (e.target.name === 'sys') {
            //取得新代碼類別下拉
            const resClno = await axios.get(`/common/getClno${e.target.value}`);
            setDefaultClno(resClno.data);
        }

        //就不用重複寫 const [property, setProperty] = useState();
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                //系統別下拉
                const resDefaultSystem = await axios.get(`/common/getSystem`);
                setDefaultSystem(resDefaultSystem.data);
                //代碼類別下拉
                const resDefaultClno = await axios.get(`/common/getClno${state?.CM_007_SYS}`);
                setDefaultClno(resDefaultClno.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [state?.CM_007_SYS]);

    const handleSubmit = async e => {
        try {
            const res = state.CM_007_CDNO ? await axios.post(`/common/updateCM007`, inputs) : await axios.post(`/common/insertCM007`, inputs);
            setRespone(res.data);
            navigate('/manage/pga003');
        } catch (err) {
            setRespone(err.response.data);
            console.log(err);
        }
    };

    const handleClickDelete = async e => {};

    return (
        <div
            className="PGA004"
            onClick={() => {
                let e = document.querySelector('#menu-1');
                if (!e.classList.contains('st-move')) {
                    document.getElementById('menu-1').classList.toggle('st-move');
                }
            }}
        >
            <div className="container">
                <h2>(PGA004) 代碼代號維護副程式</h2>
                <hr />

                <div className="showdata">
                    <select name="sys" disabled={state.CM_007_CDNO} onChange={handleChange}>
                        {defaultSystem.map((sys, i) => (
                            <option key={i} value={sys.CM_011_SYSM} selected={sys.CM_011_SYSM === state.CM_007_SYS}>
                                {sys.CM_011_SYSM + ' ' + sys.CM_011_SNAM}
                            </option>
                        ))}
                    </select>

                    <select name="clno" disabled={state.CM_007_CDNO} onChange={handleChange}>
                        {defaultClnos.map((clno, i) => (
                            <option key={i} value={clno.CM_006_CLNO} selected={clno.CM_006_CLNO === state.CM_006_CLNO}>
                                {clno.CM_006_CLNO + ' ' + clno.CM_006_CLNM}
                            </option>
                        ))}
                    </select>

                    <input
                        type="text"
                        placeholder="代碼代號"
                        name="cdno"
                        defaultValue={inputs.cdno}
                        disabled={state.CM_007_CDNO}
                        onChange={handleChange}
                    />

                    <input type="text" placeholder="代碼代號說明" name="cdnm" defaultValue={inputs.cdnm} onChange={handleChange} />

                    <input type="text" placeholder="備註" name="cdps" defaultValue={inputs.cdps} onChange={handleChange} />

                    <input type="text" placeholder="參數一" name="cdp1" defaultValue={inputs.cdp1} onChange={handleChange} />

                    <input type="text" placeholder="參數二" name="cdp2" defaultValue={inputs.cdp2} onChange={handleChange} />

                    {res && <p className="respone">{res}</p>}
                </div>

                <div className="btn">
                    <input type="button" id="btn_OKY" className="btn_OKY" value="存檔" onClick={handleSubmit} />
                    <input type="button" id="btn_DEL" className="btn_DEL" value="刪除" onClick={handleClickDelete} />

                    <Link to={'/manage/pga003'} className="btn_NGN">
                        離開
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PGA004;
