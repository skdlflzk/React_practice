import react, {useEffect,useState} from "React";

// 컴포넌트 생성시
// mounted = useMounted()로 해당 컴포넌트가 생성되었는지 알 수 있다.

export default function useMounted(){
	const [mounted,setMounted] = useState(false);

	useEffect(()=>{
		setMounted(true);
	},[]); // 1회 호출 후 의존성 배열 내부의 아이템이 변경시 호출
	// === 즉, 1회만 호출하고 끝.
	return mounted;
}

/**
 * 
 * useBlockIfNotLogin()
 * useBlockUnsavedChange(msg)
 * useEffectOnlyLoginUser(callback, deps) 로그인 유저인경우에만 useEffect호출
 * useLocalStorage(key, initialValue)=> [value, setValue] -> useState를 반환하는 함수
 * 쿠키 포함
 */

