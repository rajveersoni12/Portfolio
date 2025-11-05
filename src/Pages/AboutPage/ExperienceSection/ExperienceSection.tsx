import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import userImage from "../../../assets/Images/user.jpg";

const ExperienceCard = ({
  title,
  content,
  delay,
}: {
  title: string;
  content: string;
  delay: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  const springConfig = {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  };

  const rotateX = useSpring(
    useTransform(mouseY, [-300, 300], [15, -15]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-300, 300], [-15, 15]),
    springConfig
  );

  const glareOpacity = useSpring(
    useTransform(mouseX, [-300, 0, 300], [0.2, 0, 0.2]),
    springConfig
  );

  // Spotlight effect
  const spotlightX = useSpring(
    useTransform(mouseX, [-300, 300], [0, 100]),
    springConfig
  );
  const spotlightY = useSpring(
    useTransform(mouseY, [-300, 300], [0, 100]),
    springConfig
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } =
      cardRef.current?.getBoundingClientRect() ?? {
        width: 0,
        height: 0,
        left: 0,
        top: 0,
      };
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;
    mouseX.set(deltaX);
    mouseY.set(deltaY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{
        opacity: 0,
        y: 60,
        scale: 0.8,
        rotateX: 10,
        rotateY: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        rotateY: 0,
      }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.25, 0.4, 0.25, 1],
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      whileTap={{
        scale: 0.98,
        transition: { duration: 0.1 },
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl cursor-pointer overflow-hidden group"
    >
      {/* Spotlight effect */}
      <motion.div
        style={{
          background: `radial-gradient(circle 200px at ${
            spotlightX.get() + 50
          }% ${
            spotlightY.get() + 50
          }%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)`,
          opacity: isHovered ? 1 : 0,
        }}
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
      />

      {/* Glare effect */}
      <motion.div
        style={{
          opacity: glareOpacity,
        }}
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />

      {/* Animated border */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: `linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)`,
          backgroundSize: "200% 200%",
        }}
        animate={{
          backgroundPosition: isHovered ? "100% 100%" : "0% 0%",
        }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <motion.h4
          className="text-xl font-semibold mb-4 group-hover:text-white transition-colors duration-300"
          whileHover={{ x: 5 }}
          animate={{
            y: isHovered ? -2 : 0,
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
        >
          {title}
        </motion.h4>
        <motion.p
          className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
          animate={{
            y: isHovered ? -2 : 0,
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
            delay: 0.05,
          }}
        >
          {content}
        </motion.p>
      </div>

      {/* Enhanced border glow on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20"
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
      />

      {/* Particle-like dots effect */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${20 + i * 30}%`,
              top: `${10 + i * 20}%`,
            }}
            animate={{
              opacity: isHovered ? [0.2, 0.8, 0.2] : 0,
              scale: isHovered ? [1, 1.5, 1] : 0,
            }}
            transition={{
              duration: 2,
              repeat: isHovered ? Infinity : 0,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

const TechTagCard = ({ tech, index }: { tech: string; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ scale: 1.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative text-sm bg-gray-800 py-2 px-4 rounded-full cursor-pointer overflow-hidden group"
    >
      {/* Hover effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full"
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
      />

      <span className="relative z-10 group-hover:text-white transition-colors duration-300">
        {tech}
      </span>
    </motion.span>
  );
};

const ExperienceSection = () => {
  const [imageHovered, setImageHovered] = useState(false);

  const techStack = [
    "React.js",
    "TypeScript",
    "JavaScript (ES6+)",
    "Next.js",
    "Tailwind CSS",
    "Redux Toolkit",
    "React Router",
    "Axios",
    "HTML5",
    "CSS3",
    "Vite",
    "Webpack",
  ];

  const experienceCards = [
    {
      title: "Building real-world applications",
      content:
        "Developed a full-featured crypto application with core functionalities including buy, sell, send, and peer-to-peer (P2P) crypto transfers, implementing robust wallet integration and secure transaction handling. Additionally, built a real-time chat application inspired by Meta's Messenger, supporting group chats, presence indicators, and media sharing.",
    },
    {
      title: "Learning and innovating through practical projects",
      content:
        "Gained hands-on experience with a wide range of frontend and backend technologies including React, Next.js, TypeScript, Tailwind CSS, Node.js, and MongoDB. Designed and built internal tools and utilities to accelerate development workflows and support company product features, contributing to improved productivity and developer efficiency.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="space-y-12"
    >
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left side - Profile */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:w-1/3"
        >
          <div className="sticky top-20">
            <motion.div
              className="w-full aspect-square rounded-full overflow-hidden border-4 border-gray-700 mx-auto max-w-[300px] relative"
              whileHover={{ scale: 1.05 }}
              onMouseEnter={() => setImageHovered(true)}
              onMouseLeave={() => setImageHovered(false)}
            >
              <img
                src={userImage}
                alt="Profile"
                className="w-full h-full object-cover transition-transform duration-300"
              />

              {/* Hover overlay effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                animate={{
                  opacity: imageHovered ? 1 : 0,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-6"
            >
              <motion.h3
                className="text-2xl font-bold"
                whileHover={{ scale: 1.05 }}
              >
                Frontend Engineer
              </motion.h3>
              <motion.p
                className="text-lg text-gray-400"
                whileHover={{ scale: 1.05 }}
              >
                Pixel Tech, Indore
              </motion.p>
              <motion.p
                className="text-sm text-gray-500 mt-2"
                whileHover={{ scale: 1.05 }}
              >
                JAN 2025 - PRESENT
              </motion.p>

              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                {techStack.map((tech, index) => (
                  <TechTagCard key={tech} tech={tech} index={index} />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right side - Experience Cards */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="md:w-2/3"
        >
          <div className="space-y-8">
            {experienceCards.map((card, index) => (
              <ExperienceCard
                key={index}
                title={card.title}
                content={card.content}
                delay={0.6 + index * 0.2}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ExperienceSection;
