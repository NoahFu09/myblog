import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const NavbarBackend = () => {
    const title = useRef(null);
    const menu = useRef(null);
    const click = () => {
        // title.current.classList.toggle('st-color');
        menu.current.classList.toggle('st-move');
    };

    return (
        <div id="navbarBackend" className="navbarBackend">
            <nav className="st-menu st-move" id="menu-1" ref={menu}>
                <div className="icon">
                    <h2 className="title" ref={title}>
                        My Blog
                    </h2>

                    <FaBars className="st-button" onClick={click} size="1em" />
                </div>
                <Link to="/user">用戶設定</Link>

                <Link to="/post">文章管理</Link>

                <Link to="/write">發布文章</Link>

                <Link to="/">回首頁</Link>
            </nav>
        </div>
    );
};

export default NavbarBackend;
