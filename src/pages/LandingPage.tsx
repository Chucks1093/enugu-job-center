import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Misson from "@/components/Misson";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import MovingBanner from "@/components/common/MovingBanner";

import FeatureSection from "@/components/FeatureSection";
import PartnersSection from "@/components/PartnersSection";

function LandingPage() {
	return (
		<div>
			<Header />
			<Hero />

			<Misson />
			<PartnersSection />
			<FeatureSection />
			<CTASection />
			<MovingBanner />
			<Footer />
		</div>
	);
}
export default LandingPage;
