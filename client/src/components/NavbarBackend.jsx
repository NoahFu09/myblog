import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';

const NavbarBackend = () => {
    const title = useRef(null);
    const menu = useRef(null);
    const category = useRef(null);
    const click = () => {
        // title.current.classList.toggle('st-color');
        menu.current.classList.toggle('st-move');
    };
    const hidecatClick = () => {
        category.current.classList.toggle('hidecat');
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

                <p className="bt-1" onClick={hidecatClick}>
                    分類設定 &nbsp;
                    <FontAwesomeIcon icon={faCaretDown} />
                </p>

                <ul className="hidecat" ref={category}>
                    <li>
                        <Link to="/manage/category">
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <FontAwesomeIcon icon={faCaretRight} />
                            &nbsp; 分類主項
                        </Link>
                    </li>
                    <li>
                        <Link to="/manage/category">
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <FontAwesomeIcon icon={faCaretRight} />
                            &nbsp; 分類次項
                        </Link>
                    </li>
                </ul>

                <Link to="/">回首頁</Link>
            </nav>
        </div>
    );
};

export default NavbarBackend;
