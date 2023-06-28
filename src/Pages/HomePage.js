import React, { useEffect, useState } from 'react';
import { Grid, Box } from '@mui/material';
import musicimg from '../assets/music.png';
import NavBar from '../Components/ReusableComponents.js/NavBar';
import '../Components/NavBar.css';
import { useDispatch, useSelector } from 'react-redux';
import { musicDispatch } from '../Reducers/MusicReducer';
import { FavItemList } from '../Reducers/UiReducer';
import loading from '../assets/loading.gif';
// import Practice from '../Components/Practice';

const HomePage = () => {
	const dispatch = useDispatch();
	// const [heart, setHeart] = useState('false');
	const { music } = useSelector((state) => state.music);
	// console.log('music', music?.tracks[0]?.images?.background);
	useEffect(() => {
		let form = {
			key: '484129036',
		};
		dispatch(musicDispatch(form));
	}, []);
	return (
		<>
			<Grid container>
				<NavBar />
				{/* <Practice /> */}

				<Grid className='navBody' item lg={10}>
					<Box>
						<img
							style={{ height: '40vh', width: '100%' }}
							src={musicimg}
							alt='music banner'
						/>
					</Box>
					<Box style={{ padding: '30px' }}>
						<Box style={{ fontWeight: 'bold', color: 'grey' }}>
							RELEASED THIS WEAK
						</Box>
						{/* <Box>{loading}</Box> */}
						<Box style={{ padding: '10px', display: 'flex' }}>
							<Grid container>
								{music?.tracks?.map((item, i) => {
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
														src={music?.tracks[i]?.images?.background}
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
																	{music?.tracks[i]?.title}
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
																	onClick={() => {
																		dispatch(FavItemList(item));
																		// setHeart('true');
																	}}
																	style={{ fontWeight: 'bold' }}
																	className='btn btn-danger'>
																	Add to Favourite
																</div>
																<Box
																	style={{ cursor: 'pointer' }}
																	// onClick={() =>
																	// 	dispatch(CartNumber(0)) && dispatch(BookItem(null))
																	// }
																	ml={2}
																	mt={1}>
																	{/* <i
																		style={{
																			fontSize: '20px',
																			color: 'green',
																			padding: '0 0 0 0',
																		}}
																		class='fa-sharp fa-solid fa-trash'></i> */}
																	<i
																		style={{
																			fontSize: '20px',
																			color: 'green',
																			padding: '0 0 0 0',
																		}}
																		class='fa-regular fa-circle-play'></i>
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
																		style={{
																			color: 'red',
																		}}
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
					</Box>
					{/* <Box style={{ padding: '30px' }}>
						<Box style={{ fontWeight: 'bold', color: 'grey' }}>
							FAVOURITES SONG
						</Box>
						<Box style={{ padding: '10px', display: 'flex' }}>
							<Box mt={2} ml={2}>
								<div
									className='card CardHover'
									style={{
										width: '18rem',
										padding: '15px',
										border: '1px solid grey',
									}}>
									<img
										src='https://upload.wikimedia.org/wikipedia/en/c/cc/Pushpa_The_Rise_Album.jpg'
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
													Pushpa
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
															style={{ color: 'white', fontSize: '10px' }}
															class='fa-solid fa-star'></i>
													</span>
												</div>
											</div>
										</div>
										<p className='card-text'>
											Some quick example text to build on the card title and
											make up the bulk of the card's content.
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
													style={{ fontWeight: 'bold' }}
													className='btn btn-danger'>
													Add to Playlist
												</div>
												<Box
													style={{ cursor: 'pointer' }}
													// onClick={() =>
													// 	dispatch(CartNumber(0)) && dispatch(BookItem(null))
													// }
													ml={2}
													mt={1}>
													<i
														style={{
															fontSize: '20px',
															color: 'green',
															padding: '0 0 0 0',
														}}
														class='fa-sharp fa-solid fa-trash'></i>
												</Box>
												<Box
													ml={2}
													style={{
														fontWeight: 'bold',
														fontSize: '20px',
														color: 'red',
														marginTop: '2px',
													}}>
													<i class='fa-sharp fa-solid fa-heart'></i>
												</Box>
											</div>
										</div>
									</div>
								</div>
							</Box>
							<Box mt={2} ml={2}>
								<div
									className='card CardHover'
									style={{
										width: '18rem',
										padding: '15px',
										border: '1px solid grey',
									}}>
									<img
										src='https://upload.wikimedia.org/wikipedia/en/c/cc/Pushpa_The_Rise_Album.jpg'
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
													Pushpa
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
															style={{ color: 'white', fontSize: '10px' }}
															class='fa-solid fa-star'></i>
													</span>
												</div>
											</div>
										</div>
										<p className='card-text'>
											Some quick example text to build on the card title and
											make up the bulk of the card's content.
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
													style={{ fontWeight: 'bold' }}
													className='btn btn-danger'>
													Add to Playlist
												</div>
												<Box
													style={{ cursor: 'pointer' }}
													// onClick={() =>
													// 	dispatch(CartNumber(0)) && dispatch(BookItem(null))
													// }
													ml={2}
													mt={1}>
													<i
														style={{
															fontSize: '20px',
															color: 'green',
															padding: '0 0 0 0',
														}}
														class='fa-sharp fa-solid fa-trash'></i>
												</Box>
												<Box
													ml={2}
													style={{
														fontWeight: 'bold',
														fontSize: '20px',
														color: 'red',
														marginTop: '2px',
													}}>
													<i class='fa-sharp fa-solid fa-heart'></i>
												</Box>
											</div>
										</div>
									</div>
								</div>
							</Box>
						</Box>
					</Box> */}
				</Grid>
			</Grid>
		</>
	);
};

export default HomePage;
