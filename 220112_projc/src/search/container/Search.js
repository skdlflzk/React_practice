import React from 'react';
import {Row,Col, Typography} from 'antd';
import Settings from '../component/Settings';

export default function Search(){
	return <>
		<Row justify="end" style={{padding:20}}>
			<Settings /*logout={()=>{}}*//>
		</Row>
		<Row justify="center" style={{marginTop:100}}>
			<Col>
				<Typography.Title style={{ fontFamily: '궁서' }}>
					검 색 자
				</Typography.Title>
			</Col>
		</Row>
		<Row justify="center" style={{marginTop:30}}>
			<Col span={12}>
				<SearchInput />
			</Col>
		</Row>
	</>
}