import HeroSection from "./HeroSection/HeroSection";
import BentoSection from "./BentoSection/BentoSection";
import ProjectsSection from "./ProjectsSection/ProjectsSection";
import TechStack from "./TechStack/TechStack";
import KnowAboutMe from "./KnowAboutMe/KnowAboutMe";
import ReviewsSection from "./ReviewsSection/ReviewsSection";
import GetInTouch from "./GetInTouch/GetInTouch";

const LandingPage = () => {
  return (
    <div className="w-full min-h-screen relative bg-black overflow-x-hidden">
      <div className="pt-16 md:pt-0">
        <HeroSection />
        <BentoSection />
        <ProjectsSection />
        <TechStack />
        <KnowAboutMe />
        <ReviewsSection />
        <GetInTouch />
      </div>
    </div>
  );
};

export default LandingPage;
