import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Users, TrendingUp, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

type MovingBannerProps = {
	className?: string;
};
const MovingBanner: React.FC<MovingBannerProps> = (props) => {
	const bannerItems = [
		{
			icon: Briefcase,
			text: "FIND JOBS",
		},
		{
			icon: GraduationCap,
			text: "DEVELOP SKILLS",
		},
		{
			icon: TrendingUp,
			text: "BUILD CAREERS",
		},
		{
			icon: Users,
			text: "MAKE CONNECTIONS",
		},
	];

	return (
		<div
			className={cn(
				"bg-app-secondary py-3 overflow-hidden whitespace-nowrap ",
				props.className
			)}>
			<motion.div
				className='inline-block'
				animate={{
					x: [0, -1000],
				}}
				transition={{
					x: {
						repeat: Infinity,
						repeatType: "loop",
						duration: 25,
						ease: "linear",
					},
				}}>
				<div className='flex space-x-[5rem]'>
					{/* Repeat the banner items multiple times to ensure continuous scroll */}
					{Array.from({ length: 8 }).map((_, index) => (
						<div
							key={index}
							className='flex items-center space-x-[5rem] .px-8 flex-shrink-0 '>
							{bannerItems.map((item, itemIndex) => {
								return (
									<div
										key={itemIndex}
										className='flex items-center space-x-2 justify-between  w-[10rem]'>
										<img
											src='/icons/banner-dot.svg'
											className='w-4 h-4 text-black'
										/>
										<span className='text-black block font-medium text-sm'>
											{item.text}
										</span>
									</div>
								);
							})}
						</div>
					))}
				</div>
			</motion.div>
		</div>
	);
};

export default MovingBanner;
