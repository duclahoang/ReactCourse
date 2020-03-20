import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import ApprovalCard from './component/Example1/ApprovalCard'
import CommentDetail from './component/Example1/CommentDetail'
import SeasonDisplay from './component/Example2/SeasonDisplay'


class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            latitude: null, errMes: ""
        }

    }

    componentDidMount() {
        console.log("ComponentDidMount")
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                console.log(pos)
                this.setState({
                    latitude: pos.coords.latitude
                })
            },
            (err) => {
                this.setState({ errMes: err.message })
                console.log(err)
            }
        );
    }

    componentDidUpdate() {
        console.log("componentDidUpdate")
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }

    render() {
        if (this.state.errMes) {
            return (
                <div>Error: {this.state.errMes}
                </div>
            )
        }
        return (
            <div>
                <div>
                    <SeasonDisplay
                        lat={this.state.latitude}
                    />
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />,
    document.querySelector("#root")
)