import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/NavBar.css';

export function NavBar() {
	let [openedNav, setNav] = useState(false);

	let icon = openedNav ? 'material-icons opened-icon' : 'material-icons';

	let navBar = openedNav ? 'sideBar' : 'sideBar sideBar-closed';
	return (
		<div className='nav-wrapper'>
			<div className='nav-bar'>
				<div
					id='menu'
					to='/menu'
					className='button-wrapper'
					onClick={() => {
						setNav(!openedNav);
					}}>
					<div className='button'>
						<i className={icon}>view_headline</i>
					</div>
				</div>
				<Link id='dashboard' to='/home' className='button-wrapper'>
					<div id='inventory' className='button'>
						Inventories
					</div>
				</Link>
				<Link to='dashboard' className='button-wrapper'>
					<div className='button'>Dashboard</div>
				</Link>
				<Link to='data' className='button-wrapper'>
					<div className='button'>Data</div>
				</Link>
				<Link to='operations' className='button-wrapper'>
					<div className='button'>Operations</div>
				</Link>
			</div>
			<div className={navBar}></div>
		</div>
	);
}
