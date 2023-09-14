//文章分類
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import moment from 'moment';

const Category = () => {
    const navigate = useNavigate();
    const [cat, setCat] = useState();
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.post('/category/getCategories', { cat });
                setCategories(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [cat]);

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
                <div className="title">
                    <p>首頁&gt;文章設定&gt;文章分類主項</p>
                    <h2>文章分類主項</h2>
                    <hr></hr>
                </div>
                <div className="serach">
                    <input
                        type="text"
                        placeholder="請輸入要查詢的分類中文"
                        onChange={e => {
                            setCat(e.target.value);
                        }}
                    />
                    <Link to={'/manage/categoryedit'}>新增</Link>
                </div>

                <div className="showdata">
                    <table>
                        <thead>
                            <tr>
                                <th>分類代號</th>
                                <th>分類中文</th>
                                <th>更新時間</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map((category, i) => (
                                <tr
                                    className="cat"
                                    id={category.po_001_cat1}
                                    key={category.po_001_cat1}
                                    onClick={() => {
                                        navigate('/manage/categoryedit', {
                                            state: categories[i],
                                        });
                                    }}
                                >
                                    <td>{category.po_001_cat1}</td>
                                    <td>{category.po_001_cnam}</td>
                                    <td>{moment(category.po_001_updt).format('YYYY-MM-DD')}</td>
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
