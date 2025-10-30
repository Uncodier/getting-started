export type ArchitectureComponent = {
  id: string;
  name: string;
  title: string;
  description: string;
  color: string;
  tech: string[];
  features: string[];
  iconKey: 'db' | 'api' | 'wf' | 'cloud';
};

export const ARCHITECTURE_COMPONENTS: ArchitectureComponent[] = [
  {
    id: 'market-fit',
    name: 'Market Fit',
    title: 'Growth Engine',
    description: 'Next.js frontend with analytics dashboard',
    iconKey: 'db',
    color: 'bg-blue-500',
    tech: ['Next.js 15', 'React 18', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    features: ['Analytics Dashboard', 'Lead Management', 'Campaign Tracking', 'ROI Calculator'],
  },
  {
    id: 'api',
    name: 'API Server',
    title: 'AI Agents & Integrations',
    description: 'Backend API with AI agents and email processing',
    iconKey: 'api',
    color: 'bg-green-500',
    tech: ['Next.js 15', 'TypeScript', 'AI SDK', 'Puppeteer', 'SendGrid'],
    features: ['AI Agents', 'Email Processing', 'Web Scraping', 'API Integrations'],
  },
  {
    id: 'workflows',
    name: 'Workflows',
    title: 'Temporal Orchestration',
    description: 'Background jobs and workflow orchestration',
    iconKey: 'wf',
    color: 'bg-purple-500',
    tech: ['Temporal.io', 'TypeScript', 'Node.js', 'Supabase'],
    features: ['Scheduled Jobs', 'Workflow Management', 'Task Queues', 'Error Handling'],
  },
  {
    id: 'supabase',
    name: 'Supabase',
    title: 'Database & Auth',
    description: 'PostgreSQL database with real-time subscriptions',
    iconKey: 'cloud',
    color: 'bg-orange-500',
    tech: ['PostgreSQL', 'Real-time', 'Auth', 'Storage', 'Edge Functions'],
    features: ['User Authentication', 'Real-time Data', 'File Storage', 'Edge Functions'],
  },
];

export const ALL_TECH = Array.from(
  new Set(ARCHITECTURE_COMPONENTS.flatMap((c) => c.tech))
);


