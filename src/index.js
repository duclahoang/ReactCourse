import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import App1 from './component/Example1/App1'
import App2 from './component/Example2/App2'
import App3 from './component/Example3/App3'
import App4 from './component/Example4/App4'
import App5 from './component/Example5/App5'
import App6 from './component/Example6/App6'

import reducersApp5 from './component/Example5/reducers'
import reducersApp6 from './component/Example6/reducers'


const store = createStore(reducersApp6, applyMiddleware(thunk))


ReactDOM.render(
    <Provider store={store}> 
        <App6 />
    </Provider>
    ,document.querySelector("#root")
)

{/* <Provider store={createStore(reducersApp5)}>  */}
// </Provider>
