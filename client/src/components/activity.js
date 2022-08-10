import React from 'react';
import '../css/activity.css';

function Transaction({ transaction }) {
	return (
		<div className='activity-card'>
			<div className='tags'>
				<div className='transaction-type buy'>Buy</div>
				<div className='transaction-type in-progress'>In Progress</div>
			</div>
			<h1 className='product-detail product-name'>
				{`Product: ${transaction.product.name}`}{' '}
			</h1>
			<h2 className='product-detail activity-quantity'>
				{transaction.quantity}
			</h2>
			<h3 className='product-detail activity-date'>{transaction.createdOn}</h3>
		</div>
	);
}

export default Transaction;