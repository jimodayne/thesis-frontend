import React, { useState, useEffect } from 'react';
import Dropzone from 'react-dropzone';
import { Chip } from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { Ring } from 'react-spinners-css';
import toWav from 'audiobuffer-to-wav';

const API = 'https://104.199.147.226:8000/';
const API_PROCESS = 'https://104.199.147.226:8001/';

let chunks = [];
let mediaRecorder;

const Homepage = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [preview, setPreview] = useState();
    const [file, setFile] = useState([]);
    const [result, setResult] = useState(undefined);
    const [isAPIProcess, setAPI] = useState(false);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            if (navigator.getUserMedia) {
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                mediaRecorder = new MediaRecorder(stream);
                mediaRecorder.ondataavailable = e => {
                    if (e.data && e.data.size > 0) {
                        chunks.push(e.data);
                    }
                };
            } else {
                console.log('Media Decives will work only with SSL.....');
            }
        })();
    }, []);

    const handleOnClick = () => {
        return isRecording ? stopRecording() : startRecording();
    };

    const startRecording = () => {
        handleReset();
        setIsRecording(true);
        mediaRecorder && mediaRecorder.start(10);
    };

    const stopRecording = () => {
        setIsRecording(false);
        mediaRecorder && mediaRecorder.stop();
        saveAudio();
    };

    const convertBlobToAudioBuffer = myBlob => {
        const audioContext = new AudioContext();
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            let myArrayBuffer = fileReader.result;
            audioContext.decodeAudioData(myArrayBuffer, audioBuffer => {
                // Do something with audioBuffer
                const wav = toWav(audioBuffer);
                const blob = new Blob([new DataView(wav)], {
                    type: 'audio/wav'
                });
                const audioURL = URL.createObjectURL(blob);
                setPreview(audioURL);

                setFile(blob);
            });
        };
        //Load blob
        fileReader.readAsArrayBuffer(myBlob);
    };
    const saveAudio = () => {
        const blob = new Blob(chunks, { type: 'audio/webm' });
        console.log('blob', blob);
        convertBlobToAudioBuffer(blob);
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('file', file, file.name);
        setLoading(true);
        fetch(isAPIProcess ? API_PROCESS : API, {
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

    const handlePreprocess = e => {
        setAPI(e.target.checked);
    };
    const handleReset = () => {
        setResult('');
        setFile([]);
        setPreview(null);
        setLoading(false);
        chunks = [];
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
                    </div>
                    <div className="column">
                        <div className="upload">
                            <div className="dropzone">
                                <Dropzone
                                    accept={['.wav']}
                                    multiple={false}
                                    // disabled={file.length > 0}
                                    onDrop={acceptedFile => {
                                        handleReset();
                                        setFile(acceptedFile[0]);
                                        console.log('acceptedFile[0]', acceptedFile[0]);
                                        const previewURL = URL.createObjectURL(acceptedFile[0]);
                                        setPreview(previewURL);

                                        console.log('previewURL', previewURL);
                                    }}
                                >
                                    {({ getRootProps, getInputProps }) => (
                                        <div {...getRootProps()}>
                                            <input
                                                {...getInputProps()}
                                                style={{ outline: 'none', display: 'none' }}
                                            />
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
                <div className="audio-preview">
                    {preview && (
                        <audio
                            controls
                            className="audio"
                            style={{ marginBottom: '15px', display: 'block' }}
                        >
                            <source src={preview} type="audio/ogg" />
                            Your browser does not support the
                            <code>audio</code> element.
                        </audio>
                    )}
                </div>

                <label className="checkbox">
                    <input type="checkbox" onClick={handlePreprocess} />
                    Preprocess
                </label>

                <div className="btn_container">
                    <div className="submit_btn_container">
                        <button
                            disabled={file.length === 0}
                            className="submit_btn"
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    </div>
                    <div className="submit_btn_container">
                        <button
                            // disabled={file.length === 0}
                            className="reset_btn"
                            onClick={handleReset}
                        >
                            Reset
                        </button>
                    </div>
                </div>
                {isLoading && (
                    <div className="loading-wrapper">{isLoading && <Ring color="#be97e8" />}</div>
                )}
                {result && (
                    <div className="result has-text-centered has-text-weight-semibold">
                        <div style={{ fontSize: '24px', marginBottom: '8px' }}>Result:</div>
                        <div className="has-text-weight-normal is-uppercase is-size-5">
                            Predict: {result.predict}
                        </div>
                        <div className="has-text-weight-normal is-uppercase is-size-5">
                            Correct: {result.correct}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Homepage;
