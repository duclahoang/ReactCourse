// action creator
export const selectSong = (song) =>{
    return {
        type: "SONG_SELECTED",
        payload: song
    }
}

export const createSong = (title, duration) =>{
    return {
        type: "SONG_CREATE",
        payload: {
            title: title,
            duration: duration
        }
    }
}
