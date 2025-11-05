import { useRef, useState, useEffect } from "react";
import { cn } from "../../../lib/utils";
import { AnimatedBeam } from "@/Components/magicui/animated-beam";
import { User } from "lucide-react";
import { SparklesCore } from "@/Components/ui/sparkles";
import { Vortex } from "@/Components/ui/vortex";
import { AuroraText } from "@/Components/magicui/aurora-text";

const TechIcon = ({
  slug,
  name,
  className,
}: {
  slug: string;
  name: string;
  className: string;
}) => {
  const [iconLoaded, setIconLoaded] = useState(false);
  const iconUrl = `https://cdn.simpleicons.org/${slug}/${slug}`;

  return (
    <div
      className={cn(
        "group relative flex items-center justify-center rounded-xl px-4 py-3 text-white font-medium transition-all duration-300 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:scale-105 hover:shadow-lg hover:shadow-white/10 cursor-pointer",
        className
      )}
    >
      <div className="w-6 h-6 mr-3 flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300">
        <img
          src={iconUrl}
          alt={`${name} icon`}
          className="w-5 h-5 transition-all duration-300 group-hover:drop-shadow-lg"
          onLoad={() => setIconLoaded(true)}
          style={{
            opacity: iconLoaded ? 1 : 0,
            filter: iconLoaded
              ? "brightness(1) saturate(1.2)"
              : "brightness(0.8)",
          }}
        />
      </div>

      <span className="relative z-10 group-hover:text-white transition-colors duration-300 text-sm">
        {name}
      </span>
    </div>
  );
};

const TechStack = () => {
  const containerRef = useRef(null);
  const centerRef = useRef(null);

  const frontendRefs = {
    html: useRef(null),
    css: useRef(null),
    javascript: useRef(null),
    typescript: useRef(null),
    react: useRef(null),
    nextdotjs: useRef(null),
  };

  const stylingRefs = {
    tailwindcss: useRef(null),
    framer: useRef(null),
    styledcomponents: useRef(null),
  };

  const backendRefs = {
    nodedotjs: useRef(null),
    express: useRef(null),
    mongodb: useRef(null),
    mysql: useRef(null),
    postgresql: useRef(null),
  };

  const toolsRefs = {
    git: useRef(null),
    github: useRef(null),
    vercel: useRef(null),
    vscode: useRef(null),
    figma: useRef(null),
  };

  const techGroups = [
    {
      title: "Frontend",
      items: [
        { slug: "html5", name: "HTML5", ref: frontendRefs.html },
        { slug: "css3", name: "CSS3", ref: frontendRefs.css },
        {
          slug: "javascript",
          name: "JavaScript",
          ref: frontendRefs.javascript,
        },
        {
          slug: "typescript",
          name: "TypeScript",
          ref: frontendRefs.typescript,
        },
        { slug: "react", name: "React", ref: frontendRefs.react },
        { slug: "nextdotjs", name: "Next.js", ref: frontendRefs.nextdotjs },
      ],
    },
    {
      title: "Styling & UI",
      items: [
        {
          slug: "tailwindcss",
          name: "Tailwind CSS",
          ref: stylingRefs.tailwindcss,
        },
        { slug: "framer", name: "Framer Motion", ref: stylingRefs.framer },
        {
          slug: "styledcomponents",
          name: "Styled Components",
          ref: stylingRefs.styledcomponents,
        },
      ],
    },
    {
      title: "Backend & Database",
      items: [
        { slug: "nodedotjs", name: "Node.js", ref: backendRefs.nodedotjs },
        { slug: "express", name: "Express", ref: backendRefs.express },
        { slug: "mongodb", name: "MongoDB", ref: backendRefs.mongodb },
        { slug: "mysql", name: "MySQL", ref: backendRefs.mysql },
        { slug: "postgresql", name: "PostgreSQL", ref: backendRefs.postgresql },
      ],
    },
    {
      title: "Tools & Deployment",
      items: [
        { slug: "git", name: "Git", ref: toolsRefs.git },
        { slug: "github", name: "GitHub", ref: toolsRefs.github },
        { slug: "vercel", name: "Vercel", ref: toolsRefs.vercel },
        { slug: "visualstudiocode", name: "VS Code", ref: toolsRefs.vscode },
        { slug: "figma", name: "Figma", ref: toolsRefs.figma },
      ],
    },
  ];

  const [showBeams, setShowBeams] = useState(false);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBeams(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 w-full h-full opacity-30">
        <SparklesCore
          id="techStackSparkles"
          background="transparent"
          minSize={0.4}
          maxSize={1.0}
          particleDensity={30}
          className="w-full h-full"
          particleColor="#ffffff"
        />
      </div>

      <div className="absolute inset-0 w-full h-full opacity-20">
        <Vortex
          backgroundColor="transparent"
          rangeY={600}
          particleCount={200}
          baseHue={240}
          className="flex items-center flex-col justify-center w-full h-full"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 md:py-20">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-sm uppercase tracking-wider mb-3 text-white/60 font-semibold">
            Building with modern technologies
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 tracking-tight">
            <span className="text-white/60">MY</span>{" "}
            <AuroraText
              className="text-4xl md:text-6xl lg:text-7xl font-bold"
              colors={["#FF0080", "#7928CA", "#0070F3", "#38bdf8", "#10B981"]}
              speed={2}
            >
              TECH STACK
            </AuroraText>
          </h1>
          <p className="text-base md:text-lg text-white/70 max-w-4xl mx-auto leading-relaxed">
            Technologies I'm proficient with and use to build powerful,
            scalable, and responsive web applications
          </p>
        </div>

        <div
          className="relative w-full max-w-7xl mx-auto"
          ref={containerRef}
          style={{ minHeight: "600px" }}
        >
          <div className="absolute inset-0 z-0 opacity-30">
            {showBeams &&
              techGroups.flatMap((group) =>
                group.items.map((tech) => (
                  <AnimatedBeam
                    key={tech.name}
                    containerRef={containerRef}
                    fromRef={tech.ref}
                    toRef={centerRef}
                    curvature={Math.random() * 60 - 30}
                    pathColor={
                      hoveredSection === tech.name ? "#3b82f6" : "#374151"
                    }
                    pathWidth={hoveredSection === tech.name ? 3 : 2}
                  />
                ))
              )}
          </div>

          <div
            ref={centerRef}
            className="hidden md:flex absolute w-12 h-12 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full items-center justify-center z-20 shadow-lg shadow-blue-500/20 backdrop-blur-sm border border-white/10"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <User className="w-6 h-6 text-white/80" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 relative z-10">
            {techGroups.map((group, groupIndex) => (
              <div
                key={group.title}
                className="flex flex-col space-y-6"
                style={{
                  animationDelay: `${groupIndex * 200}ms`,
                }}
              >
                <div className="text-center">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-white/90">
                    {group.title}
                  </h3>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500/30 to-purple-500/30 mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {group.items.map((tech, techIndex) => (
                    <div
                      key={tech.name}
                      ref={tech.ref}
                      className="transform transition-all duration-300"
                      style={{
                        animationDelay: `${
                          (groupIndex * 6 + techIndex) * 100
                        }ms`,
                      }}
                      onMouseEnter={() => setHoveredSection(tech.name)}
                      onMouseLeave={() => setHoveredSection(null)}
                    >
                      <TechIcon
                        slug={tech.slug}
                        name={tech.name}
                        className="w-full h-full"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
