import {
	CustomerStorySection,
	FeatureSection,
	HeroSection,
	SupportSection,
} from "../sections";

export const LandingPage = () => {
	return (
		<article className="flex flex-col">
			<HeroSection />
			<FeatureSection />
			<SupportSection />
			<CustomerStorySection />
		</article>
	);
};
