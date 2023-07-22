import React from 'react';
import { Link } from 'react-router-dom';

const NavbarBackend = () => {
    return (
        <div className="navbarbackend">
            <div className="container">
                <div className="links">
                    <Link to="/user" className="link">
                        <h6>用戶設定</h6>
                    </Link>
                    <Link to="/post" className="link">
                        <h6>文章管理</h6>
                    </Link>
                    <Link to="/" className="link">
                        <h6>回首頁</h6>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NavbarBackend;
