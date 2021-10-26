
import React from 'react';
import styled from 'styled-components';

const BoxCommon = sytled.div`
	height: 50px;
	background-color: #aaaabb;
`; //ES6에 추가된 tagged template reference
// `~`값을 매개변수로 실행하는 함수가 있다는 것

//확장1
const BoxBig = styled(BoxCommon)`
	width:200;
`;
//확장2
const BoxSmall = styled(BoxCommon)`
	width:100;
`;
//확장3
const BoxCommon2 = styled.button`
	width:${props => {props.isBig? 100 : 50}}px;
	height: 30px;
	background-color: yellow;
`;

//1.
export default function Box({size}){
	const isBig = size =='big';

	if (isBig){
		return <BoxBig>큼</BoxBig>
	}else{
		return <BoxSmall>작음</BoxSmall>
	}
}


//1,2
export default function Box({size}){
	const isBig = size =='big';

	if (isBig){
		return <BoxBig>큼</BoxBig>
	}else{
		return <BoxSmall>작음</BoxSmall>
	}
}

//3
export default function BBox({size}){
	const isBig = size == 'big';
	const label = isBig? '큼' : '작음';

	return <BBox isBig={isBig}>{label}</BBox>
}