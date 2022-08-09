import React, { useState, useEffect } from 'react';
import '../css/main-menu.css';
import { Card } from './warehouse-card';

/**
 *
 * @returns Inventory page component
 */
export function Inventory() {
	let [data, setData] = useState([]);
	let [isLoading, setLoad] = useState(true);
	let warehouseCards;

	//Load data from api when mounted
	useEffect(() => {
		setLoad(true);
		fetch('/warehouse').then((response) => {
			response.json().then((res) => {
				setData(res);
				setLoad(false);
			});
		});
	}, [data.length]);

	let [formOpened, setForm] = useState(false);

	//return cards components
	const isLoaded = (isLoading) => {
		if (isLoading) {
			return <div>loading...</div>;
		} else if (data.length === 0) {
			return <div>No data</div>;
		} else {
			warehouseCards = data.map((warehouse) => {
				return (
					<Card key={warehouse._id} warehouse={warehouse} setData={setData} />
				);
			});
			return warehouseCards;
		}
	};

	// Return the component
	return (
		<div className=''>
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
					<div
						className='add-button'
						onClick={() => {
							setForm(true);
						}}>
						+ add warehouse{' '}
					</div>
				</div>
			</div>
			<div className='container'>
				<div className='row'>{isLoaded(isLoading)}</div>
			</div>
			<WarehouseForm
				isOpened={formOpened}
				setOpened={setForm}
				setData={setData}
			/>
		</div>
	);
}

/**
 * Form to add new warehouse
 * @fields name, address, type
 *
 *
 */
function WarehouseForm({ isOpened, setOpened, setData }) {
	let [name, setName] = useState('');
	let [address, setAddress] = useState('');
	let [type, setType] = useState('');

	const setDefault = () => {
		setName('');
		setAddress('');
		setType('');
	};

	// Call when submit button is pressed in the form
	async function handleSubmit(event) {
		setOpened(false);
		if (name === '' || address === '' || type === '') {
			alert('Must have all field');
			return;
		}
		let jsonData = {
			name: name,
			address: address,
			type: type,
		};
		await fetch('/warehouse', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(jsonData),
		}).then((res) => res.json().then((data) => setData(data)));
		setDefault();
	}

	//Determine the class of the form if it is opened
	const openForm = (isOpened) => {
		if (!isOpened) {
			return 'none';
		}
		return 'form';
	};

	const modalOpened = () => {
		if (!isOpened) {
			return '';
		} else {
			return 'inventory-modal';
		}
	};

	return (
		<div className={modalOpened()}>
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
						<label htmlFor='name'>Tên Kho</label>
						<br />
						<input
							className='text-field'
							type='text'
							name='name'
							placeholder='Name'
							onChange={(event) => {
								setName(event.target.value);
							}}
						/>
					</div>
					<div className='input'>
						<label htmlFor='address'>Địa chỉ</label>
						<br />
						<input
							className='text-field'
							type='text'
							name='address'
							placeholder='Address'
							onChange={(event) => setAddress(event.target.value)}
						/>
					</div>
					<div className='input'>
						<label htmlFor='type'>Loại kho</label>
						<br />
						<input
							className='text-field'
							type='text'
							id='javascript'
							name='type'
							placeholder='Nhập loại kho'
							onChange={(event) => setType(event.target.value)}
						/>
					</div>
					<div className='btn btn-outline-primary' onClick={handleSubmit}>
						{' '}
						Submit{' '}
					</div>
				</form>
			</div>
		</div>
	);
}
