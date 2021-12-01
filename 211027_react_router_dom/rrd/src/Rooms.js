
import React from 'react';
import {Route, Link} from 'react-router-dom';

export default function Rooms({match}){
//path정보에 따라서 렌더링할 컴포넌트를 결정해줌
//페이지 별 분할
	return(
		<div>
			<h2> 방 소개 </h2>

			<Link to={`${match.url}/blue`}>파란qkd</Link>
			<br/>
			<Link to={`${match.url}/green`}>초록</Link>
			<br/>
			<Route path={`${match.url}/:roomId`} component={Room}/>

			<Route exact path={match.url} render={()=><h3>선택해라</h3>}/>
		</div>
	)
}
function Room({match}){
	return <h2>{`${match.params.roomId} 방 선택함`}</h2>
}