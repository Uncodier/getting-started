"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Target, 
  Eye, 
  Zap, 
  Users, 
  Building, 
  TrendingUp, 
  Code, 
  Database, 
  Cloud, 
  Shield,
  ArrowRight,
  Github,
  ExternalLink,
  Calendar,
  CheckCircle
} from "lucide-react";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const features = [
  {
    icon: Zap,
    title: "AI-Powered Analytics",
    description: "Advanced machine learning algorithms that provide actionable insights from your marketing data.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Users,
    title: "Lead Management",
    description: "Comprehensive lead tracking, scoring, and nurturing capabilities with automated workflows.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: TrendingUp,
    title: "Campaign Optimization",
    description: "Real-time campaign performance monitoring with intelligent optimization recommendations.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Database,
    title: "Data Integration",
    description: "Seamless integration with popular marketing tools and data sources for unified analytics.",
    color: "from-purple-500 to-violet-500"
  },
  {
    icon: Cloud,
    title: "Scalable Infrastructure",
    description: "Built on modern cloud architecture that scales with your business growth.",
    color: "from-indigo-500 to-blue-500"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security with compliance features for enterprise environments.",
    color: "from-red-500 to-pink-500"
  }
];

const useCases = [
  {
    title: "Startups & SMBs",
    description: "Get enterprise-level marketing tools without the enterprise price tag. Scale your growth with AI-powered insights.",
    icon: Building
  },
  {
    title: "Marketing Agencies",
    description: "Manage multiple client campaigns efficiently with white-label solutions and advanced reporting capabilities.",
    icon: Target
  },
  {
    title: "Enterprise Teams",
    description: "Deploy across your organization with custom integrations, advanced security, and dedicated support.",
    icon: Users
  }
];

const roadmap = [
  {
    quarter: "Q1 2024",
    status: "completed",
    items: [
      "Core platform architecture",
      "Basic AI analytics engine",
      "Lead management system",
      "Open source release"
    ]
  },
  {
    quarter: "Q2 2024",
    status: "completed",
    items: [
      "Advanced campaign optimization",
      "API integrations",
      "Mobile responsive design",
      "Community documentation"
    ]
  },
  {
    quarter: "Q3 2024",
    status: "in-progress",
    items: [
      "Real-time collaboration features",
      "Advanced reporting dashboard",
      "Third-party marketplace",
      "Enterprise security features"
    ]
  },
  {
    quarter: "Q4 2024",
    status: "planned",
    items: [
      "AI-powered content generation",
      "Advanced workflow automation",
      "Multi-tenant architecture",
      "Global deployment options"
    ]
  }
];

const stats = [
  { label: "Open Source Repositories", value: "3", icon: Github },
  { label: "Community Contributors", value: "50+", icon: Users },
  { label: "Lines of Code", value: "100K+", icon: Code },
  { label: "Active Deployments", value: "200+", icon: Cloud }
];

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

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

      // Features animation
      gsap.fromTo(
        ".feature-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 80%",
            end: "bottom 20%",
          }
        }
      );

      // Stats animation
      gsap.fromTo(
        ".stat-item",
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".stats-section",
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
            <span className="block text-foreground">About</span>
            <span className="block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Makinari
            </span>
          </motion.h1>

          <motion.p
            ref={subtitleRef}
            className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
          >
            We're building the future of marketing technology through open-source innovation, 
            AI-powered insights, and community-driven development. Learn more about our mission, 
            vision, and the tools we're creating.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To democratize AI-powered marketing tools by making them accessible, affordable, 
                and customizable for businesses of all sizes. We believe that every company, 
                regardless of their technical expertise or budget, should have access to 
                enterprise-grade marketing technology.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Through open-source development and community collaboration, we're building 
                a platform that grows with your business and adapts to your unique needs.
              </p>
            </div>
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                A world where marketing technology is transparent, customizable, and accessible 
                to everyone. Where businesses can grow without being locked into proprietary 
                systems, and where innovation is driven by community needs rather than 
                corporate interests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Platform Capabilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive suite of tools designed to transform your marketing operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="feature-card group"
              >
                <div className="bg-background border border-border rounded-xl p-8 h-full hover:shadow-lg transition-all duration-300 hover:border-accent/50">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.color} mb-6`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Who We Serve
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our platform is designed to meet the needs of diverse businesses and teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-background border border-border rounded-xl p-8 h-full hover:shadow-lg transition-all duration-300 hover:border-accent/50">
                  <div className="inline-flex p-4 rounded-full bg-accent/10 mb-6 group-hover:bg-accent/20 transition-colors">
                    <useCase.icon className="h-8 w-8 text-accent" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {useCase.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 stats-section bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              By the Numbers
            </h2>
            <p className="text-lg text-muted-foreground">
              Our impact and growth in the open-source community.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="stat-item text-center"
              >
                <div className="bg-background border border-border rounded-xl p-6">
                  <div className="inline-flex p-3 rounded-lg bg-accent/10 mb-4">
                    <stat.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Development Roadmap
            </h2>
            <p className="text-lg text-muted-foreground">
              Our planned features and milestones for the coming quarters.
            </p>
          </div>

          <div className="space-y-8">
            {roadmap.map((quarter, index) => (
              <motion.div
                key={quarter.quarter}
                className="flex flex-col md:flex-row gap-6 items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 w-full md:w-48">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${
                      quarter.status === 'completed' ? 'bg-green-500' :
                      quarter.status === 'in-progress' ? 'bg-yellow-500' :
                      'bg-gray-400'
                    }`}></div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {quarter.quarter}
                    </h3>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {quarter.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
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
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using Makinari to transform their marketing operations. 
            Start your journey today with our open-source platform.
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
              View on GitHub
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
