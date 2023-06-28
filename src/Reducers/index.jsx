import UiReducer from './UiReducer';
import MusicReducer from './MusicReducer';
const rootReducer = {
	ui: UiReducer.reducer,
	music: MusicReducer.reducer,
};

export default rootReducer;
