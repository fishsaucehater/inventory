import React, { useState } from 'react';
import '../css/inventory.css';
import { Card } from './warehouse-card';
import Modal from 'react-bootstrap/Modal';

export function Inventory({ data, isLoading }) {
	let [formOpened, setForm] = useState(false);

	const warehouseCards = data.map((warehouse) => {
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
		<div className=''>
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
	let [name, setName] = useState();
	let [address, setAddress] = useState();
	let [type, setType] = useState();

	async function handleSubmit(event) {
		setOpened(false);
		let jsonData = {
			name: name,
			address: address,
			type: type,
		};
		await fetch('/api', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(jsonData),
		});
	}

	function openForm(isOpened) {
		if (!isOpened) {
			return 'none';
		}
		return 'form';
	}
	return (
		<Modal
			show={isOpened}
			onHide={() => {
				setOpened(false);
			}}>
			<Modal.Body>
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
							<label htmlFor='name'>Địa chỉ</label>
							<br />
							<input
								className='text-field'
								type='text'
								name='name'
								placeholder='Name'
								onChange={(event) => {
									setName(event.target.value);
									console.log(name);
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
			</Modal.Body>
		</Modal>
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
