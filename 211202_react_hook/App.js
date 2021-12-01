import React, {useState, useEffect} from 'react';
import App from '../211102_js_comparison/new/src/App';


export default funciton App(){
	const [count, setCount] = useState(0);

	//count가 바로 변경되지 않으므로 2번 모두 같은 상수를 지정
	function onClick(){
		setCount(count + 1);
		setCount(count + 1);
	}

	//setCount가 호출된 후 배치로 연달아 실행되기 때문에
	// 흠...왜지?
	function onClick2(){
		setCount(v=> v + 1);
		setCount(v=> v + 1);
	}

	return {
		<div>
			<Button onClick={onClick}>증가</Button>
		</div>
	};
}