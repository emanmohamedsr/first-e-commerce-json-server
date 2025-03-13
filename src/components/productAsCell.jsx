import { useState } from "react";
import { Link } from "react-router-dom";
import Alert from "./DelationAlert";

export default function ProductAsCell({ product, onDelete }) {
	const [showAlertMessage, setShowAlertMessage] = useState(false);

	const handleDeleteConfirmation = (confirmDelete) => {
		if (confirmDelete) {
			onDelete(product.id);
		}
	};

	return (
		<>
			<td className='font-bold text-zinc-800 w-[100px] text-center'>
				{product.id}
			</td>
			<td className='w-[150px] p-2'>
				<img
					className='w-full object-contain'
					src={product.image}
					alt='product-image'
				/>
			</td>
			<td className='w-[200px] p-2 text-zinc-600'>{product.title}</td>
			<td className='font-bold text-center w-[100px] text-orange-700'>
				{product.price} $
			</td>
			<td className='w-[300px]'>
				<div className='buts w-full flex justify-center items-center my-auto flex-wrap gap-2.5'>
					<Link
						className='p-2 cursor-pointer rounded-md text-white bg-teal-600'
						to={`/product/${product.id}`}>
						View
					</Link>
					<Link
						to={`/adminDashboard/edit/${product.id}`}
						className='p-2 cursor-pointer rounded-md text-white bg-sky-600'>
						Edit
					</Link>
					<button
						onClick={() => setShowAlertMessage(true)}
						className='p-2 cursor-pointer rounded-md text-white bg-main-color'>
						Delete
					</button>
				</div>
			</td>

			{showAlertMessage && (
				<td>
					<Alert
						handleDeleteConfirmation={handleDeleteConfirmation}
						setShowAlertMessage={setShowAlertMessage}
					/>
				</td>
			)}
		</>
	);
}
