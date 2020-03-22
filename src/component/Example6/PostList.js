import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from './actions'

class PostList extends React.Component {


    async componentDidMount() {
        await this.props.fetchPosts();
    }

    renderListPost() {
        if (this.props.posts) {
            return this.props.posts.length
        }
        return "app"
    }

    render() {
        console.log(this.props.posts);
        
        return (
            <div >
                PostList
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { posts: state.posts }
}

export default connect(mapStateToProps, {
    fetchPosts: fetchPosts
})(PostList);