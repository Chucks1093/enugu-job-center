import React from "react";
import { motion } from "framer-motion";
import { Building2, GraduationCap, TrendingUp } from "lucide-react";

const JobCenterOnboardV2: React.FC = () => {
	const steps = [
		{
			text: "Explore multi-sector job opportunities",
			icon: Building2,
		},
		{
			text: "Enroll in targeted skill workshops",
			icon: GraduationCap,
		},
		{
			text: "Unlock your career potential",
			icon: TrendingUp,
		},
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
				delayChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, x: -30 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.6,
				ease: "easeOut",
			},
		},
	};

	const imageVariants = {
		hidden: { opacity: 0, scale: 0.9 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.8,
				ease: "easeOut",
			},
		},
	};

	return (
		<section className='bg-gray-900 text-white py-20 px-8 rounded-3xl mx-8 my-16'>
			<motion.div
				className='max-w-7xl mx-auto'
				variants={containerVariants}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 0.3 }}>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
					{/* Left Content */}
					<div className='space-y-8'>
						<motion.div
							variants={itemVariants}
							className='inline-block border border-gray-600 rounded-full px-6 py-2'>
							<span className='text-gray-300 font-medium text-sm tracking-wider'>
								SKILL UP
							</span>
						</motion.div>

						<motion.h2
							variants={itemVariants}
							className='text-4xl md:text-5xl font-light leading-tight'>
							How to enhance your career journey
						</motion.h2>

						<motion.p
							variants={itemVariants}
							className='text-gray-400 text-lg'>
							Develop skills and explore opportunities across industries:
						</motion.p>

						<div className='space-y-6'>
							{steps.map((step, index) => {
								const IconComponent = step.icon;
								return (
									<motion.div
										key={index}
										variants={itemVariants}
										className='flex items-start space-x-4 p-4 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300 group cursor-pointer'
										whileHover={{ scale: 1.02 }}>
										<div className='flex items-center justify-center w-12 h-12 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors duration-300'>
											<IconComponent className='w-6 h-6 text-blue-400' />
										</div>
										<div className='flex-1'>
											<h3 className='text-white font-medium text-lg'>
												{step.text}
											</h3>
										</div>
									</motion.div>
								);
							})}
						</div>
					</div>

					{/* Right Image */}
					<motion.div
						className='relative'
						variants={imageVariants}>
						<div className='relative rounded-2xl overflow-hidden'>
							<img
								src='https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop'
								alt='Professional development and training'
								className='w-full h-96 object-cover'
							/>

							{/* Overlay Badge */}
							<motion.div
								className='absolute bottom-6 left-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-4 rounded-xl shadow-lg'
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 1, duration: 0.6 }}>
								<div className='text-2xl font-bold'>GROW</div>
								<div className='text-2xl font-bold'>YOUR</div>
								<div className='text-2xl font-bold'>SKILLS</div>
							</motion.div>

							{/* Top Right Stats Badge */}
							<motion.div
								className='absolute top-6 right-6 bg-white/10 backdrop-blur-md text-white px-4 py-3 rounded-lg border border-white/20'
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ delay: 1.2, duration: 0.6 }}>
								<div className='text-lg font-bold text-blue-400'>
									50+
								</div>
								<div className='text-xs text-gray-300'>Sectors</div>
							</motion.div>

							{/* Additional Floating Badge */}
							<motion.div
								className='absolute top-1/2 right-4 bg-orange-500/90 text-white px-3 py-2 rounded-lg transform rotate-12'
								initial={{ opacity: 0, rotate: 0 }}
								animate={{ opacity: 1, rotate: 12 }}
								transition={{ delay: 1.4, duration: 0.6 }}>
								<div className='text-sm font-bold'>Training</div>
								<div className='text-sm font-bold'>Available</div>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</motion.div>
		</section>
	);
};

export default JobCenterOnboardV2;
