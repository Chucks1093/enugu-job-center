import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { JOB_LINK } from "@/lib/constants";
import { MousePointer2 } from "lucide-react";

const CTASection: React.FC = () => {
	// Placeholder image URLs - in real implementation, these would be actual professional/job-related images
	const leftImages = [
		{
			url: "/images/compressed/image-1.jpg",
			style: "top-[10%] right-[45%]",
		},
		{
			url: "/images/compressed/image-2.jpg",
			style: "top-[35%] right-[10%]",
		},
		{
			url: "/images/compressed/image-3.jpg",
			style: "top-[35%] right-[80%]",
		},
		{
			url: "/images/compressed/image-4.jpg",
			style: "top-[60%] right-[40%]",
		},
	];

	const rightImages = [
		{
			url: "/images/compressed/image-5.jpg",
			style: "top-[10%] left-[45%]",
		},
		{
			url: "/images/compressed/image-6.jpg",
			style: "top-[35%] left-[10%]",
		},
		{
			url: "/images/compressed/image-7.jpg",
			style: "top-[35%] left-[80%]",
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
		<section className='relative bg-white pt-16 md:p-32 pb-36 px-8 overflow-hidden '>
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
								"hidden md:block w-32 h-w-32 rounded-full overflow-hidden absolute -translate-x-1/2 -translate-y-1/2 border-4 border-white shadow-lg",
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
								"hidden md:block w-32 h-w-32 rounded-full overflow-hidden absolute -translate-x-1/2 -translate-y-1/2 border-4 border-white shadow-lg",
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
							BOOK A SESSION
						</span>
					</motion.div>

					<motion.h1
						variants={textVariants}
						className='text-2xl md:text-5xl font-montserrat font-semibold   text-gray-900 mb-5 md:mb-6 md:leading-snug'>
						Transform Your Future. <br /> Empower Your Career.
					</motion.h1>

					<motion.p
						variants={textVariants}
						className='text-md text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed'>
						Get personalized career counseling, enhance your skills with
						professional training, <br className='hidden md:block' />
						and connect with top employers through our job matching
						platform.
					</motion.p>

					<motion.div
						variants={textVariants}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className='flex items-center gap-4 mt-4 mb:mt-8 mb-8 md:mb-0  justify-center '>
						<a href={JOB_LINK}>
							<button className='flex items-center bg-app-primary text-zinc-100 text-sm md:text-lg p-1 pl-5 mb:pl-6 rounded-[3.6rem] gap-4 font-semibold font-montserrat '>
								View Listing
								<div className='flex items-center justify-center bg-app-secondary p-2 rounded-full w-9 h-9 md:w-11 md:h-11'>
									<MousePointer2
										className='rotate-90'
										fill='black'
										stroke='black'
									/>
								</div>
							</button>
						</a>
					</motion.div>
				</div>
			</motion.div>
		</section>
	);
};

export default CTASection;
