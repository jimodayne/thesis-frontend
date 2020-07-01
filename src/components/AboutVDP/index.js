import React from 'react';

const AboutVDP = () => {
    return (
        <section className="hero is-fullheight-with-navbar" id="about-us">
            <div className="container">
                <p className="title has-text-weight-semibold">ABOUT THIS PROJECT</p>
                <p className="subtitle has-text-weight-medium">
                    Combination of voice recognition and languagemodel for an end-to-end Vietnamese
                    speechrecognition
                </p>
                <p className="has-text-weight-normal">
                    The speech to text problem is not new. However, there are few existing models
                    for languages other than English. This project is to build an end-to-end
                    automatic speech recognition for Vietnamese, using voice recognition and
                    language model, based on the renowned Deep Speech 2 model.
                </p>
            </div>
        </section>
    );
};

export default AboutVDP;
