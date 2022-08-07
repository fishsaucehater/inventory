import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Search } from './inventory';
import Item from './item';
import '../css/warehouse.css';

function Warehouse() {
	let [warehouse, setWarehouse] = useState();
	let [items, setItems] = useState([]);
	let id = useParams().id;

	useEffect(() => {
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

		fetch(`../item?warehouse=${id}`).then((res) =>
			res.json().then((data) => setItems(data)),
		);
	}, [id, items.length]);

	function showItems() {
		if (items.length === 0) {
			return <div>No data</div>;
		} else {
			let itemList = items.map((item) => <Item item={item} />);
			return itemList;
		}
	}

	if (warehouse == null) {
		return <div>Loading...</div>;
	} else {
		return (
			<div>
				<Search name={warehouse.name} />
				<Link to={`../../add/${id}`} className='add-new-button'>
					+
				</Link>
				<div className='warehouse-main'>
					<div className='warehouse-menu'>
						<div className='items-list'>
							<h1 className='title'>Items List</h1>
							{showItems()}
						</div>
						<div className='summary'></div>
					</div>
				</div>
			</div>
		);
	}
}

export default Warehouse;
