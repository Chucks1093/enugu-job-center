import React from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
	const footerSections = [
		{
			title: "SOCIALS",
			links: [
				{
					label: "LinkedIn",
					url: "https://tr.ee/rPVpM7bsPu",
				},
				{
					label: "Instagram",
					url: "https://www.instagram.com/enugujobscenter?igsh=MXE1ODloc3dteWw5Ng==",
				},
				{
					label: "Facebook",
					url: "https://tr.ee/paBDZ9U7mR",
				},
				{
					label: "TikTok",
					url: "https://tr.ee/x8Ui84UaGd",
				},
			],
		},
		{
			title: "PROGRAMS",
			links: [
				{ label: "Blogs", url: "https://www.enugusme.en.gov.ng/blog/" },
				{
					label: "Enugu Loans",
					url: "https://www.enugusme.en.gov.ng/programs/enugu-loans/",
				},
				{
					label: "Business Grants",
					url: "https://www.enugusme.en.gov.ng/programs/enugu-business-grants",
				},
				{
					label: "Enugu Learning",
					url: "https://www.enugusme.en.gov.ng/programs/enugu-learning/",
				},
			],
		},
		{
			title: "CONTACTS",
			links: [
				{ label: "info@sme.ng", url: "#" },
				{ label: "+234 (0) 802 854 5013", url: "#" },
				{ label: "+234 (0) 912 895 4467", url: "#" },
				{ label: "234 (0) 916 932 8543", url: "#" },
			],
		},
	];

	return (
		<footer className='bg-app-primary text-gray-300 py-16 px-[10%]'>
			<div className='max-w-7xl mx-auto'>
				<div className='grid grid-cols-1 md:grid-cols-5 gap-8 '>
					{/* Logo Section */}
					<motion.div
						className='md:col-span-2'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}>
						<div className='flex items-center gap-3'>
							<img
								src='./logo-white.png'
								className='brightness-75 w-[7rem]  rounded-full '
							/>
							<img
								src='./images/esgn.png'
								className=' w-[5rem]  rounded-full '
							/>
						</div>
						<p className='text-sm text-gray-200 w-[80%] mt-3'>
							The Enugu State SME Centre was established in 2005 in
							collaboration with the Enugu State Government to provide
							support for small and medium Enterprises.
						</p>
					</motion.div>

					{/* Footer Links */}
					{footerSections.map((section, index) => (
						<motion.div
							key={section.title}
							className='md:col-span-1 text-left md:text-right'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}>
							<h3 className='text-gray-300 font-medium text-sm mb-4 tracking-wider'>
								{section.title}
							</h3>
							<ul className='space-y-3'>
								{section.links.map((link, linkIndex) => (
									<motion.li
										key={linkIndex}
										whileHover={{ x: 4 }}
										transition={{ duration: 0.2 }}>
										<a
											href={link.url}
											target='_blank'
											className='text-white hover:text-gray-300 transition-colors duration-200 text-sm font-light'>
											{link.label}
										</a>
									</motion.li>
								))}
							</ul>
						</motion.div>
					))}
				</div>

				{/* Bottom border */}
				<motion.div
					className='mt-12 pt-8 border-t border-purple-500/30'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.8 }}>
					<div className='flex flex-col md:flex-row justify-between items-center text-sm text-gray-300'>
						<p>&copy; {new Date().getFullYear()} Onboard. </p>
						<div className='flex space-x-6 mt-4 md:mt-0'>
							All rights reserved.
						</div>
					</div>
				</motion.div>
			</div>
		</footer>
	);
};

export default Footer;
