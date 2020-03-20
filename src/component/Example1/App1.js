
import React from 'react'
import faker from 'faker'
import ApprovalCard from './ApprovalCard'
import CommentDetail from './CommentDetail'

export default class App1 extends React.Component {


    render() {
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
    }
}
