import { Link } from "react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, LucideIcon, MousePointer2, TrendingUp } from "lucide-react";

import { cn } from "@/lib/utils";
import Dot from "./common/Dot";

interface FeatureItemProps {
	icon?: LucideIcon;
	title: string;
	description: string;
	iconColor?: string;
	iconBgColor?: string;
	className?: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({
	icon: Icon = TrendingUp,
	title,
	description,
	iconColor = "text-blue-600",
	iconBgColor = "bg-blue-50",
	className,
	...props
}) => {
	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				ease: "easeOut",
			},
		},
	};
	return (
		<motion.div
			className={cn(
				"flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl hover:bg-gray-50 transition-all duration-300 cursor-pointer group ",
				className
			)}
			variants={itemVariants}
			whileHover={{ scale: 1.02, y: -2 }}
			whileTap={{ scale: 0.98 }}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, ease: "easeOut" }}
			{...props}>
			<motion.div
				className={cn(
					"flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full group-hover:scale-110 transition-transform duration-300",
					iconBgColor
				)}
				whileHover={{ rotate: 5 }}
				transition={{ duration: 0.3 }}>
				<Icon className={cn("h-5 w-5 sm:h-6 sm:w-6", iconColor)} />
			</motion.div>

			<div className='flex-1 hidden md:block'>
				<motion.h3
					className='font-bold text-gray-800 group-hover:text-gray-700 transition-colors duration-300 text-xs sm:text-sm'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2 }}>
					{title}
				</motion.h3>
				<motion.p
					className='text-xs sm:text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.3 }}>
					{description}
				</motion.p>
			</div>
		</motion.div>
	);
};

function Hero() {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	// Array of image paths from image-1 to image-8
	const images = [
		"/images/image-1.jpg",
		"/images/image-2.jpg",
		"/images/image-3.jpg",
		"/images/image-4.jpg",
		"/images/image-5.jpg",
		"/images/image-6.jpg",
		"/images/image-7.jpg",
		"/images/image-8.jpg",
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImageIndex((prevIndex) =>
				prevIndex === images.length - 1 ? 0 : prevIndex + 1
			);
		}, 7000); // Change image every 5 seconds
		return () => clearInterval(interval);
	}, [images.length]);

	return (
		<section className='md:pt-0 pt-[12vh] relative .bg-[#fff5c238]'>
			<img
				src='https://framerusercontent.com/images/5RlXjISAoh2vfp5MeLPNxQZkTE.svg'
				alt='grids'
				className='h-screen w-screen -z-10 object-cover absolute top-0 left-0 object-top -10 hidden'
			/>
			<div className='md:h-screen flex items-center justify-between mx-auto w-[90%] md:w-[80%] flex-col-reverse md:flex-row'>
				<div className='w-full mt-4 md:mt-4'>
					<div className='border opacity-[.75]  border-app-primary text-app-primary rounded-[1rem] w-fit px-3 py-1 text-[.7rem] md:text-sm mb-2 md:mb-4 hidden md:flex justify-center items-center gap-2'>
						<motion.div
							animate={{ rotate: 360 }}
							transition={{
								repeat: Infinity,
								duration: 7,
								ease: "linear",
							}}>
							<Dot
								size={17}
								startColor='#03255d'
								endColor='#03255d'
							/>
						</motion.div>
						<p>Smart career decisions</p>
					</div>

					<h1 className='text-2xl md:text-[3rem] leading-[2.2rem] md:leading-[4rem] text-app-primary md:font-semibold mb-3 mb:mb-4 font-manrope font-bold'>
						Transform Your{" "}
						<span className='text-app-secondary italic'>Future</span>,
						<br />
						Empower Your Career.
					</h1>
					<p className='text-sm md:text-[1rem] md:leading-[1.7rem]  md:w-[80%] mb-4 md:mb-[3rem] text-[#242424]'>
						Enugu Jobs is a flagship workforce development and youth
						empowerment initiative designed to reduce unemployment,
						upskill the workforce, and foster entrepreneurship across
						Enugu State.
					</p>

					<div className='flex items-center gap-4 mt-4 mb:mt-8 mb-8 md:mb-0'>
						<Link to='/jobs'>
							<button className='flex items-center bg-app-primary text-zinc-100 text-sm md:text-lg p-1 pl-5 mb:pl-6 rounded-[3.6rem] gap-4 font-semibold font-montserrat'>
								Get Started
								<div className='flex items-center justify-center bg-app-secondary p-2 rounded-full w-9 h-9 md:w-11 md:h-11'>
									<MousePointer2
										className='rotate-90'
										fill='black'
										stroke='black'
									/>
								</div>
							</button>
						</Link>
					</div>
				</div>
				<div className='w-full relative md:block h-full'>
					{/* <CareerCard className='absolute bottom-20 h-fit -left-14 z-10 bg-white shadow-md ' /> */}
					<FeatureItem
						icon={TrendingUp}
						title='Career Growth'
						description='Personal developmement'
						iconColor='text-blue-600'
						iconBgColor='bg-blue-50'
						className='absolute -right-2 top-10  md:top-[20%] h-fit md:-right-[15%] z-10 bg-white shadow-md '
					/>

					<FeatureItem
						icon={Briefcase}
						title='Job Placement'
						description='Find your ideal position'
						iconColor='text-orange-600'
						iconBgColor='bg-orange-50'
						className='absolute md:bottom-20 h-fit md:-left-[15%] z-10 bg-white shadow-md  -bottom-[4px]'
					/>
					<div className='relative h-[20rem] md:h-full w-full overflow-hidden rounded-[.8rem] border-4 md:border-8 border-gray-100'>
						<AnimatePresence>
							<motion.img
								key={currentImageIndex}
								src={images[currentImageIndex]}
								alt={`Career opportunity ${currentImageIndex + 1}`}
								className='absolute inset-0 h-full w-full object-cover grayscale-[.3] '
								initial={{
									opacity: 0,
									scale: 1,
								}}
								animate={{
									opacity: 1,
									scale: 1.1,
								}}
								exit={{
									opacity: 0,
									scale: 1.15,
								}}
								transition={{
									opacity: { duration: 0.5, ease: "easeInOut" },
									scale: { duration: 10, ease: "easeOut" },
								}}
							/>
						</AnimatePresence>
					</div>
				</div>
			</div>
			{/* <MovingBanner className='-translate-y-1/2' /> */}
		</section>
	);
}

export default Hero;
