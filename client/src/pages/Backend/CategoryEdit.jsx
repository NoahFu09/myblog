import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CategoryEdit = () => {
    // const [cat1, setCat1] = useState();
    // const [cnam, setCnam] = useState();

    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
        cat1: '',
        cnam: '',
    });

    const [resData, setResData] = useState();

    const handleChange = e => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
        setResData(null);
    };

    const handleClickSave = async e => {
        e.preventDefault();
        try {
            await axios.post('/category/addCategories', inputs);
        } catch (err) {
            console.log(err);
            setResData(err.response.data);
        }
    };

    const handClickCancle = () => {
        navigate('/manage/category');
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
                    <h2>文章分類主項維護</h2>
                    <hr></hr>
                    {/* <p>
                        上一層: <Link to="/manage/category">文章分類主項</Link>
                    </p> */}
                </div>
                <form className="showdata">
                    <input type="text" name="cat1" placeholder="分類代號" onChange={handleChange} />
                    <input type="text" name="cnam" placeholder="分類中文" onChange={handleChange} />
                    {resData && <p>{resData}</p>}
                </form>
                <button onClick={handleClickSave}>存檔</button>
                <button>刪除</button>
                <button onClick={handClickCancle}>取消</button>
            </div>
        </div>
    );
};

export default CategoryEdit;
