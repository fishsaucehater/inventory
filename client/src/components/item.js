import React from 'react';
import '../css/item.css';

function Item({ item }) {
	return (
		<div className='item-card'>
			<div
				style={{ backgroundImage: 'url(/warehouse.png)' }}
				className='item-img'></div>
			<div className='item-information'>
				<h2 className='item-name'>{item.product_id.name}</h2>
				<div className='status in-store'>Quantity: {item.quantity}</div>
			</div>
			<div className='item-actions'>
				<div className='item-sell btn btn-primary'>Sell</div>
				<div className='item-buy btn btn-warning'>Buy new</div>
			</div>
		</div>
	);
}

export default Item;
