"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart, Users, Code, Zap, Shield, Globe, ArrowRight, Github, ExternalLink } from "lucide-react";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const principles = [
  {
    icon: Heart,
    title: "Open Source First",
    description: "We believe in democratizing AI-powered marketing tools. Our platform is built on the foundation of open-source principles, ensuring transparency, community collaboration, and freedom from vendor lock-in.",
    color: "from-red-500 to-pink-500"
  },
  {
    icon: Code,
    title: "Technical Excellence",
    description: "We maintain the highest standards of code quality, architecture, and performance. Every component is built with scalability, maintainability, and developer experience in mind.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Our development is guided by the community. We listen, we adapt, and we build together. Every contribution, no matter how small, makes our platform better for everyone.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Zap,
    title: "Innovation at Scale",
    description: "We push the boundaries of what's possible with AI in marketing. Our platform evolves rapidly, incorporating cutting-edge technologies while maintaining stability and reliability.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Shield,
    title: "Privacy & Security",
    description: "Your data is sacred. We implement enterprise-grade security measures and respect your privacy. You own your data, and we provide the tools to protect it.",
    color: "from-purple-500 to-violet-500"
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "We're building tools that empower businesses worldwide, from startups to enterprises. Our platform scales with your growth and adapts to your unique needs.",
    color: "from-indigo-500 to-blue-500"
  }
];

const values = [
  {
    title: "Transparency",
    description: "Every decision, every line of code, every feature is open for scrutiny and improvement."
  },
  {
    title: "Accessibility",
    description: "Powerful tools should be accessible to everyone, regardless of technical expertise or budget."
  },
  {
    title: "Collaboration",
    description: "We grow stronger together. Community feedback drives our roadmap and shapes our future."
  },
  {
    title: "Innovation",
    description: "We're not afraid to challenge the status quo and build the future of marketing technology."
  }
];

export default function ManifestoPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const principlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
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

      // Principles animation
      gsap.fromTo(
        ".principle-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: principlesRef.current,
            start: "top 80%",
            end: "bottom 20%",
          }
        }
      );

      // Values animation
      gsap.fromTo(
        ".value-item",
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".values-section",
            start: "top 80%",
            end: "bottom 20%",
          }
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
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
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.h1
            ref={titleRef}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-8"
          >
            <span className="block text-foreground">Our</span>
            <span className="block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Manifesto
            </span>
          </motion.h1>

          <motion.p
            ref={subtitleRef}
            className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
          >
            We believe in democratizing AI-powered marketing tools through open-source innovation, 
            community collaboration, and technical excellence. This is our commitment to building 
            the future of marketing technology.
          </motion.p>
        </div>
      </section>

      {/* Core Principles Section */}
      <section ref={principlesRef} className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Core Principles
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide every decision we make and every feature we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                className="principle-card group"
              >
                <div className="bg-background border border-border rounded-xl p-8 h-full hover:shadow-lg transition-all duration-300 hover:border-accent/50">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${principle.color} mb-6`}>
                    <principle.icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {principle.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 values-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground">
              The values that shape our culture and drive our mission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="value-item"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-accent rounded-full mt-3"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-accent/10 to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Join Our Mission
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Be part of the revolution in marketing technology. Whether you're a developer, 
            marketer, or business owner, there's a place for you in our community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://github.com/your-org/market-fit"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors"
            >
              <Github className="h-5 w-5 mr-2" />
              Contribute on GitHub
            </motion.a>

            <motion.a
              href="https://www.makinari.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-4 border border-border text-foreground font-semibold rounded-lg hover:bg-muted transition-colors"
            >
              <ExternalLink className="h-5 w-5 mr-2" />
              Learn More
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
}
