import { useState } from "react";
import { TracingBeam } from "../../Components/ui/tracing-beam";
import GetInTouch from "../LandingPage/GetInTouch/GetInTouch";
import HeroSection from "./HeroSection/HeroSection";
import EducationSection from "./EducationSection/EducationSection";
import ExperienceSection from "./ExperienceSection/ExperienceSection";
import InterestsSection from "./InterestsSection/InterestsSection";

const AboutPage = () => {
  const [activeSection, setActiveSection] = useState("education");

  return (
    <div className="w-full min-h-screen relative bg-black overflow-x-hidden text-white">
      <HeroSection />

      <TracingBeam className="px-6">
        <div className="max-w-7xl mx-auto ">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-pink-500 to-orange-500 text-transparent bg-clip-text">
              Experience That Brings
            </span>{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text">
              Ideas to Life
            </span>
          </h2>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <button
              onClick={() => setActiveSection("education")}
              className={`px-6 py-3 rounded-full ${
                activeSection === "education"
                  ? "bg-white text-black"
                  : "bg-gray-800 text-white"
              } transition-all`}
            >
              Education
            </button>
            <button
              onClick={() => setActiveSection("experience")}
              className={`px-6 py-3 rounded-full ${
                activeSection === "experience"
                  ? "bg-white text-black"
                  : "bg-gray-800 text-white"
              } transition-all`}
            >
              Experience
            </button>
            <button
              onClick={() => setActiveSection("interests")}
              className={`px-6 py-3 rounded-full ${
                activeSection === "interests"
                  ? "bg-white text-black"
                  : "bg-gray-800 text-white"
              } transition-all`}
            >
              Interests & Hobbies
            </button>
          </div>

          {activeSection === "education" && <EducationSection />}
          {activeSection === "experience" && <ExperienceSection />}
          {activeSection === "interests" && <InterestsSection />}

          <div className="mt-16 text-center">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </TracingBeam>
      <div className="mt-16">
        <GetInTouch />
      </div>
    </div>
  );
};

export default AboutPage;
