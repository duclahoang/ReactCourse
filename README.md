# React Document
## 1 - Getting Start
npm install -g create-react-app
create-react-app project_name

##
## 2 - Basic
Basic Dir:
- src: chứa code
- public: chứa các file ảnh,...
- node_modules, package.json, package-lock.json

Start project:
npm start

index.js:
- import react and reactDOM libs: 
```
	import React from 'react';
	import ReactDOM from 'react-dom';
```
- Create a react component:
```
const App = () => {
	return <div>Hello World! </div>
};
	
```
- Show component:
```
ReactDOM.render(
	<App />,
    document.querySeletor('#root');
);
// bỏ \<App /> vào \<div id="root"> trong public/index.html	
```
- JSX vs HTML style
	- jsx: style={{backgroundColor:'blue', height:'0px'}}
	- html: style="background-color: blue; height: 0px"
	- Dùng chrome console để xem các attribute ko phù hợp.
- Các nguyên lý của Component:
	- Nesting
	- Resuability
	- Configuration
- Ví dụ 1 component
```
import React from 'react'

const CommentDetail = (props) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={props.ava} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>
            </div>
            <div className="metadata">
                <span className="date">{props.date}</span>
            </div>
            <div className="text">
                {props.cmt}
            </div>
        </div>
    )
}

export default CommentDetail
```



##
## 4 - Component
#### 4.1 Hai dạng componet:
- Class-based Component
- Functional Component

Class-based:
- js class, extends React.Component, implement render() methods.
- Thường render kèm với state

Functional:
- Thường dùng render kèm với props

#### 4.2 Uncontrolled vs Controlled
Controlled
```
	<input type='text' value={this.state.term} onChange={(e)=>this.setState({term: e.target.value })} />
```
Uncontrolled
```
<input type='text' onChange={this.onInputChange} /> 
```

Uncontrolled nghia la code react không control được giá trị của input
Controlled nghĩa là code react nắm được giá trị input bất kì thời điểm nào

##
## 3 - Props
Giao tiếp giữa parent component với child component,dùng để config child component
	
Vd1: ```<ComponentX props1="xxx" props2="yyy">```

Vd2: 
```
<ComprontX>
	<ComponentY/>
</ComponentX>
// trong ComponentX goi props.children de lay ComponentY
```


##
## 4 - State
Rules of State:
- Chỉ dùng với class Component, nếu dùng với Functional cần dùng Hook
- Là 1 Object chứa dữ liệu cho component
- Update State làm cho component rerender
- Cần init bằng constructor hoặc ```state={}```
- only updated by using setState({})

##
## 5 - Life Cycle



constructor: Gọi trước khi render Object lần đầu
```
constructor(props){
	// Do class kế thùa React.Component, và constructor override constructor của lớp cha
    // gọi super để chắc chắc rằng những set-up mặc định của lớp cha vẫn dc gọi trong constructor của lớp con.
	super(props)
    // super() khởi tạo một stae rỗng, ta cần init giá trị cho state
    this.state = {
    	lat: null
    }
}
```
render:
- Chỉ dùng để render jsx 

componentDidMount: 
- Gọi ngay sau khi render Object lần đầu
- thích hợp để load data (constructor cũng load data dc, nhưng để code rõ ràng thì nên load ở componentDidMount)

componentDidUpdate: 
- gọi mỗi khi có update
- load lại data khi props/state change

componentWillUnmount: 
- gọi mỗi khi component không còn nữa
- cleanup sau khi xóa component

*Một số methods khác: shouldComponentUpdate, getDerivedStateFromProps, getSnapshotBeforeUpdate



##
## 6 - Redux
Redux là một thư viện quản lý state, có thể dùng kết hợp với react. Luồng của Redux như sau: Action Creator -> Action -> Dispatcher -> Reducers -> Compiled department data: 
- Action Creator & Action: action creator là function tạo ra action, action là object với 2 trường cơ bản **type** và **payload**
```
const createPolicy = (name, amount) {
	return(
    	{
    		type: CREATE_POLICY,
			payload:{
            	name: name,
                amount: amount
            }
    	}
    )
}
```
- Reducers: Các function chỉ ra field nào trong state cần update
```
const policies = (oldPolicies, policy){
	if(policy.type === "CREATE_POLICY"){
		return [...oldPolicies, policy.payload]
    }
    return [...oldPolicies]
    // không dùng oldPolicies.push(),... hay các hàm làm thay đổi trên dữ liệu cũ, bắt buộc trả về mảng mới hoặc object mới.
}
```
- Dispatcher: phần code xử lý của người dùng, sử dụng Redux:
```
import {createDispatcher}
```


Reducer's Rule:
- không được return undefined
- 2 tham số duy nhất là state cũ, và action (action là object gồm type và payload)
- reducer chỉ tạo ra state mới từ 2 tham số trên, không sử dụng dữ liệu khác như api response,...
- không làm thay đổi biến oldState (immutation)

## 7 - Redux & React & redux-thunk
Ví dụ cơ bản: 
- /actions/index.js:
```
// action creator
export const selectSong = (song) =>{
   ...
}

export const createSong = (title, duration) =>{
    return {
        type: "SONG_CREATE",
        payload: {
            title: title,
            duration: duration
        }
    }
}

```
- /reducers/index.js:
```
import {combineReducers} from 'redux'

const songsReducer = (oldSongs = [], action) => {
    if (action.type === "SONG_CREATE") {
        return [...oldSongs, action.payload]
    }
    else {
        return [...oldSongs]
    }
}

const selectedSongReducer = (selectedSong = null, action) => {
    ...
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})

```
- Sử dụng redux trong component
```

import React from 'react'
import { connect } from 'react-redux'
import { createSong, selectSong } from './actions'

class SongList extends React.Component {


    componentDidMount() {
    	// createSong ở đây ko phải của ./actions mà là do connect() ở cuối trả về.
        this.props.createSong('No Scrubs', '4:05')
        ...
    }

    renderList() {
        return this.props.songs.map(song => {
            return (
                ...
            )
        })
    }

    render() {
        return (
            <div className="ui divided list">
                {this.renderList()}
            </div>
        )
    }
}

// một hàm bắt buộc phải có, mapStateToProps là một convention thông dụng
const mapStateToProps = (state) => {
    return {
        songs: state.songs
    }
}

// connect nhận vào mapStateToProps và danh sách các props sẽ xuất hiện trong component
export default connect(mapStateToProps, {
    selectSong: selectSong,
    createSong: createSong
})(SongList)
```




##
## Some Issues

#### 1. Lỗi khi sử dụng this.state trong function
1. thêm .bind(this)
2. sử dụng arrow function


Communicate giữa child với parent bằng cách truyền 1 hàm từ parent vào child, child gọi hàm callback đó.



##
## Một số lib thông dụng:
- faker: tạo fake data số lượng lớn 








