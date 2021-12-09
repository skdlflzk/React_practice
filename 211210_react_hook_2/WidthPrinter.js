import React , {useState, useEffect} from 'react';


// WidthPrinter.js

//창의 너비를 상태값으로 관리 및 출력
//리사이즈시 상태값변경
export default function WidthPrinter(){

	const [width, setWidth] = useState(window.innerWidth);

	useEffect(()=>{
		 const onResize = () => setWidth(window.innerWidth);
		window.addEventListenr('resize',onResize);
		console.log('pr1');

		/* 부수효과 내의 리턴값 = 함수*/
		return ()=>{
			window.removeEventListener('resize', onResize);
			console.log('pr2');
		};
	}, []);

	return <div> {`width is ${width}`}</div>
}
