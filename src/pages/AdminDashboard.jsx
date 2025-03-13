import { useEffect, useState } from "react";
import ProductAsCell from "../components/productAsCell";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
	const apiUrl = "https://eager-galvanized-sponge.glitch.me";

	const [products, setProducts] = useState([]);
	const [cats, setCats] = useState([]);
	const [activeFilter, setActiveFilter] = useState("all");

	// Fetch all categories
	const fetchCategories = () => {
		fetch(`${apiUrl}/categories`)
			.then((response) => response.json())
			.then((data) => setCats(data));
	};

	// Fetch products by category
	const fetchProductsByCat = (cat) => {
		fetch(`${apiUrl}/products?category=${cat}`)
			.then((response) => response.json())
			.then((data) => setProducts(data));
	};

	// Fetch all products
	const fetchAllProducts = () => {
		fetch(`${apiUrl}/products`)
			.then((response) => response.json())
			.then((data) => setProducts(data));
	};

	// Handle product deletion
	const handleDeleteProduct = (productId) => {
		fetch(`${apiUrl}/products/${productId}`, {
			method: "DELETE",
		})
			.then((response) => {
				if (response.ok) {
					setProducts((prevProducts) =>
						prevProducts.filter((product) => product.id !== productId),
					);
				}
			})
			.catch((error) => console.error("Error deleting product:", error));
	};

	useEffect(() => {
		fetchAllProducts();
		fetchCategories();
	}, []);

	// Render table rows
	const tableBody = () => {
		return products.map((product) => (
			<tr key={product.id}>
				<ProductAsCell product={product} onDelete={handleDeleteProduct} />
			</tr>
		));
	};

	// Render category filter buttons
	const mapBtns = () => {
		return cats.map((cat) => (
			<button
				key={cat}
				onClick={() => {
					fetchProductsByCat(cat);
					setActiveFilter(cat);
				}}
				className={`hover:opacity-80 cursor-pointer transition-all duration-300 text-md md:text-lg text-white p-2 font-bold rounded-md ${
					activeFilter === cat ? "bg-main-color" : "bg-gray-600"
				}`}>
				{cat}
			</button>
		));
	};

	return (
		<div className='adminDashboard bg-zinc-100 relative'>
			<div className='bg-white container m-auto overflow-hidden p-5'>
				<Link
					to='/adminDashboard/addProduct'
					className='flex justify-center items-center gap-12 h-full'>
					<div className='bg-gradient-to-b from-stone-300/40 to-transparent p-[4px] rounded-[16px]'>
						<button className='cursor-pointer  group p-[4px] rounded-[12px] bg-gradient-to-b from-white to-stone-200/40 shadow-[0_1px_3px_rgba(0,0,0,0.5)] active:shadow-[0_0px_1px_rgba(0,0,0,0.5)] active:scale-[0.995]'>
							<div className='bg-gradient-to-b from-stone-200/40 to-white/80 rounded-[8px] px-2 py-2'>
								<div className='flex gap-2 items-center'>
									<span className='font-semibold text-zinc-700'>
										Add Product
									</span>
								</div>
							</div>
						</button>
					</div>
				</Link>
				<div className=' filtration flex justify-center items-center gap-3.5 flex-wrap my-8'>
					<button
						onClick={() => {
							fetchAllProducts();
							setActiveFilter("all");
						}}
						className={`hover:opacity-80 cursor-pointer transition-all duration-300 text-md md:text-lg text-white p-2 font-bold rounded-md ${
							activeFilter === "all" ? "bg-main-color" : "bg-gray-600"
						}`}>
						All Products
					</button>
					{mapBtns()}
				</div>
				<div className='products-table w-[850px] m-auto h-[500px] overflow-x-auto'>
					<table className='border-spacing-2 border-collapse'>
						<thead>
							<tr>
								<th>Id</th>
								<th>Image</th>
								<th>Name</th>
								<th>Price</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>{products.length > 0 && tableBody()}</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
