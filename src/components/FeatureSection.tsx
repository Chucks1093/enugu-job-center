import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import {
	User,
	Rocket,
	Users,
	LucideIcon,
	ExternalLink,
	Briefcase,
} from "lucide-react";
import {
	Building2,
	GraduationCap,
	TrendingUp,
	FileText,
	Calendar,
	UserCheck,
} from "lucide-react";
import FeatureItem from "./common/FeatureItem";

type FeatureCardProps = {
	steps: Array<{ text: string; icon: LucideIcon }>;
	title: string;
	tag: string;
	description: string;
	image: string;
	reversed?: boolean;
	buttonText: string;
	buttonLink: string;
	children: ReactNode;
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
		<section className='bg-white text-gray-900 py-8 sm:py-12 md:py-16 lg:py-20  rounded-2xl md:rounded-3xl my-8 md:my-12 lg:my-16 shadow-lg border border-gray-100 ms:w-[95%] md:w-[90%] mx-auto px-6  ms:px-12'>
			<motion.div
				className='max-w-7xl mx-auto'
				variants={containerVariants}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 0.3 }}>
				<div
					className={`flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center ${
						props.reversed ? "lg:flex-row-reverse" : "lg:flex-row"
					}`}>
					{/* Left Content */}
					<div className='md:w-[40%]'>
						<motion.div
							variants={itemVariants}
							className='inline-block border border-gray-300 bg-gray-50 rounded-full px-3'>
							<span className='text-gray-600 font-medium text-xs  tracking-wider'>
								{props.tag}
							</span>
						</motion.div>

						<motion.h2
							variants={itemVariants}
							className='text-2xl md:text-4xl leading-tight font-montserrat mt-3 font-semibold text-gray-700'>
							{props.title}
						</motion.h2>

						<motion.p
							variants={itemVariants}
							className='text-gray-600 text-sm md:text-lg mt-2 md:mt-3'>
							{props.description}
						</motion.p>

						<div className='space-y-4 mt-7'>
							{props.steps.map((step, index) => {
								const IconComponent = step.icon;
								return (
									<motion.div
										key={index}
										variants={itemVariants}
										className='flex items-center space-x-2 p-2 rounded-xl border border-gray-200 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 group cursor-pointer'
										whileHover={{ scale: 1.02 }}>
										<div className='flex items-center justify-center w-9 h-9 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors duration-300'>
											<IconComponent className='w-5 h-5 text-blue-600' />
										</div>
										<div className='flex-1'>
											<h3 className='text-gray-500 group-hover:text-gray-900 font-medium text-md transition-colors duration-300'>
												{step.text}
											</h3>
										</div>
									</motion.div>
								);
							})}
						</div>
						<motion.div
							variants={itemVariants}
							className='mt-8'>
							<a
								href={props.buttonLink}
								target='_blank'
								rel='noopener noreferrer'
								className='inline-flex items-center gap-2 bg-app-primary hover:bg-app-primary/90 text-white font-medium px-5 py-2.5 rounded-lg transition-colors duration-150 group'>
								<span>{props.buttonText}</span>
								<ExternalLink className='w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-150' />
							</a>
						</motion.div>
					</div>

					{/* Right Image */}
					<motion.div
						className='relative md:w-[60%]'
						variants={imageVariants}>
						<div className='relative rounded-2xl overflow-hidden shadow-xl border-2 md:border-8 border-gray-100'>
							<img
								src={props.image}
								alt='Diverse professionals collaborating'
								className='w-full h-[18rem] md:h-[33rem] object-cover object-top'
							/>
							{props.children}

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
	const careerCounseling = [
		{
			text: "Schedule your counseling session",
			icon: Calendar,
		},
		{
			text: "Meet with career experts on-site",
			icon: UserCheck,
		},
		{
			text: "Get personalized career guidance",
			icon: TrendingUp,
		},
	];

	const skillTraining = [
		{
			text: "Choose virtual or on-site training",
			icon: GraduationCap,
		},
		{
			text: "Learn from industry professionals",
			icon: Users,
		},
		{
			text: "Build skills for your dream job",
			icon: Rocket,
		},
	];

	const jobMatching = [
		{
			text: "Upload your CV and profile",
			icon: FileText,
		},
		{
			text: "Get matched with suitable jobs",
			icon: Building2,
		},
		{
			text: "Connect with hiring companies",
			icon: User,
		},
	];

	return (
		<div
			className='bg-gray-100 py-2'
			id='services'>
			<FeatureCard
				steps={careerCounseling}
				title='Unlock Your Potential'
				tag='CAREER COUNSELING'
				description='Book your on-site career counseling session today and get the guidance you need:'
				image='/images/compressed/image-2.jpg'
				buttonText='Book Counseling Session'
				buttonLink='https://qrco.de/CAREERCOUNSELINGCONSENTFORM'>
				<FeatureItem
					icon={Users}
					title='Career Guidance'
					description='One-on-one counseling sessions '
					iconColor='text-blue-600'
					iconBgColor='bg-blue-50'
					className='absolute right-4 bottom-4  h-fit z-10 bg-white shadow-md '
				/>
			</FeatureCard>
			<FeatureCard
				steps={skillTraining}
				title='Level Up Your Skills'
				tag='TRAINING PROGRAMS'
				description='Enroll in our virtual and on-site training programs to advance your career:'
				image='/images/compressed/image-7.jpg'
				reversed={true}
				buttonText='Enroll in Training'
				buttonLink='https://tinyurl.com/TRAINING-BOOK-INGFORM'>
				<FeatureItem
					icon={GraduationCap}
					title='Flexible Training Options'
					description='Programs that fit your schedule '
					iconColor='text-green-600'
					iconBgColor='bg-green-50'
					className='absolute right-4 bottom-4  h-fit z-10 bg-white shadow-md '
				/>
			</FeatureCard>
			<FeatureCard
				steps={jobMatching}
				title='Connect with Opportunity'
				tag='JOB MATCHING'
				description='Submit your CV for job matching and find your perfect career opportunity:'
				image='/images/compressed/image-5.jpg'
				buttonText='Submit Your CV'
				buttonLink='https://qrco.de/jobseekerprofileform'>
				<FeatureItem
					icon={Briefcase}
					title='CV Optimization'
					description='Professional CV matching '
					iconColor='text-red-600'
					iconBgColor='bg-red-50'
					className='absolute right-4 bottom-4  h-fit z-10 bg-white shadow-md '
				/>
			</FeatureCard>
		</div>
	);
};

export default FeatureSection;
