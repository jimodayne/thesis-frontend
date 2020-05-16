import axios from 'axios';

const api = '';

export const postAudio = file => {
    axios.post(api, file).then(res => {
        console.log(res);
    });
};
