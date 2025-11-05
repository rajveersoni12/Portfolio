"use client";
import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "@/Components/ui/bento-grid";
import { IconBoxAlignRightFilled, IconSignature } from "@tabler/icons-react";
import { motion, useScroll, useTransform } from "motion/react";
import { Copy, Handshake, HeartHandshake, LocateIcon } from "lucide-react";
import { VideoText } from "@/Components/magicui/video-text";
import { Globe } from "@/Components/magicui/globe";
import { IconCloud } from "@/Components/magicui/icon-cloud";
import { SparklesCore } from "@/Components/ui/sparkles";
import { useEffect, useState, useRef } from "react";
import { Button } from "@/Components/ui/button";
import confetti from "canvas-confetti";

const testimonials = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Emily Watson",
    designation: "Operations Director at CloudScale",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Lisa Thompson",
    designation: "VP of Technology at FutureNet",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

const BentoSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <div ref={containerRef} className="px-4 md:px-0 py-12 md:py-20 relative">
      {/* Subtle Background Sparkles Effect */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <SparklesCore
          id="bento-sparkles"
          background="transparent"
          minSize={0.2}
          maxSize={0.8}
          particleDensity={20}
          className="w-full h-full"
          particleColor="#ffffff"
        />
      </div>

      {/* Animated Grid Container */}
      <motion.div style={{ y }} className="relative z-10">
        <BentoGrid className="max-w-7xl mx-auto grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px] md:auto-rows-[20rem]">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={cn("[&>p:text-lg]", item.className)}
              icon={item.icon}
            />
          ))}
        </BentoGrid>
      </motion.div>
    </div>
  );
};

// 🔹 Testimonial Card Animation
const SkeletonOne = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className="flex flex-1 w-full h-full min-h-[6rem] flex-col relative overflow-hidden p-3 md:p-4"
    >
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.03) 0%, transparent 70%)",
            "radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.03) 0%, transparent 70%)",
            "radial-gradient(circle at 50% 20%, rgba(59, 130, 246, 0.03) 0%, transparent 70%)",
          ],
        }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0"
      />
      <div className="w-full h-full z-10 relative flex flex-col">
        <div className="flex-1 min-h-0 overflow-hidden">
          <div className="h-full flex flex-col md:flex-row gap-3 md:gap-4">
            <div className="flex-shrink-0 flex justify-center items-center md:justify-start">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <img
                  src={testimonials[currentIndex].src}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-white/20"
                />
              </motion.div>
            </div>
            <div className="flex-1 min-h-0 flex flex-col justify-center">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-2"
              >
                <p className="text-xs md:text-sm text-white/80 leading-relaxed line-clamp-3">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div>
                  <p className="text-xs md:text-sm font-semibold text-white/90">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-xs text-white/60">
                    {testimonials[currentIndex].designation}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="flex justify-center mt-2 space-x-1">
            {testimonials.map((_, index) => (
              <motion.div
                key={index}
                className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? "bg-blue-400/80" : "bg-white/20"
                }`}
                whileHover={{ scale: 1.2 }}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// 🌍 Time-flexible Globe
const SkeletonTwo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className="flex w-full h-full min-h-[6rem] dark:bg-dot-white/[0.1] bg-dot-black/[0.1] relative overflow-hidden"
    >
      <div className="absolute inset-0 my-5 md:mb-72 flex items-center justify-center z-10">
        <VideoText
          src="https://cdn.magicui.design/ocean-small.webm"
          fontSize={12}
          fontWeight="bold"
          className="w-full h-full flex items-center justify-center"
        >
          Time-flexible
        </VideoText>
      </div>
      <div className="absolute mt-40 inset-0 flex items-center justify-center">
        <Globe className="hidden md:block" />
      </div>
    </motion.div>
  );
};

// ⚙️ Icon Cloud
const SkeletonThree = () => {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      className="flex justify-center items-center w-full h-full absolute inset-0 overflow-hidden"
    >
      <motion.div
        animate={{
          y: [-5, 5, -5],
          rotate: [0, 1, 0, -1, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative flex items-center justify-center w-full h-full md:w-[800px] md:h-[800px] scale-75 md:scale-100"
      >
        <IconCloud images={images} />
      </motion.div>
    </motion.div>
  );
};

// 💌 Let's Work Together
const SkeletonFour = () => {
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (copied) {
      setTimeout(() => setCopied(false), 3000);
    }
  }, [copied]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("raj.veersoni037@gmail.com");
      setCopied(true);
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#10b981", "#059669", "#047857", "#065f46"],
      });
    } catch (error) {
      console.error("Failed to copy email:", error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.1] bg-dot-black/[0.1] flex-col items-center justify-center text-center p-6 relative overflow-hidden"
    >
      <motion.div
        animate={{
          background: [
            "linear-gradient(45deg, rgba(34, 197, 94, 0.03) 0%, transparent 100%)",
            "linear-gradient(135deg, rgba(59, 130, 246, 0.03) 0%, transparent 100%)",
            "linear-gradient(225deg, rgba(168, 85, 247, 0.03) 0%, transparent 100%)",
            "linear-gradient(315deg, rgba(34, 197, 94, 0.03) 0%, transparent 100%)",
          ],
        }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0"
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-4">
        <motion.div
          animate={{ y: [-1, 1, -1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="text-center"
        >
          <h2 className="text-xl md:text-2xl font-bold text-white/90 mb-2">
            Let's Work Together on
          </h2>
          <p className="text-lg md:text-xl">
            <span className="bg-gradient-to-r from-green-400/80 via-blue-500/80 to-purple-600/80 bg-clip-text text-transparent font-semibold">
              Your Next Project
            </span>
          </p>
        </motion.div>

        {/* ✅ Updated Email Display */}
        <Button
          className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 gap-2 text-white cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 px-4 py-2"
          onClick={handleCopyEmail}
        >
          <Copy className="h-4 w-4" />
          {copied ? (
            <span className="text-sm">Copied to clipboard!</span>
          ) : (
            <span className="font-medium">raj.veersoni037@gmail.com</span>
          )}
        </Button>
      </div>
    </motion.div>
  );
};

// 💻 SaaS Info
const SkeletonFive = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.1] bg-dot-black/[0.1] flex-col relative overflow-hidden"
    >
      <motion.div
        animate={{
          background: [
            "linear-gradient(45deg, rgba(168, 85, 247, 0.02) 0%, transparent 100%)",
            "linear-gradient(225deg, rgba(59, 130, 246, 0.02) 0%, transparent 100%)",
            "linear-gradient(135deg, rgba(34, 197, 94, 0.02) 0%, transparent 100%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0"
      />
      <div className="w-full h-full flex items-center justify-center relative z-10 p-4">
        <div className="w-full h-full flex items-center justify-center">
          <VideoText
            src="https://cdn.magicui.design/ocean-small.webm"
            fontSize={4}
            fontWeight="bold"
            className="w-full h-full text-center flex items-center justify-center"
          >
            Engaged in developing a high-quality SaaS platform
          </VideoText>
        </div>
      </div>
    </motion.div>
  );
};

// 🧩 Bento Grid Items
const items = [
  {
    title: "Collaboration",
    description: (
      <span className="text-sm md:text-lg text-gray-400">
        I prioritize client collaboration, fostering open communication
      </span>
    ),
    header: <SkeletonOne />,
    className:
      "md:col-span-2 relative bg-black/40 backdrop-blur-sm border border-white/10 overflow-hidden  hover:bg-black/60 transition-all duration-500 group",
    icon: (
      <HeartHandshake className="h-8 w-8 md:h-10 md:w-10 text-blue-400/70 group-hover:text-blue-400 transition-colors" />
    ),
  },
  {
    title: "Remote",
    description: (
      <span className="text-sm text-gray-400">
        Available from INDIA, working globally
      </span>
    ),
    header: <SkeletonTwo />,
className:
  "md:row-span-2 relative bg-black/40 backdrop-blur-sm border border-white/10 overflow-hidden hover:bg-black/60 transition-all duration-500 group",
icon: (
  <LocateIcon className="h-8 w-8 md:h-10 md:w-10 text-green-400/70 group-hover:text-green-400 transition-colors" />
),
},
{
  title: "Tech Enthusiast",
  description: (
    <span className="text-sm text-gray-400">
      Passionate about technology and its potential to transform lives.
    </span>
  ),
  header: <SkeletonThree />,
  className:
    "md:row-span-2 relative bg-black/40 backdrop-blur-sm border border-white/10 overflow-hidden hover:bg-black/60 transition-all duration-500 group",
  icon: (
    <IconSignature className="h-8 w-8 md:h-10 md:w-10 text-purple-400/70 group-hover:text-purple-400 transition-colors" />
  ),
},
{
  title: "Let's Connect",
  description: (
    <span className="text-sm text-gray-400">
      Ready to start your next project?
    </span>
  ),
  header: <SkeletonFour />,
  className:
    "relative bg-black/40 backdrop-blur-sm border border-white/10 overflow-hidden hover:bg-black/60 transition-all duration-500 group",
  icon: (
    <Handshake className="h-8 w-8 md:h-10 md:w-10 text-green-400/70 group-hover:text-green-400 transition-colors" />
  ),
},
{
  title: "The Inside Scoop",
  description: (
    <span className="text-sm text-gray-400">
      Currently working on a cutting-edge SaaS Application
    </span>
  ),
  header: <SkeletonFive />,
  className:
    "md:col-span-2 relative bg-black/40 backdrop-blur-sm border border-white/10 overflow-hidden hover:bg-black/60 transition-all duration-500 group",
  icon: (
    <IconBoxAlignRightFilled className="h-8 w-8 md:h-10 md:w-10 text-purple-400/70 group-hover:text-purple-400 transition-colors" />
  ),
},
];

export default BentoSection;
