import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NavBar.css';

export function NavBar() {
	return (
		<div className='nav-wrapper'>
			<div className='nav-bar'>
				<div
					id='menu'
					to='/menu'
					className='button-wrapper'
					onClick={() => {
						console.log('clicked');
						console.log('');
					}}>
					<div className='button'>
						<i className='material-icons'>apps</i>
					</div>
				</div>
				<Link id='dashboard' to='/' className='button-wrapper'>
					<div id='inventory' className='button'>
						Inventories
					</div>
				</Link>
				<Link to='/dashboard' className='button-wrapper'>
					<div className='button'>Dashboard</div>
				</Link>
				<Link to='/data' className='button-wrapper'>
					<div className='button'>Data</div>
				</Link>
				<Link to='/operations' className='button-wrapper'>
					<div className='button'>Operations</div>
				</Link>
			</div>
		</div>
	);
}
