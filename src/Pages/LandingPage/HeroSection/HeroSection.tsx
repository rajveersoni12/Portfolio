import { SparklesCore } from "@/Components/ui/sparkles";
import { useState } from "react";
import user from "../../../assets/Images/user.jpg";
import "../Landing.css";
import DrawerBottom from "./Drawerbottom/DrawerBottom";
import { InteractiveHoverButton } from "@/Components/magicui/interactive-hover-button";
import { Button } from "@/Components/ui/button";

const HeroSection = () => {
  const [isWaving, setIsWaving] = useState(false);
  return (
    <div className="h-screen flex flex-col items-center justify-center px-4 md:px-8 -mt-20 md:mt-0">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="gra"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={10}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <h1 className="md:text-5xl lg:text-7xl text-3xl font-bold text-center text-white relative z-20 mb-6 md:mb-8">
        Turning visionary ideas into
        <span className="inline md:hidden"> elegant products</span>
        <span className="hidden md:block">
          {" "}
          elegant user-focused digital products
        </span>
      </h1>
      <div className="text-white text-lg md:text-2xl lg:text-3xl font-bold flex flex-col md:flex-row items-center md:gap-5 mt-6 md:mt-10 relative text-center md:text-left">
        <span>Hello, I'm Rajveer soni</span>
        <div className="relative my-4 md:my-0">
          <img
            src={user}
            alt="hero"
            className="w-24 h-20 md:w-26 md:h-20 rounded-full"
            onMouseEnter={() => setIsWaving(true)}
            onMouseLeave={() => setIsWaving(false)}
          />
          <span
            className={`absolute -bottom-2 -left-4 ${
              isWaving ? "wave" : "hidden"
            }`}
          >
            👋
          </span>
        </div>
        <span>AI/ML Engineer</span>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 w-full mt-8 md:mt-10">
        <DrawerBottom
          trigger={
            <InteractiveHoverButton className="w-full md:w-auto">
              Let's connect
            </InteractiveHoverButton>
          }
        />
        <a href="mailto:raj.veersoni037@gmail.com">
          <Button className="text-white cursor-pointer w-full md:w-auto">
            Raj.veersoni037@gmail.com
          </Button>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
