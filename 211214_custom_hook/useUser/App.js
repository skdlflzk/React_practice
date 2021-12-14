import react,{useState, useEffect} from 'React';
import Profile from './Profile'


export default  function App(){
	const [userId, setUserId] = useState('');

	return <Profile userId={userId}/>
}