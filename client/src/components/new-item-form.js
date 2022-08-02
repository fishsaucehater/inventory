import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Select from 'react-select';

function Form(props) {
	let [products, setProducts] = useState([]);
	let [type, setType] = useState();
	let [name, setName] = useState();
	let [quantity, setQuant] = useState(0);

	let id = useParams().warehouse_id;

	const handleSubmit = () => {
		let jsonData = {
			type: type.value,
			quantity: quantity,
			warehouse: id,
		};

		fetch('/product', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(jsonData),
		}).then((res) => console.log(res));
	};

	useEffect(() => {
		fetch('/product').then((response) =>
			response.json().then((data) => {
				setProducts(data);
			}),
		);
	}, []);

	function extractOptions() {
		let options = products.map((data) => {
			return { value: data._id, label: data.name };
		});
		return options;
	}

	return (
		<div>
			<form>
				<div className='input'>
					<label htmlFor='product-type'>Loại vật tư</label>
					<Select options={extractOptions()} onChange={setType} />
				</div>
				<div className='input'>
					<label htmlFor='quantity'>Số lượng</label>
					<br />
					<input
						className='product-input'
						type='text'
						name='quantity'
						placeholder='quantity'
						onChange={(event) => {
							setQuant(event.target.value);
						}}
					/>
				</div>
				<div className='btn btn-outline-primary' onClick={handleSubmit}>
					{' '}
					Submit{' '}
				</div>
			</form>
		</div>
	);
}

export default Form;
