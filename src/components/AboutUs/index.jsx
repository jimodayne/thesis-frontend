import React from 'react';

const AboutUs = () => {
    return (
        <section className="hero is-fullheight-with-navbar" id="about-us">
            <div className="hero-body">
                <div className="container">
                    <div className="profiles">
                        <div className="profile">
                            <div className="avatar">
                                <img className="image" src="./ava_thu.jpg" alt="" />
                            </div>
                            <p className="name">Thu Tran</p>
                            <p className="content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div className="profile">
                            <div className="avatar">
                                <img className="image" src="./ava_jim.jpg" alt="" />
                            </div>
                            <p className="name">Thinh Tran</p>
                            <p className="content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
