import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCaretRight } from '@fortawesome/free-solid-svg-icons';

const NavbarBackend = () => {
    const title = useRef(null);
    const menu = useRef(null);
    const post = useRef(null);
    const sys = useRef(null);

    const sidebarclick = () => {
        menu.current.classList.toggle('st-move');
    };
    const navClick = e => {
        switch (e) {
            case 'sys':
                sys.current.classList.toggle('nav-hide');
                break;
            case 'post':
                post.current.classList.toggle('nav-hide');
                break;
            default:
                break;
        }
    };

    return (
        <div id="navbarBackend" className="navbarBackend">
            <nav className="st-menu st-move" id="menu-1" ref={menu} onMouseEnter={sidebarclick} onMouseLeave={sidebarclick}>
                <div className="icon">
                    <h2 className="title" ref={title}>
                        <Link to="/">My Blog</Link>
                    </h2>
                    <FontAwesomeIcon className="st-button" icon={faBars} />
                    {/* <FontAwesomeIcon className="st-button"  onClick={sidebarclick} icon={faBars} /> */}
                </div>

                <p className="nav-first" onClick={() => navClick('sys')}>
                    系統設定
                </p>
                <ul className="nav-hide" ref={sys}>
                    <li>
                        <Link to="/manage/userpassword">
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <FontAwesomeIcon icon={faCaretRight} />
                            &nbsp;&nbsp;密碼更新
                        </Link>
                    </li>
                    <li>
                        <Link to="/manage/pga001">
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <FontAwesomeIcon icon={faCaretRight} />
                            &nbsp;&nbsp;代碼類別維護
                        </Link>
                    </li>
                </ul>

                <p className="nav-first" onClick={() => navClick('post')}>
                    文章設定
                </p>
                <ul className="nav-hide" ref={post}>
                    <li>
                        <Link to="/manage/category">
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <FontAwesomeIcon icon={faCaretRight} />
                            &nbsp;&nbsp;文章分類主項
                        </Link>
                    </li>
                    <li>
                        <Link to="/manage/category">
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <FontAwesomeIcon icon={faCaretRight} />
                            &nbsp;&nbsp;文章分類次項
                        </Link>
                    </li>
                    <li>
                        <Link to="/manage/post">
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <FontAwesomeIcon icon={faCaretRight} />
                            &nbsp;&nbsp;文章管理
                        </Link>
                    </li>
                    <li>
                        <Link to="/manage/write">
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <FontAwesomeIcon icon={faCaretRight} />
                            &nbsp;&nbsp;發布文章
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavbarBackend;
