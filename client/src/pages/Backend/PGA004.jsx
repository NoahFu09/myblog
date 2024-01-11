import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const PGA004 = () => {
    const state = useLocation().state;
    console.log(state);

    const navigate = useNavigate();

    const [res, setRespone] = useState();
    const [defaultSystem, setDefaultSystem] = useState([]);
    const [defaultClnos, setDefaultClno] = useState([]);
    const [inputs, setInputs] = useState({
        sys: null,
        clno: null,
        cdno: null,
        cdnm: null,
        cdps: null,
        cdp1: null,
        cdp2: null,
    });
    const handleChange = e => {
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
                const resDefaultClno = await axios.get(`/common/getClno${inputs.sys}`);
                setDefaultClno(resDefaultClno.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [inputs.sys, inputs.clno]);

    const handleSubmit = async e => {};

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
                    <select name="sys" onChange={handleChange}>
                        {defaultSystem.map((sys, i) => (
                            <option key={i} value={sys.CM_011_SYSM}>
                                {sys.CM_011_SYSM + ' ' + sys.CM_011_SNAM}
                            </option>
                        ))}
                    </select>

                    <select name="clno" onChange={handleChange}>
                        {defaultClnos.map((clno, i) => (
                            <option key={i} value={clno.CM_006_CLNO}>
                                {clno.CM_006_CLNO + ' ' + clno.CM_006_CLNM}
                            </option>
                        ))}
                    </select>

                    <input type="text" placeholder="代碼代號" name="cdno" onChange={handleChange} />

                    <input type="text" placeholder="代碼代號說明" name="cdnm" onChange={handleChange} />

                    <input type="text" placeholder="備註" name="cdps" onChange={handleChange} />

                    <input type="text" placeholder="參數一" name="cdp1" onChange={handleChange} />

                    <input type="text" placeholder="參數二" name="cdp2" onChange={handleChange} />

                    {res && <p className="respone">{res}</p>}
                </div>

                <div className="btn">
                    <input type="button" id="btn_OKY" className="btn_OKY" value="存檔" onClick={handleSubmit} />
                    <input type="button" id="btn_DEL" className="btn_DEL" value="刪除" onClick={handleClickDelete} />

                    <Link to={'/manage/pga001'} className="btn_NGN">
                        離開
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PGA004;
