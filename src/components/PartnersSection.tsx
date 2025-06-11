import React from "react";
import { motion } from "framer-motion";

const PartnersSection: React.FC = () => {
	const partners = [
		{
			name: "Nig",
			icon: "/images/esgn.png",
		},
		{
			name: "Nig",
			icon: "/icons/german.png",
		},
		{
			name: "Sme",
			icon: "/icons/swiss.png",
		},
		{
			name: "Giz",
			icon: "/icons/giz.png",
		},

		{
			name: "Skype",
			icon: "/icons/skype.jpg",
		},
		{
			name: "Gov",
			icon: "/icons/gov.png",
		},
		{
			name: "Sme",
			icon: "/logo-blue.png",
		},
		{
			name: "vertix",
			icon: "/icons/vantix.png",
		},
	];

	const headerVariants = {
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

	// Duplicate partners array for seamless loop
	const duplicatedPartners = [
		...partners,
		...partners,
		...partners,
		...partners,
	];

	return (
		<section className='text-gray-100 my-16'>
			<div className='max-w-6xl mx-auto py-12 px-2 md:px-12 md:rounded-2xl'>
				{/* Header */}
				<div className='text-center mb-10'>
					<motion.h1
						variants={headerVariants}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true }}
						className='text-2xl md:text-5xl font-montserrat font-semibold text-gray-700'>
						Sponsors & Partners
					</motion.h1>
					<p className='text-sm  w-[90%] mx-auto first-line:md:text-md mt-4 text-gray-500'>
						We are proud to have the support of incredible organizations
						that share our vision of leveling up careers
					</p>
				</div>

				{/* Scrolling Partners Container */}
				<div className='relative overflow-hidden'>
					{/* Gradient overlays for smooth fade */}
					<div className='absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none' />
					<div className='absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none' />

					{/* Scrolling container */}
					<div className='flex animate-scroll'>
						{duplicatedPartners.map((partner, index) => (
							<div
								key={index}
								className='flex-shrink-0 mx-2 md:mx-7 group cursor-pointer'>
								<div className='relative p-4 rounded-xl transition-all duration-300'>
									{/* Partner Icon */}
									<div className='text-center min-h-[5rem] flex flex-col justify-center items-center'>
										<div className='flex justify-center items-center mb-2'>
											<img
												src={partner.icon}
												alt={partner.name}
												className='w-20 h-16 md:w-[8rem] md:h-[6rem] object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0'
											/>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default PartnersSection;
