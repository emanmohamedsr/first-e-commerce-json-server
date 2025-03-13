import { Link } from "react-router-dom";

export default function Product(props) {
	const { product } = props;
	return (
		<div className='product  flex flex-col justify-start items-center gap-4 max-w-[300px] p-6 shadow rounded-md'>
			<img
				className='h-[200px] object-contain'
				src={product.image}
				alt='product-image'
			/>
			<h2 className='text-center min-h-[60px] flex justify-center items-center font-bold text-gray-800'>
				{product.title}
			</h2>
			<p className='text-gray-600 leading-6 text-center text-sm'>
				{product.description}
			</p>
			<div className='info mt-auto  flex flex-wrap items-center gap-2.5 content-center'>
				<button className='p-2 cursor-pointer rounded-md text-white bg-main-color'>
					Add to Cart
				</button>
				<Link
					className='p-2 cursor-pointer rounded-md text-white bg-sky-700'
					to={`product/${product.id}`}>
					Details
				</Link>
				<span className='price text-bold text-gray-500'>{product.price}$</span>
			</div>
		</div>
	);
}
