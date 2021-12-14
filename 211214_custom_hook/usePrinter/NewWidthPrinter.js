import react, {useState,useEffect} from 'React';
import useWindowWidth from './useWindowWidth';

export default function WidthPrinter(){

	//훅 생성
	const width = useWindowWidth();

	return <div>{`width = ${width}`}</div>
}