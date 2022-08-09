import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Item from './item';
import '../css/warehouse.css';

function Warehouse() {
	let [warehouse, setWarehouse] = useState();
	let [items, setItems] = useState([]);
	let id = useParams().id;

	useEffect(() => {
		//Getting warehouse name
		fetch(`../warehouse/${id}`, {
			mode: 'cors',
		})
			.then((res) => {
				res.json().then((data) => {
					console.log(data);
					setWarehouse(data);
				});
			})
			.catch((err) => {
				console.error(err);
			});

		//Getting items in the warehouse
		fetch(`../item?warehouse_id=${id}`).then((res) =>
			res.json().then((data) => setItems(data)),
		);
	}, [id, items.length]);

	// Show all
	let itemsList =
		items.length === 0 ? (
			<div>No data</div>
		) : (
			items.map((item) => <Item key={item._id} item={item} />)
		);

	if (warehouse == null) {
		return <div>Loading...</div>;
	} else {
		return (
			<div>
				<div className='wrapper'>
					<div className='section name'>Warehouses</div>
					<div className='section '>
						<form>
							<input
								className='inventory-input'
								placeholder='Search...'
								type='text'
							/>
						</form>
						<Link to={`../../add/${id}`} className='add-button'>
							+ add items{' '}
						</Link>
					</div>
				</div>
				<div className='warehouse-main'>
					<div className='warehouse-menu'>
						<div className='transactions'>
							<h1 className='title'>Recent Activities</h1>
						</div>
						<div className='items-list'>
							<h1 className='title'>Items List</h1>
							{itemsList}
						</div>
						<div className='summary'></div>
					</div>
				</div>
			</div>
		);
	}
}

export default Warehouse;
