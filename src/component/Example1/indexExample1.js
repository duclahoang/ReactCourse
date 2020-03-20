import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import ApprovalCard from './component/Example1/ApprovalCard'
import CommentDetail from './component/Example1/CommentDetail'

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author={faker.name.firstName()}
                    ava={faker.image.avatar()}
                    cmt={faker.lorem.sentence()}
                    date={faker.date.recent().toTimeString()}
                />
            </ApprovalCard>

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