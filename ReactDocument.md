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

- Một số lib thông dụng:
	- faker: tạo fake data số lượng lớn 

##
## 4 - Component
Hai dạng componet:
- Class-based Component
- Functional Component

Class-based:
- js class, extends React.Component, implement render() methods.
- Thường render kèm với state

Functional:
- Thường dùng render kèm với props

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

















