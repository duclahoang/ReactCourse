import React from 'react'
import { selectSong, createSong } from './actions'
import SongList from './SongList'
import SongDetail from './SongDetail'


export default class App5 extends React.Component {


    render() {
        return (
            <div className="ui container grid">
                <div className="ui row">
                    <div className="column eight wide">
                        <SongList />
                    </div>
                    <div className="column eight wide">
                        <SongDetail />
                    </div>
                </div>
            </div>
        )
    }

}