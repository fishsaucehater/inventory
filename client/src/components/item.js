import React from 'react';

function Item({ item }) {
	return (
		<tr className='item-cell'>
			<td className='item'>{item.product_id.name}</td>
			<td className='item'>{item.quantity}</td>
			<td className='item'>{item.product_id.price}</td>
			<td className='item op-btns'>
				<div className='buy-btn'>Buy</div>
				<div className='sell-btn'>Sell</div>
			</td>
		</tr>
	);
}

export default Item;
