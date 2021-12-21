import PropTypes from 'prop-types';


User.propTypes = {
	male : PropTypes.bool.isRequired,
	age: PropTypes.number,
	type: PropTypes.oneOf(['gold', 'silver', 'bronze']),
	onChangeName : PropTypes.func,
	onChangeTitle : PropTypes.func.isRequired,

	customCondition: function (props,propName,componentName){
		const value = props[propName];
		if (value < 10 || value > 20){
			return new Error(
				`NOT IN 10 <= ${value} <= 20 FROM ${componentName}`
			)
		}
	}
};

export default function User({type, age, male, onChangeName, onChangeTitle}){

	function onClick(){
		const msg = `type : ${type}, age: ${age ? age : '알 수 없음'}`
		console.log(msg, {color : type === 'gold' ? 'red' : 'black'});

		//...
	}

	function onClick2(name, title){
		if (onChangeName){
			onChangeName(name);
		}

		onChangeTitle(title);
		male ? goMalePage() : goFemalePage();
	}
	return null;
}

function goMalePage(){}
function goFemalePage(){}