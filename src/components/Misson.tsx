import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";

function Mission() {
	const sectionRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start 0.8", "end 0.2"],
	});

	// Store the current scroll progress in state
	const [progress, setProgress] = useState(0);
	useMotionValueEvent(scrollYProgress, "change", (latest) => {
		setProgress(latest);
	});

	// Split the heading text into words
	const headingText =
		"HELPING YOU BUILD YOUR CAREER WITH GUIDANCE, TRAINING, AND JOB CONNECTIONS THAT WORK.";
	const words = headingText.split(" ");

	// Split the paragraph text into words
	const paragraphText =
		"We help people find good jobs by offering career advice sessions, training programs both online and in-person, and matching your CV with the right job opportunities. Our goal is to connect job seekers with companies that need their skills.";
	const paragraphWords = paragraphText.split(" ");

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3,
				delayChildren: 0.2,
			},
		},
	};

	const badgeVariants = {
		hidden: { opacity: 0, x: -50 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.8,
				ease: "easeOut",
			},
		},
	};

	// Helper to interpolate opacity
	function getWordOpacity(index: number, totalWords: number) {
		const start = index / totalWords;
		const end = (index + 1) / totalWords;
		const stops = [start * 0.3, start * 0.5, end * 0.5, end * 0.7];
		const values = [0.5, 1, 1, 0.5];
		if (progress <= stops[0]) return values[0];
		if (progress >= stops[3]) return values[3];
		for (let i = 1; i < stops.length; i++) {
			if (progress < stops[i]) {
				const t = (progress - stops[i - 1]) / (stops[i] - stops[i - 1]);
				return values[i - 1] + t * (values[i] - values[i - 1]);
			}
		}
		return values[values.length - 1];
	}

	return (
		<motion.section
			ref={sectionRef}
			className='w-full px-4 sm:px-6 md:px-8 lg:w-[90%] xl:w-[80%] mx-auto mt-8 sm:mt-12 md:mt-16 lg:mt-20 pb-20'
			variants={containerVariants}
			initial='hidden'
			id='about'
			whileInView='visible'
			viewport={{ once: true, amount: 0.3 }}>
			{/* Container with responsive flex direction */}
			<div className='flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 sm:gap-8 lg:gap-12'>
				{/* Badge Section */}
				<motion.div
					className='hidden md:flex items-center gap-2 justify-center lg:justify-start border border-gray-900 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 h-fit self-center lg:self-start lg:sticky lg:top-24'
					variants={badgeVariants}
					whileHover={{
						scale: 1.05,
						borderColor: "#22c55e",
						transition: { duration: 0.3 },
					}}>
					<motion.img
						className='w-6 sm:w-7'
						src='/icons/mission.svg'
						alt=''
						animate={{ rotate: 360 }}
						transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
					/>
					<span className='text-gray-700 font-medium text-xs sm:text-sm tracking-wider'>
						OUR MISSION
					</span>
				</motion.div>

				{/* Content Section */}
				<div className='w-full lg:w-[70%] xl:w-[75%]'>
					{/* Heading */}
					<h1 className='font-bold font-montserrat text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-900 leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-[1.2] mb-6 sm:mb-8'>
						{words.map((word, index) => (
							<motion.span
								key={index}
								style={{ opacity: getWordOpacity(index, words.length) }}
								className='inline-block mr-2 sm:mr-3'>
								{word}
							</motion.span>
						))}
					</h1>

					{/* Paragraph */}
					<div className='w-full sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%]'>
						<p className='font-montserrat text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-gray-600'>
							{paragraphWords.map((word, index) => (
								<motion.span
									key={index}
									style={{
										opacity: getWordOpacity(
											index,
											paragraphWords.length
										),
									}}
									className='inline-block mr-1.5 sm:mr-2'>
									{word}
								</motion.span>
							))}
						</p>
					</div>
				</div>
			</div>
		</motion.section>
	);
}

export default Mission;
