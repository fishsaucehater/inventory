import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Select from 'react-select';

function Form() {
	let [products, setProducts] = useState([]);
	let [type, setType] = useState();
	let [quantity, setQuant] = useState(0);

	let id = useParams().warehouse_id;

	let navigate = useNavigate();

	const handleSubmit = () => {
		fetch(
			`/transaction/buy?type=BUY&warehouse=${id}&product=${type.value}&quantity=${quantity}`,
			{
				method: 'POST',
			},
		).then((res) => console.log(res));

		navigate(`/inventory/${id}`, { replace: false });
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
