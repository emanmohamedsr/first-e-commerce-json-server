import pageNotFound from "../assets/notFoundPage.avif";
import { Link } from "react-router-dom";
export default function NotFoundPage() {
	return (
		<div className='min-h-[calc(100vh-100px)] page-not-found'>
			<img
				className='m-auto max-w-[250px] md:max-w-[350px] object-contain'
				src={pageNotFound}
				alt='page not found'
			/>
			<Link
				className='cursor-pointer block p-2.5 rounded-lg hover:opacity-80 font-bold text-white text-xl bg-main-color w-fit m-auto'
				to='/'>
				Back to Home Page
			</Link>
		</div>
	);
}
