import AboutNavigation from "./AboutNavigation/AboutNavigation";
import VideoPlaybackAbout from "../shared/video/VideoPlaybackAbout";
import { Suspense } from "react";

const About = () => {
  return (
    <>
      <VideoPlaybackAbout title="About My Kitchen" aboutFirstDescription='Embrace a journey inspired by the'
        aboutSecondDescription='passion' aboutThirdDescription='to create your' aboutFourthDescription='perfect kitchen.'
      />
      <div className="w-full">
        <div className="container mx-auto">
          <Suspense>
            <AboutNavigation />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default About;

{/* <div className="w-full">
        <div className="container mx-auto">
          <AboutNavigation />
        </div>
      </div> */}