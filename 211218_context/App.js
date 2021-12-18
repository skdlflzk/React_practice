import React, {createContext} from 'react'

export default function App(){
	return <div>
	<userContext.Provider value = "mike">
	<div >
	//...내용
	<Profile />
	</div>
	</UserContext.Provider>
	</div>
}
	 
function Profile(){
	return{
		<Greeting />
	}
}

function Greeting(){
	
	return
	<>
		<UserContext.Consumer>
			{username => <p> {`${userName} 하이요`}</p>}
		</UserContext.Consumer>
	</>
}



/*
	*/
function outside(){
	return 
		<>
			<UserContext.Provider value="a">
			{
				//...
			} 
			</UserContext.Provider>
			
			<Profile /> // profile 하위 Greeting는 UserContext.Provider의 value를 얻지 못해 초기값이 나온다.
		</>
}