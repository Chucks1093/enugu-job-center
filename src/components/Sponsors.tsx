import React from "react";
import { motion } from "framer-motion";
import { Building2, GraduationCap, Smartphone, Landmark } from "lucide-react";

const SponsorsPartnersSection: React.FC = () => {
	const partners = [
		{
			name: "Enugu State Government",
			icon: Building2,
		},
		{
			name: "University of Nigeria",
			icon: GraduationCap,
		},
		{
			name: "MTN Nigeria",
			icon: Smartphone,
		},
		{
			name: "Zenith Bank",
			icon: Landmark,
		},
		{
			name: "Enugu State Government",
			icon: Building2,
		},
		{
			name: "University of Nigeria",
			icon: GraduationCap,
		},
		{
			name: "MTN Nigeria",
			icon: Smartphone,
		},
		{
			name: "Zenith Bank",
			icon: Landmark,
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

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: "easeOut",
			},
		},
	};

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

	return (
		<section className=' text-gray-100 py-20 px-8 rounded-3xl mx-8 my-16'>
			<motion.div
				className='max-w-7xl mx-auto border bg-[#0f0c0b] border-gray-700 p-12 rounded-2xl'
				variants={containerVariants}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 0.3 }}>
				{/* Header */}
				<div className='text-center mb-10'>
					<motion.div
						variants={headerVariants}
						className='inline-block border border-gray-600 rounded-full px-3 py-1 mb-4'>
						<span className='text-gray-400 font-medium text-xs tracking-wider'>
							PARTNERS
						</span>
					</motion.div>

					<motion.h1
						variants={headerVariants}
						className='text-2xl md:text-4xl font-montserrat font-semibold text-gray-300'>
						Backed By the best
					</motion.h1>
				</div>

				{/* Partners Grid */}
				<div
					className='grid gap-8 justify-center'
					style={{
						gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
					}}>
					{partners.map((partner, index) => {
						return (
							<motion.div
								key={index}
								variants={itemVariants}
								whileHover={{
									scale: 1.05,
									y: -5,
								}}
								transition={{
									duration: 0.3,
									ease: "easeOut",
								}}
								className='group cursor-pointer'>
								<div className='relative p-6 rounded-xl border border-gray-700 hover:border-gray-500 transition-all duration-300 bg-gray-800/30 hover:bg-gray-700/60 backdrop-blur-sm'>
									{/* Partner Icon */}
									<div className='text-center mb-4'>
										<div className='flex justify-center mb-3'>
											<img
												src='/icons/skype.jpg'
												className='h-8 text-gray-400 group-hover:text-green-400 transition-colors duration-300'
											/>
										</div>
										<div className='text-xs text-gray-400 group-hover:text-gray-200 transition-colors duration-300'>
											{partner.name}
										</div>
									</div>

									{/* Hover Glow Effect */}
									<motion.div className='absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl' />
								</div>
							</motion.div>
						);
					})}
				</div>
			</motion.div>
		</section>
	);
};

export default SponsorsPartnersSection;
