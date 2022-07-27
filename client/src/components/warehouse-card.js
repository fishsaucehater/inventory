import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../css/card.css';

export function Card({ warehouse }) {
	function warehouseType() {
		if (warehouse.type.toUpperCase() === 'Kho Vat tu'.toUpperCase()) {
			return 'item';
		} else {
			return 'machine';
		}
	}

	return (
		<div className='col-4'>
			<div className='card mt-3 mb-3'>
				<h5 className='card-header'>{warehouse.name}</h5>
				<div className={warehouseType()}></div>
				<div className='card-body'>
					<h5 className='card-title'>Item count: {warehouse.itemCount}</h5>
					<p className='card-text'>Address: {warehouse.address}</p>
					<Link to={warehouse._id} className='btn btn-primary'>
						Go to warehouse
					</Link>
				</div>
			</div>
		</div>
	);
}
