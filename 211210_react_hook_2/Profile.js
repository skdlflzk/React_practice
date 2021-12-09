import React ,{useState, useEffect}  from 'react';


export default function Profile({userId}){
	const [user, setUser] = useState(null);

	useEffect(()=>{
		getUserApi (useId).then(data => setUser(data));
	}, [userId]);


	return
	<div>
		<p> {`name is ${user.name}`}</p>
		<p> {`age is ${user.age}`}</p>
	</div> 
}

const USER1 = {name :'mike', age:10};
const USER2 = {name :'D', age:20};

function getUserApi(userId){
	return new Promise(res =>{
	setTimeout(()=>{
		res(userId % 2 ? USER1 : USER2);
	}, 500);
	});
}
