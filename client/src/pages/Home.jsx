import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const posts = [
        {
            id: 1,
            title: 'Lorem ipsum dolor sit amet',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quidem magni sit aspernatur voluptatem quisquam, similique sequi odit nihil quasi',
            img: 'https://source.unsplash.com/featured/300x203',
        },
        {
            id: 2,
            title: 'Lorem ipsum dolor sit amet',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quidem magni sit aspernatur voluptatem quisquam, similique sequi odit nihil quasi',
            img: 'https://source.unsplash.com/featured/600x400',
        },
        {
            id: 3,
            title: 'Lorem ipsum dolor sit amet',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quidem magni sit aspernatur voluptatem quisquam, similique sequi odit nihil quasi',
            img: 'https://source.unsplash.com/featured/800x600',
        },
    ];

    return (
        <div className="home">
            <div className="posts">
                {posts.map(post => (
                    <div className="post" key={post.id}>
                        <div className="img">
                            <img src={post.img} alt="" />
                        </div>
                        <div className="content">
                            <Link className="link" to={`/post/${post.id}`}>
                                <h1>{post.title}</h1>
                                <p>{post.desc}</p>
                                <button>看完整文章</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
