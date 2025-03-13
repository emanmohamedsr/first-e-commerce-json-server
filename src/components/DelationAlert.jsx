import React from "react";

const Alert = ({ handleDeleteConfirmation, setShowAlertMessage }) => {
	return (
		<div className='alert absolute w-[100%] h-[100%] top-0 left-0 backdrop-blur-xl flex justify-center items-center'>
			<div
				role='alert'
				className=' mx-auto max-w-lg rounded-lg border border-none bg-stone-100 p-4 shadow-lg sm:p-6 lg:p-8'>
				<div className='flex items-center gap-4'>
					<span className='shrink-0 rounded-full bg-main-color p-2 text-white'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 20 20'
							fill='currentColor'
							className='h-4 w-4'>
							<path
								fillRule='evenodd'
								d='M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z'
								clipRule='evenodd'
							/>
						</svg>
					</span>
					<p className='font-medium sm:text-lg text-main-color'>Alert!</p>
				</div>
				<p className='mt-4 text-zinc-600'>
					This product will be deleted permanently?
				</p>
				<div className='mt-6 sm:flex sm:gap-4'>
					<a
						onClick={() => {
							handleDeleteConfirmation(true);
							setShowAlertMessage(false);
						}}
						href='#'
						className='inline-block w-full rounded-lg bg-main-color px-5 py-3 text-center text-sm font-semibold text-white sm:w-auto'>
						Delete
					</a>
					<a
						onClick={() => {
							handleDeleteConfirmation(false);
							setShowAlertMessage(false);
						}}
						href='#'
						className='mt-2 inline-block w-full rounded-lg bg-stone-300 px-5 py-3 text-center text-sm font-semibold text-gray-800 sm:mt-0 sm:w-auto'>
						Keep
					</a>
				</div>
			</div>
		</div>
	);
};

export default Alert;
