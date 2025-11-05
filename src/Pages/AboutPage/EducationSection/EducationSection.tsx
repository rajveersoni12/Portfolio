import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { GraduationCap, BookOpen, Award } from "lucide-react";

const EducationCard = ({
  name,
  designation,
  duration,
  content,
  icon,
  gradient,
  bgGradient,
  index,
}: {
  name: string;
  designation: string;
  duration: string;
  content: string;
  icon: React.ReactNode;
  gradient: string;
  bgGradient: string;
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
      className="relative overflow-hidden rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 p-6 h-full cursor-pointer group"
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

      {/* Background gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      />

      {/* Icon */}
      <motion.div
        className={`relative z-10 w-12 h-12 rounded-xl bg-gradient-to-r ${gradient} flex items-center justify-center text-white mb-4`}
        whileHover={{
          scale: 1.2,
          rotate: 12,
          transition: { duration: 0.3, ease: "easeOut" },
        }}
        animate={{
          y: isHovered ? -2 : 0,
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

      {/* Content */}
      <div className="relative z-10 space-y-3">
        <div>
          <motion.h3
            className="text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300"
            whileHover={{ x: 5 }}
            animate={{
              y: isHovered ? -2 : 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            {name}
          </motion.h3>
          <motion.p
            className="text-sm text-gray-400 font-medium"
            animate={{
              y: isHovered ? -2 : 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
              delay: 0.05,
            }}
          >
            {designation}
          </motion.p>
          <motion.p
            className="text-xs text-gray-500 mt-1"
            animate={{
              y: isHovered ? -2 : 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
              delay: 0.1,
            }}
          >
            {duration}
          </motion.p>
        </div>

        <motion.p
          className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300"
          animate={{
            y: isHovered ? -2 : 0,
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
            delay: 0.15,
          }}
        >
          {content}
        </motion.p>
      </div>

      {/* Enhanced border glow on hover */}
      <motion.div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${bgGradient}`}
        animate={{
          opacity: isHovered ? 0.3 : 0,
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

      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gray-600 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-4 right-4 w-1 h-1 rounded-full bg-gray-600 opacity-30 group-hover:opacity-70 transition-opacity duration-300" />
    </motion.div>
  );
};

const EducationSection = () => {
  const educationCards = [
    {
      id: 1,
      name: "Data Structure and Algorithms",
      designation: "Coding Ninjas",
      duration: "2023 - 2024",
      content: "Specialized in Advanced Web Technologies and Data Structures",
      icon: <BookOpen className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
    },
    {
      id: 2,
      name: "BTech in Computer Science",
      designation: "Shri Gs Institute of Technology and Science",
      duration: "2020 - 2024",
      content:
        "Graduated with 7.5 CGPA, focusing on programming fundamentals and web development.",
      icon: <GraduationCap className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/10",
    },
    {
      id: 3,
      name: "Higher Secondary Education",
      designation: "CRPF Public School Dwarka",
      duration: "2018 - 2020",
      content: "Completed with 80% in Science stream with Computer Science.",
      icon: <Award className="w-6 h-6" />,
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-500/10 to-teal-500/10",
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
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Education Journey
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          My academic path that shaped my passion for technology and software
          development
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
        {educationCards.map((card, index) => (
          <EducationCard key={card.id} {...card} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default EducationSection;
