import { useState } from "react";
import logo from "../assets/shop-logo.svg";
import { Link } from "react-router-dom";
import ToggleThemeBtn from "./ToggleThemeBtn";
export default function Nav() {
	const [active, setActive] = useState(false);
	const toggleActive = () => setActive(!active);
	return (
		<nav className=' shadow bg-white relative dark:bg-zinc-600'>
			<div className='container m-auto flex justify-between items-center p-2'>
				<div className='logo flex items-center cursor-pointer gap-2'>
					<img src={logo} alt='logo' className='max-w-[70px]' />
					<span className=' text-xl font-bold italic text-zinc-600 dark:text-white'>
						Matgar
					</span>
				</div>
				<ToggleThemeBtn />
				<div
					className={`${
						active ? "block" : "hidden"
					} md:bg-transparent z-50 md:flex md:items-center absolute top-full left-0 w-full md:w-fit md:relative md:left-0 md:top-0 bg-zinc-600 `}>
					<Link
						className='focus:outline-0 block w-full md:w-fit text-center p-6 font-bold text-xl text-zinc-50 md:text-zinc-600 dark:md:text-white  '
						to='/'>
						Home
					</Link>
					<Link
						className='focus:outline-0 block w-full md:w-fit text-center p-6 font-bold text-xl text-zinc-50 md:text-zinc-600 dark:md:text-white  '
						to='/about'>
						About
					</Link>
					<Link
						className='focus:outline-0 block w-full md:w-fit text-center p-6 font-bold text-xl text-zinc-50 md:text-zinc-600 dark:md:text-white  '
						to='/adminDashboard'>
						Admin Dashboard
					</Link>
				</div>
				<button
					onClick={toggleActive}
					className='focus:outline-0 flex md:hidden flex-col items-end justify-center gap-1 cursor-pointer'>
					<span
						className={`dark:bg-white w-[15px] h-[4px] rounded-[5px] bg-zinc-600 transition-all duration-150 transform ${
							active ? "opacity-0" : "opacity-100"
						}`}></span>
					<span
						className={`dark:bg-white  w-[30px] h-[4px] rounded-[5px] bg-zinc-600 transition-all duration-300 transform ${
							active ? "rotate-45 translate-y-1" : ""
						}`}></span>
					<span
						className={`dark:bg-white  w-[30px] h-[4px] rounded-[5px] bg-zinc-600 transition-all duration-300 transform ${
							active ? "-rotate-45 -translate-y-1" : ""
						}`}></span>
				</button>
			</div>
		</nav>
	);
}
