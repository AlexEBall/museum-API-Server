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
    // updateAudioLink: (input, floor) => {
    //     return axios.put('api/cafam/exhibitionFloor' + floor, {"input": input});
    // },
    // updateAnImgLink: (input, position, floor) => {
    //     return axios.put('api/cafam/exhibitionFloor' + floor, {"pictureInput": input, "position": position});
    // }
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
    // deletingImg: (itemToBeDeleted, floor) => {
    //     console.log('itteeeyyymm', itemToBeDeleted);
    //     return axios.put('api/cafam/exhibitionFloor' + floor, {"itemToDelete": itemToBeDeleted});
    // }
    getPrograms: () => {
        return axios.get("api/cafamPrograms");
    }
};