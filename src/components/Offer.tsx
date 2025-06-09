import { Feather } from "lucide-react";

import { GraduationCap, Users, Rocket, Building2 } from "lucide-react";

const features = [
	{
		title: "For Candidates at All Levels",
		subtitle:
			"Whether you're a graduate, professional, or artisan, we have opportunities for everyone",
		icon: Users,
	},
	{
		title: "Priority Placement Programs",
		subtitle:
			"Special fast-track employment options for women and underserved communities",
		icon: Rocket,
	},
	{
		title: "Multi-Sector Opportunities",
		subtitle:
			"Access jobs across tech, healthcare, agriculture, retail and more",
		icon: Building2,
	},
	{
		title: "Skill Development Workshops",
		subtitle:
			"Enhance your employability with our targeted training programs",
		icon: GraduationCap,
	},
];

function FeatureCard(props: (typeof features)[number]) {
	return (
		<article className='border border-gray-200 p-8 rounded-[.8rem]'>
			<props.icon className='w-7 h-7 text-app-secondary' />
			<h1 className='mt-4 text-[1.1rem] mb-2 font-semibold text-app-primary'>
				{props.title}
			</h1>
			<p className='text-gray-500'>{props.subtitle}</p>
		</article>
	);
}

function Offer() {
	return (
		<section className='w-[80%] mx-auto py-[4rem]'>
			<p className='flex items-center justify-center mx-auto w-fit bg-gray-100 text-gray-600 px-3 py-1 text-sm border border-gray-300 rounded-[1rem]'>
				<Feather className='w-5 h-5' /> Our Services
			</p>
			<h2 className='text-center font-manrope font-semibold text-[1.5rem] md:text-[2rem] mt-2 mb-4 md:mb-1 text-app-primary'>
				Services We Offer
			</h2>
			<p className='text-center text-gray-600 text-sm'>
				Comprehensive services to help you achieve your career goals and
				find the right opportunities.
			</p>
			<div className='grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-10 mt-10'>
				{features.map((feature, index) => (
					<FeatureCard
						{...feature}
						key={index}
					/>
				))}
			</div>
		</section>
	);
}

export default Offer;
