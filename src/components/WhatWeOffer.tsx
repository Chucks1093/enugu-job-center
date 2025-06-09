import { motion } from "framer-motion";
import {
	BookOpen,
	FileText,
	Briefcase,
	Users,
	ArrowRight,
	CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
	{
		id: "career-guidance",
		title: "Career Guidance and Counselling",
		description:
			"Professional guidance to help you understand your strengths and discover the right career path.",
		icon: BookOpen,
		features: [
			"One-on-one career coaching",
			"Career path planning based on market trends",
			"Support for informed educational decisions",
			"Guidance for career transitions",
		],
		color: "bg-app-primary",
	},
	{
		id: "cv-review",
		title: "CV Review and Writing",
		description:
			"Expert assistance in creating professional CVs and cover letters that stand out to employers.",
		icon: FileText,
		features: [
			"Professional CV creation and review",
			"Cover letter writing assistance",
			"Tips for job-specific applications",
			"ATS optimization to pass screening systems",
		],
		color: "bg-purple-600",
	},
	{
		id: "job-listing",
		title: "Job Listing and Matching",
		description:
			"Access to curated job opportunities across various sectors that match your skills and aspirations.",
		icon: Briefcase,
		features: [
			"Up-to-date job opportunities database",
			"Categorized listings by industry and experience",
			"Direct application to employers",
			"Job alerts for new relevant positions",
		],
		color: "bg-teal-600",
	},
	{
		id: "recruitment",
		title: "Recruitment Services",
		description:
			"Connecting employers with qualified candidates and providing comprehensive recruitment support.",
		icon: Users,
		features: [
			"Candidate sourcing and screening",
			"Interview arrangement and coordination",
			"Skills assessment and verification",
			"Onboarding support for successful placements",
		],
		color: "bg-app-secondary",
	},
];

export function WhatWeOfferSection() {
	return (
		<section className='py-16 lg:py-24 bg-white'>
			<div className='container mx-auto px-4'>
				<motion.div
					className='text-center max-w-3xl mx-auto mb-16'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}>
					<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
						What We Offer
					</h2>
					<p className='text-lg text-gray-600'>
						Comprehensive services designed to help you achieve your
						career goals and find the right opportunities that match your
						skills and aspirations.
					</p>
					<div className='mt-6 mx-auto w-24 h-1 bg-gradient-to-r from-app-primary to-app-secondary rounded-full'></div>
				</motion.div>

				<div className='grid md:grid-cols-2 gap-8 lg:gap-12'>
					{services.map((service, index) => (
						<motion.div
							key={service.id}
							className='bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100'
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}>
							<div
								className={`${service.color} p-6 relative h-24 overflow-hidden`}>
								{/* Decorative elements */}
								<div className='absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10'></div>
								<div className='absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full -ml-8 -mb-8'></div>

								<div className='relative z-10 flex items-center'>
									<div className='flex h-12 w-12 items-center justify-center rounded-lg bg-white/20 text-white'>
										<service.icon className='h-6 w-6' />
									</div>
									<h3 className='ml-4 text-xl font-bold text-white'>
										{service.title}
									</h3>
								</div>
							</div>

							<div className='p-6'>
								<p className='text-gray-600 mb-6'>
									{service.description}
								</p>

								<ul className='space-y-3 mb-8'>
									{service.features.map((feature, idx) => (
										<li
											key={idx}
											className='flex items-start'>
											<CheckCircle className='h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0' />
											<span className='text-sm text-gray-700'>
												{feature}
											</span>
										</li>
									))}
								</ul>

								<Button
									variant='outline'
									className='w-full border-app-primary text-app-primary hover:bg-app-primary hover:text-white transition-colors group'>
									Learn More
									<ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
								</Button>
							</div>
						</motion.div>
					))}
				</div>

				<motion.div
					className='mt-16 text-center'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.4 }}>
					<p className='text-lg text-gray-700 mb-6 max-w-3xl mx-auto'>
						Whether you're just starting your career, looking to advance
						to the next level, or considering a complete change, we're
						here to support your journey.
					</p>
					<Button
						variant='default'
						size='lg'
						className='group bg-app-primary text-white hover:bg-app-primary/90'>
						View All Services
						<ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
					</Button>
				</motion.div>
			</div>
		</section>
	);
}
