import { MousePointer2, Menu, X } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";

function Header() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	return (
		<>
			<header className='bg-white shadow-sm  fixed h-[10vh] flex items-center justify-between w-full px-4 sm:px-[5%] lg:px-[10%] left-0 z-[60] top-0'>
				{/* Logo Section */}
				<div className='flex items-center justify-between gap-2 md:gap-3'>
					<img
						src='/logo-blue.png'
						alt='logo'
						className='h-[6vh] sm:h-[7vh] md:h-[8vh]'
					/>
					<img
						src='/icons/gov.png'
						alt='logo'
						className='h-[5vh] sm:h-[6vh] md:h-[7vh]'
					/>
				</div>

				{/* Desktop Navigation */}
				<nav className='items-center justify-center gap-6 lg:gap-10 text-sm text-zinc-800 hidden md:flex'>
					<a
						href='#hero'
						className='hover:text-app-primary transition-colors'>
						Home
					</a>
					<a
						href='#services'
						className='hover:text-app-primary transition-colors'>
						Services
					</a>
					<a
						href='#about'
						className='hover:text-app-primary transition-colors'>
						About
					</a>
				</nav>

				{/* Desktop Apply Button & Mobile Menu Toggle */}
				<div className='flex items-center gap-4'>
					{/* Apply Button - Hidden on very small screens */}
					<Link
						to='/loan'
						className='hidden sm:block'>
						<button className='flex items-center bg-app-primary text-zinc-100 text-xs sm:text-sm p-1 pl-3 sm:pl-4 rounded-[3.6rem] gap-2 sm:gap-3 font-semibold font-montserrat hover:bg-opacity-90 transition-all'>
							<span className='hidden sm:inline'>Apply now</span>
							<span className='sm:hidden'>Apply</span>
							<div className='flex items-center justify-center bg-app-secondary p-1.5 sm:p-2 rounded-full w-7 h-7 sm:w-9 sm:h-9'>
								<MousePointer2
									className='rotate-90 w-3 h-3 sm:w-4 sm:h-4'
									fill='black'
									stroke='black'
								/>
							</div>
						</button>
					</Link>

					{/* Mobile Menu Toggle */}
					<button
						onClick={toggleMobileMenu}
						className='md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors'
						aria-label='Toggle mobile menu'>
						{isMobileMenuOpen ? (
							<X className='w-6 h-6 text-zinc-800' />
						) : (
							<Menu className='w-6 h-6 text-zinc-800' />
						)}
					</button>
				</div>
			</header>

			{/* Mobile Menu Overlay */}
			{isMobileMenuOpen && (
				<div
					className='fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden'
					onClick={closeMobileMenu}
				/>
			)}

			{/* Mobile Menu */}
			<div
				className={`fixed top-[10vh] left-0 w-full bg-white shadow-lg z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
					isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
				}`}>
				<nav className='flex flex-col p-6 space-y-4'>
					<a
						href='#hero'
						onClick={closeMobileMenu}
						className='text-zinc-800 hover:text-app-primary transition-colors py-2 border-b border-gray-100'>
						Home
					</a>
					<a
						href='#services'
						onClick={closeMobileMenu}
						className='text-zinc-800 hover:text-app-primary transition-colors py-2 border-b border-gray-100'>
						Services
					</a>
					<a
						href='#about'
						onClick={closeMobileMenu}
						className='text-zinc-800 hover:text-app-primary transition-colors py-2 border-b border-gray-100'>
						About
					</a>

					{/* Mobile Apply Button */}
					<Link
						to='/loan'
						onClick={closeMobileMenu}
						className='sm:hidden pt-4'>
						<button className='w-full flex items-center justify-center bg-app-primary text-zinc-100 text-sm p-3 rounded-lg gap-3 font-semibold font-montserrat'>
							Apply for Loan
							<MousePointer2
								className='rotate-90 w-4 h-4'
								fill='white'
								stroke='white'
							/>
						</button>
					</Link>
				</nav>
			</div>
		</>
	);
}

export default Header;
