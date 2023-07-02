import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Menu = ({ cat }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/posts/?cat=${cat}`);
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

    return (
        <div className="menu">
            <h1>其它你可能也會喜歡的文章</h1>
            {posts.map(post => (
                <div className="post" key={post.id}>
                    <img src={post.img} alt="" />
                    <h2>{post.title}</h2>
                    <button>閱讀更多</button>
                </div>
            ))}
        </div>
    );
};

export default Menu;
