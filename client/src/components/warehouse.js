import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Item from './item';
import Transaction from './activity';
import '../css/warehouse.css';

function Warehouse() {
	let [transactions, setTransaction] = useState([]);
	let [warehouse, setWarehouse] = useState();
	let [items, setItems] = useState([]);
	let id = useParams().id;

	useEffect(() => {
		//Getting warehouse name
		fetch(`/warehouse/${id}`, {
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
		fetch(`/item?warehouse_id=${id}`).then((res) =>
			res.json().then((data) => setItems(data)),
		);

		//Getting current transactions
		fetch(`/transaction/?warehosue=${id}`).then((res) =>
			res.json().then((data) => {
				console.log(data);
				setTransaction(data);
			}),
		);
	}, [id, items.length]);

	// Show all
	let itemsList =
		items.length === 0 ? (
			<div>No data</div>
		) : (
			items.map((item) => <Item key={item._id} item={item} />)
		);

	let transactionsList =
		transactions.length === 0 ? (
			<div>No data</div>
		) : (
			transactions.map((transaction) => (
				<Transaction transaction={transaction} />
			))
		);

	if (warehouse == null) {
		return <div>Loading...</div>;
	} else {
		return (
			<div className='warehouse-content'>
				<div className='wrapper'>
					<div className='section name'>{warehouse.name}</div>
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
							<div className='transactions-content'>{transactionsList}</div>
						</div>
						<div className='items-list'>
							<h1 className='title'>Items List</h1>
							<table className='list-content'>
								<thead>
									<tr>
										<th>Product</th>
										<th>In Stock</th>
										<th>Price</th>
										<th></th>
									</tr>
								</thead>
								<tbody>{itemsList}</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Warehouse;
