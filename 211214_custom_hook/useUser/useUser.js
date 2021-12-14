import { useEffect, useState } from "React";

// 훅을 생성한 처리
export default function useUser(userId){
	const [user, setUser] = useState(null);
	useEffect(()=>{
		getUserApi(userId).then((data)=>setUser(data));
	}, [userId]);
	return user;
}

const USER1 = { name:'a', age:1};
const USER2 = { name:'b', age:99};
function getUserApi(userId){

	return new Promise(r=>{
		setTimeout(()=>{
			r(userId==='' ? USER1:USER2)
		}, 500);
	});
}