import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const InterestCard = ({
  icon,
  title,
  description,
  index,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
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
        delay: index * 0.15,
        ease: [0.25, 0.4, 0.25, 1],
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      whileHover={{
        scale: 1.05,
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

      {/* Icon container with enhanced styling */}
      <motion.div
        className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mb-6 relative z-10 group-hover:bg-gray-600 transition-colors duration-300"
        whileHover={{
          scale: 1.2,
          rotate: 12,
          transition: { duration: 0.3, ease: "easeOut" },
        }}
        animate={{
          y: isHovered ? -2 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
      >
        <motion.div
          animate={{
            scale: isHovered ? 1.1 : 1,
            rotate: isHovered ? 5 : 0,
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
        >
          {icon}
        </motion.div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10">
        <motion.h3
          className="text-2xl font-bold mb-2 group-hover:text-white transition-colors duration-300"
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
        </motion.h3>
        <motion.p
          className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
          whileHover={{ x: 5 }}
          animate={{
            y: isHovered ? -2 : 0,
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
            delay: 0.05,
          }}
        >
          {description}
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

const InterestsSection = () => {
  const interests = [
    {
      icon: (
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
          className="w-8 h-8"
        >
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
      ),
      title: "Weightlifting",
      description:
        "Passionate about strength training and fitness. I believe in pushing physical boundaries and maintaining a healthy lifestyle through regular exercise.",
    },
    {
      icon: (
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
          className="w-8 h-8"
        >
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      ),
      title: "Reading",
      description:
        "Avid reader of both technical books and fiction. I love expanding my knowledge through literature and finding inspiration in stories.",
    },
    {
      icon: (
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
          className="w-8 h-8"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      title: "Technology Exploration",
      description:
        "Constantly exploring new technologies and frameworks. I enjoy experimenting with cutting-edge tools and staying ahead of tech trends.",
    },
    {
      icon: (
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
          className="w-8 h-8"
        >
          <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
        </svg>
      ),
      title: "Music",
      description:
        "Enjoy listening to various genres of music. It helps me focus while coding and provides a creative outlet for relaxation.",
    },
    {
      icon: (
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
          className="w-8 h-8"
        >
          <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
          <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
        </svg>
      ),
      title: "Data Analysis",
      description:
        "Fascinated by data patterns and insights. I enjoy analyzing data to uncover meaningful trends and make informed decisions.",
    },
    {
      icon: (
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
          className="w-8 h-8"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
        </svg>
      ),
      title: "Traveling",
      description:
        "Love exploring new places and cultures. Traveling broadens my perspective and provides inspiration for creative problem-solving.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 [perspective:1000px]"
    >
      {interests.map((interest, index) => (
        <div key={interest.title}>
          <InterestCard
            icon={interest.icon}
            title={interest.title}
            description={interest.description}
            index={index}
          />
        </div>
      ))}
    </motion.div>
  );
};

export default InterestsSection;
