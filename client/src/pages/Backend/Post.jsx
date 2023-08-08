import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import moment from 'moment';

const Post = () => {
    const [posts, setPosts] = useState([]);

    const cat = useLocation().search;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/posts${cat}`);
                setPosts(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [cat]);

    return (
        <div className="postbackend">
            <table>
                <thead>
                    <tr>
                        <th>項次</th>
                        <th>標題</th>
                        <th>封面</th>
                        <th>發佈日期</th>
                        <th>狀態</th>
                        <th>類別</th>
                        <th>動作</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(post => (
                        <tr>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>
                                <img src={`../upload/${post.img}`} alt="" />
                            </td>
                            <td>{moment(post.date).format('YYYY-MM-DD HH:mm')}</td>
                            <td>{post.state}</td>
                            <td>{post.cat}</td>
                            <td>
                                <Link to={`/write`} state={post}>
                                    修改
                                </Link>

                                <a href="/">刪除</a>
                            </td>
                        </tr>
                    ))}

                    {/* <tr>
                        <td>2</td>
                        <td>test2</td>
                        <td>
                            <img src="https://unsplash.it/400/300" alt="" />
                        </td>
                        <td>2023-07-15 12:19:39</td>
                        <td>編輯中</td>
                        <td>程式開發</td>
                        <td>
                            <a href="/">修改</a>
                            <a href="/">刪除</a>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>test3</td>
                        <td>
                            <img src="https://unsplash.it/800/600" alt="" />
                        </td>
                        <td>2023-07-15 12:19:39</td>
                        <td>不公開</td>
                        <td>美食分享</td>
                        <td>
                            <a href="/">修改</a>
                            <a href="/">刪除</a>
                        </td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    );
};

export default Post;
