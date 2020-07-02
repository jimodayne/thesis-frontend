import React, { useState } from 'react';
import MicRecorder from 'mic-recorder-to-mp3';
import Dropzone from 'react-dropzone';
import { Chip } from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { Ring } from 'react-spinners-css';

const API = 'http://104.199.147.226:8000/';
const recorder = new MicRecorder({
    bitRate: 128
});

const Homepage = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [preview, setPreview] = useState();
    const [file, setFile] = useState([]);
    const [result, setResult] = useState(undefined);
    const [isLoading, setLoading] = useState(false);

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
                const file = new File(buffer, 'audio.wav', {
                    type: blob.type,
                    lastModified: Date.now()
                });

                const previewURL = URL.createObjectURL(file);
                setPreview(previewURL);
                setIsRecording(false);
                setFile(file);

                console.log('stopRecording -> file', file);
            })
            .catch(e => {
                console.error(e);
            });
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        console.log('file', file);
        formData.append('file', file, file.name);
        setLoading(true);
        fetch(API, {
            method: 'POST',
            body: formData
        }).then(res => {
            setLoading(false);
            if (res) {
                res.json().then(data => {
                    data && setResult(data);
                });
            }
        });
    };

    return (
        <section className="section" id="homepage">
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <div className="record-button-container">
                            <button
                                // disabled={file.length > 0}
                                className={'record-button ' + (isRecording ? 'is-recording' : '')}
                                onClick={handleOnClick}
                            >
                                <img
                                    className="record-icon"
                                    src="./mic_icon.svg"
                                    alt="mic-wrapper"
                                />
                            </button>
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
                    <div className="column">
                        <div className="upload">
                            <div className="dropzone">
                                <Dropzone
                                    accept={['.wav', '.mp3']}
                                    multiple={false}
                                    // disabled={file.length > 0}
                                    onDrop={acceptedFile => {
                                        setFile(acceptedFile[0]);
                                    }}
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
                                                    <AddBoxIcon className="add_icon" />
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
                    </div>
                </div>

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
                <div className="loading-wrapper">{isLoading && <Ring color="#be97e8" />}</div>
                {result && (
                    <div className="result has-text-centered has-text-weight-semibold">
                        <div style={{ fontSize: '24px', marginBottom: '8px' }}>Result:</div>

                        <div className="has-text-weight-normal">{result}</div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Homepage;
