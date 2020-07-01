import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [toggleBurger, setToggleBurger] = useState(false);

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="container">
                <div className="navbar-brand">
                    <Link className="navbar-item" to="/">
                        <p className="logo-text">LOGO</p>
                    </Link>

                    <Link
                        id="burgerMenu"
                        className={'navbar-burger burger ' + (toggleBurger ? 'is-active' : '')}
                        role="button"
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="menuContent"
                        onClick={() => setToggleBurger(!toggleBurger)}
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </Link>
                </div>

                <div
                    id="menuContent"
                    className={'navbar-menu ' + (toggleBurger ? 'is-active' : '')}
                >
                    <div className="navbar-start">
                        <Link
                            to="/"
                            className="navbar-item"
                            onClick={() => setToggleBurger(!toggleBurger)}
                        >
                            Home
                        </Link>
                        <Link
                            to="/about-us"
                            className="navbar-item"
                            onClick={() => setToggleBurger(!toggleBurger)}
                        >
                            About us
                        </Link>
                        <Link
                            to="/about-vdp"
                            className="navbar-item"
                            onClick={() => setToggleBurger(!toggleBurger)}
                        >
                            VDP
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
