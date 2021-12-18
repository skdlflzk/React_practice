import React, {useCallback, useState} from 'react'


export default function App(){


	const [name, setName] =  useState(0);
	const [age, setAge] =  useState(0);
	const [v3, setV3] =  useState(0);


	return <div>
		<p>{`name is ${name}`}</p>
		<p>{`age is ${age}`}</p>
		<UserEdit
			onSave={()=>saveToServer({name,age})}
			setName={name}
			setAge={age}
		/>
		<p>{`v3 is  ${v3}`}</p>
		<button onClick={()=>setV3(Math.random)}>v3 수정</button>
	</div>
}


const UserEdit = React.memo(function ({onSave,setName,setAge}){
	console.log('userEdit rendered')
	return null;
});

function saveToServer(a, ..){

	//saved
}

//v3 가 변경이 되어도 saveToServer가 새로 생성되어 전달될것이기때문에 
//UserEdit이 다시 렌더링 됨.
const onSave = useCallback(()=>{saveToServer({name,age}), [name,age]});

...
<UserEdit
			onSave={save}
			setName={name}
			setAge={age}
		/>