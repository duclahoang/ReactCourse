import React from 'react'


export default class SearchBar extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            term: ''
        }
    }

    onFormSubmit(e) {
        e.preventDefault()
        this.props.onSubmit(this.state.term)
    }

    render() {
        return (
            <div className='search-bar ui segment'>
                <form className='ui form' onSubmit={(e)=>this.onFormSubmit(e)}>
                    <div className='field'>
                        <label>Video Search</label>
                        <input
                            type='text'
                            value={this.state.term}
                            onChange={(e) => this.setState({
                                term: e.target.value
                            })} />
                    </div>
                </form>
            </div>
        )
    }
}