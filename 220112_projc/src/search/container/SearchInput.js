import React from 'react';
import {AutoComplete, Input} from 'antd';
import { SearchOutlined } from '@ant-design/icons';

export default function SearchInput(){
	
	function setKeyword(value){

	}
	
	function gotoUser(value){

	}
	return <>
	<AutoComplete
		value={keyword}	//리덕스로 관리한다
		onChange={setKeyword}
		onSelect={gotoUser}
		style={{width:'100%'}}
		options={[]}	//보여줄 예시검색어 = 리덕스로 관리한다
		autoFocus
	>
			<Input
				size="large"
				placeholder="input here"
				prefix={<SearchOutlined />}
			/>
	</AutoComplete>
	</>
}