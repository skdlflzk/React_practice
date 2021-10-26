import './box.css';
import './button.css';

ReactDOM.render(

	<div>
		<Button size='big'/>
		<Button size='small'/>
		<Box size='big'/>
		<Box size='small'/>	
	</div>
)
// Box든 Button이든 ./box.css 보다 나중에 선언한 ./button.css가 .big을 뒤집어 씌움
