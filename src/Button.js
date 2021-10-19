import React from 'react';

function Button(props){
	const [liked, setLiked] = React.useState(false);
	return React.createElement('button', 
	{onClick:()=>setLiked(!liked)},
	props.label,
	);//<button onClick={()=>setLiked (!liked)}>{text}</button>
}

export default Button