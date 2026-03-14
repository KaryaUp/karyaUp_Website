import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import goggles from "../assets/goggles.png"
import agent from "../assets/agent.png"

const SPRING_CONFIG = { stiffness: 100, damping: 30, restDelta: 0.001 };

export default function ClickupHero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smooth = useSpring(scrollYProgress, SPRING_CONFIG);

  // Goggles: start huge at center, shrink down to land on eyes
  const gogglesScale = useTransform(smooth, [0, 1], [3, 1]);
  // Goggles start below the headline area, move down to land on eyes
  const gogglesY = useTransform(smooth, [0, 1], [50, 0]);

  // Agent: rises up from below the screen (delayed start)
  const agentY = useTransform(smooth, [0.3, 1], [600, 0]);
  const agentOpacity = useTransform(smooth, [0.3, 0.8], [0, 1]);

  // Headline text — visible at start, fades out as animation progresses
  const headlineOpacity = useTransform(smooth, [0.0, 0.3], [1, 0]);
  const headlineY = useTransform(smooth, [0, 0.3], [0, -50]);

  // CTA after animation completes
  const ctaOpacity = useTransform(smooth, [0.8, 1], [0, 1]);
  const ctaY = useTransform(smooth, [0.8, 1], [30, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-hero-bg"
      style={{ height: "100vh" }}
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Headline at top */}
        <motion.div
          className="absolute z-30 text-center pointer-events-none px-4"
          style={{ opacity: headlineOpacity, y: headlineY, top: "8%" }}
        >
          <h1 
            className="text-5xl md:text-7xl font-extrabold text-foreground leading-tight"
            style={{ fontFamily: '"Plus Jakarta Sans", plus-jakarta-sans, sans-serif' }}
          >
            Meet your AI Agents
          </h1>
          <p 
            className="mt-4 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            Scroll down to see the magic
          </p>
        </motion.div>

        {/* Container for both images — fixed size for precise alignment */}
        <div className="relative" style={{ width: 500, height: 620 }}>
          {/* Agent — slides up from below */}
          <motion.img
            src={agent}
            alt="AI Agent character"
            className="absolute max-w-none select-none left-1/2"
            draggable={false}
            style={{
              width: 500,
              bottom: 0,
              x: "-50%",
              y: agentY,
              opacity: agentOpacity,
            }}
          />

          {/* Goggles — shrinks from huge to land exactly on eyes
              Eyes are ~32% from top of 620px container = ~198px
              Goggles width 240px, so center offset ~30px => top ~168 */}
          <motion.img
            src={goggles}
            alt="Super agent goggles"
            className="absolute max-w-none select-none z-10 left-1/2"
            draggable={false}
            style={{
              width: 240,
              x: "-50%",
              top: 235, // Moved down by 30px to overlap better with the agent
              scale: gogglesScale,
              y: gogglesY,
            }}
          />
        </div>

        {/* CTA */}
        <motion.div
          className="absolute bottom-12 z-10 text-center"
          style={{ opacity: ctaOpacity, y: ctaY }}
        >
          <button 
            className="font-semibold text-lg px-8 py-4 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity shadow-lg"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            Get Started Free
          </button>
        </motion.div>
      </div>
    </section>
  );
}