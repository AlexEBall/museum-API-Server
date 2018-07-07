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
    updateLinks: (audioInput, pictureInput, itemToDelete, position, floor) => {
        return axios.put('api/cafam/exhibitionFloor' + floor, 
        {"input": audioInput,
        "pictureInput": pictureInput,
        "itemToDelete": itemToDelete,
        "position": position});
    },
    addImgToGallery: (pushedImg, floor) => {
        return axios.post('api/cafam/exhibitionFloor' + floor, {"pushedImg": pushedImg});
    },
    getPrograms: () => {
        return axios.get("api/cafamPrograms");
    },
    saveProgram: (programData) => {
        console.log(programData);
        return axios.post("/api/cafamPrograms", programData);
    }
};