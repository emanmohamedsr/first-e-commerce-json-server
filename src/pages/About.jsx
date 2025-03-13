import aboutImg from "../assets/about.gif";
import downArrow from "../assets/down-arrow.svg";
export default function About() {
	return (
		<div className='about-us'>
			<article className='mt-6 p-2.5 container m-auto'>
				<h1 className='font-bold md:text-2xl text-gray-800 text-center md:text-left'>
					Story That Make Us Who We Are
				</h1>
				<p className='text-sm md:text-lg text-gray-600 my-3 text-center md:text-left'>
					Consumers expect to buy now, receive tomorrow. Or buy now, collect
					from the store tomorrow. Consumers expect to buy now, receive
					tomorrow.collect from the super store tomorrow. Consumers expect to
					buy now, receive tomorrow.
				</p>
				<div className='justify-between about-info flex items-center'>
					<img className='rounded-xl mt-4' src={aboutImg} alt='about-us' />
					<a className='hidden md:block flex-1' href='#inTouch'>
						<img
							className='md:w-[60px] lg:w-[90px] m-auto animate-bounce'
							src={downArrow}
							alt='down arrow'
						/>
					</a>
				</div>
			</article>
			<form
				action='/index.html'
				method='post'
				className='in-touch container m-auto p-6 my-5 flex justify-center items-center flex-col'
				id='inTouch'>
				<h2 className='font-bold text-white text-shadow text-4xl mb-5'>
					Contact Us
				</h2>
				<input
					type='text'
					name='name'
					className='w-full p-3 border-2 border-gray-300 rounded-md transition duration-300 focus:outline-none focus:border-main-color'
					placeholder='Your Name'
				/>
				<input
					type='email'
					name='email'
					className='w-full p-3 mt-3 border-2 border-gray-300 rounded-md transition duration-300 focus:outline-none focus:border-main-color'
					placeholder='Your Email'
				/>
				<textarea
					name='message'
					className='w-full p-3 mt-3 border-2 border-gray-300 rounded-md transition duration-300 focus:outline-none focus:border-main-color resize-y'
					placeholder='Your Message'
				/>
				<button
					type='submit'
					className='w-full p-3 mt-5 bg-gray-600 cursor-pointer transition duration-300 hover:bg-main-color text-white rounded-md hover:bg-main-color-dark'>
					Submit
				</button>
			</form>
		</div>
	);
}
