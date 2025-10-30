"use client";

import { useState, useEffect } from "react";
import { Database, Server, Workflow, ExternalLink, Github, Cloud } from "lucide-react";
import HeroSection from "./architecture/HeroSection";
import ComponentCards from "./architecture/ComponentCards";
import TechStack from "./architecture/TechStack";


const components = [
  {
    id: "market-fit",
    name: "Market Fit",
    title: "Growth Engine",
    description: "Next.js frontend with analytics dashboard",
    icon: <Database className="h-6 w-6" />,
    color: "bg-blue-500",
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
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [containerSize, setContainerSize] = useState({ width: 800, height: 400 });

  // Ensure we're on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Handle responsive sizing
  useEffect(() => {
    const updateSize = () => {
      const container = document.getElementById('diagram-container');
      if (container) {
        const rect = container.getBoundingClientRect();
        setContainerSize({ width: rect.width, height: rect.height });
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [isClient]);

  const onSidebarComponentClick = (componentId: string) => {
    setSelectedComponent(selectedComponent === componentId ? null : componentId);
  };

  // Responsive positioning logic
  const getResponsiveConfig = () => {
    const isMobile = containerSize.width < 768;
    const isTablet = containerSize.width >= 768 && containerSize.width < 1024;
    
    if (isMobile) {
      return {
        viewBox: "0 0 400 600",
        nodeWidth: 120,
        nodeHeight: 80,
        fontSize: { title: 10, subtitle: 8, description: 7 },
        spacing: { x: 20, y: 120 },
        positions: {
          marketFit: { x: 20, y: 50 },
          api: { x: 20, y: 180 },
          workflows: { x: 20, y: 310 },
          supabase: { x: 20, y: 440 }
        }
      };
    } else if (isTablet) {
      return {
        viewBox: "0 0 600 400",
        nodeWidth: 160,
        nodeHeight: 100,
        fontSize: { title: 12, subtitle: 10, description: 8 },
        spacing: { x: 30, y: 30 },
        positions: {
          marketFit: { x: 50, y: 50 },
          api: { x: 280, y: 50 },
          workflows: { x: 50, y: 200 },
          supabase: { x: 280, y: 200 }
        }
      };
    } else {
      return {
        viewBox: "0 0 600 400",
        nodeWidth: 160,
        nodeHeight: 90,
        fontSize: { title: 12, subtitle: 10, description: 8 },
        spacing: { x: 40, y: 40 },
        positions: {
          marketFit: { x: 50, y: 80 },
          api: { x: 250, y: 80 },
          workflows: { x: 450, y: 200 },
          supabase: { x: 150, y: 200 }
        }
      };
    }
  };

  const config = getResponsiveConfig();

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
          {/* Architecture Diagram */}
          <div>
            <div id="diagram-container" className="min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] w-full overflow-hidden flex items-center justify-center">
              {!isClient ? (
                <div className="h-full w-full flex items-center justify-center bg-gray-100">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading diagram...</p>
                  </div>
                </div>
              ) : (
                <div className="h-full w-full">
                  <svg
                    viewBox={config.viewBox}
                    className="w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid meet"
                    style={{ display: 'block', margin: '0 auto' }}
                  >
                    {/* Definitions for arrows and gradients */}
                    <defs>
                      <marker
                        id="arrowhead"
                        markerWidth="10"
                        markerHeight="7"
                        refX="9"
                        refY="3.5"
                        orient="auto"
                      >
                        <polygon points="0 0, 10 3.5, 0 7" fill="#3ECF8E" />
                      </marker>
                      
                      <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#1D4ED8" />
                      </linearGradient>
                      
                      <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#10B981" />
                        <stop offset="100%" stopColor="#059669" />
                      </linearGradient>
                      
                      <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#7C3AED" />
                      </linearGradient>
                      
                      <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#F59E0B" />
                        <stop offset="100%" stopColor="#D97706" />
                      </linearGradient>
                    </defs>

                    {/* Responsive Connection lines */}
                    {(() => {
                      const isMobile = containerSize.width < 768;
                      const isTablet = containerSize.width >= 768 && containerSize.width < 1024;
                      
                      if (isMobile) {
                        // Vertical layout connections
                        return (
                          <>
                            {/* Growth Engine -> API Server */}
                            <line
                              x1={config.positions.marketFit.x + config.nodeWidth/2}
                              y1={config.positions.marketFit.y + config.nodeHeight}
                              x2={config.positions.api.x + config.nodeWidth/2}
                              y2={config.positions.api.y}
                              stroke="#3ECF8E"
                              strokeWidth="2"
                              strokeDasharray="4,2"
                              markerEnd="url(#arrowhead)"
                            />
                            <text x={config.positions.marketFit.x + config.nodeWidth/2} y={config.positions.marketFit.y + config.nodeHeight + 15} textAnchor="middle" fontSize="8" fill="#6B7280">
                              API calls
                            </text>

                            {/* API Server -> Workflows */}
                            <line
                              x1={config.positions.api.x + config.nodeWidth/2}
                              y1={config.positions.api.y + config.nodeHeight}
                              x2={config.positions.workflows.x + config.nodeWidth/2}
                              y2={config.positions.workflows.y}
                              stroke="#3ECF8E"
                              strokeWidth="2"
                              strokeDasharray="4,2"
                              markerEnd="url(#arrowhead)"
                            />
                            <text x={config.positions.api.x + config.nodeWidth/2} y={config.positions.api.y + config.nodeHeight + 15} textAnchor="middle" fontSize="8" fill="#6B7280">
                              Triggers
                            </text>

                            {/* Workflows -> Supabase */}
                            <line
                              x1={config.positions.workflows.x + config.nodeWidth/2}
                              y1={config.positions.workflows.y + config.nodeHeight}
                              x2={config.positions.supabase.x + config.nodeWidth/2}
                              y2={config.positions.supabase.y}
                              stroke="#3ECF8E"
                              strokeWidth="2"
                              strokeDasharray="4,2"
                              markerEnd="url(#arrowhead)"
                            />
                            <text x={config.positions.workflows.x + config.nodeWidth/2} y={config.positions.workflows.y + config.nodeHeight + 15} textAnchor="middle" fontSize="8" fill="#6B7280">
                              Database
                            </text>
                          </>
                        );
                      } else if (isTablet) {
                        // 2x2 grid connections
                        return (
                          <>
                            {/* Growth Engine -> API Server */}
                            <line
                              x1={config.positions.marketFit.x + config.nodeWidth}
                              y1={config.positions.marketFit.y + config.nodeHeight/2}
                              x2={config.positions.api.x}
                              y2={config.positions.api.y + config.nodeHeight/2}
                              stroke="#3ECF8E"
                              strokeWidth="2"
                              strokeDasharray="4,2"
                              markerEnd="url(#arrowhead)"
                            />
                            <text x={(config.positions.marketFit.x + config.positions.api.x + config.nodeWidth)/2} y={config.positions.marketFit.y + config.nodeHeight/2 - 5} textAnchor="middle" fontSize="9" fill="#6B7280">
                              API calls
                            </text>

                            {/* Growth Engine -> Supabase */}
                            <line
                              x1={config.positions.marketFit.x + config.nodeWidth/2}
                              y1={config.positions.marketFit.y + config.nodeHeight}
                              x2={config.positions.supabase.x + config.nodeWidth/2}
                              y2={config.positions.supabase.y}
                              stroke="#3ECF8E"
                              strokeWidth="2"
                              strokeDasharray="4,2"
                              markerEnd="url(#arrowhead)"
                            />
                            <text x={config.positions.marketFit.x + config.nodeWidth/2} y={config.positions.marketFit.y + config.nodeHeight + 15} textAnchor="middle" fontSize="9" fill="#6B7280">
                              Database
                            </text>

                            {/* API Server -> Workflows */}
                            <line
                              x1={config.positions.api.x + config.nodeWidth/2}
                              y1={config.positions.api.y + config.nodeHeight}
                              x2={config.positions.workflows.x + config.nodeWidth/2}
                              y2={config.positions.workflows.y}
                              stroke="#3ECF8E"
                              strokeWidth="2"
                              strokeDasharray="4,2"
                              markerEnd="url(#arrowhead)"
                            />
                            <text x={config.positions.api.x + config.nodeWidth/2} y={config.positions.api.y + config.nodeHeight + 15} textAnchor="middle" fontSize="9" fill="#6B7280">
                              Triggers
                            </text>

                            {/* Workflows -> Supabase */}
                            <line
                              x1={config.positions.workflows.x + config.nodeWidth}
                              y1={config.positions.workflows.y + config.nodeHeight/2}
                              x2={config.positions.supabase.x}
                              y2={config.positions.supabase.y + config.nodeHeight/2}
                              stroke="#3ECF8E"
                              strokeWidth="2"
                              strokeDasharray="4,2"
                              markerEnd="url(#arrowhead)"
                            />
                          </>
                        );
                      } else {
                        // Desktop layout connections (50/50 split)
                        return (
                          <>
                            {/* Growth Engine -> API Server */}
                            <line
                              x1={config.positions.marketFit.x + config.nodeWidth}
                              y1={config.positions.marketFit.y + config.nodeHeight/2}
                              x2={config.positions.api.x}
                              y2={config.positions.api.y + config.nodeHeight/2}
                              stroke="#3ECF8E"
                              strokeWidth="2"
                              strokeDasharray="6,3"
                              markerEnd="url(#arrowhead)"
                            />
                            <text x={(config.positions.marketFit.x + config.positions.api.x + config.nodeWidth)/2} y={config.positions.marketFit.y + config.nodeHeight/2 - 8} textAnchor="middle" fontSize="10" fill="#6B7280">
                              API calls
                            </text>

                            {/* Growth Engine -> Supabase */}
                            <line
                              x1={config.positions.marketFit.x + config.nodeWidth/2}
                              y1={config.positions.marketFit.y + config.nodeHeight}
                              x2={config.positions.supabase.x + config.nodeWidth/2}
                              y2={config.positions.supabase.y}
                              stroke="#3ECF8E"
                              strokeWidth="2"
                              strokeDasharray="6,3"
                              markerEnd="url(#arrowhead)"
                            />
                            <text x={config.positions.marketFit.x + config.nodeWidth/2} y={config.positions.marketFit.y + config.nodeHeight + 15} textAnchor="middle" fontSize="10" fill="#6B7280">
                              Database
                            </text>

                            {/* API Server -> Workflows */}
                            <line
                              x1={config.positions.api.x + config.nodeWidth/2}
                              y1={config.positions.api.y + config.nodeHeight}
                              x2={config.positions.workflows.x + config.nodeWidth/2}
                              y2={config.positions.workflows.y}
                              stroke="#3ECF8E"
                              strokeWidth="2"
                              strokeDasharray="6,3"
                              markerEnd="url(#arrowhead)"
                            />
                            <text x={config.positions.api.x + config.nodeWidth/2 + 8} y={config.positions.api.y + config.nodeHeight + 15} textAnchor="start" fontSize="10" fill="#6B7280">
                              Triggers
                            </text>

                            {/* Workflows -> Growth Engine */}
                            <path
                              d={`M ${config.positions.workflows.x} ${config.positions.workflows.y + config.nodeHeight/2} Q ${(config.positions.workflows.x + config.positions.marketFit.x)/2} ${config.positions.workflows.y - 40} ${config.positions.marketFit.x + config.nodeWidth} ${config.positions.marketFit.y + config.nodeHeight/2}`}
                              stroke="#3ECF8E"
                              strokeWidth="2"
                              strokeDasharray="6,3"
                              fill="none"
                              markerEnd="url(#arrowhead)"
                            />
                            <text x={(config.positions.workflows.x + config.positions.marketFit.x)/2} y={config.positions.workflows.y - 25} textAnchor="middle" fontSize="10" fill="#6B7280">
                              Updates
                            </text>

                            {/* API Server -> Supabase */}
                            <line
                              x1={config.positions.api.x + config.nodeWidth/2}
                              y1={config.positions.api.y + config.nodeHeight}
                              x2={config.positions.supabase.x + config.nodeWidth}
                              y2={config.positions.supabase.y + config.nodeHeight/2}
                              stroke="#3ECF8E"
                              strokeWidth="2"
                              strokeDasharray="6,3"
                              markerEnd="url(#arrowhead)"
                            />

                            {/* Workflows -> Supabase */}
                            <line
                              x1={config.positions.workflows.x}
                              y1={config.positions.workflows.y + config.nodeHeight/2}
                              x2={config.positions.supabase.x + config.nodeWidth}
                              y2={config.positions.supabase.y + config.nodeHeight/2}
                              stroke="#3ECF8E"
                              strokeWidth="2"
                              strokeDasharray="6,3"
                              markerEnd="url(#arrowhead)"
                            />
                          </>
                        );
                      }
                    })()}

                    {/* Growth Engine Node */}
                    <g
                      className="cursor-pointer"
                      onClick={() => setSelectedComponent(selectedComponent === 'market-fit' ? null : 'market-fit')}
                    >
                      <rect
                        x={config.positions.marketFit.x}
                        y={config.positions.marketFit.y}
                        width={config.nodeWidth}
                        height={config.nodeHeight}
                        rx="8"
                        fill={selectedComponent === 'market-fit' ? '#F0FDF4' : '#FFFFFF'}
                        stroke={selectedComponent === 'market-fit' ? '#22C55E' : '#D1D5DB'}
                        strokeWidth="2"
                        className="hover:stroke-green-300 transition-colors"
                      />
                      {/* Icon Row */}
                      <circle 
                        cx={config.positions.marketFit.x + config.nodeWidth/2} 
                        cy={config.positions.marketFit.y + 15} 
                        r="10" 
                        fill="url(#blueGradient)" 
                      />
                      <text 
                        x={config.positions.marketFit.x + config.nodeWidth/2} 
                        y={config.positions.marketFit.y + 20} 
                        textAnchor="middle" 
                        fontSize="10" 
                        fill="white" 
                        fontWeight="bold"
                      >
                        DB
                      </text>
                      {/* Text Row */}
                      <text 
                        x={config.positions.marketFit.x + config.nodeWidth/2} 
                        y={config.positions.marketFit.y + 35} 
                        fontSize={config.fontSize.title} 
                        fill="#1F2937" 
                        fontWeight="600"
                        textAnchor="middle"
                      >
                        Growth Engine
                      </text>
                      <text 
                        x={config.positions.marketFit.x + config.nodeWidth/2} 
                        y={config.positions.marketFit.y + 50} 
                        fontSize={config.fontSize.subtitle} 
                        fill="#6B7280"
                        textAnchor="middle"
                      >
                        Market Fit
                      </text>
                      <text 
                        x={config.positions.marketFit.x + config.nodeWidth/2} 
                        y={config.positions.marketFit.y + 65} 
                        fontSize={config.fontSize.description} 
                        fill="#6B7280"
                        textAnchor="middle"
                      >
                        Next.js frontend
                      </text>
                    </g>

                    {/* API Server Node */}
                    <g
                      className="cursor-pointer"
                      onClick={() => setSelectedComponent(selectedComponent === 'api' ? null : 'api')}
                    >
                      <rect
                        x={config.positions.api.x}
                        y={config.positions.api.y}
                        width={config.nodeWidth}
                        height={config.nodeHeight}
                        rx="8"
                        fill={selectedComponent === 'api' ? '#F0FDF4' : '#FFFFFF'}
                        stroke={selectedComponent === 'api' ? '#22C55E' : '#D1D5DB'}
                        strokeWidth="2"
                        className="hover:stroke-green-300 transition-colors"
                      />
                      {/* Icon Row */}
                      <rect 
                        x={config.positions.api.x + config.nodeWidth/2 - 10} 
                        y={config.positions.api.y + 5} 
                        width="20" 
                        height="20" 
                        rx="4" 
                        fill="url(#greenGradient)" 
                      />
                      <text 
                        x={config.positions.api.x + config.nodeWidth/2} 
                        y={config.positions.api.y + 18} 
                        textAnchor="middle" 
                        fontSize="10" 
                        fill="white" 
                        fontWeight="bold"
                      >
                        API
                      </text>
                      {/* Text Row */}
                      <text 
                        x={config.positions.api.x + config.nodeWidth/2} 
                        y={config.positions.api.y + 35} 
                        fontSize={config.fontSize.title} 
                        fill="#1F2937" 
                        fontWeight="600"
                        textAnchor="middle"
                      >
                        AI Agents
                      </text>
                      <text 
                        x={config.positions.api.x + config.nodeWidth/2} 
                        y={config.positions.api.y + 50} 
                        fontSize={config.fontSize.subtitle} 
                        fill="#6B7280"
                        textAnchor="middle"
                      >
                        API Server
                      </text>
                      <text 
                        x={config.positions.api.x + config.nodeWidth/2} 
                        y={config.positions.api.y + 65} 
                        fontSize={config.fontSize.description} 
                        fill="#6B7280"
                        textAnchor="middle"
                      >
                        Backend API
                      </text>
                    </g>

                    {/* Workflows Node */}
                    <g
                      className="cursor-pointer"
                      onClick={() => setSelectedComponent(selectedComponent === 'workflows' ? null : 'workflows')}
                    >
                      <rect
                        x={config.positions.workflows.x}
                        y={config.positions.workflows.y}
                        width={config.nodeWidth}
                        height={config.nodeHeight}
                        rx="8"
                        fill={selectedComponent === 'workflows' ? '#F0FDF4' : '#FFFFFF'}
                        stroke={selectedComponent === 'workflows' ? '#22C55E' : '#D1D5DB'}
                        strokeWidth="2"
                        className="hover:stroke-green-300 transition-colors"
                      />
                      {/* Icon Row */}
                      <rect 
                        x={config.positions.workflows.x + config.nodeWidth/2 - 10} 
                        y={config.positions.workflows.y + 5} 
                        width="20" 
                        height="20" 
                        rx="4" 
                        fill="url(#purpleGradient)" 
                      />
                      <text 
                        x={config.positions.workflows.x + config.nodeWidth/2} 
                        y={config.positions.workflows.y + 18} 
                        textAnchor="middle" 
                        fontSize="10" 
                        fill="white" 
                        fontWeight="bold"
                      >
                        WF
                      </text>
                      {/* Text Row */}
                      <text 
                        x={config.positions.workflows.x + config.nodeWidth/2} 
                        y={config.positions.workflows.y + 35} 
                        fontSize={config.fontSize.title} 
                        fill="#1F2937" 
                        fontWeight="600"
                        textAnchor="middle"
                      >
                        Temporal
                      </text>
                      <text 
                        x={config.positions.workflows.x + config.nodeWidth/2} 
                        y={config.positions.workflows.y + 50} 
                        fontSize={config.fontSize.subtitle} 
                        fill="#6B7280"
                        textAnchor="middle"
                      >
                        Workflows
                      </text>
                      <text 
                        x={config.positions.workflows.x + config.nodeWidth/2} 
                        y={config.positions.workflows.y + 65} 
                        fontSize={config.fontSize.description} 
                        fill="#6B7280"
                        textAnchor="middle"
                      >
                        Background jobs
                      </text>
                    </g>

                    {/* Supabase Node */}
                    <g
                      className="cursor-pointer"
                      onClick={() => setSelectedComponent(selectedComponent === 'supabase' ? null : 'supabase')}
                    >
                      <rect
                        x={config.positions.supabase.x}
                        y={config.positions.supabase.y}
                        width={config.nodeWidth}
                        height={config.nodeHeight}
                        rx="8"
                        fill={selectedComponent === 'supabase' ? '#F0FDF4' : '#FFFFFF'}
                        stroke={selectedComponent === 'supabase' ? '#22C55E' : '#D1D5DB'}
                        strokeWidth="2"
                        className="hover:stroke-green-300 transition-colors"
                      />
                      {/* Icon Row */}
                      <circle 
                        cx={config.positions.supabase.x + config.nodeWidth/2} 
                        cy={config.positions.supabase.y + 15} 
                        r="10" 
                        fill="url(#orangeGradient)" 
                      />
                      <text 
                        x={config.positions.supabase.x + config.nodeWidth/2} 
                        y={config.positions.supabase.y + 20} 
                        textAnchor="middle" 
                        fontSize="10" 
                        fill="white" 
                        fontWeight="bold"
                      >
                        DB
                      </text>
                      {/* Text Row */}
                      <text 
                        x={config.positions.supabase.x + config.nodeWidth/2} 
                        y={config.positions.supabase.y + 35} 
                        fontSize={config.fontSize.title} 
                        fill="#1F2937" 
                        fontWeight="600"
                        textAnchor="middle"
                      >
                        Database & Auth
                      </text>
                      <text 
                        x={config.positions.supabase.x + config.nodeWidth/2} 
                        y={config.positions.supabase.y + 50} 
                        fontSize={config.fontSize.subtitle} 
                        fill="#6B7280"
                        textAnchor="middle"
                      >
                        Supabase
                      </text>
                      <text 
                        x={config.positions.supabase.x + config.nodeWidth/2} 
                        y={config.positions.supabase.y + 65} 
                        fontSize={config.fontSize.description} 
                        fill="#6B7280"
                        textAnchor="middle"
                      >
                        PostgreSQL
                      </text>
                    </g>
                      </svg>
                      </div>
              )}
            </div>
          </div>

          {/* Component Details */}
          <ComponentCards selectedId={selectedComponent} onSelect={onSidebarComponentClick} />
        </div>

        {/* Data Flow Explanation */}
        <div className="mt-12 lg:mt-16 bg-muted/30 rounded-2xl p-6 lg:p-8">
          <h3 className="text-xl lg:text-2xl font-semibold mb-4 lg:mb-6 text-center">How It All Works Together</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
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
        </div>

        {/* Tech Stack */}
        <TechStack />
      </div>
    </section>
  );
}