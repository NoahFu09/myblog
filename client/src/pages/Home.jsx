import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
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
    // const posts = [
    //     {
    //         id: 1,
    //         title: 'Lorem ipsum dolor sit amet',
    //         desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ut, quisquam deserunt reprehenderit minima eaque dolorem ea, delectus cupiditate, ',
    //         img: 'https://source.unsplash.com/featured/300x203',
    //     },
    //     {
    //         id: 2,
    //         title: 'Lorem ipsum dolor sit amet',
    //         desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quidem magni sit aspernatur voluptatem quisquam, similique sequi odit nihil quasi',
    //         img: 'https://source.unsplash.com/featured/600x400',
    //     },
    //     {
    //         id: 3,
    //         title: 'Lorem ipsum dolor sit amet',
    //         desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quidem magni sit aspernatur voluptatem quisquam, similique sequi odit nihil quasi',
    //         img: 'https://source.unsplash.com/featured/800x600',
    //     },
    // ];

    const getText = html => {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent;
    };

    return (
        <div className="home">
            <div className="posts">
                {posts.map(post => (
                    <div className="post" key={post.id}>
                        <div className="img">
                            <img src={`../upload/${post.img}`} alt="" />
                        </div>
                        <div className="content">
                            <Link className="link" to={`/post/${post.id}`}>
                                <h1>{post.title}</h1>
                            </Link>
                            <p>{getText(post.desc)}</p>
                            <button>看完整文章</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
