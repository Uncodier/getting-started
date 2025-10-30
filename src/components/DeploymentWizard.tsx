"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ExternalLink, Github, Database, Cloud, Zap, AlertCircle } from "lucide-react";
import CodeBlock from "./CodeBlock";

const repositories = [
  {
    id: "market-fit",
    name: "market-fit",
    title: "Growth Engine",
    description: "Next.js frontend with analytics dashboard",
    icon: <Database className="h-5 w-5" />,
    color: "bg-blue-500",
    tech: ["Next.js 15", "React 18", "TypeScript", "Tailwind CSS", "Supabase"],
    features: [
      "Analytics Dashboard",
      "Lead Management", 
      "Campaign Tracking",
      "ROI Calculator",
      "Team Collaboration",
      "Real-time Updates"
    ],
    environment: {
      required: [
        { key: "NEXT_PUBLIC_SUPABASE_URL", description: "Supabase project URL" },
        { key: "NEXT_PUBLIC_SUPABASE_ANON_KEY", description: "Supabase anonymous key" },
        { key: "STRIPE_SECRET_KEY", description: "Stripe secret key for payments" },
        { key: "STRIPE_PUBLISHABLE_KEY", description: "Stripe publishable key" },
      ],
      optional: [
        { key: "TWILIO_ACCOUNT_SID", description: "Twilio account SID for SMS/WhatsApp" },
        { key: "TWILIO_AUTH_TOKEN", description: "Twilio auth token" },
        { key: "SENDGRID_API_KEY", description: "SendGrid API key for emails" },
      ]
    },
    commands: [
      "git clone https://github.com/your-org/market-fit.git",
      "cd market-fit",
      "npm install",
      "cp .env.example .env.local",
      "# Configure your environment variables",
      "npm run dev"
    ],
    link: "https://github.com/your-org/market-fit",
  },
  {
    id: "api",
    name: "api",
    title: "API Server",
    description: "AI agents, email processing, and integrations",
    icon: <Zap className="h-5 w-5" />,
    color: "bg-green-500",
    tech: ["Next.js 15", "TypeScript", "AI SDK", "Puppeteer", "SendGrid"],
    features: [
      "AI Agents",
      "Email Processing",
      "Web Scraping",
      "API Integrations",
      "Lead Analysis",
      "Content Generation"
    ],
    environment: {
      required: [
        { key: "SUPABASE_URL", description: "Supabase project URL" },
        { key: "SUPABASE_ANON_KEY", description: "Supabase anonymous key" },
        { key: "OPENAI_API_KEY", description: "OpenAI API key for AI features" },
        { key: "TEMPORAL_SERVER_URL", description: "Temporal server URL" },
      ],
      optional: [
        { key: "GOOGLE_MAPS_API_KEY", description: "Google Maps API key" },
        { key: "NEVERBOUNCE_API_KEY", description: "Email validation service" },
        { key: "PORTKEY_API_KEY", description: "AI provider management" },
      ]
    },
    commands: [
      "git clone https://github.com/your-org/api.git",
      "cd api",
      "npm install",
      "cp .env.example .env.local",
      "# Configure your environment variables",
      "npm run dev"
    ],
    link: "https://github.com/your-org/api",
  },
  {
    id: "workflows",
    name: "workflows",
    title: "Temporal Workflows",
    description: "Background jobs and workflow orchestration",
    icon: <Cloud className="h-5 w-5" />,
    color: "bg-purple-500",
    tech: ["Temporal.io", "TypeScript", "Node.js", "Supabase"],
    features: [
      "Scheduled Jobs",
      "Workflow Management",
      "Task Queues",
      "Error Handling",
      "Retry Logic",
      "Monitoring"
    ],
    environment: {
      required: [
        { key: "TEMPORAL_SERVER_URL", description: "Temporal server URL" },
        { key: "TEMPORAL_NAMESPACE", description: "Temporal namespace" },
        { key: "SUPABASE_URL", description: "Supabase project URL" },
        { key: "SUPABASE_ANON_KEY", description: "Supabase anonymous key" },
      ],
      optional: [
        { key: "LOG_LEVEL", description: "Logging level (default: info)" },
        { key: "WORKFLOW_TASK_QUEUE", description: "Task queue name (default: default)" },
      ]
    },
    commands: [
      "git clone https://github.com/your-org/workflows.git",
      "cd workflows",
      "npm install",
      "cp .env.example .env",
      "# Configure your environment variables",
      "npm run start-worker"
    ],
    link: "https://github.com/your-org/workflows",
  },
];

export default function DeploymentWizard() {
  const [selectedRepo, setSelectedRepo] = useState(0);
  const [activeTab, setActiveTab] = useState("overview");

  const currentRepo = repositories[selectedRepo];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Deployment Guide
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Deploy and configure each Makinari repository with our comprehensive step-by-step guides.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Repository Selector */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Repositories</h3>
            <div className="space-y-2">
              {repositories.map((repo, index) => (
                <button
                  key={repo.id}
                  onClick={() => setSelectedRepo(index)}
                  className={`w-full text-left p-4 rounded-lg border transition-all ${
                    selectedRepo === index
                      ? 'border-accent bg-accent/5'
                      : 'border-border hover:border-accent/50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${repo.color} text-white`}>
                      {repo.icon}
                    </div>
                    <div>
                      <h4 className="font-medium">{repo.title}</h4>
                      <p className="text-sm text-muted-foreground">{repo.name}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-background border border-border rounded-2xl overflow-hidden">
              {/* Header */}
              <div className="p-6 border-b border-border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg ${currentRepo.color} text-white`}>
                      {currentRepo.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">{currentRepo.title}</h2>
                      <p className="text-muted-foreground">{currentRepo.description}</p>
                    </div>
                  </div>
                  <a
                    href={currentRepo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    <span>View on GitHub</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>

                {/* Tabs */}
                <div className="flex space-x-1 mt-6">
                  {[
                    { id: "overview", label: "Overview" },
                    { id: "environment", label: "Environment" },
                    { id: "deployment", label: "Deployment" },
                    { id: "features", label: "Features" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        activeTab === tab.id
                          ? 'btn-primary'
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <AnimatePresence mode="wait">
                  {activeTab === "overview" && (
                    <motion.div
                      key="overview"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Technology Stack</h3>
                        <div className="flex flex-wrap gap-2">
                          {currentRepo.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-3">Quick Start</h3>
                        <CodeBlock
                          code={currentRepo.commands.join('\n')}
                          language="bash"
                          showLineNumbers={true}
                        />
                      </div>

                      <div className="bg-muted/30 rounded-lg p-4">
                        <div className="flex items-start space-x-2">
                          <AlertCircle className="h-5 w-5 text-accent mt-0.5" />
                          <div>
                            <h4 className="font-medium mb-1">Prerequisites</h4>
                            <p className="text-sm text-muted-foreground">
                              Make sure you have Node.js 18+ installed and have created accounts for 
                              Supabase, Temporal Cloud, and other required services before proceeding.
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "environment" && (
                    <motion.div
                      key="environment"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Required Environment Variables</h3>
                        <div className="space-y-3">
                          {currentRepo.environment.required.map((env) => (
                            <div key={env.key} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                              <div>
                                <code className="text-sm font-mono text-accent">{env.key}</code>
                                <p className="text-xs text-muted-foreground mt-1">{env.description}</p>
                              </div>
                              <span className="px-2 py-1 text-xs bg-red-100 text-red-800 rounded">
                                Required
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {currentRepo.environment.optional.length > 0 && (
                        <div>
                          <h3 className="text-lg font-semibold mb-4">Optional Environment Variables</h3>
                          <div className="space-y-3">
                            {currentRepo.environment.optional.map((env) => (
                              <div key={env.key} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                                <div>
                                  <code className="text-sm font-mono text-muted-foreground">{env.key}</code>
                                  <p className="text-xs text-muted-foreground mt-1">{env.description}</p>
                                </div>
                                <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">
                                  Optional
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="bg-muted/30 rounded-lg p-4">
                        <h4 className="font-medium mb-2">Environment File Template</h4>
                        <CodeBlock
                          code={currentRepo.environment.required
                            .map(env => `${env.key}=your-${env.key.toLowerCase().replace(/_/g, '-')}`)
                            .join('\n')}
                          language="bash"
                          filename=".env.local"
                        />
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "deployment" && (
                    <motion.div
                      key="deployment"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Step-by-Step Deployment</h3>
                        <div className="space-y-4">
                          {[
                            {
                              step: 1,
                              title: "Clone the Repository",
                              description: "Get the latest code from GitHub",
                              command: `git clone ${currentRepo.link}.git`
                            },
                            {
                              step: 2,
                              title: "Install Dependencies",
                              description: "Install all required packages",
                              command: "npm install"
                            },
                            {
                              step: 3,
                              title: "Configure Environment",
                              description: "Set up your environment variables",
                              command: "cp .env.example .env.local"
                            },
                            {
                              step: 4,
                              title: "Start Development Server",
                              description: "Run the application locally",
                              command: currentRepo.id === "workflows" ? "npm run start-worker" : "npm run dev"
                            }
                          ].map((step) => (
                            <div key={step.step} className="flex space-x-4">
                              <div className="flex-shrink-0 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                                {step.step}
                              </div>
                              <div className="flex-1">
                                <h4 className="font-medium mb-1">{step.title}</h4>
                                <p className="text-sm text-muted-foreground mb-2">{step.description}</p>
                                <CodeBlock
                                  code={step.command}
                                  language="bash"
                                  className="text-sm"
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "features" && (
                    <motion.div
                      key="features"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Key Features</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {currentRepo.features.map((feature, index) => (
                            <div key={feature} className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                              <Check className="h-5 w-5 text-accent flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
