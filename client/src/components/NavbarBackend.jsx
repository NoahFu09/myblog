import React from 'react';
import { Link } from 'react-router-dom';

const NavbarBackend = () => {
    return (
        <div className="Navbar_Backend">
            <div className="container">
                <div className="links">
                    <Link>
                        <h6>用戶設定</h6>
                    </Link>
                    <Link>
                        <h6>文章管理</h6>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NavbarBackend;
