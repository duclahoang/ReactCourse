import React from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import youtube from './api/youtube'

const KEY = 'AIzaSyA78Qql7sAcocz__ujr3m5NO6cRkWXCoDc'
export default class App4 extends React.Component {

    state = {
        videos: [],
        selectedVideo: null
    }

    componentDidMount() {
        this.onSearchSubmit('truc tiep game')
    }

    selectVideo = (video) => {
        this.setState({
            selectedVideo: video
        })
    }

    onSearchSubmit(term) {
        youtube.get("/search", {
            params: {
                q: term,
                part: "snippet",
                maxResults: 5,
                type: 'video',
                key: KEY
            }
        }).then((res) => {
            this.setState({
                videos: res.data.items,
                selectedVideo: res.data.items[0]
            })
        })
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={(term) => this.onSearchSubmit(term)} />
                <div className="ui grid">
                    <div className="ui row">

                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />

                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onVideoSelect={this.selectVideo} />

                        </div>
                    </div>
                </div>


            </div>
        )
    }
}