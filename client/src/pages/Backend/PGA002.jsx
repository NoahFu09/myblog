import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PGA002 = () => {
    const [res, setRespone] = useState();
    const [inputs, setInputs] = useState({
        sys: 'CM',
        clno: '',
        clnm: '',
        cdln: '',
        nmln: '',
    });
    const [system, setSystem] = useState([]);

    const handleChange = e => {
        //這邊用參數 e 表示 username、oldpassword、password、checkpassword
        //就不用重複寫 const [property, setProperty] = useState();
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/common/getSystem`);
                setSystem(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);

    const handleSubmit = async e => {
        try {
            const res = await axios.post(`/common/insCM006`, inputs);
            setRespone(res.data);
            setInputs({ sys: 'CM', clno: '', clnm: '', cdln: '', nmln: '' });
        } catch (err) {
            setRespone(err.response.data);
        }
    };

    return (
        <div
            className="PGA002"
            onClick={() => {
                let e = document.querySelector('#menu-1');
                if (!e.classList.contains('st-move')) {
                    document.getElementById('menu-1').classList.toggle('st-move');
                }
            }}
        >
            <div className="container">
                <h2>(PGA002) 代碼類別維護副程式</h2>
                <hr />

                <div className="showdata">
                    <select name="sys" id="sys" value={inputs.sys} onChange={handleChange}>
                        {system.map((sys, i) => (
                            <option key={i} id={'sys_' + sys.CM_011_SYSM} value={sys.CM_011_SYSM}>
                                {sys.CM_011_SYSM + ' ' + sys.CM_011_SNAM}
                            </option>
                        ))}
                    </select>

                    <input type="text" placeholder="代碼類別代號 (例:A1, 11" value={inputs.clno} name="clno" onChange={handleChange} />

                    <input type="text" placeholder="代碼類別說明 (例:文章分類第一層" value={inputs.clnm} name="clnm" onChange={handleChange} />

                    <input type="text" placeholder="代碼代號長度 (例:2, 4" value={inputs.cdln} name="cdln" onChange={handleChange} />

                    <input type="text" placeholder="代碼說明長度 (例:20, 40" value={inputs.nmln} name="nmln" onChange={handleChange} />

                    {res && <p className="respone">{res}</p>}
                </div>

                <div className="btn">
                    <input type="button" id="btn_OKY" className="btn_OKY" value="存檔" onClick={handleSubmit} />
                    <div className="btn_NGN">
                        <Link to={'/manage/pga001'}>離開</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PGA002;
