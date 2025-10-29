"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Database, Server, Workflow, ArrowRight, ExternalLink, Github, Cloud } from "lucide-react";

const components = [
  {
    id: "market-fit",
    name: "Market Fit",
    title: "Growth Engine",
    description: "Next.js frontend with analytics dashboard",
    icon: <Database className="h-6 w-6" />,
    color: "bg-blue-500",
    position: { x: 50, y: 50 },
    tech: ["Next.js 15", "React 18", "TypeScript", "Tailwind CSS", "Supabase"],
    features: ["Analytics Dashboard", "Lead Management", "Campaign Tracking", "ROI Calculator"],
  },
  {
    id: "api",
    name: "API Server",
    title: "AI Agents & Integrations",
    description: "Backend API with AI agents and email processing",
    icon: <Server className="h-6 w-6" />,
    color: "bg-green-500",
    position: { x: 450, y: 50 },
    tech: ["Next.js 15", "TypeScript", "AI SDK", "Puppeteer", "SendGrid"],
    features: ["AI Agents", "Email Processing", "Web Scraping", "API Integrations"],
  },
  {
    id: "workflows",
    name: "Workflows",
    title: "Temporal Orchestration",
    description: "Background jobs and workflow orchestration",
    icon: <Workflow className="h-6 w-6" />,
    color: "bg-purple-500",
    position: { x: 450, y: 300 },
    tech: ["Temporal.io", "TypeScript", "Node.js", "Supabase"],
    features: ["Scheduled Jobs", "Workflow Management", "Task Queues", "Error Handling"],
  },
  {
    id: "supabase",
    name: "Supabase",
    title: "Database & Auth",
    description: "PostgreSQL database with real-time subscriptions",
    icon: <Cloud className="h-6 w-6" />,
    color: "bg-orange-500",
    position: { x: 250, y: 175 },
    tech: ["PostgreSQL", "Real-time", "Auth", "Storage", "Edge Functions"],
    features: ["User Authentication", "Real-time Data", "File Storage", "Edge Functions"],
  },
];

const connections = [
  { from: "market-fit", to: "api", type: "API calls" },
  { from: "api", to: "workflows", type: "Triggers" },
  { from: "workflows", to: "market-fit", type: "Updates" },
  { from: "market-fit", to: "supabase", type: "Database" },
  { from: "api", to: "supabase", type: "Database" },
  { from: "workflows", to: "supabase", type: "Database" },
];

export default function ArchitectureDiagram() {
  const [hoveredComponent, setHoveredComponent] = useState<string | null>(null);
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            System Architecture
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Understanding how our three repositories and database work together to create a comprehensive growth platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Architecture Diagram */}
          <div className="lg:col-span-2">
            <div className="relative bg-muted/30 rounded-2xl p-8 min-h-[700px] w-full overflow-hidden">
              {/* Background Grid */}
              <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-12 grid-rows-12 h-full">
                  {Array.from({ length: 144 }).map((_, i) => (
                    <div key={i} className="border border-border/20"></div>
                  ))}
                </div>
              </div>

              {/* Components */}
              <div className="relative z-10">
                {components.map((component, index) => (
                  <motion.div
                    key={component.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + (index * 0.2), duration: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    onHoverStart={() => setHoveredComponent(component.id)}
                    onHoverEnd={() => setHoveredComponent(null)}
                    onClick={() => setSelectedComponent(selectedComponent === component.id ? null : component.id)}
                    className={`absolute cursor-pointer transition-all duration-300 ${
                      hoveredComponent === component.id ? 'z-20' : 'z-10'
                    }`}
                    style={{
                      left: component.position.x,
                      top: component.position.y,
                    }}
                  >
                    <div className={`w-48 p-4 rounded-xl border-2 transition-all ${
                      selectedComponent === component.id
                        ? 'border-accent bg-accent/5 shadow-lg'
                        : 'border-border bg-background hover:border-accent/50'
                    }`}>
                      <div className="flex items-center space-x-3 mb-3">
                        <div className={`p-2 rounded-lg ${component.color} text-white`}>
                          {component.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm">{component.title}</h3>
                          <p className="text-xs text-muted-foreground">{component.name}</p>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mb-3">
                        {component.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {component.tech.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded"
                          >
                            {tech}
                          </span>
                        ))}
                        {component.tech.length > 3 && (
                          <span className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded">
                            +{component.tech.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Connection Lines */}
                {connections.map((connection, index) => {
                  const fromComponent = components.find(c => c.id === connection.from);
                  const toComponent = components.find(c => c.id === connection.to);
                  
                  if (!fromComponent || !toComponent) return null;

                  const fromX = fromComponent.position.x + 96; // Center of component
                  const fromY = fromComponent.position.y + 60;
                  const toX = toComponent.position.x + 96;
                  const toY = toComponent.position.y + 60;

                  return (
                    <motion.div
                      key={index}
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 0.8 + (index * 0.2), duration: 0.8 }}
                      className="absolute z-0"
                    >
                      <svg
                        width="600"
                        height="400"
                        className="absolute"
                        style={{ left: -100, top: -50 }}
                      >
                        <motion.path
                          d={`M ${fromX} ${fromY} Q ${(fromX + toX) / 2} ${Math.min(fromY, toY) - 50} ${toX} ${toY}`}
                          stroke="hsl(var(--accent))"
                          strokeWidth="2"
                          fill="none"
                          strokeDasharray="5,5"
                          className="opacity-60"
                        />
                        <motion.circle
                          cx={toX}
                          cy={toY}
                          r="4"
                          fill="hsl(var(--accent))"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 1 + index * 0.2 }}
                        />
                      </svg>
                      <div
                        className="absolute text-xs text-muted-foreground bg-background px-2 py-1 rounded"
                        style={{
                          left: (fromX + toX) / 2 - 30,
                          top: Math.min(fromY, toY) - 30,
                        }}
                      >
                        {connection.type}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Component Details */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Component Details</h3>
            
            {components.map((component, index) => (
              <motion.div
                key={component.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 + (index * 0.1) }}
                className={`p-4 rounded-lg border transition-all cursor-pointer ${
                  selectedComponent === component.id
                    ? 'border-accent bg-accent/5'
                    : 'border-border hover:border-accent/50'
                }`}
                onClick={() => setSelectedComponent(selectedComponent === component.id ? null : component.id)}
              >
                <div className="flex items-center space-x-3 mb-2">
                  <div className={`p-2 rounded-lg ${component.color} text-white`}>
                    {component.icon}
                  </div>
                  <div>
                    <h4 className="font-medium">{component.title}</h4>
                    <p className="text-sm text-muted-foreground">{component.name}</p>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-3">
                  {component.description}
                </p>

                <div className="space-y-2">
                  <h5 className="text-xs font-medium text-muted-foreground">Key Features:</h5>
                  <div className="flex flex-wrap gap-1">
                    {component.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-border">
                  <a
                    href={`https://github.com/your-org/${component.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-sm text-accent hover:text-accent/80 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="h-4 w-4" />
                    <span>View Repository</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Data Flow Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mt-16 bg-muted/30 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">How It All Works Together</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <Database className="h-6 w-6" />
              </div>
              <h4 className="font-semibold mb-2">1. User Interface</h4>
              <p className="text-sm text-muted-foreground">
                The Growth Engine provides the dashboard where users interact with analytics, 
                manage campaigns, and track performance.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <Server className="h-6 w-6" />
              </div>
              <h4 className="font-semibold mb-2">2. AI Processing</h4>
              <p className="text-sm text-muted-foreground">
                The API Server handles AI agents, email processing, and external integrations 
                to power the platform's intelligence.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <Workflow className="h-6 w-6" />
              </div>
              <h4 className="font-semibold mb-2">3. Background Jobs</h4>
              <p className="text-sm text-muted-foreground">
                Temporal Workflows manage scheduled tasks, data processing, and automated 
                workflows that run in the background.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <Cloud className="h-6 w-6" />
              </div>
              <h4 className="font-semibold mb-2">4. Database & Auth</h4>
              <p className="text-sm text-muted-foreground">
                Supabase provides PostgreSQL database, real-time subscriptions, 
                user authentication, and file storage for all components.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
