//文章分類

import axios from 'axios';
import React, { useState } from 'react';

const Category = () => {
    const [cat, setCat] = useState();
    const [categories, setCategories] = useState([]);

    const handleClick = async () => {
        try {
            const res = await axios.post('/categories', { cat });
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

            <div id="showData">
                <table>
                    <thead>
                        <tr>
                            <th>分類代號</th>
                            <th>分類中文</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map(category => (
                            <tr>
                                <td>{category.po_001_cat1}</td>
                                <td>{category.po_001_cnam}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default Category;
