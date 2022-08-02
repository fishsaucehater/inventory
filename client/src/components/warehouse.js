import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Search } from './inventory';
import '../css/warehouse.css';

function Warehouse() {
	let [warehouse, setWarehouse] = useState();
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
	}, [id]);

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
			</div>
		);
	}
}

export default Warehouse;
