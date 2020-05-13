import React, { useState } from 'react';
import MicRecorder from 'mic-recorder-to-mp3';

const recorder = new MicRecorder({
    bitRate: 128
});

const Homepage = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [preview, setPreview] = useState();
    const handleOnClick = () => {
        if (!isRecording) startRecording();
        else return isRecording ? stopRecording() : startRecording();
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

    return (
        <div>
            <button className="button is-primary" onClick={handleOnClick}>
                {!isRecording ? 'Record' : 'Stop recording'}
            </button>
            {preview && (
                <audio controls src={preview} style={{ marginBottom: '15px', display: 'block' }}>
                    Your browser does not support the
                    <code>audio</code> element.
                </audio>
            )}
        </div>
    );
};

export default Homepage;
