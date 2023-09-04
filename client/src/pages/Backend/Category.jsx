//文章分類
import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';

const Category = () => {
    const [cat, setCat] = useState();
    const [categories, setCategories] = useState([]);

    const handleClick = async () => {
        try {
            const res = await axios.get('/categories', { cat });
            setCategories(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div
            className="category"
            onClick={() => {
                if (!document.querySelector('#menu-1').classList.contains('st-move')) {
                    document.querySelector('#menu-1').classList.toggle('st-move');
                }
            }}
        >
            <div className="container">
                <h2>
                    分類設定 <FontAwesomeIcon icon={faAnglesRight} /> 分類主項
                </h2>
                <hr></hr>

                <div className="serach">
                    <input
                        type="text"
                        placeholder="請輸入要查詢的文章分類"
                        onChange={e => {
                            setCat(e.target.value);
                        }}
                    />
                    <input className="btn" type="button" value="查詢" onClick={handleClick} />
                    <Link to={'/manage/CategoryEdit'}>新增</Link>
                </div>

                <div className="showdata">
                    <table>
                        <thead>
                            <tr>
                                <th>分類代號</th>
                                <th>分類中文</th>
                                <th>動作</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map(category => (
                                <tr key={category.po_001_cat1}>
                                    <td>{category.po_001_cat1}</td>
                                    <td>{category.po_001_cnam}</td>
                                    <td>
                                        <Link to="">修改</Link>
                                        <Link to="">刪除</Link>
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
export default Category;
