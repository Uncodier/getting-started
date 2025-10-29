"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ExternalLink, Github, Database, Cloud, Zap } from "lucide-react";
import CodeBlock from "./CodeBlock";

const prerequisites = [
  {
    name: "Node.js 18+",
    description: "JavaScript runtime environment",
    icon: <Zap className="h-5 w-5" />,
    required: true,
  },
  {
    name: "Supabase Account",
    description: "Database and authentication",
    icon: <Database className="h-5 w-5" />,
    required: true,
  },
  {
    name: "Temporal Cloud",
    description: "Workflow orchestration",
    icon: <Cloud className="h-5 w-5" />,
    required: true,
  },
  {
    name: "Stripe Account",
    description: "Payment processing",
    icon: <ExternalLink className="h-5 w-5" />,
    required: false,
  },
  {
    name: "Twilio Account",
    description: "SMS and WhatsApp",
    icon: <ExternalLink className="h-5 w-5" />,
    required: false,
  },
];

const repositories = [
  {
    name: "market-fit",
    title: "Growth Engine",
    description: "Next.js frontend with analytics dashboard",
    tech: ["Next.js 15", "React 18", "TypeScript", "Tailwind CSS", "Supabase"],
    commands: [
      "git clone https://github.com/your-org/market-fit.git",
      "cd market-fit",
      "npm install",
      "cp .env.example .env.local",
      "npm run dev"
    ],
    link: "https://github.com/your-org/market-fit",
  },
  {
    name: "api",
    title: "API Server",
    description: "AI agents, email processing, and integrations",
    tech: ["Next.js 15", "TypeScript", "AI SDK", "Puppeteer", "SendGrid"],
    commands: [
      "git clone https://github.com/your-org/api.git",
      "cd api",
      "npm install",
      "cp .env.example .env.local",
      "npm run dev"
    ],
    link: "https://github.com/your-org/api",
  },
  {
    name: "workflows",
    title: "Temporal Workflows",
    description: "Background jobs and workflow orchestration",
    tech: ["Temporal.io", "TypeScript", "Node.js", "Supabase"],
    commands: [
      "git clone https://github.com/your-org/workflows.git",
      "cd workflows",
      "npm install",
      "cp .env.example .env",
      "npm run start-worker"
    ],
    link: "https://github.com/your-org/workflows",
  },
];

export default function QuickStart() {
  const [selectedRepo, setSelectedRepo] = useState(0);

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Quick Start Guide
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get up and running with Makinari in minutes. Follow our step-by-step guide to deploy all three repositories.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Prerequisites */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-6">Prerequisites</h3>
            <div className="space-y-4">
              {prerequisites.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-3 p-4 bg-background rounded-lg border border-border"
                >
                  <div className={`p-2 rounded-lg ${item.required ? 'bg-accent/10 text-accent' : 'bg-muted text-muted-foreground'}`}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-medium">{item.name}</h4>
                      {item.required && (
                        <span className="px-2 py-1 text-xs bg-accent/10 text-accent rounded">
                          Required
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Repository Selection */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-6">Choose Repository</h3>
            
            {/* Repository Tabs */}
            <div className="space-y-2">
              {repositories.map((repo, index) => (
                <button
                  key={repo.name}
                  onClick={() => setSelectedRepo(index)}
                  className={`w-full text-left p-4 rounded-lg border transition-all ${
                    selectedRepo === index
                      ? 'border-accent bg-accent/5'
                      : 'border-border hover:border-accent/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">{repo.title}</h4>
                      <p className="text-sm text-muted-foreground">{repo.description}</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </div>
                </button>
              ))}
            </div>

            {/* Selected Repository Commands */}
            <motion.div
              key={selectedRepo}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between">
                <h4 className="font-medium">
                  Deploy {repositories[selectedRepo].title}
                </h4>
                <a
                  href={repositories[selectedRepo].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-sm text-accent hover:text-accent/80 transition-colors"
                >
                  <Github className="h-4 w-4" />
                  <span>View on GitHub</span>
                </a>
              </div>

              <CodeBlock
                code={repositories[selectedRepo].commands.join('\n')}
                language="bash"
                showLineNumbers={true}
              />

              <div className="space-y-2">
                <h5 className="font-medium text-sm">Tech Stack:</h5>
                <div className="flex flex-wrap gap-2">
                  {repositories[selectedRepo].tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-4">What's Next?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            After deploying the repositories, check out our detailed guides for configuration, 
            architecture overview, and best practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-accent text-accent-foreground font-medium rounded-lg hover:bg-accent/90 transition-colors"
            >
              View Architecture
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-muted transition-colors"
            >
              Best Practices
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
