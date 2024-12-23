import Expertise from "./Expertise/Expertise";
import Gallery from "./Gallery";
import VideoPlayback from "./VideoPlayback";
import SetUsApart from "./SetUsApart/SetUsApart";
// import FAQ from "../ContactUs/FAQ/FAQ";
import BrandPartners from "./BrandPartners/BrandPartners";
import ResponsiveHomePage from "./ResponsiveHomePage";
import ResponsiveExpertise from "./Expertise/ResponsiveExpertise";
import ResponsiveGallery from "./ResponsiveGallery";

const Home = () => {
	return (
		<div className="flex flex-col gap-20 ">
			<div className="hidden lg:block">
				<VideoPlayback />
			</div>

			<div className="lg:hidden block">
				<ResponsiveHomePage />
			</div>

			<div className="hidden lg:block">
				<Expertise />
			</div>

			<div className="lg:hidden md:block">
				<ResponsiveExpertise />
			</div>

			<SetUsApart />

			{/* <VideoPlayback /> */}
			{/* <Expertise /> */}
			{/* <Virtual/> */}

			<div className="hidden lg:block">
				<Gallery />
			</div>

			<div className="sm:block lg:hidden">
				<ResponsiveGallery />
			</div>

			{/* brand partner  */}
			<BrandPartners />
			{/* faq */}
			{/* <FAQ /> */}
		</div>
	);
};

export default Home;
