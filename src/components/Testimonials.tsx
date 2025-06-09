import { useState } from "react";
import { motion } from "framer-motion";

// Define testimonial data structure
interface Testimonial {
	id: string;
	name: string;
	username: string;
	quote: React.ReactNode;
	bgColor: string;
	textColor: string;
	avatarSrc: string;
}

const TestimonialsSection = () => {
	// Track which card is being hovered
	const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

	// Sample testimonial data based on the image
	const testimonials: Testimonial[] = [
		{
			id: "1",
			name: "Nwankwo",
			username: "@judicodes",
			quote: (
				<>
					Traveling with stablecoins and I was able to pay for{" "}
					<span className='font-medium'>@limebike</span> in Doha with my{" "}
					<span className='font-medium'>@OnboardGlobal</span> card
				</>
			),
			bgColor: "bg-[#DDFF55]",
			textColor: "text-gray-800",
			avatarSrc: "https://randomuser.me/api/portraits/men/32.jpg",
		},
		{
			id: "2",
			name: "Nkechi",
			username: "@__jamcharis",
			quote: (
				<>
					Everyday, I find one new thing to love about{" "}
					<span className='font-medium'>@OnboardGlobal</span> Great
					UI.Great UX.On-ramp and off-ramp is .
				</>
			),
			bgColor: "bg-[#A649FF]",
			textColor: "text-white",
			avatarSrc: "https://randomuser.me/api/portraits/women/44.jpg",
		},
		{
			id: "3",
			name: "Zach",
			username: "@zcabrams",
			quote: (
				<>
					more economic choice for more people in more countries. so
					excited to play a small role in enabling Onboard
				</>
			),
			bgColor: "bg-[#F7F7F0]",
			textColor: "text-gray-800",
			avatarSrc: "https://randomuser.me/api/portraits/men/22.jpg",
		},
		{
			id: "4",
			name: "Muhammad",
			username: "@DruxAMB",
			quote: (
				<>
					I made an exchange from{" "}
					<span className='font-medium'>base eth - Naira</span> (local NG
					bank account) within 30secs on{" "}
					<span className='font-medium'>@OnboardGlobal!!</span>
				</>
			),
			bgColor: "bg-[#FF9F4A]",
			textColor: "text-gray-800",
			avatarSrc: "https://randomuser.me/api/portraits/men/75.jpg",
		},
	];

	// Card positions exactly matching the image
	const cardPositions = [
		{ left: "7%", top: "0px" }, // Green card
		{ left: "30%", top: "0px" }, // Purple card
		{ left: "53%", top: "0px" }, // Cream card
		{ left: "76%", top: "0px" }, // Orange card
	];

	return (
		<div className='w-full bg-[#F8F6E9] py-16 overflow-hidden relative'>
			{/* Header */}
			<div className='max-w-4xl mx-auto px-4 text-center mb-24'>
				<div className='inline-block border border-gray-800 rounded-full px-6 py-1.5 text-sm font-medium mb-8'>
					TESTIMONIALS
				</div>
				<h2 className='text-[40px] md:text-[56px] font-serif leading-[1.15] text-[#232323]'>
					Hear what the community
					<br />
					members are saying
				</h2>
			</div>

			{/* Testimonial Cards Container */}
			<div
				className='relative mx-auto'
				style={{ height: "380px", maxWidth: "1500px" }}>
				{testimonials.map((testimonial, index) => (
					<motion.div
						key={testimonial.id}
						className={`absolute rounded-[32px] p-8 ${testimonial.bgColor} ${testimonial.textColor}`}
						style={{
							width: "340px",
							left: cardPositions[index].left,
							top: cardPositions[index].top,
							transform: "perspective(1000px) rotateY(-5deg)",
							transformOrigin: "left center",
							// Set z-index to 50 when hovered, otherwise based on position
							zIndex: hoveredCardId === testimonial.id ? 50 : 40 - index,
							transition: "transform 0.3s ease, box-shadow 0.3s ease",
							boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.08)",
						}}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
						whileHover={{
							y: -15,
							scale: 1.03,
							rotateY: 0,
							boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.12)",
							transition: { duration: 0.2 },
						}}
						onHoverStart={() => setHoveredCardId(testimonial.id)}
						onHoverEnd={() => setHoveredCardId(null)}>
						<p className='text-lg mb-10 leading-relaxed'>
							{testimonial.quote}
						</p>
						<div className='flex items-center'>
							<div className='w-10 h-10 rounded-full overflow-hidden mr-4 flex-shrink-0'>
								<img
									src={testimonial.avatarSrc}
									alt={`${testimonial.name}'s avatar`}
									className='w-full h-full object-cover'
								/>
							</div>
							<div>
								<h4 className='font-bold text-xl'>
									{testimonial.name}
								</h4>
								<p className='text-sm opacity-80'>
									{testimonial.username}
								</p>
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default TestimonialsSection;
