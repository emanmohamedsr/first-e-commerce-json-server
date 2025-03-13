import fullStar from "../assets/fullStar.svg";
import halfStar from "../assets/halfStar.svg";
import emptyStar from "../assets/emptyStar.svg";

export default function StarRating({ rating }) {
	const fullStars = Math.floor(rating);
	const hasHalfStar = rating % 1 >= 0.5;
	const emptyStars = 5 - Math.ceil(rating);

	return (
		<div className='flex items-center'>
			{Array(fullStars)
				.fill()
				.map((_, index) => (
					<img
						key={`full-${index}`}
						src={fullStar}
						alt='full star'
						className='h-5 w-5'
					/>
				))}

			{hasHalfStar && (
				<img
					key='half-star'
					src={halfStar}
					alt='half star'
					className='h-5 w-5'
				/>
			)}

			{Array(emptyStars)
				.fill()
				.map((_, index) => (
					<img
						key={`empty-${index}`}
						src={emptyStar}
						alt='empty star'
						className='h-5 w-5'
					/>
				))}
		</div>
	);
}
