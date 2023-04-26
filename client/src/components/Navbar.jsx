import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.png';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <img src={Logo} alt="Logo"></img>
                </div>
                <div className="links">
                    <Link className="link" to="/?cat=life">
                        <h6>吃喝玩樂</h6>
                    </Link>
                    <Link className="link" to="/?cat=post">
                        <h6>程式筆記</h6>
                    </Link>
                    <Link className="link" to="/?cat=design">
                        <h6>研究</h6>
                    </Link>
                    <Link className="link" to="/?cat=food">
                        <h6>食物</h6>
                    </Link>
                    <Link className="link" to="/?cat=about">
                        <h6>ABOUT ME</h6>
                    </Link>
                    <span>查斯特</span>
                    <span>登出</span>
                    <span className='write'>
                        <Link className="link" to="/write">
                            Write
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
