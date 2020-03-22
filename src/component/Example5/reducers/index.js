import {combineReducers} from 'redux'


const songsReducer = (oldSongs = [], action) => {
    if (action.type === "SONG_CREATE") {
        return [...oldSongs, action.payload]
    }
    else {
        return [...oldSongs]
    }
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === "SONG_SELECTED") {
        return action.payload
    }
    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})
