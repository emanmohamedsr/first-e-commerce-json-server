import img1 from "../assets/slider007.avif";
import img2 from "../assets/slider03.avif";
import img3 from "../assets/slider005.png";

import Carousel from "../components/Carousel";
import ShowProducts from "../components/ShowProducts";

export default function Home() {
	const slides = [img1, img2, img3];
	return (
		<div className='home'>
			<Carousel images={slides} />
			<ShowProducts />
		</div>
	);
}
