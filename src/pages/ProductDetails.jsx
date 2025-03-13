import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import Rating from "../components/Rating";
import noPro from "../assets/npporimg.png";
export default function ProductDetails() {
	const apiUrl = import.meta.env.VITE_API_URL;
	const params = useParams();
	const [product, setProduct] = useState({});
	useEffect(() => {
		fetch(`${apiUrl}/products/${params.productId}`)
			.then((res) => res.json())
			.then((pro) => setProduct(pro));
	}, [params.productId]);

	return (
		<div className='product-details container  mx-auto my-20 flex flex-col md:flex-row justify-center gap-y-6 md:justify-between items-center'>
			<div className='max-w-[600px]'>
				{product.image && <Carousel images={[product.image, noPro]} />}
			</div>
			<div className='basic-info max-w-[600px]'>
				<div className='header'>
					<h2 className='font-bold text-lg text-gray-800 text-center md:text-left'>
						{product.title}
					</h2>
					<p className='text-center md:text-left text-sm md:text-lg mt-4 mb-6 leading-6 text-gray-600'>
						{product.description}
					</p>
				</div>
				<div className='ratting flex flex-col gap-3 md:gap-6 md:flex-row md:flex-wrap'>
					<div className='flex gap-2 items-center'>
						<span className='text-main-color font-black  md:text-lg'>
							Rating:
						</span>{" "}
						{product.rating?.rate}
						{product.rating && <Rating rating={product.rating.rate} />}
					</div>
					<div>
						<span className='text-main-color font-black  md:text-lg'>
							Price:
						</span>{" "}
						{product.price}
					</div>
					<div>
						<span className='text-main-color font-black  md:text-lg'>
							In Store:
						</span>{" "}
						{product.rating?.count}
					</div>
				</div>
			</div>
		</div>
	);
}
