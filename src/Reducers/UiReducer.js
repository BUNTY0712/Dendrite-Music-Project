const { createSlice } = require('@reduxjs/toolkit');

const UiReducer = createSlice({
	name: 'ui',
	initialState: {
		favlist: [],
	},
	reducers: {
		FavItemList(state, action) {
			state.favlist = [...state.favlist, action.payload];
		},
	},
});

const { actions } = UiReducer;

export const { OptionList, FavItemList } = actions;

export default UiReducer;
