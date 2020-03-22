import React from 'react'
import { connect } from 'react-redux'

class SongDetail extends React.Component {
    render() {
        if (!this.props.selectedSong) {
            return (
                <div>No song selected</div>
            )
        }
        return (
            <div>
                <h3>Details for:</h3>
                <p>
                    Title: {this.props.selectedSong.title}
                    <br/>
                    Duration: {this.props.selectedSong.duration}
                </p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedSong: state.selectedSong
    }
}

export default connect(mapStateToProps)(SongDetail)