import {
  Terminal,
  TypingAnimation,
  AnimatedSpan,
} from "@/Components/magicui/terminal";
import { Vortex } from "@/Components/ui/vortex";
import { Linkedin, Github, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { cx } from "class-variance-authority";

const KnowAboutMe = ({ hide }: { hide?: boolean }) => {
  return (
    <div className="relative w-full flex flex-col px-4 md:px-8 py-12 md:py-16 overflow-hidden">
      <Vortex
        particleCount={200}
        baseSpeed={0.1}
        rangeSpeed={0.5}
        backgroundColor="rgba(0,0,0,0.8)"
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-neutral-400 tracking-wider mb-4 text-sm md:text-base text-center md:text-left"
        >
          KNOW ABOUT ME
        </motion.div>

        <div
          className={cx(
            " gap-8 items-center ",
            !hide && "grid grid-cols-1 lg:grid-cols-2"
          )}
        >
          <div className="flex flex-col gap-4 md:gap-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-6xl font-bold text-white text-center md:text-left"
            >
              AI/ML Engineer 
              <span className="block mt-1 md:mt-2">
                a little bit of{" "}
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                  everything
                </span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-neutral-300 text-sm md:text-lg text-center md:text-left"
            >
              I'm Rajveer Soni, a proactive AI/ML Engineer and Data Scientist passionate
              about creating dynamic web experiences. From AI/ML to Data Science,
              I thrive on solving complex problems with clean, efficient code.
              My expertise spans Python, TensorFlow, PyTorch, and scikit-learn, and I'm always
              eager to learn more.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-neutral-300 text-sm md:text-lg text-center md:text-left"
            >
              When I'm not immersed in work, I'm exploring new ideas and staying
              curious. Life's about balance, and I love embracing every part of
              it.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-neutral-300 text-sm md:text-lg text-center md:text-left"
            >
              I believe in waking up each day eager to make a difference!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex gap-4 mt-2 justify-center md:justify-start"
            >
              <a
                href="https://linkedin.com"
                className="hover:text-white text-neutral-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="md:h-6 md:w-6" />
              </a>
              <a
                href="https://github.com"
                className="hover:text-white text-neutral-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} className="md:h-6 md:w-6" />
              </a>
              <a
                href="https://twitter.com"
                className="hover:text-white text-neutral-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} className="md:h-6 md:w-6" />
              </a>
            </motion.div>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              href="#more"
              className="flex items-center gap-2 text-neutral-300 hover:text-white mx-auto md:mx-0 mt-4 md:mt-2 transition-colors text-sm md:text-base"
            >
              More about me
              <span className="text-lg md:text-xl">→</span>
            </motion.a>
          </div>

          {!hide && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:justify-self-end w-full md:w-auto mt-6 md:mt-0"
            >
              <Terminal className="w-full md:w-[400px] lg:w-[500px] bg-black/50 backdrop-blur-sm border-neutral-800 text-xs md:text-sm">
                <AnimatedSpan delay={300} className="text-green-400">
                  $ whoami
                </AnimatedSpan>
                <AnimatedSpan delay={800} className="text-neutral-300">
                  anshul_Tatware
                </AnimatedSpan>

                <AnimatedSpan delay={1300} className="text-green-400 mt-4">
                  $ skills
                </AnimatedSpan>
                <AnimatedSpan delay={1800} className="text-neutral-300">
                  ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js']
                </AnimatedSpan>

                <AnimatedSpan delay={2300} className="text-green-400 mt-4">
                  $ cat about.txt
                </AnimatedSpan>
                <TypingAnimation
                  delay={2800}
                  duration={30}
                  className="text-neutral-300 max-w-full overflow-hidden"
                >
                  Full-stack developer who loves building elegant solutions to
                  complex problems. Passionate about creating exceptional user
                  experiences and clean code architecture.
                </TypingAnimation>

                <AnimatedSpan delay={6500} className="text-green-400 mt-4">
                  $ contact
                </AnimatedSpan>
                <AnimatedSpan delay={7000} className="text-blue-400">
                  https://anshul-Tatware.dev
                </AnimatedSpan>
              </Terminal>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default KnowAboutMe;
