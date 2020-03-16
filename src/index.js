import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'

import CommentDetail from './CommentDetail'

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail
                author={faker.name.firstName()}
                ava={faker.image.avatar()}
                cmt={faker.lorem.sentence()}
                date={faker.date.recent().toTimeString()}
            />
            <CommentDetail
                author={faker.name.firstName()}
                ava={faker.image.avatar()}
                cmt={faker.lorem.sentence()}
                date={faker.date.recent().toTimeString()}
            />
            <CommentDetail
                author={faker.name.firstName()}
                ava={faker.image.avatar()}
                cmt={faker.lorem.sentence()}
                date={faker.date.recent().toTimeString()}
            />
        </div>
    );
};

ReactDOM.render(<App />,
    document.querySelector("#root")
)