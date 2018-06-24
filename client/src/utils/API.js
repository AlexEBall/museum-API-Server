import axios from 'axios';

export default {
    getExhibitions : () => {
        return axios.get("/api/cafam");
    },
    getExhibitionById : (id) => {
        return axios.get("api/cafam/" + id);
    },
    getExhibitionFloor: (floor) => {
        return axios.get('api/cafam/exhibitionFloor' + floor);
    },
    updateAudioLink: (input, floor) => {
        return axios.put('api/cafam/exhibitionFloor' + floor);
    }
};