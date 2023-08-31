import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

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
                    <FontAwesomeIcon className="st-button" onClick={click} icon={faBars} />
                </div>
                <Link to="/manage/user">用戶設定</Link>

                <Link to="/manage/post">文章管理</Link>

                <Link to="/manage/write">發布文章</Link>

                <Link to="/manage/category">分類設定</Link>

                <Link to="/">回首頁</Link>
            </nav>
        </div>
    );
};

export default NavbarBackend;
