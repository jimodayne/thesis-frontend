import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
            <div className="container">
                <div className="navbar-brand">
                    <Link className="navbar-item" to="/">
                        <p className="logo-text">LOGO</p>
                    </Link>

                    <Link
                        role="button"
                        className="navbar-burger burger"
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbarBasicExample"
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </Link>
                </div>

                <div className="navbar-menu">
                    <div className="navbar-start">
                        <Link to="/" className="navbar-item">
                            Home
                        </Link>
                        <Link to="/about-us" className="navbar-item">
                            About us
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
