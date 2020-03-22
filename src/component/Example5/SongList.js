import React from 'react'
import { connect } from 'react-redux'
import { createSong, selectSong } from './actions'

class SongList extends React.Component {


    componentDidMount() {
        this.props.createSong('No Scrubs', '4:05')
        this.props.createSong('Macarena', '2:30')
        this.props.createSong('All Star', '3:15')
        this.props.createSong('I want it that way', '1:30')
    }



    renderList() {
        return this.props.songs.map(song => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>

                    <div className="content">{song.title}</div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="ui divided list">
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        songs: state.songs
    }
}

export default connect(mapStateToProps, {
    selectSong: selectSong,
    createSong: createSong
})(SongList)