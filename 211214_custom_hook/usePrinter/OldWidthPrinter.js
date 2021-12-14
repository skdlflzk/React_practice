import react, {useState,useEffect} from 'React';


/**
 * @see 이전 구현방식
 */
export default function WidthPrinter(){

	const [width, setWidth] = useState(window.innerWidth);

	useEffect(()=>{
		const onResize = ()=>setWidth(window.innerWidth);
		window.addEventListener('resize', onResize);
		return ()=>{
			window.removeEventListener('resize',onResize);
		}	// useEffect의 리턴값이 함수
	}, []); // 빈 의존성 배열

	return <div>{`width = ${width}`}</div>
}