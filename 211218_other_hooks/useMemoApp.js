import React, {useMemo, useState} from 'react'




export default function App(){


	const [v1, setV1] =  useState(0);
	const [v2, setV2] =  useState(0);
	const [v3, setV3] =  useState(0);

	const value = setMemo(()=>runExpensiveJob(v1, v2), [v1,v2])
	//두번째 param? useeffect 처럼 의존성 배열.
	// 각 원소가 변경될때만 함수가 수행된다.


	return <div>
		<p>{`value is ${value}`}</p>	//value가 호출 되며 runExpensiveJob이 1회 호출
		
		<p>{`v3 changed to ${v3}`}</p>
		<button onClick={()=>setV3(Math.random)}>v3 수정</button>
		// 버튼이 눌려서 v3가 변경되어도 runExecuteJob이 호출되지 않는다.
	</div>
}

function runExpensiveJob(v1,v2){
		// 비싼 함수
	return 3;
}