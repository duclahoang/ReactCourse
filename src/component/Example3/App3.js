import React from 'react'

import unplash from './api/unsplash'

import SearchBar from './SearchBar'
import ImageList from './ImageList'

class App3 extends React.Component {

    state = {
        images: []
    }

    onSearchSumit = (term) => {
        unplash.get('/search/photos', {
            params: { query: term }
        }).then(res => {
            this.setState({
                images: res.data.results
            })
        })
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSumit} />
                Found: {this.state.images.length} images
                <ImageList images={this.state.images}/>
            </div>)
    }
}


export default App3