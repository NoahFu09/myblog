import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import Logo from '../img/logo.png';

const Navbar = () => {
    const { currentUser, logout } = useContext(AuthContext);

    return (
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="Logo"></img>
                    </Link>
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
                    <span>{currentUser?.username}</span>
                    {currentUser ? (
                        <span onClick={logout}>登出</span>
                    ) : (
                        <Link className="link" to="/login">
                            登入
                        </Link>
                    )}
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
