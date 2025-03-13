import { useEffect, useState } from "react";
import Product from "./Product";
export default function ShowProducts() {
	const apiUrl = import.meta.env.VITE_API_URL;

	const [products, setProducts] = useState([]);
	const [cats, setCats] = useState([]);
	const [activeFilter, setActiveFilter] = useState("all");

	const fetchCategories = () => {
		fetch(`${apiUrl}/categories`)
			.then((response) => response.json())
			.then((data) => setCats(data));
	};

	const fetchProductsByCat = (cat) => {
		// ex: http://localhost:3000/products?category=electronics
		fetch(`${apiUrl}/products?category=${cat}`)
			.then((response) => response.json())
			.then((data) => setProducts(data));
	};

	const fetchAllProducts = () => {
		fetch(`${apiUrl}/products`)
			.then((response) => response.json())
			.then((data) => setProducts(data));
	};

	useEffect(() => {
		fetchAllProducts();
		fetchCategories();
	}, []);

	const mapProducts = () => {
		return products.map((product) => (
			<Product product={product} key={product.id} />
		));
	};

	const mapBtns = () => {
		return cats.map((cat) => (
			<button
				key={cat}
				onClick={() => {
					fetchProductsByCat(`${cat}`);
					setActiveFilter(cat);
				}}
				className={`hover:opacity-80 cursor-pointer transition-all duration-300  text-md md:text-lg text-white p-2 font-bold rounded-md ${
					activeFilter == cat ? "bg-main-color" : "bg-gray-600"
				}`}>
				{cat}
			</button>
		));
	};

	return (
		<div className='products container mx-auto mt-20'>
			<div className='filtrations flex gap-6 flex-wrap justify-center items-center'>
				<button
					onClick={() => {
						fetchAllProducts();
						setActiveFilter("all");
					}}
					className={`hover:opacity-80 cursor-pointer transition-all duration-300  text-md md:text-lg text-white p-2 font-bold rounded-md ${
						activeFilter == "all" ? "bg-main-color" : "bg-gray-600"
					}`}>
					All Products
				</button>
				{mapBtns()}
			</div>
			<div className='showProducts mx-auto my-20 flex gap-6  flex-wrap justify-center'>
				{mapProducts()}
			</div>
		</div>
	);
}
