import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button.js';

function Container(){
	return React.createElement(
		'div'
		,null
		,
		React.createElement('p', null,'버튼 클릭'),
		React.createElement(Button, {label:'좋아좋아'}),
		React.createElement(Button, {label:'싫다'}),

	);
}

const domContainer = document.getElementById('root');
ReactDOM.render(React.createElement(Container), domContainer);