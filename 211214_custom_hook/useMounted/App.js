import react,{useState, useEffect} from 'React';
export default  function App(){
	const [userId, setUserId] = useState('');

	return <WidthPrinter userId={userId}/>
}