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
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async () => {};
    return (
        <div className="categoryedit">
            <div className="container">
                <div className="title">
                    <h2>分類主項維護</h2>
                    <hr></hr>
                </div>
                <form className="showdata">
                    <input type="text" name="cat1" placeholder="分類代號" onChange={handleChange} />
                    <input type="text" name="cnam" placeholder="分類中文" onChange={handleChange} />

                    <button onClick={handleClick}>刪除</button>
                    <button onClick={handleClick}>存檔</button>
                    <Link to="/manage/Category">取消</Link>
                </form>
            </div>
        </div>
    );
};

export default CategoryEdit;
