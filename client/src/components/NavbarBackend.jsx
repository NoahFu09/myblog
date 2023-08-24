import React from 'react';
import { Link } from 'react-router-dom';

const NavbarBackend = () => {
    return (
        <div id="navbarBackend" className="navbarBackend">
            <nav className="st-menu " id="menu-1">
                <h2 className="title">My Blog</h2>
                <button class="toggle">Menu</button>
                <Link to="/user">用戶設定</Link>

                <Link to="/post">文章管理</Link>

                <Link to="/write">發布文章</Link>

                <Link to="/">回首頁</Link>
            </nav>
        </div>
    );
};

export default NavbarBackend;
