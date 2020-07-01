import React, { useState } from 'react';
import MicRecorder from 'mic-recorder-to-mp3';
import Dropzone from 'react-dropzone';
import { Chip } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const API = 'http://104.199.147.226:8000/';
const recorder = new MicRecorder({
    bitRate: 128
});

const Homepage = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [preview, setPreview] = useState();
    const [file, setFile] = useState([]);
    const [result, setResult] = useState('huhuhuhuhuh');

    const handleOnClick = () => {
        return isRecording ? stopRecording() : startRecording();
    };

    const startRecording = () => {
        recorder
            .start()
            .then(() => {
                setIsRecording(true);
            })
            .catch(e => {
                console.error(e);
            });
    };

    const stopRecording = () => {
        recorder
            .stop()
            .getMp3()
            .then(([buffer, blob]) => {
                console.log(buffer, blob);
                const file = new File(buffer, 'music.mp3', {
                    type: blob.type,
                    lastModified: Date.now()
                });

                const previewURL = URL.createObjectURL(file);
                setPreview(previewURL);
                setIsRecording(false);
            })
            .catch(e => {
                console.error(e);
            });
    };

    const handleSubmit = async () => {
        // const res = await fetch(API, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'text/html'
        //         // mode: 'cors'
        //     },
        //     body: JSON.stringify(file)
        // });
        // console.log(res);
        // return res.json();
    };

    return (
        <div>
            <section className="section" id="homepage">
                <div className="container">
                    <div className="record-button-container">
                        <div
                            className={'record-button ' + (isRecording ? 'is-recording' : '')}
                            onClick={handleOnClick}
                        >
                            <img className="record-icon" src="./mic_icon.svg" alt="mic-wrapper" />
                        </div>
                    </div>
                    {preview && (
                        <audio
                            controls
                            className="audio"
                            src={preview}
                            style={{ marginBottom: '15px', display: 'block' }}
                        >
                            Your browser does not support the
                            <code>audio</code> element.
                        </audio>
                    )}
                </div>
                <div className="vertical_break"></div>
                <div className="container upload">
                    <div className="dropzone">
                        <Dropzone
                            accept={['.wav', '.mp3']}
                            multiple={false}
                            disabled={file.length > 0}
                            onDrop={acceptedFile => setFile(acceptedFile)}
                        >
                            {({ getRootProps, getInputProps }) => (
                                <div {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    <div
                                        variant="text"
                                        className="record-button-container"
                                        style={{ textTransform: 'none' }}
                                    >
                                        <div className="record-button">
                                            <AddIcon className="add_icon" />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Dropzone>
                    </div>
                    <div className="file_container">
                        {file.length > 0 && (
                            <Chip label={file[0].name} onDelete={() => setFile([])}></Chip>
                        )}
                    </div>
                </div>
            </section>
            <div className="btn_container">
                <div className={'submit_btn_container'}>
                    <button
                        disabled={file.length === 0}
                        className="submit_btn"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </div>
            </div>
            <div className="result has-text-centered has-text-weight-semibold">
                <div style={{ fontSize: '24px', marginBottom: '8px' }}>Result:</div>
                <div className="has-text-weight-normal">{result}</div>
            </div>
        </div>
    );
};

export default Homepage;
