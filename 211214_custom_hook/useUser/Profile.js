import react,{useState, useEffect} from 'React';
import useUser from './useUser';

/**
 * @see useUser 커스텀 훅을 사용한 경우
 */
export default  function Profile({userId}){
	const user = useUser(userId);

	return
	<div>
		<p> {`name is ${user.name}`}</p>
		<p> {`age is ${user.age}`}</p>
	</div> 

}
/**
 * @see 훅을 이용하지 않은 경우
 */
/*
export default  function Profile({userId}){
	const [user, setUser] = useState(null);
	useEffect(()=>{
		getUserApi(userId).then((data)=>setUser(data));
	}, [userId]);
	<div>
		<p> {`name is ${user.name}`}</p>
		<p> {`age is ${user.age}`}</p>
	</div> 
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
*/