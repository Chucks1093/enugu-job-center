import { motion } from "framer-motion";
import { GraduationCap, Clock, Award } from "lucide-react";
import { useState } from "react";

interface SkillTrainingCardProps {
	skillName: string;
	completionPercentage: number;
	hoursCompleted: number;
	totalHours: number;
	studentsEnrolled: number;
	className?: string;
}

const SkillTrainingCard = ({
	skillName,
	completionPercentage,
	hoursCompleted,
	totalHours,
	studentsEnrolled,
	className,
}: SkillTrainingCardProps) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<motion.div
			className={`rounded-xl bg-white overflow-hidden shadow-lg ${className}`}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			whileHover={{
				y: -5,
				boxShadow:
					"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
			}}
			onHoverStart={() => setIsHovered(true)}
			onHoverEnd={() => setIsHovered(false)}>
			<div className='relative'>
				<div className='absolute inset-0 bg-gradient-to-r from-supernova/20 to-supernova/10' />
				<div className='relative p-5'>
					<div className='flex items-center justify-between mb-4'>
						<div className='flex items-center gap-2'>
							<div className='flex h-10 w-10 items-center justify-center rounded-full bg-sapphire text-white'>
								<GraduationCap className='h-5 w-5' />
							</div>
							<div>
								<span className='block text-sm font-medium text-gray-500'>
									Skill Training
								</span>
								<h3 className='text-lg font-bold text-gray-900'>
									{skillName}
								</h3>
							</div>
						</div>
						<motion.div
							className='flex h-12 w-12 items-center justify-center'
							animate={{ rotate: isHovered ? 360 : 0 }}
							transition={{
								duration: 2,
								ease: "easeInOut",
								repeat: isHovered ? Infinity : 0,
							}}>
							<svg
								width='48'
								height='48'
								viewBox='0 0 48 48'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<circle
									cx='24'
									cy='24'
									r='20'
									stroke='#EAEAEA'
									strokeWidth='4'
								/>
								<motion.path
									d='M24 4C35.046 4 44 12.954 44 24C44 35.046 35.046 44 24 44'
									stroke='#002F73'
									strokeWidth='4'
									strokeLinecap='round'
									initial={{ pathLength: 0 }}
									animate={{ pathLength: completionPercentage / 100 }}
									transition={{ duration: 1.5, ease: "easeInOut" }}
								/>
							</svg>
							<div className='absolute text-xs font-bold text-sapphire'>
								{completionPercentage}%
							</div>
						</motion.div>
					</div>

					<div className='grid grid-cols-2 gap-4 mb-5'>
						<div className='rounded-lg bg-gray-50 p-3'>
							<div className='flex items-center gap-2 mb-1'>
								<Clock className='h-4 w-4 text-sapphire' />
								<span className='text-xs font-medium text-gray-700'>
									Training Hours
								</span>
							</div>
							<div className='flex items-end justify-between'>
								<span className='text-lg font-bold text-gray-900'>
									{hoursCompleted}
								</span>
								<span className='text-sm text-gray-500'>
									/ {totalHours} hrs
								</span>
							</div>
							<div className='mt-2 h-1.5 w-full bg-gray-200 rounded-full overflow-hidden'>
								<motion.div
									className='h-full bg-supernova'
									initial={{ width: 0 }}
									animate={{
										width: `${(hoursCompleted / totalHours) * 100}%`,
									}}
									transition={{ duration: 1 }}
								/>
							</div>
						</div>

						<div className='rounded-lg bg-gray-50 p-3'>
							<div className='flex items-center gap-2 mb-1'>
								<Award className='h-4 w-4 text-sapphire' />
								<span className='text-xs font-medium text-gray-700'>
									Enrolled
								</span>
							</div>
							<div className='flex items-end justify-between'>
								<span className='text-lg font-bold text-gray-900'>
									{studentsEnrolled}
								</span>
								<span className='text-sm text-gray-500'>students</span>
							</div>
							<motion.div
								className='mt-2 flex space-x-1'
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.5, delay: 0.5 }}>
								{[...Array(5)].map((_, i) => (
									<div
										key={i}
										className={`h-1.5 flex-1 rounded-full ${
											i < Math.floor((studentsEnrolled / 100) * 5)
												? "bg-sapphire"
												: "bg-gray-200"
										}`}
									/>
								))}
							</motion.div>
						</div>
					</div>

					<motion.button
						className='w-full rounded-lg bg-sapphire py-2 text-center text-sm font-medium text-white transition-colors hover:bg-sapphire/90'
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}>
						View Training Details
					</motion.button>
				</div>
			</div>
		</motion.div>
	);
};

export default SkillTrainingCard;
