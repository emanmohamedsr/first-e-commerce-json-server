import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import IncorrectTokenAlert from "../components/IncorrectTokenAlert";
import SuccessAlert from "../components/SuccessAlert";
export default function AddProduct() {
	const apiUrl = import.meta.env.VITE_API_URL;
	// fetch product categories using useEffect
	useEffect(() => {
		fetch(`${apiUrl}/categories`)
			.then((res) => res.json())
			.then((data) => setCats(data));
	}, []);

	// useState hooks
	const [incorrectAlert, setIncorrectAlert] = useState({});
	const [successAlert, setSuccessAlert] = useState({});
	const [cats, setCats] = useState([]);
	const [title, setTitle] = useState("");
	const [price, setPrice] = useState("");
	const [description, setDescription] = useState("");
	const [category, setCategory] = useState("");
	const [image, setImage] = useState("");
	const [count, setCount] = useState("");

	// Regex patterns
	const priceRegex = /^\d+(\.\d{1,2})?$/;
	const countRegex = /^\d+$/;

	// validation functions for form fields
	function handleTitle() {
		if (title.trim().length > 0) {
			return true;
		} else {
			setIncorrectAlert({
				show: true,
				mess: `Invalid title. Title should be alphanumeric, spaces, and common punctuation. more tha one letter`,
			});
			return false;
		}
	}
	function handlePrice() {
		if (priceRegex.test(price)) {
			return true;
		} else {
			setIncorrectAlert({
				show: true,
				mess: `Invalid price. Price should be a valid number (e.g., 10, 10.99).`,
			});
			return false;
		}
	}
	function handleDescription() {
		if (description.trim().length > 0) {
			return true;
		} else {
			setIncorrectAlert({
				show: true,
				mess: `Invalid description. Description should be alphanumeric, spaces, and common punctuation. more tha one letter`,
			});
			return false;
		}
	}
	function handleCount() {
		if (countRegex.test(count)) {
			return true;
		} else {
			setIncorrectAlert({
				show: true,
				mess: `Invalid count. Count should be a positive integer.`,
			});
			return false;
		}
	}

	// useNavige hook to route to a page
	let navegate = useNavigate();
	function navigateTo(dir) {
		navegate(dir);
	}

	// form submit handler
	function handleSubmit(e) {
		e.preventDefault();
		if (
			handleTitle() &&
			handlePrice() &&
			handleDescription() &&
			handleCount()
		) {
			fetch(`${apiUrl}/products`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					title,
					price,
					description,
					category,
					image,
					rating: {
						rate: 3.9,
						count,
					},
				}),
			})
				.then((res) => res.json())
				.then((data) => {
					setSuccessAlert({
						show: true,
						data: data,
					});
				})
				.catch((err) => console.error("Error:", err));
		}
	}

	return (
		<div className='addproduct-page relative min-h-[calc(100vh-120px)] flex justify-center items-center'>
			{incorrectAlert.show && (
				<IncorrectTokenAlert
					setIncorrectAlert={setIncorrectAlert}
					incorrectAlert={incorrectAlert}
				/>
			)}
			{successAlert.show && (
				<SuccessAlert
					setSuccessAlert={setSuccessAlert}
					successAlert={successAlert}
					navigateTo={navigateTo}
				/>
			)}
			<form
				onSubmit={handleSubmit}
				className=' in-touch container mx-auto w-[300px] md:w-[600px] flex justify-center items-center flex-col'
				id='inTouch'>
				<input
					onChange={(e) => setTitle(e.target.value)}
					type='text'
					name='title'
					className='w-full p-3 mt-3 border-2 border-gray-300 rounded-md transition duration-300 focus:outline-none focus:border-main-color'
					placeholder='Product title'
				/>
				<input
					onChange={(e) => setPrice(e.target.value)}
					type='text'
					name='price'
					className='w-full p-3 mt-3 border-2 border-gray-300 rounded-md transition duration-300 focus:outline-none focus:border-main-color'
					placeholder='Product price'
				/>
				<input
					onChange={(e) => setDescription(e.target.value)}
					type='text'
					name='description'
					className='w-full p-3 mt-3 border-2 border-gray-300 rounded-md transition duration-300 focus:outline-none focus:border-main-color'
					placeholder='Product description'
				/>
				<select
					onChange={(e) => setCategory(e.target.value)}
					name='category'
					id='category'
					className='w-full p-3 mt-3 border-2 border-gray-300 text-zinc-500 rounded-md transition duration-300 focus:outline-none focus:border-main-color'>
					<option value='' disabled>
						Select a Category
					</option>
					{cats.map((cat) => (
						<option key={cat} value={cat}>
							{cat}
						</option>
					))}
				</select>
				<input
					onChange={(e) => setImage(e.target.value)}
					type='text'
					name='image'
					className='w-full p-3 mt-3 border-2 border-gray-300 rounded-md transition duration-300 focus:outline-none focus:border-main-color'
					placeholder='Product image link'
				/>
				<input
					onChange={(e) => setCount(e.target.value)}
					type='text'
					name='count'
					className='w-full p-3 mt-3 border-2 border-gray-300 rounded-md transition duration-300 focus:outline-none focus:border-main-color'
					placeholder='Product count'
				/>
				<button
					type='submit'
					className='w-full p-3 mt-5 bg-zinc-500 cursor-pointer transition duration-300 hover:bg-main-color text-white rounded-md hover:bg-main-color-dark'>
					Add
				</button>
			</form>
		</div>
	);
}
