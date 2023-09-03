import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CategoryEdit = () => {
    // const [cat1, setCat1] = useState();
    // const [cnam, setCnam] = useState();

    const [inputs, setInputs] = useState({
        cat1: '',
        cnam: '',
    });

    const handleChange = e => {
        setInputs(prev => ({ ...prev, [e.taget.name]: e.taget.value }));
    };

    const handleClick = async () => {
        const res = await axios.post('/categories');
    };
    return (
        <div className="categoryedit">
            <div className="container">
                <div className="title">
                    <h2>分類主項維護</h2>
                    <hr></hr>
                </div>

                <div className="showdata">
                    <input type="text" name="cat1" placeholder="分類代號" onChange={handleChange} />
                    <input type="text" name="cnam" placeholder="分類中文" onChange={handleChange} />
                </div>

                <div className="btn">
                    <input type="button" value="刪除" />
                    <input type="button" value="存檔" onClick={handleClick} />
                    <Link to="/manage/Category">取消</Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryEdit;
