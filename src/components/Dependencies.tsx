"use client";

import { motion } from "framer-motion";
import { Database, Cloud, Mail, CreditCard, MessageSquare, Key, ExternalLink, Check, AlertCircle } from "lucide-react";
import CodeBlock from "./CodeBlock";

const services = [
  {
    name: "Supabase",
    icon: <Database className="h-6 w-6" />,
    color: "bg-green-500",
    required: true,
    description: "PostgreSQL database, authentication, and real-time subscriptions",
    envVars: [
      { key: "NEXT_PUBLIC_SUPABASE_URL", description: "Your Supabase project URL" },
      { key: "NEXT_PUBLIC_SUPABASE_ANON_KEY", description: "Public anonymous key" },
      { key: "SUPABASE_SERVICE_ROLE_KEY", description: "Service role key (server-side only)" },
      { key: "SUPABASE_JWT_SECRET", description: "JWT secret for token validation (optional)" },
      { key: "SUPABASE_DB_PASSWORD", description: "Database password (optional)" },
    ],
    setupSteps: [
      "Create account at supabase.com",
      "Create new project",
      "Copy Project URL and API keys from Settings > API",
      "Run database migrations (see database setup section)",
      "Configure Row Level Security (RLS) policies",
    ],
    docs: "https://supabase.com/docs",
  },
  {
    name: "Temporal Cloud",
    icon: <Cloud className="h-6 w-6" />,
    color: "bg-blue-500",
    required: true,
    description: "Workflow orchestration for background jobs and scheduled tasks",
    envVars: [
      { key: "TEMPORAL_SERVER_URL", description: "Temporal server URL" },
      { key: "TEMPORAL_NAMESPACE", description: "Your namespace (default: 'default')" },
      { key: "WORKFLOW_TASK_QUEUE", description: "Task queue name (default: 'default')" },
    ],
    setupSteps: [
      "Sign up at temporal.io/cloud",
      "Create a new namespace",
      "Generate certificates for authentication",
      "Configure connection in workflows repository",
      "Deploy workers to handle workflows",
    ],
    docs: "https://docs.temporal.io",
  },
  {
    name: "Stripe",
    icon: <CreditCard className="h-6 w-6" />,
    color: "bg-purple-500",
    required: true,
    description: "Payment processing and subscription management",
    envVars: [
      { key: "STRIPE_SECRET_KEY", description: "Secret key for server-side operations" },
      { key: "STRIPE_PUBLISHABLE_KEY", description: "Publishable key for client-side" },
      { key: "STRIPE_WEBHOOK_SECRET", description: "Webhook signing secret" },
    ],
    setupSteps: [
      "Create account at stripe.com",
      "Get API keys from Dashboard > Developers > API keys",
      "Set up webhook endpoint for events",
      "Configure products and pricing",
      "Test with Stripe CLI in development",
    ],
    docs: "https://stripe.com/docs",
  },
  {
    name: "OpenAI",
    icon: <Key className="h-6 w-6" />,
    color: "bg-emerald-500",
    required: true,
    description: "AI capabilities for agents, content generation, and analysis",
    envVars: [
      { key: "OPENAI_API_KEY", description: "API key for OpenAI services" },
      { key: "OPENAI_ORG_ID", description: "Organization ID (optional)" },
    ],
    setupSteps: [
      "Create account at platform.openai.com",
      "Navigate to API keys section",
      "Generate new API key",
      "Set up billing and usage limits",
      "Configure model preferences in application",
    ],
    docs: "https://platform.openai.com/docs",
  },
  {
    name: "Twilio",
    icon: <MessageSquare className="h-6 w-6" />,
    color: "bg-red-500",
    required: false,
    description: "SMS and WhatsApp messaging capabilities",
    envVars: [
      { key: "TWILIO_ACCOUNT_SID", description: "Account SID" },
      { key: "TWILIO_AUTH_TOKEN", description: "Auth token" },
      { key: "TWILIO_PHONE_NUMBER", description: "Your Twilio phone number" },
      { key: "TWILIO_WHATSAPP_NUMBER", description: "WhatsApp enabled number" },
    ],
    setupSteps: [
      "Sign up at twilio.com",
      "Get Account SID and Auth Token from Console",
      "Purchase a phone number or use trial number",
      "Enable WhatsApp (requires approval)",
      "Configure webhook endpoints",
    ],
    docs: "https://www.twilio.com/docs",
  },
  {
    name: "SendGrid",
    icon: <Mail className="h-6 w-6" />,
    color: "bg-blue-600",
    required: false,
    description: "Email delivery and marketing campaigns",
    envVars: [
      { key: "SENDGRID_API_KEY", description: "API key for sending emails" },
      { key: "SENDGRID_FROM_EMAIL", description: "Verified sender email address" },
    ],
    setupSteps: [
      "Create account at sendgrid.com",
      "Verify sender identity (email or domain)",
      "Generate API key in Settings > API Keys",
      "Configure email templates",
      "Set up webhook for event tracking",
    ],
    docs: "https://docs.sendgrid.com",
  },
  {
    name: "Azure OpenAI",
    icon: <Cloud className="h-6 w-6" />,
    color: "bg-cyan-500",
    required: false,
    description: "Alternative AI provider using Microsoft Azure OpenAI services",
    envVars: [
      { key: "MICROSOFT_AZURE_OPENAI_API_KEY", description: "Azure OpenAI API key" },
      { key: "MICROSOFT_AZURE_OPENAI_ENDPOINT", description: "Azure OpenAI endpoint URL" },
      { key: "MICROSOFT_AZURE_OPENAI_DEPLOYMENT", description: "Deployment name (default: gpt-4o)" },
      { key: "MICROSOFT_AZURE_OPENAI_API_VERSION", description: "API version (default: 2024-08-01-preview)" },
      { key: "MICROSOFT_AZURE_OPENAI_IMAGES_DEPLOYMENT", description: "DALL-E deployment for image generation" },
    ],
    setupSteps: [
      "Create Azure account and resource group",
      "Create Azure OpenAI resource",
      "Deploy GPT-4 and DALL-E models",
      "Get endpoint and API keys",
      "Configure content filters if needed",
    ],
    docs: "https://learn.microsoft.com/azure/ai-services/openai/",
  },
  {
    name: "Google Maps",
    icon: <Key className="h-6 w-6" />,
    color: "bg-yellow-500",
    required: false,
    description: "Location services and venue search capabilities",
    envVars: [
      { key: "GOOGLE_MAPS_API_KEY", description: "API key for Google Maps services" },
    ],
    setupSteps: [
      "Go to Google Cloud Console",
      "Enable Maps JavaScript API and Places API",
      "Create API key with restrictions",
      "Configure allowed referrers",
      "Set up billing if needed",
    ],
    docs: "https://developers.google.com/maps",
  },
  {
    name: "NeverBounce",
    icon: <Mail className="h-6 w-6" />,
    color: "bg-orange-500",
    required: false,
    description: "Email validation and verification service",
    envVars: [
      { key: "NEVERBOUNCE_API_KEY", description: "API key for email validation" },
    ],
    setupSteps: [
      "Create account at neverbounce.com",
      "Generate API key from dashboard",
      "Configure validation settings",
      "Set up credits/billing",
    ],
    docs: "https://neverbounce.com/docs",
  },
  {
    name: "Portkey",
    icon: <Key className="h-6 w-6" />,
    color: "bg-indigo-500",
    required: false,
    description: "AI provider management and gateway",
    envVars: [
      { key: "PORTKEY_API_KEY", description: "API key for Portkey services" },
    ],
    setupSteps: [
      "Sign up at portkey.ai",
      "Create virtual keys for AI providers",
      "Configure routing and fallbacks",
      "Set up monitoring and analytics",
    ],
    docs: "https://portkey.ai/docs",
  },
  {
    name: "Scrapybara",
    icon: <Key className="h-6 w-6" />,
    color: "bg-pink-500",
    required: false,
    description: "Web scraping and browser automation",
    envVars: [
      { key: "SCRAPYBARA_API_KEY", description: "API key for Scrapybara services" },
    ],
    setupSteps: [
      "Create account at scrapybara.com",
      "Generate API key",
      "Configure scraping limits",
      "Test with sample scrapes",
    ],
    docs: "https://scrapybara.com/docs",
  },
  {
    name: "Application URLs",
    icon: <ExternalLink className="h-6 w-6" />,
    color: "bg-gray-500",
    required: true,
    description: "URLs for application services and API communication",
    envVars: [
      { key: "NEXT_PUBLIC_APP_URL", description: "Main application URL (e.g., http://localhost:3000)" },
      { key: "NEXT_PUBLIC_API_SERVER_URL", description: "API server URL (e.g., http://localhost:3001)" },
      { key: "API_SERVER_URL", description: "Server-side API URL (fallback)" },
      { key: "API_BASE_URL", description: "Base URL for workflow API calls" },
      { key: "API_KEY", description: "Internal API authentication key" },
      { key: "SERVICE_API_KEY", description: "Service-to-service authentication" },
    ],
    setupSteps: [
      "Set localhost URLs for development",
      "Configure production URLs when deploying",
      "Generate secure API keys",
      "Update webhook endpoints",
    ],
    docs: "",
  },
];

const supabaseSetup = {
  database: [
    {
      title: "1. Database Setup",
      steps: [
        "Navigate to your Supabase project dashboard",
        "Go to SQL Editor",
        "Run the migrations from /supabase/migrations",
        "Verify tables are created correctly",
      ],
    },
    {
      title: "2. Authentication Configuration",
      steps: [
        "Go to Authentication > Settings",
        "Enable Email provider",
        "Configure Magic Link settings",
        "Set up redirect URLs for your domain",
        "Configure password requirements",
      ],
    },
    {
      title: "3. Storage Setup",
      steps: [
        "Go to Storage section",
        "Create buckets for: avatars, assets, documents",
        "Configure bucket policies (public/private)",
        "Set up CORS if needed",
      ],
    },
    {
      title: "4. Row Level Security (RLS)",
      steps: [
        "Enable RLS on all tables",
        "Create policies for user access",
        "Test policies with different user roles",
        "Review security documentation",
      ],
    },
  ],
  envExample: `# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Supabase Additional (Optional)
SUPABASE_JWT_SECRET=your-jwt-secret
SUPABASE_DB_PASSWORD=your-db-password`,
};

export default function Dependencies() {
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
            Dependencies & Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            External services and API keys required to run Makinari. Some are required, others are optional based on features you want to use.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-background border border-border rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-3 rounded-lg ${service.color} text-white`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{service.name}</h3>
                </div>
                {service.required ? (
                  <span className="px-2 py-1 text-xs bg-red-100 text-red-800 rounded font-medium">
                    Required
                  </span>
                ) : (
                  <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded font-medium">
                    Optional
                  </span>
                )}
              </div>

              <p className="text-sm text-muted-foreground mb-4">
                {service.description}
              </p>

              <div className="space-y-3">
                <h4 className="text-sm font-medium">Environment Variables:</h4>
                {service.envVars.map((env) => (
                  <div key={env.key} className="text-xs">
                    <code className="block bg-muted px-2 py-1 rounded text-accent">
                      {env.key}
                    </code>
                    <p className="text-muted-foreground mt-1">{env.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-border">
                <a
                  href={service.docs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-sm text-accent hover:text-accent/80 transition-colors"
                >
                  <span>Documentation</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Supabase Detailed Setup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-2xl p-8 mb-16"
        >
          <div className="flex items-center space-x-3 mb-6">
            <Database className="h-8 w-8 text-green-600" />
            <h2 className="text-3xl font-bold">Supabase Setup Guide</h2>
          </div>

          <p className="text-muted-foreground mb-8">
            Supabase is the backbone of Makinari, providing database, authentication, storage, and real-time capabilities. 
            Follow this comprehensive guide to set it up correctly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {supabaseSetup.database.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-lg p-6"
              >
                <h3 className="font-semibold mb-4 text-green-600">{section.title}</h3>
                <ul className="space-y-2">
                  {section.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-start space-x-2 text-sm">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div>
            <h3 className="font-semibold mb-4">Environment Variables Example:</h3>
            <CodeBlock
              code={supabaseSetup.envExample}
              language="bash"
              filename=".env.local"
            />
          </div>

          <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
            <div className="flex items-start space-x-2">
              <AlertCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-yellow-800 dark:text-yellow-200 mb-1">Security Note</h4>
                <p className="text-sm text-yellow-700 dark:text-yellow-300">
                  Never commit your <code className="px-1 py-0.5 bg-yellow-100 dark:bg-yellow-900 rounded">SUPABASE_SERVICE_ROLE_KEY</code> to version control. 
                  This key has full database access and should only be used server-side.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Complete .env.local Template */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-background border border-border rounded-2xl p-8"
        >
          <h2 className="text-2xl font-bold mb-6">Complete Environment Template</h2>
          <p className="text-muted-foreground mb-6">
            Copy this template to your <code className="px-2 py-1 bg-muted rounded">.env.local</code> file and fill in your values:
          </p>

          <CodeBlock
            code={`# ========================================
# REQUIRED SERVICES
# ========================================

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
SUPABASE_JWT_SECRET=your-jwt-secret
SUPABASE_DB_PASSWORD=your-db-password

# Temporal Cloud
TEMPORAL_SERVER_URL=your-temporal-server.tmprl.cloud:7233
TEMPORAL_NAMESPACE=your-namespace
WORKFLOW_TASK_QUEUE=default
TEMPORAL_API_KEY=your-temporal-cloud-api-key
TEMPORAL_TLS=true

# Stripe Payments
STRIPE_SECRET_KEY=sk_test_your-secret-key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your-publishable-key
STRIPE_PUBLISHABLE_KEY=pk_test_your-publishable-key
STRIPE_WEBHOOK_SECRET=whsec_your-webhook-secret
STRIPE_STARTUP_PRICE_ID=price_xxxxx
STRIPE_ENTERPRISE_PRICE_ID=price_xxxxx

# OpenAI
OPENAI_API_KEY=sk-your-openai-key
OPENAI_ORG_ID=org-your-org-id

# Application URLs (REQUIRED)
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_SERVER_URL=http://localhost:3001
API_SERVER_URL=http://localhost:3001
API_BASE_URL=http://localhost:3001
API_KEY=your-internal-api-key
SERVICE_API_KEY=your-service-api-key

# ========================================
# OPTIONAL SERVICES
# ========================================

# Azure OpenAI (Alternative AI Provider)
MICROSOFT_AZURE_OPENAI_API_KEY=your-azure-key
MICROSOFT_AZURE_OPENAI_ENDPOINT=https://your-resource.openai.azure.com/
MICROSOFT_AZURE_OPENAI_DEPLOYMENT=gpt-4o
MICROSOFT_AZURE_OPENAI_API_VERSION=2024-08-01-preview
MICROSOFT_AZURE_OPENAI_IMAGES_DEPLOYMENT=dall-e-3

# Twilio (SMS/WhatsApp)
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=your-auth-token
TWILIO_PHONE_NUMBER=+1234567890
TWILIO_WHATSAPP_NUMBER=whatsapp:+1234567890

# SendGrid (Email Delivery)
SENDGRID_API_KEY=SG.your-sendgrid-key
SENDGRID_FROM_EMAIL=noreply@yourdomain.com

# Google Maps (Location Services)
GOOGLE_MAPS_API_KEY=your-google-maps-key

# NeverBounce (Email Validation)
NEVERBOUNCE_API_KEY=your-neverbounce-key

# Portkey (AI Provider Management)
PORTKEY_API_KEY=your-portkey-key

# Scrapybara (Web Scraping)
SCRAPYBARA_API_KEY=your-scrapybara-key
ROBOT_SDK_PROVIDER=azure

# Email Validator Configuration
EMAIL_VALIDATOR_CONNECT_TIMEOUT_MS=8000
EMAIL_VALIDATOR_TEMPORARY_AS_RISKY=0
EMAIL_VALIDATOR_TREAT_POLICY_AS_RISKY=1
EMAIL_VALIDATOR_DELIVERABLE_ON_CONNECT=0
EMAIL_VALIDATOR_DELIVERABLE_ON_CONNECT_DOMAINS=

# Scheduling Configuration
SCHEDULE_STRATEGIC_ACCOUNTS=false

# ========================================
# APPLICATION SETTINGS
# ========================================

# Environment
NODE_ENV=development

# Logging
LOG_LEVEL=info
NEXT_PUBLIC_LOG_LEVEL=info
NEXT_PUBLIC_DEBUG=false

# Vercel (Automatic in Vercel deployments)
# VERCEL=1
# VERCEL_ENV=production`}
            language="bash"
            filename=".env.local"
            showLineNumbers={true}
          />
        </motion.div>
      </div>
    </section>
  );
}
