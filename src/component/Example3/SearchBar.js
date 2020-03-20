import React from 'react'


export default class SearchBar extends React.Component {

    state = {
        term: ''
    }

    constructor(props){
        super(props)
    }

    onFormSubmit(event) {
        event.preventDefault()
        this.props.onSubmit(this.state.term)
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={(e) => this.onFormSubmit(e)} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        {/* <input type='text' onChange={this.onInputChange} /> */}
                        <input
                            type='text'
                            value={this.state.term}
                            onChange={(e) => this.setState({
                                term: e.target.value
                            })}
                        />
                    </div>
                </form>
            </div>
        )
    }
}