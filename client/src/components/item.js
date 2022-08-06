import React from 'react';
import '../css/item.css';

function Item({ item }) {
	return (
		<div className='item-card'>
			<div
				style={{ backgroundImage: 'url(/warehouse.png)' }}
				className='item-img'></div>
			<div className='item-information'></div>
		</div>
	);
}

export default Item;
