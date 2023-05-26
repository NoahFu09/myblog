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
                    <Link className="link" to="/?cat=cinema">
                        <h6>觀影心得</h6>
                    </Link>
                    <Link className="link" to="/?cat=design">
                        <h6>程式開發</h6>
                    </Link>
                    <Link className="link" to="/?cat=music">
                        <h6>音樂分享</h6>
                    </Link>
                    <Link className="link" to="/?cat=food">
                        <h6>美食分享</h6>
                    </Link>
                    <Link className="link" to="/?cat=technology">
                        <h6>科技探索</h6>
                    </Link>
                    <span>查斯特</span>
                    <span>登出</span>
                    <span className="write">
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
