/**
 * 조건부 렌더링
 * 떄에 따라 좋은 코드가 있다.
 * 
 */ 
// 여러가지 경우가 있는데, 때에 따라서 적절히 사용하자.

function Greeting( {isLogin, name, cash}){
	// 1. if문 사용
	if (isLogin){
		return <p>`${name} 하이`</p>
	}else{
		return <p>권한이 없소</p>
	}


	// 2.  삼항 연산자
	return <p>{isLogin ? `${name} 하이` : '권한이 없소'}</p>



	// 3-1 null 리턴할 때는 엠퍼센드 &&
	return <p>{isLogin && `${name} 하이`}</p>
	// 3-2 삼항연산자로는 조금 길다.
    return <p>{isLogin ? `${name} 하이` : null}</p>

	// 아래는 그리지 않는다.
	// <p>{false}</p>
	// <p>{null}</p>
    // <p>''</p> 결과는 같다

	// cash 가 0이면 아래가 false로 p태그를 그리지않는다.    
	return <div>{cash && <p>hi</p>}</div>
    // 따라서 숫자가 존재함을 체크하려면 boolean의 역의 역으로 변환시키자
    return <div>{!!cash && <p>hi</p>}</div>
	
	// memo가 null || undefined 거를땐
	return <div>{memo != null && <p> ${20-memo.length}자</p>}</div>

	// undefined 검사 필요시 (가급적 undefined를 피하자)
	return <div>{student && student.map()}</div>

}