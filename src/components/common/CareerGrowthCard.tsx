import { motion } from "framer-motion";
import { TrendingUp, ChevronUp, Target, Briefcase } from "lucide-react";
import { useState } from "react";

interface CareerGrowthCardProps {
	username: string;
	careerLevel: string;
	currentSalary: number;
	potentialSalary: number;
	skillsAcquired: number;
	skillsGoal: number;
	className?: string;
}

const CareerGrowthCard = ({
	username,
	careerLevel,
	currentSalary,
	potentialSalary,
	skillsAcquired,
	skillsGoal,
	className,
}: CareerGrowthCardProps) => {
	const [isHovered, setIsHovered] = useState(false);
	const salaryIncrease = Math.round(
		((potentialSalary - currentSalary) / currentSalary) * 100
	);
	const skillsProgress = Math.round((skillsAcquired / skillsGoal) * 100);

	const formatCurrency = (value: number) => {
		return new Intl.NumberFormat("en-NG", {
			style: "currency",
			currency: "NGN",
			maximumFractionDigits: 0,
		}).format(value);
	};

	return (
		<motion.div
			className={`rounded-xl bg-white overflow-hidden shadow-lg ${className}`}
			initial={{ opacity: 0, scale: 0.95 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.5 }}
			whileHover={{ scale: 1.02 }}
			onHoverStart={() => setIsHovered(true)}
			onHoverEnd={() => setIsHovered(false)}>
			<div className='p-5'>
				<div className='flex items-center justify-between mb-5'>
					<div className='flex items-center gap-3'>
						<div className='flex h-10 w-10 items-center justify-center rounded-full bg-sapphire/10'>
							<TrendingUp className='h-5 w-5 text-sapphire' />
						</div>
						<div>
							<h3 className='font-bold text-gray-900'>Career Growth</h3>
							<p className='text-sm text-gray-500'>
								Personal development path
							</p>
						</div>
					</div>
					<motion.div
						className='flex items-center gap-1 rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800'
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.3 }}>
						<ChevronUp className='h-3 w-3' />
						<span>Active</span>
					</motion.div>
				</div>

				<div className='flex items-center justify-between bg-gray-50 rounded-lg p-3 mb-5'>
					<div>
						<span className='text-sm text-gray-500'>Welcome back</span>
						<p className='font-semibold text-gray-900'>{username}</p>
					</div>
					<div className='text-right'>
						<span className='text-sm text-gray-500'>Career Level</span>
						<p className='font-semibold text-gray-900'>{careerLevel}</p>
					</div>
				</div>

				<div className='mb-5'>
					<div className='flex items-center justify-between mb-2'>
						<div className='flex items-center gap-1.5'>
							<Briefcase className='h-4 w-4 text-sapphire' />
							<span className='text-sm font-medium text-gray-700'>
								Salary Projection
							</span>
						</div>
						<motion.span
							className='text-xs font-medium text-green-800 bg-green-100 px-2 py-0.5 rounded-full'
							animate={{ scale: isHovered ? [1, 1.1, 1] : 1 }}
							transition={{
								duration: 0.5,
								repeat: isHovered ? Infinity : 0,
								repeatDelay: 1,
							}}>
							+{salaryIncrease}%
						</motion.span>
					</div>

					<div className='relative h-16'>
						<motion.div
							className='absolute bottom-0 left-0 flex w-full items-end gap-1'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.6, delay: 0.2 }}>
							<div className='relative flex flex-col items-center flex-1'>
								<div className='h-10 w-full bg-sapphire/20 rounded-t-lg'></div>
								<span className='absolute -top-5 left-0 text-xs font-medium text-gray-500'>
									Current
								</span>
								<span className='absolute -bottom-5 left-0 text-xs font-semibold text-gray-900'>
									{formatCurrency(currentSalary)}
								</span>
							</div>

							<motion.div
								className='relative flex flex-col items-center flex-1'
								initial={{ height: "40px" }}
								animate={{ height: isHovered ? "56px" : "40px" }}
								transition={{ duration: 0.5 }}>
								<div className='h-14 w-full bg-gradient-to-t from-sapphire to-supernova rounded-t-lg'></div>
								<span className='absolute -top-5 left-0 text-xs font-medium text-gray-500'>
									Potential
								</span>
								<span className='absolute -bottom-5 left-0 text-xs font-semibold text-gray-900'>
									{formatCurrency(potentialSalary)}
								</span>
							</motion.div>
						</motion.div>
					</div>
				</div>

				<div className='mb-5'>
					<div className='flex items-center justify-between mb-2'>
						<div className='flex items-center gap-1.5'>
							<Target className='h-4 w-4 text-sapphire' />
							<span className='text-sm font-medium text-gray-700'>
								Skills Progress
							</span>
						</div>
						<span className='text-sm font-medium text-gray-900'>
							{skillsProgress}%
						</span>
					</div>

					<div className='h-2.5 w-full bg-gray-100 rounded-full overflow-hidden'>
						<motion.div
							className='h-full bg-gradient-to-r from-sapphire to-supernova'
							initial={{ width: 0 }}
							animate={{ width: `${skillsProgress}%` }}
							transition={{ duration: 1.2 }}
						/>
					</div>

					<div className='mt-2 flex justify-between text-xs text-gray-500'>
						<span>{skillsAcquired} skills acquired</span>
						<span>Goal: {skillsGoal}</span>
					</div>
				</div>

				<motion.button
					className='w-full rounded-lg bg-sapphire py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-sapphire/90'
					whileHover={{ scale: 1.02 }}
					whileTap={{ scale: 0.98 }}>
					View Career Path Details
				</motion.button>
			</div>
		</motion.div>
	);
};

export default CareerGrowthCard;
