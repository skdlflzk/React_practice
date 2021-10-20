import Style from './Box.module.css'

export default function Button({ size }){

	if (size=='big'){
		return <div classname={'${Style.button} ${Style.big}' }>큰</div>
	}else{
		return <div classname={'${Style.button} ${Style.small}' }>작은</div>
	}
}