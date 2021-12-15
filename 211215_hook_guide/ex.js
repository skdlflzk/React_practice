
//  훅 사용 시 반드시 지킬것
//  1. 하나의 컴포넌트에서는 같은 순서로 훅을 호출한다.
//  2. if, for 문 안에서 훅을 사용하면 안된다.
//  3. 함수안에서도 훅을 사용하면 안된다. 
//  항상 호출될수 알 수 없음

function CompoEx1(){
	const [value,setValue] = useState(0);

	if (value === 0){
		const [v1,setV1] = useState(0);
	}else{
		const [v2,setV2] = useState(0);
	}
}
//4. tlf수 방지를 위해 return 문 이후에 훅 사용금지
if (1){
	return null
}
 const [] = useState();


// useState()의 인자는 초기값뿐임.
// 그래서 여러개 사용시
// useState()
// useState()
// useState()
// 어떤 변수의 상태를 관리하는 중 변수명으로는 리액트에서는 알 수 없음
// => 순서가 중요하다.

// 내부에선 아래처럼 되어있음

let hooks = null;
export function useHook(){
	hooks.push(hookData);
}
function process_comp(componentFunc){
	hooks = [];
	componentFunc();
	let hooksOfCom = hooks;
	hooks = null;
}
//훅이 사용된 위치정보를 기반으로 훅 데이터를 관리한다

// 2. 함수형 컴포넌트  / 커스텀 훅안에서만 호출되어야한다. (훅? 함수형 컴포넌트를 위한 기능이라 당연한 것.)







