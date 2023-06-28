import React from 'react';
import { Grid, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../NavBar.css';
const NavBar = () => {
	const navigate = useNavigate();
	const navItems = [
		{
			icons: <i class='fa-solid fa-bars'></i>,
			title: 'Home',
			nav: '/',
		},
		{
			icons: <i class='fa-solid fa-magnifying-glass'></i>,
			title: 'Search',
			nav: '/searchbar',
		},
		{
			icons: <i class='fa-sharp fa-solid fa-heart'></i>,
			title: 'Favourites',
			nav: '/favourites',
		},
		{
			icons: <i class='fa-regular fa-circle-play'></i>,
			title: 'Playlist',
			nav: '/playlist',
		},
	];
	return (
		<>
			<Grid
				className='navBody'
				item
				lg={2}
				style={{
					color: 'white',
					// background: '#6A5ACD',
					height: '100vh',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}>
				<Box>
					{navItems.map((item, i) => {
						return (
							<Box
								mt={2}
								onClick={() => navigate(item.nav)}
								style={{
									display: 'flex',
									cursor: 'pointer',
								}}>
								<Box style={{ fontWeight: 'bold' }} ml={1}>
									{item.icons}
								</Box>
								<Box ml={1} style={{ fontWeight: 'bold' }}>
									{item.title}
								</Box>
							</Box>
						);
					})}
					{/* <Box
						style={{
							display: 'flex',
						}}>
						<Box>
							<i class='fa-solid fa-bars'></i>
						</Box>
						<Box>Home</Box>
					</Box>
					<Box
						onClick={() => navigate('/searchbar')}
						style={{
							display: 'flex',
						}}>
						<Box>
							<i class='fa-solid fa-magnifying-glass'></i>
						</Box>
						<Box ml={1}>Search</Box>
					</Box> */}
				</Box>
			</Grid>
		</>
	);
};

export default NavBar;
