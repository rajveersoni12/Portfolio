import { SparklesCore } from "@/Components/ui/sparkles";
import { Vortex } from "@/Components/ui/vortex";
import { AuroraText } from "@/Components/magicui/aurora-text";
import { ShimmerButton } from "@/Components/magicui/shimmer-button";
import { CanvasRevealEffect } from "@/Components/ui/canvas-reveal-effect";
import DrawerBottom from "../HeroSection/Drawerbottom/DrawerBottom";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useRef } from "react";

const GetInTouch = () => {
  const ref = useRef(null);
  return (
    <section className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 w-full h-full opacity-30">
        <SparklesCore
          id="getInTouchSparkles"
          background="transparent"
          minSize={0.4}
          maxSize={1.0}
          particleDensity={30}
          className="w-full h-full"
          particleColor="#ffffff"
        />
      </div>

      {/* Very Subtle Vortex Background */}
      <div className="absolute inset-0 w-full h-full opacity-20">
        <Vortex
          backgroundColor="transparent"
          rangeY={600}
          particleCount={200}
          baseHue={240}
          className="flex items-center flex-col justify-center w-full h-full"
        />
      </div>

      {/* Subtle Canvas Reveal Effect */}
      <div className="absolute inset-0 w-full h-full pointer-events-none opacity-10">
        <CanvasRevealEffect
          animationSpeed={2}
          containerClassName="bg-transparent"
          colors={[
            [139, 92, 246],
            [59, 130, 246],
            [236, 72, 153],
          ]}
          dotSize={1}
          showGradient={false}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 md:py-20">
        <div ref={ref} className="text-center max-w-7xl mx-auto w-full">
          {/* Main Heading */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 tracking-tight">
              <span className="text-white/60">LET'S BUILD</span>{" "}
              <AuroraText
                className="text-4xl md:text-6xl lg:text-7xl font-bold"
                colors={["#FF0080", "#7928CA", "#0070F3", "#38bdf8", "#10B981"]}
                speed={2}
              >
                THE FUTURE
              </AuroraText>
            </h2>
          </div>

          <motion.div className="mb-16 md:mb-20">
            <div className="text-lg md:text-xl text-white/80 font-medium max-w-4xl mx-auto">
              Together, we'll transform your vision into reality with
              cutting-edge technology and innovative design.
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div className="mb-16 md:mb-20">
            <div className="relative inline-block">
              <DrawerBottom
                trigger={
                  <ShimmerButton
                    shimmerColor="#ffffff"
                    background="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                    className="relative px-8  py-4 text-lg md:text-xl font-semibold text-white rounded-full hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/20"
                  >
                    <div className="flex items-center space-x-3">
                      <span>Let's Create Magic</span>
                      <ArrowRight className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:translate-x-1" />
                    </div>
                  </ShimmerButton>
                }
              />
            </div>
          </motion.div>

          {/* Bottom Text */}
          <div className="text-center max-w-4xl mx-auto">
            <div className="space-y-4 md:space-y-6">
              <p className="text-lg md:text-xl lg:text-2xl text-white font-medium">
                Ready to bring your ideas to life?
              </p>
              <p className="text-base md:text-lg text-white/70 leading-relaxed">
                I specialize in creating immersive digital experiences that
                blend creativity with functionality. From concept to deployment,
                I'll be your partner in building something extraordinary.
              </p>
            </div>
          </div>

          {/* Subtle Floating Elements */}
          <div className="absolute top-20 left-10 w-2 h-2 bg-purple-500/30 rounded-full animate-ping opacity-40"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-blue-500/30 rounded-full animate-pulse opacity-30"></div>
          <div className="absolute bottom-20 left-20 w-4 h-4 bg-pink-500/30 rounded-full animate-bounce opacity-25"></div>
          <div className="absolute bottom-40 right-10 w-2 h-2 bg-green-500/30 rounded-full animate-ping opacity-35"></div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
