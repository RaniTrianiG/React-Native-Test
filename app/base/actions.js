import axios from 'axios';

export function allImages(){
    return {
        type: 'ALL_IMAGES',
        payload: axios({
            method: 'GET',
            url: 'https://dog.ceo/api/breed/boxer/images'
        })
    }
}

