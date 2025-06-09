import { motion } from "framer-motion";
import { Users, ArrowUpRight, BarChart3 } from "lucide-react";
import { useState } from "react";

interface JobPlacementCardProps {
	totalPlacements: number;
	monthlyRate: number;
	previousRate: number;
	goal: number;
	className?: string;
}

const JobPlacementCard = ({
	totalPlacements,
	monthlyRate,
	previousRate,
	goal,
	className,
}: JobPlacementCardProps) => {
	const [isHovered, setIsHovered] = useState(false);
	const growthPercentage = Math.round(
		((monthlyRate - previousRate) / previousRate) * 100
	);
	const progressPercentage = Math.min(
		100,
		Math.round((monthlyRate / goal) * 100)
	);

	return (
		<motion.div
			className={`rounded-xl bg-white overflow-hidden shadow-lg ${className}`}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			whileHover={{ y: -5 }}
			onHoverStart={() => setIsHovered(true)}
			onHoverEnd={() => setIsHovered(false)}>
			<div className='border-b border-gray-100 bg-sapphire p-4'>
				<div className='flex items-center justify-between'>
					<div className='flex items-center gap-2'>
						<Users className='h-5 w-5 text-white' />
						<span className='text-sm font-medium text-white'>
							Job Placements
						</span>
					</div>
					<motion.div
						animate={{ rotate: isHovered ? 45 : 0 }}
						transition={{ duration: 0.3 }}>
						<ArrowUpRight className='h-4 w-4 text-supernova' />
					</motion.div>
				</div>
			</div>

			<div className='p-5'>
				<div className='mb-4'>
					<h3 className='text-3xl font-bold text-gray-900'>
						{totalPlacements.toLocaleString()}
					</h3>
					<p className='text-sm text-gray-500'>
						Total job placements this year
					</p>
				</div>

				<div className='mb-6'>
					<div className='flex items-center justify-between mb-2'>
						<div className='flex items-center gap-2'>
							<BarChart3 className='h-4 w-4 text-sapphire' />
							<span className='text-sm font-medium text-gray-700'>
								Monthly Target
							</span>
						</div>
						<span className='text-sm font-medium text-gray-900'>
							{progressPercentage}%
						</span>
					</div>

					<div className='h-2 w-full bg-gray-100 rounded-full overflow-hidden'>
						<motion.div
							className='h-full bg-gradient-to-r from-sapphire to-supernova'
							initial={{ width: 0 }}
							animate={{ width: `${progressPercentage}%` }}
							transition={{ duration: 1, delay: 0.2 }}
						/>
					</div>
				</div>

				<div className='flex items-center justify-between'>
					<div>
						<span className='text-sm text-gray-500'>Monthly rate</span>
						<div className='flex items-center gap-2'>
							<span className='text-xl font-semibold text-gray-900'>
								{monthlyRate}
							</span>
							<motion.span
								className={`text-xs font-medium px-1.5 py-0.5 rounded-full ${
									growthPercentage > 0
										? "bg-green-100 text-green-800"
										: "bg-red-100 text-red-800"
								}`}
								initial={{ scale: 0.8 }}
								animate={{ scale: 1 }}
								transition={{ duration: 0.3 }}>
								{growthPercentage > 0 ? "+" : ""}
								{growthPercentage}%
							</motion.span>
						</div>
					</div>
					<div className='text-right'>
						<span className='text-sm text-gray-500'>Goal</span>
						<p className='text-xl font-semibold text-gray-900'>{goal}</p>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

// Example usage:
export default JobPlacementCard;
