import React from "react";
import { motion } from "framer-motion";
import { User, Rocket, Users, LucideIcon } from "lucide-react";
import { Building2, GraduationCap, TrendingUp } from "lucide-react";

type FeatureCardProps = {
	steps: Array<{ text: string; icon: LucideIcon }>;
	title: string;
	tag: string;
	description: string;
	image: string;
};

const FeatureCard: React.FC<FeatureCardProps> = (props) => {
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
		<section className='bg-white text-gray-900 py-20 px-4 rounded-3xl mx-8 my-16 shadow-lg border border-gray-100'>
			<motion.div
				className='max-w-7xl mx-auto'
				variants={containerVariants}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 0.3 }}>
				<div className='flex flex-col lg:flex-row gap-12 items-center'>
					{/* Left Content */}
					<div className='w-[40%]'>
						<motion.div
							variants={itemVariants}
							className='inline-block border border-gray-300 bg-gray-50 rounded-full px-3 py-1'>
							<span className='text-gray-600 font-medium text-sm tracking-wider'>
								{props.tag}
							</span>
						</motion.div>

						<motion.h2
							variants={itemVariants}
							className='text-4xl md:text-4xl leading-tight font-montserrat mt-6 font-semibold text-gray-900'>
							{props.title}
						</motion.h2>

						<motion.p
							variants={itemVariants}
							className='text-gray-600 text-lg mt-3'>
							{props.description}
						</motion.p>

						<div className='space-y-6 mt-7'>
							{props.steps.map((step, index) => {
								const IconComponent = step.icon;
								return (
									<motion.div
										key={index}
										variants={itemVariants}
										className='flex items-center space-x-4 p-2 rounded-xl border border-gray-200 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 group cursor-pointer'
										whileHover={{ scale: 1.02 }}>
										<div className='flex items-center justify-center w-12 h-12 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors duration-300'>
											<IconComponent className='w-6 h-6 text-green-600' />
										</div>
										<div className='flex-1'>
											<h3 className='text-gray-700 group-hover:text-gray-900 font-medium text-lg transition-colors duration-300'>
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
						className='relative w-[60%]'
						variants={imageVariants}>
						<div className='relative rounded-2xl overflow-hidden shadow-xl'>
							<img
								src={props.image}
								alt='Diverse professionals collaborating'
								className='w-full h-[33rem] object-cover object-top'
							/>

							{/* Optional overlay for better image integration */}
							<div className='absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none' />
						</div>
					</motion.div>
				</div>
			</motion.div>
		</section>
	);
};

const FeatureSection = () => {
	const feature1 = [
		{
			text: "Create your professional profile",
			icon: User,
		},
		{
			text: "Access priority placement programs",
			icon: Rocket,
		},
		{
			text: "Connect with inclusive employers",
			icon: Users,
		},
	];

	const feature2 = [
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

	return (
		<div className='bg-gradient-to-br from-gray-50 to-gray-100 py-16'>
			<FeatureCard
				steps={feature1}
				title='Access inclusive opportunities'
				tag='GET STARTED'
				description='Join our platform designed for everyone in three simple steps:'
				image='/images/image-2.jpg'
			/>
			<FeatureCard
				steps={feature2}
				title='Enhance your career journey'
				tag='SKILL UP'
				description='Develop skills and explore opportunities across industries:'
				image='/images/image-7.jpg'
			/>
		</div>
	);
};

export default FeatureSection;
