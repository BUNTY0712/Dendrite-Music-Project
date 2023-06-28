import { axiosInstance } from '../Axios';
const { createSlice } = require('@reduxjs/toolkit');

const MusicReducer = createSlice({
	name: 'music',
	initialState: {
		success: 'false',
		error: null,
		loading: false,
		music: null,
		searchMusic: null,
		moreMusic: null,
	},
	reducers: {
		musicListRequest(state) {
			state.loading = true;
		},
		musicListSucess(state, action) {
			state.loading = false;
			state.music = action.payload;
			state.error = null;
		},
		musicListFail(state, action) {
			state.loading = false;
			state.error = action.payload;
		},
		searchMusicListRequest(state, action) {
			state.loading = true;
		},
		seachMusicListSucess(state, action) {
			state.loading = false;
			state.searchMusic = action.payload;
			state.error = null;
		},
		seachMusicListFail(state, action) {
			state.loading = false;
			state.error = action.payload;
		},
		searchMusicListRequest(state, action) {
			state.loading = true;
		},
		seachMusicListSucess(state, action) {
			state.loading = false;
			state.searchMusic = action.payload;
			state.error = null;
		},
		seachMusicListFail(state, action) {
			state.loading = false;
			state.error = action.payload;
		},
		moreMusicListRequest(state, action) {
			state.loading = true;
		},
		moreMusicListSucess(state, action) {
			state.loading = false;
			state.moreMusic = action.payload;
			state.error = null;
		},
		moreMusicListFail(state, action) {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

const { actions } = MusicReducer;

export const {
	musicListRequest,
	musicListSucess,
	musicListFail,
	searchMusicListRequest,
	seachMusicListSucess,
	seachMusicListFail,
	moreMusicListRequest,
	moreMusicListSucess,
	moreMusicListFail,
} = actions;

const config = {
	headers: {
		'X-RapidAPI-Key': '6d55b4d572msh59807e153f8bc08p15f2f7jsn57020d2e328d',
		'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
	},
};

export const musicDispatch = (bodyData) => async (dispatch) => {
	try {
		dispatch(musicListRequest());
		const config = {
			headers: {
				'X-RapidAPI-Key': '6d55b4d572msh59807e153f8bc08p15f2f7jsn57020d2e328d',
				'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
			},
		};
		const { data } = await axiosInstance.get(
			`songs/list-recommendations?key=${bodyData.key}`,
			config
		);
		console.log('music', data);
		dispatch(musicListSucess(data));
	} catch (error) {
		dispatch(
			musicListFail(
				error.response && error.response.data.detail
					? error.response.data.detail
					: error.detail
			)
		);
	}
};
export const searchMusicDispatch = (bodyData) => async (dispatch) => {
	try {
		dispatch(searchMusicListRequest());
		const config = {
			headers: {
				'X-RapidAPI-Key': '6d55b4d572msh59807e153f8bc08p15f2f7jsn57020d2e328d',
				'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
			},
		};
		const { data } = await axiosInstance.get(
			`search?term=${bodyData.key}`,
			config
		);
		// console.log('music', data);
		dispatch(seachMusicListSucess(data));
	} catch (error) {
		dispatch(
			seachMusicListFail(
				error.response && error.response.data.detail
					? error.response.data.detail
					: error.detail
			)
		);
	}
};
export const moreMusicDispatch = (bodyData) => async (dispatch) => {
	try {
		dispatch(moreMusicListRequest());
		const config = {
			headers: {
				'X-RapidAPI-Key': '6d55b4d572msh59807e153f8bc08p15f2f7jsn57020d2e328d',
				'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
			},
		};
		const { data } = await axiosInstance.get(
			`charts/track?locale=${bodyData.key}`,
			config
		);
		// console.log('music', data);
		dispatch(moreMusicListSucess(data));
	} catch (error) {
		dispatch(
			moreMusicListFail(
				error.response && error.response.data.detail
					? error.response.data.detail
					: error.detail
			)
		);
	}
};
export default MusicReducer;
