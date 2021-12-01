import logo from './logo.svg';
import './App.css';


export default function App(){

	const [todoList, setTodoList] = setState([]);
	function onAdd(){};

	function onDelete(e){};

	function onSaveServer(){}

	return (
		<div>
			<ul>목록</ul>
			<ul>
				{todoList.map(todo =>{
					
						
				})}
			</ul>

		</div>
	)
	//비구조화 
	// const person = [1, 'd'];
	// const [age, name] = person;

}