import React, { useState } from 'react';
import '../css/inventory.css';
import { Card } from './warehouse-card';

export function Inventory({ data, isLoading }) {
	let [formOpened, setForm] = useState(false);

	const warehouseCards = data.map((warehouse) => {
		console.log(warehouse);
		return <Card warehouse={warehouse} />;
	});

	const isLoaded = (isLoading, warehouseCards) => {
		if (isLoading) {
			return <div>loading...</div>;
		} else {
			return warehouseCards;
		}
	};

	return (
		<div>
			<Search />
			<div className='container'>
				<div className='row'>{isLoaded(isLoading, warehouseCards)}</div>
			</div>
			<div
				className='add-new-button'
				onClick={() => {
					setForm(true);
				}}>
				+
			</div>
			<WarehouseForm isOpened={formOpened} setOpened={setForm} />
		</div>
	);
}

function WarehouseForm({ isOpened, setOpened }) {
	function openForm(isOpened) {
		if (!isOpened) {
			return 'none';
		}
		return 'form';
	}
	return (
		<div className={openForm(isOpened)}>
			<div
				className='close-button'
				onClick={() => {
					setOpened(false);
				}}>
				<b>X</b>
			</div>
			<form>
				<div className='input'>
					<label htmlFor='name'>Warehouse Name</label>
					<br />
					<input type='text' name='name' placeholder='Name' />
				</div>
				<div className='input'>
					<label htmlFor='address'>Address</label>
					<br />
					<input type='text' name='address' placeholder='Address' />
				</div>
			</form>
		</div>
	);
}

function Search() {
	return (
		<div className='wrapper'>
			<div className='section name'>Inventory</div>
			<div className='section'>
				<form>
					<input
						className='inventory-input'
						placeholder='Search...'
						type='text'
					/>
				</form>
			</div>
		</div>
	);
}
