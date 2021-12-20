
// 가독성 생산성을 고려한 컴포넌트 작성법

/**
 * 
 * 상단에는 속성값의 타입을 정의하기
 * 
 *  속성값 타입정보를 위에 작성하는 이유?
 * 사용자 입장에서 컴포넌트 타입 정보 확인이 편함
 * (타입스크립트로는 propTypes 정의할 필요는 없다)
 */ 
MyComponent.propTypes = {
	// ...
}

/**
 * 컴포넌트 생성시 함수이름 작성하기
 * 
 * 디버깅 시 함수 이름에서 확인가능
 */
export default function 함수이름을작성하기(){
	return  <div><MyComp /></div>
}

/**
 * 컴포넌트 arg는 명명된 매개변수처럼 넣기
 */
// X번거로움
function  func1(props){
	props.prop1;
	props.prop2;
} 
// O
function func2({prop1, prop2}) {
	prop1;
	prop2;
}


/**
 *컴포넌트의 변수, 함수는 파일 하단에 작성
 *변수명은 대문자로 작성 
 * */  

const COLUMNES = [
	{id:1, n:'a'},
	{ id : 2, n : 'b'},
];

/*
* 큰 변수는 컴포넌트 외부에 정의하는것이 성능상 유리
컴포넌트 내부에 정의 시 컴포넌트 생성마다 생성하므로...
*/


/**
 *  컴포넌트 내부에서 연관된 코드는 모아서 관리한다.
 */

// X
function fun1(){
	useState()  //기능A관련
	useState()  //기능B관련
	useEffect() //기능A관련
	useEffect() //기능B관련
}
// O
function fun2(){
	useState()	//기능A관련
	useEffect()	//기능A관련

	useState()  //기능B관련
	useEffect()  //기능B관련
	// 이 경우가 훅으로 분리하기도 좋다.
}
