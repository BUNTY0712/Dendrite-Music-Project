import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import NavBar from './ReusableComponents.js/NavBar';
import tone from '../assets/tone.png';
import { moreMusicDispatch } from '../Reducers/MusicReducer';
import './Playlist.css';
import './NavBar.css';
import { useDispatch, useSelector } from 'react-redux';

const PlaylistPage = () => {
	const dispatch = useDispatch();
	const { moreMusic } = useSelector((state) => state.music);
	console.log('moremusic', moreMusic);
	useEffect(() => {
		let form = {
			key: 'en-US',
		};
		dispatch(moreMusicDispatch(form));
	}, []);
	const songs = [
		{
			title: 'Song 1',
			album: 'Album 1',
			date: '2022-01-01',
			duration: '3:45',
		},
		{
			title: 'Song 2',
			album: 'Album 2',
			date: '2022-02-15',
			duration: '4:20',
		},
		{
			title: 'Song 3',
			album: 'Album 1',
			date: '2022-03-10',
			duration: '2:55',
		},
		{
			title: 'Song 4',
			album: 'Album 3',
			date: '2022-04-22',
			duration: '3:15',
		},
	];
	const [playlists, setPlaylists] = useState([]);
	const [playlistName, setPlaylistName] = useState('');
	const [currentPlaylist, setCurrentPlaylist] = useState(null);
	const [songTitle, setSongTitle] = useState('');
	const [songArtist, setSongArtist] = useState('');

	const handlePlaylistNameChange = (event) => {
		setPlaylistName(event.target.value);
	};

	const handleCreatePlaylist = () => {
		const newPlaylist = {
			name: playlistName,
			songs: [],
		};

		setPlaylists([...playlists, newPlaylist]);
		setCurrentPlaylist(newPlaylist);
		setPlaylistName('');
	};

	const handleSongTitleChange = (event) => {
		setSongTitle(event.target.value);
	};

	const handleSongArtistChange = (event) => {
		setSongArtist(event.target.value);
	};

	const handleAddSong = (item) => {
		if (currentPlaylist) {
			const newSong = {
				title: item.title,
				link: item.url,
				duration: item.duration,
				// title: songTitle,
				artist: songArtist,
			};

			const updatedPlaylist = {
				...currentPlaylist,
				songs: [...currentPlaylist.songs, newSong],
			};

			const updatedPlaylists = playlists.map((playlist) =>
				playlist === currentPlaylist ? updatedPlaylist : playlist
			);

			setPlaylists(updatedPlaylists);
			setCurrentPlaylist(updatedPlaylist);
			setSongTitle('');
			setSongArtist('');
		}
	};

	const handlePlaylistSelection = (playlist) => {
		setCurrentPlaylist(playlist);
	};

	return (
		<>
			<Grid container>
				<NavBar />
				<Grid className='navBody' style={{ color: 'white' }} item lg={10}>
					<div>
						<div style={{ textAlign: 'center' }}>
							<h1>My Playlists</h1>
						</div>
						<Box mt={2} style={{ display: 'flex', justifyContent: 'center' }}>
							<Box ml={2} style={{ fontWeight: 'bold', fontSize: '22px' }}>
								Playlist Name: &nbsp;
							</Box>
							<input
								className='navBody'
								type='text'
								style={{ borderColor: 'white', color: 'white' }}
								value={playlistName}
								onChange={handlePlaylistNameChange}
								placeholder='create playlist'
							/>
							<Box ml={2}>
								<button
									style={{
										padding: '8px',
										borderRadius: '8px',
										fontWeight: 'bold',
									}}
									onClick={handleCreatePlaylist}>
									+ Playlist
								</button>
							</Box>
						</Box>
						<Grid container>
							<Grid
								className='navBody'
								style={{
									// background: '#494F55',
									margin: '20px',
									padding: '20px',
								}}
								item
								lg={3}>
								<Box>
									<h2>Playlists</h2>
									<ul>
										{playlists.map((playlist, index) => (
											<li
												style={{
													fontSize: '25px',
													listStyle: 'none',
													boxShadow: '0 0 5px',
													marginTop: '15px',
													marginLeft: '-10px',
													cursor: 'pointer',
												}}
												key={index}
												onClick={() => handlePlaylistSelection(playlist)}>
												# {playlist.name}
											</li>
										))}
									</ul>
								</Box>
							</Grid>
							<Grid
								className='navBody'
								style={{
									// background: '#36454F',
									marginTop: '10px',
									padding: '30px',
								}}
								item
								lg={8}>
								<Box>
									{currentPlaylist && (
										<div>
											<div style={{ display: 'flex' }}>
												<div>
													<img
														style={{
															background: 'grey',
															width: '100px',
															boxShadow: '0 0 5px',
														}}
														src={tone}
														alt=''
													/>
												</div>
												<div
													style={{
														marginLeft: '100px',
														marginTop: '25px',
														boxShadow: '0 0 5px',
														padding: '10px 100px 10px 10px',
														paddingRight: '100px',
													}}>
													<h1># {currentPlaylist.name}</h1>
												</div>
											</div>
											<Box mt={4}>
												<ul>
													{currentPlaylist.songs.map((song, index) => (
														// <li key={index}>
														// 	{song.title} {song.artist} {song.duration}
														// </li>
														<Box style={{ display: 'flex' }}>
															<Box style={{ fontSize: '18px' }}>
																{song.title}
															</Box>
															<Box ml={3}>
																<a href={song.link} target='blank'>
																	<i
																		style={{
																			fontSize: '18px',
																			color: 'green',
																			padding: '0 0 0 0',
																		}}
																		class='fa-regular fa-circle-play'></i>
																</a>
															</Box>
														</Box>
													))}
												</ul>
											</Box>
										</div>
									)}
								</Box>
							</Grid>
						</Grid>

						{/* <div>
							<h2>Add Song</h2>
							<label>
								Title:
								<input
									type='text'
									value={songTitle}
									onChange={handleSongTitleChange}
								/>
							</label>
							<label>
								Artist:
								<input
									type='text'
									value={songArtist}
									onChange={handleSongArtistChange}
								/>
							</label>
							<button onClick={handleAddSong}>Add Song</button>
						</div> */}
					</div>
					<Box ml={2}>
						<h1>Recommendation</h1>
					</Box>
					<Box style={{ padding: '10px', display: 'flex' }}>
						<Grid container>
							{moreMusic?.tracks?.map((item, i) => {
								return (
									<Grid item lg={3} md={6} sm={3}>
										<Box mt={2} ml={2}>
											<div
												className='card CardHover navBody'
												style={{
													width: '18rem',
													padding: '15px',
													border: '1px solid grey',
													color: 'white',
												}}>
												<img
													// src={item?.tracks[0]?.images?.background}
													src={moreMusic?.tracks[i]?.images?.background}
													// src='https://upload.wikimedia.org/wikipedia/en/c/cc/Pushpa_The_Rise_Album.jpg'
													className='card-img-top'
													alt='Pizza'
												/>
												<div className='card-body'>
													<div
														style={{
															display: 'flex',
															justifyContent: 'space-between',
														}}>
														<div>
															<h5
																style={{ fontWeight: 'bold' }}
																className='card-title'>
																{/* Pushpa */}
																{/* {moreMusic?.tracks[i]?.title} */}
																{item.title}
															</h5>
														</div>
														<div>
															<div
																style={{
																	background: 'green',
																	fontWeight: 'bold',
																	color: 'white',
																	width: '50px',
																	borderRadius: '2px',
																}}>
																<span style={{ marginLeft: '5px' }}>4.3</span>
																<span style={{ marginRight: '0px' }}>
																	<i
																		style={{
																			color: 'white',
																			fontSize: '10px',
																		}}
																		class='fa-solid fa-star'></i>
																</span>
															</div>
														</div>
													</div>
													<p className='card-text'>
														Some quick example text to build on the card title
														and make up the bulk of the card's content.
													</p>
													<div>
														<div style={{ display: 'flex' }}>
															<div
																// onClick={() => {
																// 	if (cart === 0) {
																// 		dispatch(CartNumber(1));
																// 		dispatch(BookItem(item));
																// 		dispatch(CartPrice(parseFloat(item.price)));
																// 		dispatch(ItemCount(1));
																// 		dispatch(TotalPay(parseFloat(item.price)));
																// 	} else {
																// 		alert(
																// 			'This item is from Different Resturant so please empty your cart '
																// 		);
																// 	}
																// }}
																// onClick={() => handleAddSong(item)}
																onClick={() => handleAddSong(item)}
																style={{ fontWeight: 'bold' }}
																className='btn btn-danger'>
																Add to Playlist
															</div>
															<Box style={{ cursor: 'pointer' }} ml={2} mt={1}>
																<a href={item.url} target='blank'>
																	<i
																		style={{
																			fontSize: '20px',
																			color: 'green',
																			padding: '0 0 0 0',
																		}}
																		class='fa-regular fa-circle-play'></i>
																</a>
															</Box>
															<Box
																ml={2}
																style={{
																	fontWeight: 'bold',
																	fontSize: '20px',
																	color: 'red',
																	marginTop: '2px',
																}}>
																<i
																	style={{ color: 'white' }}
																	class='fa-sharp fa-solid fa-heart'></i>
															</Box>
														</div>
													</div>
												</div>
											</div>
										</Box>
									</Grid>
								);
							})}
						</Grid>
					</Box>
					{/* <div>
						{songs.map((item, i) => {
							return (
								<Box style={{ display: 'flex' }} key={i}>
									<Box>{item.title}</Box>
									<Box ml={3} onClick={() => handleAddSong(item)}>
										+
									</Box>
								</Box>
							);
						})}
					</div> */}
				</Grid>
			</Grid>
		</>
	);
};

export default PlaylistPage;
