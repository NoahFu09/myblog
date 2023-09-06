import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

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

    const handleClick = async e => {
        e.preventDefault();
        try {
            await axios.post('/categories/', inputs);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div
            className="categoryedit"
            onClick={() => {
                if (!document.querySelector('#menu-1').classList.contains('st-move')) {
                    document.querySelector('#menu-1').classList.toggle('st-move');
                }
            }}
        >
            <div className="container">
                <div className="title">
                    <h2>分類主項維護</h2>
                    <hr></hr>
                    <span>
                        分類設定&ensp;
                        <FontAwesomeIcon icon={faChevronRight} />
                    </span>
                    <span>
                        &ensp;
                        <Link to="/manage/category">分類主項</Link>
                    </span>
                </div>
                <form className="showdata">
                    <input type="text" name="cat1" placeholder="分類代號" onChange={handleChange} />
                    <input type="text" name="cnam" placeholder="分類中文" onChange={handleChange} />
                    <button onClick={handleClick}>存檔</button>
                    <button onClick={handleClick}>刪除</button>
                </form>
            </div>
        </div>
    );
};

export default CategoryEdit;
