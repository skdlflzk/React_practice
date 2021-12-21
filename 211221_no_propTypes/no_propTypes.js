// propTypes가 없는 경우

/**
 * 
 * 코드르 읽어야 타입을 알 수 있다
 * 그러나 읽고나서도 명확하지 않음
 */
export default function User({type,age,male,onChangeName,onChangeTitle}){

	/**
	 * type이 문자열인것가고
	 * age는 무슨 타입인지 잘 모르겠음
	 * male도 잘 모르겠음
	 */
	function onClick(){
			const msg = `type: ${type}, age : ${age ? age : '알 수 없음'}`;
			log(msg, {colos: type==='gold'? 'red':'black'});
			//..
	}

	/**
	 * onChangeName은 함수인데 null일수도 있는것같음
	 */
	function onClick2(name, title){
		if (onChangeName){
			onChangeName(name);
		}
		onChangeTitle(title);
		male ? goMalePage(): goFemalePage();
		///...
	}
	//...
	return null;
}