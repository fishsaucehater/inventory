import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../css/card.css';

export function Card({ warehouse, setData }) {
	function warehouseType() {
		if (warehouse.type.toUpperCase() === 'Kho Vat tu'.toUpperCase()) {
			return 'item';
		} else {
			return 'machine';
		}
	}

	function handleDelete() {
		fetch(`/warehouse/${warehouse._id}`, {
			method: 'DELETE',
		}).then((res) => res.json().then((data) => setData(data)));

		fetch(`/item/?warehouse_id=${warehouse._id}`, {
			method: 'DELETE',
		});
	}

	return (
		<div className='col-4'>
			<div className='card mt-3 mb-3'>
				<div className='warehouse'>
					<h5 className='card-header'>{warehouse.name}</h5>
					<div className='edit' onClick={handleDelete}>
						X
					</div>
				</div>
				<div className={warehouseType()}></div>
				<div className='card-body'>
					<p className='card-text'>Địa chỉ: {warehouse.address}</p>
					<Link to={`/inventory/${warehouse._id}`} className='btn btn-primary'>
						Tới Kho
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Card;
