import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { NavBar } from './scaffold';
import Form from './new-item-form';
import '../css/index.css';
import { Inventory } from './inventory';
import Warehouse from './warehouse';

function App() {
	return (
		<div>
			<NavBar />
			<Routes>
				<Route path='/home' element={<Inventory />} />
				<Route path='/inventory/:id' element={<Warehouse />} />
				<Route path='add/:warehouse_id' element={<Form />} />
				<Route path='/*' element={<Navigate to='/home' />} />
			</Routes>
		</div>
	);
}

export default App;
