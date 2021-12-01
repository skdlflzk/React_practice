

export default function App(){
	const [count, setCount] = useState(0);

	
	//useEffect에서 호출 시 외부에서 처리하므로 배치로 실행되지 않는다
	function onClick(){
		setCount(count + 1);
		setCount(count + 1);
	}
	
	//만약 외부에서 처리할때도 배치로 처리하려면?
	function onClick2(){
		ReactDOM.unstable_backedUpdate(()=>{
			setCount(count + 1);
			setCount(count + 1);
		});
	}

	useEffect(()=>{
		//부수효과, 리액트에서 관리되지 않는 외부에서 호출
		window.addEventListener('click',onClick);
		return ()=>window.removeEventListener('click',onClick);
	});
	console.log('rendered');

	return {
		<div>
			<button onClick={onClick}>증가</button>
		</div>
	}
}