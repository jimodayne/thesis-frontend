import React from 'react';
import { Link } from 'react-router-dom';

const onClickHamburger = () => {
    const burgerMenu = document.getElementById('burgerMenu');
    const menuContent = document.getElementById('menuContent');
    burgerMenu.classList.toggle('is-active');
    menuContent.classList.toggle('is-active');
};

const Navbar = () => {
    return (
        <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className="navbar-item" to="/">
                    <p className="logo-text">LOGO</p>
                </Link>

                <Link
                    id="burgerMenu"
                    className="navbar-burger burger"
                    role="button"
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="menuContent"
                    onClick={onClickHamburger}
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </Link>
            </div>

            <div id="menuContent" className="navbar-menu">
                <div className="navbar-start">
                    <Link to="/" className="navbar-item">
                        Home
                    </Link>
                    <Link to="/about-us" className="navbar-item">
                        About us
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
