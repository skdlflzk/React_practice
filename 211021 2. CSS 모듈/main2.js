import Style from './Box.module.css';
import cn from classname;

export default function Button({ size }){
	const isBig = size=='big';
	return <div classname={cn(Style.Button,{
		[Style.big] : isBig,	//이게 무슨 문법인고?
		[Style.small] : !isBig,
	})}>{isBig ? '큰' : '작은'}</div>

}