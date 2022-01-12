import React from 'react';
import {Row,Col, Dropdown, Menu, Button} from 'antd';
import {SettingFilled} from '@ant-design/icons';

import PropTypes from 'prop-types';


Settings.propTypes = {
	logout : PropTypes.func.isRequired,
	// male : PropTypes.bool.isRequired,
	// age: PropTypes.number,
	// type: PropTypes.oneOf(['gold', 'silver', 'bronze']),
	// onChangeName : PropTypes.func,
	// onChangeTitle : PropTypes.func.isRequired,

	// customCondition: function (props,propName,componentName){
	// 	const value = props[propName];
	// 	if (value < 10 || value > 20){
	// 		return new Error(
	// 			`NOT IN 10 <= ${value} <= 20 FROM ${componentName}`
	// 		)
	// 	}
	// }
};


export default function Settings({ logout }){
	return <>
		<Dropdown overlay={<Menu>
			<Menu.Item onClick={e=>{console.log(1)}}>로그아웃</Menu.Item>
		</Menu>}
		trigger={['click']}
		placement="bottomRight">
			
			<Button shape="circle" icon={<SettingFilled />}></Button>
			
		</Dropdown>
	</>
}