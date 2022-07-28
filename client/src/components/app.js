import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { NavBar } from './scaffold';
import '../css/index.css';
import { Inventory } from './inventory';

function App() {
	let [backendData, setData] = useState();
	let [isLoading, setLoad] = useState(true);

	useEffect(() => {
		setLoad(true);
		fetch('/api')
			.then((response) => response.json())
			.then((data) => {
				setData(data);
				setLoad(false);
			});
	}, []);

	function downloading() {
		if (isLoading) {
			return [
				{
					name: 'loading',
					address: 'loading',
					itemCount: 'loading',
				},
			];
		} else {
			return backendData;
		}
	}

	return (
		<div>
			<NavBar />
			<Routes>
				<Route
					path='/'
					element={<Inventory data={downloading()} isLoading={isLoading} />}
				/>
				<Route path='*' element={<div>No data</div>} />
			</Routes>
		</div>
	);
}

export default App;
