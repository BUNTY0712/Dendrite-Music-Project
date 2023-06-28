import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import SearchBar from './SearchBarPage';

import Favourites from './FavouritePage';
import PlaylistPage from './PlaylistPage';
const MainRouter = () => {
	return (
		<>
			<div>
				<Router>
					<Routes>
						<Route exact path={'/'} element={<HomePage />} />
						<Route exact path={'/searchbar'} element={<SearchBar />} />
						<Route exact path={'/favourites'} element={<Favourites />} />
						<Route exact path={'/playlist'} element={<PlaylistPage />} />
					</Routes>
				</Router>
			</div>
		</>
	);
};

export default MainRouter;
