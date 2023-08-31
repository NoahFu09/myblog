//文章分類

import axios from 'axios';
import React, { useState } from 'react';

const Catgory = () => {
    const [cat, setCat] = useState();
    const [data, setData] = useState([]);

    console.log(cat);

    const handleClick = async () => {
        try {
            const res = await axios.post('/categories', cat);
            setData(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div
            className="pos001"
            onClick={() => {
                if (!document.querySelector('#menu-1').classList.contains('st-move')) {
                    document.querySelector('#menu-1').classList.toggle('st-move');
                }
            }}
        >
            <div className="container">
                <h2>文章分類</h2>
                <hr></hr>
                <input
                    type="text"
                    placeholder="請輸入要查詢的文章分類"
                    onChange={e => {
                        setCat(e.target.value);
                    }}
                />
                <input type="button" value="查詢" onClick={handleClick} />
                <input type="button" value="新增" />
            </div>

            <div id="showData"></div>
        </div>
    );
};
export default Catgory;
