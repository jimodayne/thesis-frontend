import React from 'react';

const AboutVDP = () => {
    return (
        <div className="hero is-fullheight-with-navbar" id="about-project">
            <div className="container">
                <section className="section">
                    <header>
                        <h1 class="title is-1 has-text-weight-bold">
                            Combination of voice recognition and languagemodel for an end-to-end
                            Vietnamese speechrecognition
                        </h1>
                        <p className="subtitle meta">
                            Students: Tran Ngoc Minh Thu - 1652599, Tran Duc Thinh - 1652578
                            <br /> Instructors: Assoc. Prof. Quan Thanh Tho, Dr. Nguyen Duc Dung
                        </p>
                    </header>
                </section>
                <section className="section">
                    <header>
                        <h3 class="title is-3">Acknowledgement</h3>
                    </header>
                    <p className="content">
                        We would love to show our deep and honest gratitude to Assoc. Prof. Quản
                        Thành Thơ and Dr. Nguyễn Đức Dũng. We are eternally grateful and indebted to
                        your guidance, advice, enthusiasm and encouragement in helping us
                        researching and implementing this project.
                    </p>
                    <p className="content">
                        We wish to express our appreciation to all of our faculty lecturers, without
                        whom we would not have the necessary knowledge to finish our project. Later,
                        when equipped with precious expertise from this university, we will be
                        confidently head into our future and be phenomenal.
                    </p>
                    <p className="content">
                        We also wish to acknowledge the support from our family and friends (Dũng,
                        Toàn, Như, Duy, ...), for they always stand by us
                    </p>
                    <p className="content">
                        Despise our commitment, we are aware that this project is still inadequate
                        and contains inevitable errors. We would love to receive feedback from
                        lecturers in order to improve furthermore.
                    </p>
                    <p className="content">
                        Finally, we wish you health, prosperity, and success in your chosen paths
                    </p>
                </section>
                <section className="section">
                    <h3 class="title is-3">Abstract</h3>
                    <p className="content">
                        The speech to text problem is not uncommon, since automatic speech
                        recognition is an important feature in the modern world. There are some
                        existing models regarding this particular problem. However, there are few,
                        if not rare, existing models for languages other than English. This is
                        because of the differences in the characteristics of each language, so the
                        implementation of speech to text systems varies remarkably for each country.
                        Our graduation project is to build a Vietnamese end-to-end automatic speech
                        recognition for extracurricular activities, using voice recognition and
                        language model, based on the Deep Speech 2 model.
                    </p>
                </section>

                <section className="section">
                    <h3 class="title is-3">Introduction</h3>
                    <p className="content">
                        Our university has very active and energetic extracurricular activities. The
                        activities are usually organized by a group of students. They handle, inform
                        and announce information through a Facebook fan page. So when big events are
                        approaching, such as Mua He Xanh, Xuan Tinh Nguyen,… the fan page that
                        organizes those activities are usually bombarded with a lot of questions
                        from students. But the number of admins is not enough to handle all of
                        those, so the process is quite slow and frustrating. Students have to wait
                        for a while before they can get their answers.
                    </p>
                    <p className="content">
                        Our thesis is a part of a bigger application, which can enhance and improve
                        the user experience when using chat applications to ask for services about
                        extracurricular activities. This application includes 2 parts: an ASR system
                        for transferring speech to text so that students don’t have to type since
                        speaking is much faster, and an Intelligent Chatbot so that students can get
                        the information they need automatically, without depending on manual
                        interactions. Our thesis focuses on the ASR system, which is built under the
                        influence of the renowned Deep Speech 2.
                    </p>
                </section>

                <section className="section">
                    <h3 class="title is-3">Voice recognizer</h3>
                    <p className="content">
                        Based on Deep Speech 2, our Voice Recognizer has the following architecture:
                        2 layers of CNN, 2 layers of bidirectional RNN with LSTM and hidden layer
                        size of 600, 1 fully connected layer. The input is an audio file,
                        represented as a Spectrogram. After having this spectrogram go through the
                        neural network, the text will go through CTC (Connectionist Temporal
                        Classification). Then we will have a raw text from the audio. This raw text
                        will be the input for further correction from our Language Model.
                    </p>
                </section>
                <section className="section">
                    <h3 class="title is-3">Language model</h3>
                    <p className="content">
                        In order to produce the most correct transcript out of the user’s audio
                        input, we use Language Model. A statistical language model is a probability
                        distribution over sequences of words. The general problem statement for the
                        language model is to correct Vietnamese sentences with wrong spelling. In
                        this thesis, it means that the language model will correct the sentence
                        generated from the Voice Recognizer Our language model is the Left2Right and
                        Right2Left model.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default AboutVDP;
