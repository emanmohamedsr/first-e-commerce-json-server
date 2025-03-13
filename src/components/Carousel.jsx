import arrowLeft from "../assets/arrow-left.svg";
import arrowRight from "../assets/arrow-right.svg";
import { useState } from "react";

export default function Carousel(props) {
	const [isChanging, setIsChanging] = useState(false);
	let [currentImg, setCurrentImg] = useState(0);

	const nextSlide = () => {
		setIsChanging(true);
		setTimeout(() => {
			setCurrentImg((currentImg + 1) % props.images.length);
			setIsChanging(false);
		}, 300);
	};
	const prevSlide = () => {
		setIsChanging(true);
		setTimeout(() => {
			setCurrentImg(currentImg ? currentImg - 1 : (currentImg = 2));
			setIsChanging(false);
		}, 300);
	};
	const handleDotClick = (index) => {
		setIsChanging(true);
		setTimeout(() => {
			setCurrentImg(index);
			setIsChanging(false);
		}, 300);
	};
	const dots = () => {
		return props.images.map((_, index) => (
			<span
				key={index}
				className={`w-[15px] h-[15px] md:w-[20px] md:h-[20px] rounded-full cursor-pointer hover:opacity-80 transition ${
					currentImg === index ? "bg-main-color" : "bg-gray-600"
				}`}
				onClick={() => {
					handleDotClick(index);
				}}></span>
		));
	};
	return (
		<div className='carousel w-full relative bg-white my-6'>
			<div className='images w-full relative'>
				<img
					className={`${
						isChanging ? "blur" : "animate-fadeIn"
					} w-[300px] md:w-[750px] m-auto h-[300px] md:h-[450px] object-contain`}
					src={props.images[currentImg]}
					alt='image'
				/>
				<button
					onClick={prevSlide}
					className='prev-btn w-7 absolute top-[50%] -translate-y-[50%] left-[15px] xl:left-[50px] hover:opacity-80 transition cursor-pointer'>
					<img className='' src={arrowLeft} alt='arrowleft' />
				</button>
				<button
					onClick={nextSlide}
					className='next-btn w-7 absolute top-[50%] -translate-y-[50%] right-[15px] xl:right-[50px] hover:opacity-80 transition cursor-pointer'>
					<img src={arrowRight} alt='arrowright' />
				</button>
			</div>

			<div className='dots mt-2.5 flex justify-center items-center gap-2'>
				{dots()}
			</div>
		</div>
	);
}
