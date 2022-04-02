
//리덕스를 사용하

import {
	createReducer,
	createSetValueAction,
	setValueReducer ,
} from '../common/redux-helper'

export const Types ={
	SetValue : 'search/SetValue',
	FetchAutoComplete:'search/FetchAutoComplete',
}

export const actions = {
	SetValue : createSetValueAction(Types.SetValue),
	fetchAutoComplete: keyword => ({
		type : Types.FetchAutoComplete,
		keyword,
	}),
};

const INITIAL_STATE = {
	keyword : '',
	autoCompletes : [],
};

const reducer = createReducer(INITIAL_STATE, {
	[Types.SetValue] :setValueReducer,
});
export default reducer;