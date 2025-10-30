"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, Github, ExternalLink, Play } from "lucide-react";
import TerminalAnimation from "./TerminalAnimation";
import CodeBlock from "./CodeBlock";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const deploymentCommands = [
  "git clone https://github.com/your-org/market-fit.git",
  "cd market-fit && npm install",
  "cp .env.example .env.local",
  "npm run dev"
];

export default function AnimatedHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      // Parallax effect for background
      gsap.to(heroRef.current, {
        backgroundPosition: "50% 100%",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Title animation
      gsap.fromTo(
        titleRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );

      // Subtitle animation
      gsap.fromTo(
        subtitleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: "power3.out" }
      );

      // CTA animation
      gsap.fromTo(
        ctaRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.6, ease: "power3.out" }
      );

      // Terminal animation
      gsap.fromTo(
        terminalRef.current,
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, delay: 0.9, ease: "back.out(1.7)" }
      );

      // Floating elements
      gsap.to(".floating-element", {
        y: -20,
        duration: 2,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.2,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/30"
      style={{
        backgroundImage: "radial-gradient(circle at 20% 80%, rgba(62, 207, 142, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(62, 207, 142, 0.1) 0%, transparent 50%)",
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl floating-element"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/3 rounded-full blur-3xl floating-element"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-accent/10 rounded-full blur-2xl floating-element"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <motion.h1
              ref={titleRef}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-normal pb-1 sm:pb-2 overflow-visible"
            >
              <span className="block text-foreground">AI-Powered</span>
              <span className="block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-relaxed pb-1">
                Growth Engine
              </span>
            </motion.h1>

            <motion.p
              ref={subtitleRef}
              className="text-xl text-muted-foreground leading-relaxed max-w-2xl"
            >
              Transform your marketing operations with our comprehensive suite of AI-powered tools. 
              Deploy, scale, and optimize your growth strategy with our open-source platform.
            </motion.p>

            <motion.div
              ref={ctaRef}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="https://www.makinari.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary px-8 py-4 font-semibold rounded-lg"
              >
                <Play className="h-5 w-5 mr-2" />
                Get Started
              </motion.a>

              <motion.a
                href="https://github.com/your-org/market-fit"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 border border-border text-foreground font-semibold rounded-lg hover:bg-muted transition-colors"
              >
                <Github className="h-5 w-5 mr-2" />
                View on GitHub
              </motion.a>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="grid grid-cols-3 gap-8 pt-8"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">3</div>
                <div className="text-sm text-muted-foreground">Repositories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">100%</div>
                <div className="text-sm text-muted-foreground">Open Source</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">AGPL-3.0</div>
                <div className="text-sm text-muted-foreground">License</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Terminal Animation */}
          <motion.div
            ref={terminalRef}
            className="relative"
          >
            <TerminalAnimation 
              commands={deploymentCommands}
              className="w-full max-w-lg mx-auto"
            />
            
            {/* Floating code snippet */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="absolute -bottom-8 -left-8 bg-background/95 backdrop-blur-md border border-border rounded-lg shadow-2xl p-4 max-w-xs"
            >
              <div className="text-xs text-muted-foreground mb-2 font-medium">Environment Setup</div>
              <div className="bg-black/90 text-green-400 font-mono text-xs p-3 rounded border border-gray-800">
                <div>NEXT_PUBLIC_SUPABASE_URL=your-url</div>
                <div>NEXT_PUBLIC_SUPABASE_ANON_KEY=your-key</div>
                <div>STRIPE_SECRET_KEY=your-key</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-muted-foreground"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <ArrowDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
