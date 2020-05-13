import React from 'react';

const AboutUs = () => {
    return (
        <section className="hero is-light is-bold is-fullheight" id="about-us">
            <div className="hero-body">
                <div className="container">
                    {/* <h1 className="title">Medium title</h1>
                    <h2 className="subtitle">Medium subtitle</h2> */}
                    <div className="profiles">
                        <div className="profile">
                            <div className="avatar">
                                <img className="image" src="./avatar.png" alt="" />
                            </div>
                            <p className="name">Minh Thu</p>
                            <p className="content">Lorem isum</p>
                        </div>
                        <div className="profile">
                            <div className="avatar">
                                <img className="image" src="./avatar.png" alt="" />
                            </div>
                            <p className="name">Thinh Tran</p>
                            <p className="content">Lorem isum</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
