import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const CTASection: React.FC = () => {
	// Placeholder image URLs - in real implementation, these would be actual professional/job-related images
	const leftImages = [
		{
			url: "/images/image-1.jpg",
			style: "top-[10%] right-[45%]",
		},
		{
			url: "/images/image-2.jpg",
			style: "top-[35%] right-[10%]",
		},
		{
			url: "/images/image-3.jpg",
			style: "top-[35%] right-[80%]",
		},
		{
			url: "/images/image-4.jpg",
			style: "top-[60%] right-[40%]",
		},
	];

	const rightImages = [
		{
			url: "/images/image-5.jpg",
			style: "top-[10%] left-[45%]",
		},
		{
			url: "/images/image-6.jpg",
			style: "top-[35%] left-[10%]",
		},
		{
			url: "/images/image-7.jpg",
			style: "top-[35%] left-[80%]",
		},
		{
			url: "/images/image-8.jpg",
			style: "top-[60%] left-[40%]",
		},
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.2,
			},
		},
	};

	const imageVariants = {
		hidden: { opacity: 0, scale: 0.8, y: 20 },
		visible: {
			opacity: 1,
			scale: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: "easeOut",
			},
		},
	};

	const textVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: "easeOut",
			},
		},
	};

	return (
		<section className='relative .bg-gradient-to-br from-amber-50 to-orange-50 p-32 pb-36 px-8 overflow-hidden'>
			<motion.div
				className='w-full mx-auto absolute inset-0 h-full  flex justify-between items-center '
				variants={containerVariants}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 0.3 }}>
				{/* Left Side Images */}
				<div className='h-[70%]  w-[25%] relative'>
					{leftImages.map((image, index) => (
						<motion.div
							key={`left-${index}`}
							variants={imageVariants}
							className={cn(
								"w-32 h-w-32 rounded-full overflow-hidden absolute -translate-x-1/2 -translate-y-1/2 border-4 border-white shadow-lg",
								image.style
							)}
							transition={{ duration: 0.3 }}>
							<img
								src={image.url}
								alt={`Professional ${index + 1}`}
								className='w-full h-full object-cover '
							/>
						</motion.div>
					))}
				</div>
				{/* Right Side Images */}

				<div className='  w-[25%] h-[70%] relative '>
					{rightImages.map((image, index) => (
						<motion.div
							key={`left-${index}`}
							variants={imageVariants}
							className={cn(
								"w-32 h-w-32 rounded-full overflow-hidden absolute -translate-x-1/2 -translate-y-1/2 border-4 border-white shadow-lg",
								image.style
							)}
							transition={{ duration: 0.3 }}>
							<img
								src={image.url}
								alt={`Professional ${index + 1}`}
								className='w-full h-full object-cover '
							/>
						</motion.div>
					))}
				</div>
			</motion.div>
			<motion.div
				className='max-w-7xl mx-auto relative'
				variants={containerVariants}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 0.3 }}>
				{/* Center Content */}
				<div className='text-center max-w-4xl mx-auto relative '>
					<motion.div
						variants={textVariants}
						className='inline-block border  border-gray-900 rounded-full px-3 py-1 mb-8'>
						<span className='text-gray-700 font-medium text-xs tracking-wider'>
							JOIN NOW
						</span>
					</motion.div>

					<motion.h1
						variants={textVariants}
						className='text-2xl md:text-5xl font-montserrat font-semibold   text-gray-900 mb-8 spacing'>
						Transform Your Future. <br /> Empower Your Career.
					</motion.h1>

					<motion.p
						variants={textVariants}
						className='text-md text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed'>
						Join a community of professionals who grow, connect, and
						thrive <br className='hidden md:block' /> in Enugu's dynamic
						job market.
					</motion.p>

					<motion.button
						variants={textVariants}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className='bg-app-primary hover:opacity-90 text-app-secondary font-semibold px-12 py-3 rounded-full text-md transition-all duration-300 shadow-md hover:shadow-xl'>
						Get Started
					</motion.button>
				</div>
			</motion.div>
		</section>
	);
};

export default CTASection;
