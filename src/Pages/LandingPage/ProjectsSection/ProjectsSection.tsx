import { Vortex } from "@/Components/ui/vortex";
import { motion } from "motion/react";
// import resumia from "../../../assets/Images/resumia.png";
// import portfolio from "../../../assets/Images/portfolio.png";
// import devtrix from "../../../assets/Images/devtrix.jpg";
// import { ExpandableCard, Project } from "@/Components/ui/ExpandableCard";

// const projectsData: Project[] = [
//   {
//     title: "Resumai",
//     description: "AI-powered resume builder and job application assistant",
//     ctaText: "Explore",
//     src: resumia,
//     ctaLink: "https://resumai.vercel.app",
//     content:
//       "A web application that helps users create professional resumes using AI. Features include template selection, AI suggestions, and export options.",
//   },
//   {
//     title: "DevTrix",
//     description: "Developer productivity and collaboration platform",
//     ctaText: "Explore",
//     src: devtrix,
//     ctaLink: "https://devtrix.io",
//     content:
//       "DevTrix is a platform designed to enhance developer productivity through collaborative coding, project management, and integrated tools.",
//   },
//   {
//     title: "Personal Portfolio",
//     description: "My professional portfolio website",
//     ctaText: "Explore",
//     src: portfolio,
//     ctaLink: "#",
//     content:
//       "This personal portfolio showcases my projects, skills, and professional experience as a web developer. Built with modern technologies and a focus on interactive design.",
//   },
// ];

const ProjectsSection = () => {
  return (
    <div className="bg-black">
      <div className="w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] mx-auto rounded-2xl h-[20rem] md:h-[30rem] overflow-hidden relative">
        <Vortex
          backgroundColor="black"
          className="flex items-center flex-col justify-center px-4 md:px-10 py-4 w-full h-full"
        >
          <motion.h2
            className="text-white text-xl md:text-4xl lg:text-6xl font-bold text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="text-gray-300 text-sm md:text-lg mt-2 md:mt-4 max-w-2xl text-center px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore some of my recent work and personal projects
          </motion.p>
        </Vortex>
      </div>
      {/* <div className="relative overflow-hidden w-full h-full py-20 px-4 md:px-10 max-w-7xl mx-auto">
        <ExpandableCard projects={projectsData} />
      </div> */}

      <div className="min-h-[500px] w-full flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Coming Soon</h1>
      </div>
    </div>
  );
};

export default ProjectsSection;
