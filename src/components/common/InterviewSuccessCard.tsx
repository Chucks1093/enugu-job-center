import { motion } from "framer-motion";
import {
	CalendarCheck,
	Clock,
	UserCheck,
	BadgeCheck,
	Award,
} from "lucide-react";
import { useState } from "react";

interface InterviewSuccessCardProps {
	upcomingInterviews: number;
	interviewsCompleted: number;
	successRate: number;
	nextInterviewDate?: string;
	preparednessScore: number;
}

export const InterviewSuccessCard = ({
	upcomingInterviews,
	interviewsCompleted,
	successRate,
	nextInterviewDate,
	preparednessScore,
}: InterviewSuccessCardProps) => {
	const [isHovered, setIsHovered] = useState(false);

	// Calculate a color based on success rate
	const getSuccessRateColor = () => {
		if (successRate >= 80) return "text-green-600";
		if (successRate >= 60) return "text-blue-600";
		if (successRate >= 40) return "text-yellow-600";
		return "text-red-600";
	};

	// Calculate preparedness level text
	const getPreparednessLevel = () => {
		if (preparednessScore >= 90) return "Excellent";
		if (preparednessScore >= 75) return "Good";
		if (preparednessScore >= 50) return "Average";
		return "Needs Work";
	};

	return (
		<motion.div
			className='rounded-xl bg-white overflow-hidden shadow-lg'
			initial={{ opacity: 0, scale: 0.95 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.5 }}
			whileHover={{ scale: 1.02 }}
			onHoverStart={() => setIsHovered(true)}
			onHoverEnd={() => setIsHovered(false)}>
			<div className='border-b border-gray-100 bg-gradient-to-r from-sapphire to-sapphire/90 p-5'>
				<div className='flex items-center justify-between'>
					<div className='flex items-center gap-3'>
						<div className='flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white'>
							<BadgeCheck className='h-5 w-5' />
						</div>
						<div>
							<h3 className='font-bold text-white'>Interview Success</h3>
							<p className='text-xs text-white/70'>
								Track your interview performance
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className='p-5'>
				<div className='grid grid-cols-3 gap-2 mb-6'>
					<div className='rounded-lg bg-gray-50 p-3 text-center'>
						<CalendarCheck className='mx-auto h-5 w-5 text-sapphire mb-1' />
						<p className='text-lg font-bold text-gray-900'>
							{upcomingInterviews}
						</p>
						<p className='text-xs text-gray-500'>Upcoming</p>
					</div>

					<div className='rounded-lg bg-gray-50 p-3 text-center'>
						<UserCheck className='mx-auto h-5 w-5 text-sapphire mb-1' />
						<p className='text-lg font-bold text-gray-900'>
							{interviewsCompleted}
						</p>
						<p className='text-xs text-gray-500'>Completed</p>
					</div>

					<div className='rounded-lg bg-gray-50 p-3 text-center'>
						<Award className='mx-auto h-5 w-5 text-sapphire mb-1' />
						<p className={`text-lg font-bold ${getSuccessRateColor()}`}>
							{successRate}%
						</p>
						<p className='text-xs text-gray-500'>Success Rate</p>
					</div>
				</div>

				{nextInterviewDate && (
					<motion.div
						className='mb-6 rounded-lg border border-sapphire/20 bg-sapphire/5 p-4'
						animate={isHovered ? { y: [0, -5, 0] } : {}}
						transition={{
							duration: 1,
							repeat: isHovered ? Infinity : 0,
							repeatDelay: 2,
						}}>
						<div className='flex items-center gap-3'>
							<div className='flex h-10 w-10 items-center justify-center rounded-full bg-sapphire/10'>
								<Clock className='h-5 w-5 text-sapphire' />
							</div>
							<div>
								<p className='text-sm font-medium text-gray-700'>
									Next Interview
								</p>
								<p className='text-base font-semibold text-sapphire'>
									{nextInterviewDate}
								</p>
							</div>
						</div>
					</motion.div>
				)}

				<div className='mb-6'>
					<div className='flex items-center justify-between mb-2'>
						<span className='text-sm font-medium text-gray-700'>
							Interview Preparedness
						</span>
						<motion.span
							className='text-sm font-medium text-gray-900'
							animate={{ opacity: isHovered ? [1, 0.6, 1] : 1 }}
							transition={{
								duration: 1,
								repeat: isHovered ? Infinity : 0,
								repeatDelay: 1,
							}}>
							{getPreparednessLevel()}
						</motion.span>
					</div>

					<div className='h-2.5 w-full bg-gray-100 rounded-full overflow-hidden'>
						<motion.div
							className={`h-full ${
								preparednessScore >= 75
									? "bg-gradient-to-r from-green-500 to-supernova"
									: preparednessScore >= 50
									? "bg-gradient-to-r from-yellow-500 to-yellow-400"
									: "bg-gradient-to-r from-red-500 to-red-400"
							}`}
							initial={{ width: 0 }}
							animate={{ width: `${preparednessScore}%` }}
							transition={{ duration: 1 }}
						/>
					</div>
				</div>

				<div className='space-y-3 mb-6'>
					<div className='flex items-center justify-between'>
						<span className='text-sm text-gray-600'>Mock Interviews</span>
						<span className='text-sm font-medium text-gray-900'>
							3 of 5 completed
						</span>
					</div>
					<div className='flex items-center justify-between'>
						<span className='text-sm text-gray-600'>
							Interview Questions
						</span>
						<span className='text-sm font-medium text-gray-900'>
							45 reviewed
						</span>
					</div>
					<div className='flex items-center justify-between'>
						<span className='text-sm text-gray-600'>
							Resume Tailoring
						</span>
						<span className='text-sm font-medium text-sapphire'>
							Completed
						</span>
					</div>
				</div>

				<div className='flex gap-3'>
					<motion.button
						className='flex-1 rounded-lg border border-sapphire py-2 text-center text-sm font-medium text-sapphire transition-colors hover:bg-sapphire/5'
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}>
						Practice Questions
					</motion.button>
					<motion.button
						className='flex-1 rounded-lg bg-sapphire py-2 text-center text-sm font-medium text-white transition-colors hover:bg-sapphire/90'
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}>
						Schedule Mock Interview
					</motion.button>
				</div>
			</div>
		</motion.div>
	);
};
