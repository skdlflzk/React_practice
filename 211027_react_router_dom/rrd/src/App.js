import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Rooms from './Rooms'

export default function App(){
//Route? path정보에 따라서 렌더링할 컴포넌트를 결정해줌
//페이지 별 분할
//Link ? 클릭시 to 로 이동시킴

	return(
		<BrowserRouter>
		<div stype={{padding:20,border:'5px solid gray'}}>

		<Link to="/">홈</Link>
		<br/>
		<Link to="/photo">사진</Link>
		<br/>
		<Link to="/rooms">방 소개</Link>
		<Route exact path="/" component={Home}/>
		<Route path="/photo" component={<h2>사진컴포</h2>}/>
		<Route path="/rooms" component={Rooms}/>
		</div>
		</BrowserRouter>
	)
}

function Home(){
	return <h1>홈이다</h1>
}