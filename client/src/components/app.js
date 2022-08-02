import React, { useState, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { NavBar } from './scaffold';
import '../css/index.css';
import { Inventory } from './inventory';
import Warehouse from './warehouse';

function App() {
	return (
		<div>
			<NavBar />
			<Routes>
				<Route path='/home' element={<Inventory />} />
				<Route path='/:id' element={<Warehouse />} />
				<Route path='add/:warehouse_id' element={<div></div>} />
				<Route path='*' element={<Navigate to='/home' />} />
			</Routes>
		</div>
	);
}

export default App;
