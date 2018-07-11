import axios from 'axios'

export function allVideos(){
    // data simulation
    const videos = [
        {title: 'Video 1', url: 'https://mystorage/video1.jpeg'},
        {title: 'Video 2', url: 'https://mystorage/video2.jpeg'},
        {title: 'Video 3', url: 'https://mystorage/video3.jpeg'},
      ]

    return {
        type: 'ALL_VIDEOS',
        payload: videos
    }
}
