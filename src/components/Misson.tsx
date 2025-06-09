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
		"WE'RE EQUIPPED TO CONNECT ORGANIZATIONS WITH EXCEPTIONAL TALENT AND DRIVE GROWTH THROUGH INNOVATION.";
	const words = headingText.split(" ");

	// Split the paragraph text into words
	const paragraphText =
		"Providing professional career guidance and counselling to individuals and businesses, fostering a dynamic workforce equipped to meet the evolving demands of the modern marketplace.";
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
			className='w-[80%] mx-auto flex justify-between mt-16'
			variants={containerVariants}
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true, amount: 0.3 }}>
			<motion.div
				className='flex items-center gap-2 justify-center border border-gray-900 rounded-full px-3 py-1 mb-8 h-fit'
				variants={badgeVariants}
				whileHover={{
					scale: 1.05,
					borderColor: "#22c55e",
					transition: { duration: 0.3 },
				}}>
				<motion.img
					className='w-7'
					src='/icons/mission.svg'
					alt=''
					animate={{ rotate: 360 }}
					transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
				/>
				<span className='text-gray-700 font-medium text-xs tracking-wider'>
					OUR MISSION
				</span>
			</motion.div>

			<div className='w-[70%]'>
				<h1 className='font-bold font-montserrat text-5xl md:text-6xl text-gray-900 leading-[5rem] md:leading-[1.2]'>
					{words.map((word, index) => (
						<motion.span
							key={index}
							style={{ opacity: getWordOpacity(index, words.length) }}
							className='inline-block mr-3'>
							{word}
						</motion.span>
					))}
				</h1>

				<p className='font-montserrat mt-8 text-lg leading-relaxed text-gray-600 w-[80%]'>
					{paragraphWords.map((word, index) => (
						<motion.span
							key={index}
							style={{ opacity: getWordOpacity(index, paragraphWords.length) }}
							className='inline-block mr-2'>
							{word}
						</motion.span>
					))}
				</p>
			</div>
		</motion.section>
	);
}

export default Mission;
