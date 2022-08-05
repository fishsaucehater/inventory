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
			return <div>Loading...</div>;
		} else {
			let itemList = items.map((item) => <div>{item.product_id.name}</div>);
			return itemList;
		}
	}

	if (warehouse == null) {
		return <div>Loading...</div>;
	} else {
		return (
			<div>
				<Search name={warehouse.name} />
				<Link
					to={`../../add/${id}`}
					className='add-new-button'
					onClick={() => {}}>
					+
				</Link>
				<Item />
			</div>
		);
	}
}

export default Warehouse;
