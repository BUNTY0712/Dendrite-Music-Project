import React, { useState } from 'react';
import { Grid, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchMusicDispatch } from '../Reducers/MusicReducer';
import NavBar from './ReusableComponents.js/NavBar';
import './NavBar.css';

const SearchBar = () => {
	const dispatch = useDispatch();
	const { searchMusic } = useSelector((state) => state.music);
	console.log('search', searchMusic?.tracks?.hits[0].track?.subtitle);
	// console.log('search', searchMusic?.tracks?.hits);
	// const { searchItem, cart } = useSelector((state) => state.ui);
	const [query, setQuery] = useState('');
	const [foods, setFoods] = useState([]);
	const foodData = [
		{
			id: 1,
			title: 'Pizza',
			rating: '4.2',
			price: '150',
			category: 'Italian',
			img: 'https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png',
		},
		{
			id: 2,
			title: 'Burger',
			rating: '4.7',
			price: '110',
			category: 'Fast Food',
			img: 'https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png',
		},
		{
			id: 4,
			title: 'Salad',
			rating: '4.0',
			price: '90',
			category: 'Healthy',
			img: 'https://b.zmtcdn.com/data/dish_photos/dc5/92c15fa34f91616aa730bb58edb7fdc5.jpg?output-format=webp',
		},
		{
			id: 3,
			title: 'Pasta',
			rating: '3.9',
			price: '110',
			category: 'Italian',
			img: 'https://b.zmtcdn.com/data/dish_photos/2db/681e5facd523fe877df1d6229fc192db.png?output-format=webp',
		},
		{
			id: 5,
			title: 'Bikkgane Biryani',
			rating: '4.8',
			price: '160',
			category: 'Japanese',
			img: 'https://b.zmtcdn.com/data/pictures/chains/3/307893/2738bd3dfa84f54d62587a1f5af1c8fe_o2_featured_v2.jpg',
		},
		{
			id: 6,
			title: 'Steak',
			rating: '4.7',
			price: '130',
			category: 'American',
			img: 'https://b.zmtcdn.com/data/dish_photos/fdb/758a527cd019bba9a8a9e1d1b3674fdb.jpg?output-format=webp',
		},
		{
			id: 7,
			title: 'Sandwich',
			rating: '4.5',
			price: '130',
			category: 'Fast Food',
			img: 'https://b.zmtcdn.com/data/dish_photos/506/398959b8bc8601a9fa6d93e7e0a0d506.png?output-format=webp',
		},
		{
			id: 8,
			title: 'Ice Cream',
			rating: '4.6',
			price: '140',
			category: 'Dessert',
			img: 'https://b.zmtcdn.com/data/dish_photos/c82/dcea1b340aefc1a8258894b565345c82.jpg?output-format=webp',
		},
	];
	const handleSearch = (value) => {
		setQuery(value);
		dispatch(searchMusicDispatch(value));
	};
	return (
		<>
			<Grid container>
				<NavBar />
				<Grid className='navBody' item lg={10}>
					<Box>
						<Box
							ml={5}
							mt={4}
							style={{
								display: 'flex',
								border: '2px solid grey',
								width: '500px',
								padding: '10px',
								borderRadius: '20px',
							}}>
							<Box
								// onClick={() => dispatch(OptionList('searchList'))}
								onClick={handleSearch}
								style={{ cursor: 'pointer' }}
								ml={1}>
								<i
									style={{ color: 'grey' }}
									class='fa-sharp fa-solid fa-magnifying-glass'></i>
							</Box>
							<Box ml={1}>
								<input
									className='navBody'
									style={{
										border: 'none',
										outline: 'none',
										width: '100%',
										fontSize: '16px',
										color: 'white',
									}}
									type='text'
									value={query}
									onChange={(e) => handleSearch(e.target.value)}
									placeholder='Search Music '
								/>
							</Box>
						</Box>
					</Box>
					<Grid container>
						{searchMusic?.tracks?.hits.map((item, i) => {
							return (
								<Grid item lg={3}>
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
												src={
													searchMusic?.tracks?.hits[i].track?.images?.background
												}
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
															{searchMusic.tracks.hits[i].track?.subtitle}
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
								</Grid>
							);
						})}
					</Grid>
					{/* {searchItem.map((item, i) => {
						return (
							<Box mt={2} ml={2}>
								<div
									className='card CardHover'
									style={{
										width: '18rem',
										padding: '15px',
										border: '1px solid grey',
									}}>
									<img
										style={{ width: '100%', height: '150px' }}
										src={item.img}
										className='card-img-top'
										alt={item.title}
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
													<span style={{ marginLeft: '5px' }}>
														{item.rating}&nbsp;
													</span>
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
													onClick={() => {
														if (cart === 0) {
															dispatch(CartNumber(1));
															dispatch(BookItem(item));
														} else {
															alert(
																'This item is from Different Resturant so please empty your cart '
															);
														}
													}}
													style={{ fontWeight: 'bold' }}
													className='btn btn-danger'>
													Add to Cart
												</div>
												<Box
													style={{ cursor: 'pointer' }}
													onClick={() =>
														dispatch(CartNumber(0)) && dispatch(BookItem(null))
													}
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
											</div>
										</div>
									</div>
								</div>
							</Box>
						);
					})} */}
				</Grid>
			</Grid>
		</>
	);
};

export default SearchBar;
