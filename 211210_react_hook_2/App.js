import React, {useState, useEffect} from 'react';

export default function App(){

	const [userId, setUserId] = useState(0);

	return 
		<>
			<Profile userId={userId}/>
			<button onClick={()=>setUserId(userId+1)}> up </button>
		</>
	
}