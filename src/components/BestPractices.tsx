"use client";

import { motion } from "framer-motion";
import { CheckCircle, AlertTriangle, Code, TestTube, GitBranch, Shield, FileText, Users } from "lucide-react";
import CodeBlock from "./CodeBlock";

const practices = [
  {
    category: "Code Organization",
    icon: <Code className="h-6 w-6" />,
    color: "bg-blue-500",
    items: [
      {
        title: "Keep files under 500 lines",
        description: "Maintain readability and manageability by keeping individual files concise.",
        example: "Split large components into smaller, focused modules.",
        good: true,
      },
      {
        title: "Use ES Modules consistently",
        description: "Import/export syntax should be consistent across the project.",
        example: "import { Component } from './Component' instead of require()",
        good: true,
      },
      {
        title: "Follow TypeScript best practices",
        description: "Use proper typing, interfaces, and avoid any types.",
        example: "interface User { id: string; name: string; }",
        good: true,
      },
    ],
  },
  {
    category: "Testing",
    icon: <TestTube className="h-6 w-6" />,
    color: "bg-green-500",
    items: [
      {
        title: "Write comprehensive tests",
        description: "Use Jest for unit tests and React Testing Library for component tests.",
        example: "test('renders user data correctly', () => { ... })",
        good: true,
      },
      {
        title: "Test edge cases and error states",
        description: "Ensure your code handles unexpected inputs gracefully.",
        example: "Test with null, undefined, empty strings, and invalid data.",
        good: true,
      },
      {
        title: "Maintain high test coverage",
        description: "Aim for at least 80% code coverage on critical paths.",
        example: "Use coverage reports to identify untested code.",
        good: true,
      },
    ],
  },
  {
    category: "Git Workflow",
    icon: <GitBranch className="h-6 w-6" />,
    color: "bg-purple-500",
    items: [
      {
        title: "Use descriptive commit messages",
        description: "Write clear, concise commit messages that explain what changed.",
        example: "feat: add user authentication with magic links",
        good: true,
      },
      {
        title: "Create feature branches",
        description: "Work on features in separate branches before merging.",
        example: "git checkout -b feature/user-dashboard",
        good: true,
      },
      {
        title: "Review code before merging",
        description: "Use pull requests to review code changes.",
        example: "Create PRs for all changes, even small ones.",
        good: true,
      },
    ],
  },
  {
    category: "Security",
    icon: <Shield className="h-6 w-6" />,
    color: "bg-red-500",
    items: [
      {
        title: "Never commit secrets",
        description: "Use environment variables for sensitive data.",
        example: "process.env.STRIPE_SECRET_KEY instead of hardcoded keys",
        good: true,
      },
      {
        title: "Validate all inputs",
        description: "Use Zod or similar libraries to validate user inputs.",
        example: "const schema = z.object({ email: z.string().email() })",
        good: true,
      },
      {
        title: "Use HTTPS in production",
        description: "Ensure all communications are encrypted.",
        example: "Configure SSL certificates and redirect HTTP to HTTPS",
        good: true,
      },
    ],
  },
  {
    category: "Documentation",
    icon: <FileText className="h-6 w-6" />,
    color: "bg-orange-500",
    items: [
      {
        title: "Write clear README files",
        description: "Include setup instructions, API documentation, and examples.",
        example: "Document installation, configuration, and usage steps.",
        good: true,
      },
      {
        title: "Comment complex logic",
        description: "Explain why, not what, in your code comments.",
        example: "// Using debounce to prevent excessive API calls",
        good: true,
      },
      {
        title: "Keep documentation updated",
        description: "Update docs when code changes.",
        example: "Review and update README files with each release.",
        good: true,
      },
    ],
  },
  {
    category: "Performance",
    icon: <Users className="h-6 w-6" />,
    color: "bg-indigo-500",
    items: [
      {
        title: "Optimize bundle size",
        description: "Use dynamic imports and code splitting.",
        example: "const Component = lazy(() => import('./Component'))",
        good: true,
      },
      {
        title: "Implement proper caching",
        description: "Cache API responses and static assets appropriately.",
        example: "Use React Query for server state management",
        good: true,
      },
      {
        title: "Monitor performance metrics",
        description: "Track Core Web Vitals and other performance indicators.",
        example: "Use tools like Lighthouse and Web Vitals",
        good: true,
      },
    ],
  },
];

const antiPatterns = [
  {
    title: "Avoid large, monolithic components",
    description: "Components should have a single responsibility.",
    example: "❌ 500+ line component with multiple concerns",
    solution: "✅ Split into smaller, focused components",
  },
  {
    title: "Don't use any types in TypeScript",
    description: "Defeats the purpose of using TypeScript.",
    example: "❌ const data: any = fetchData()",
    solution: "✅ const data: UserData = fetchData()",
  },
  {
    title: "Avoid inline styles and hardcoded values",
    description: "Use CSS classes and design tokens instead.",
    example: "❌ style={{ color: '#3ECF8E', fontSize: '16px' }}",
    solution: "✅ className='text-accent text-base'",
  },
  {
    title: "Don't ignore error handling",
    description: "Always handle potential errors gracefully.",
    example: "❌ fetch(url).then(data => processData(data))",
    solution: "✅ fetch(url).then(data => processData(data)).catch(handleError)",
  },
];

export default function BestPractices() {
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
            Best Practices
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Guidelines and recommendations for developing, testing, and maintaining the Makinari platform.
          </p>
        </motion.div>

        {/* Practices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {practices.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-background border border-border rounded-2xl p-6"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className={`p-3 rounded-lg ${category.color} text-white`}>
                  {category.icon}
                </div>
                <h2 className="text-xl font-semibold">{category.category}</h2>
              </div>

              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (categoryIndex * 0.1) + (itemIndex * 0.05) }}
                    className="space-y-2"
                  >
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-sm mb-1">{item.title}</h3>
                        <p className="text-xs text-muted-foreground mb-2">{item.description}</p>
                      </div>
                    </div>
                    <div className="relative group">
                      <div className="bg-black/90 text-green-400 font-mono text-xs p-2 rounded overflow-x-auto">
                        <code className="whitespace-nowrap">{item.example}</code>
                      </div>
                      <button
                        onClick={() => navigator.clipboard.writeText(item.example)}
                        className="absolute top-1 right-1 p-1 bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white rounded opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Anti-Patterns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-muted/30 rounded-2xl p-8"
        >
          <div className="flex items-center space-x-3 mb-8">
            <AlertTriangle className="h-6 w-6 text-orange-500" />
            <h2 className="text-2xl font-semibold">Common Anti-Patterns to Avoid</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {antiPatterns.map((pattern, index) => (
              <motion.div
                key={pattern.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background border border-border rounded-lg p-4"
              >
                <h3 className="font-medium mb-2">{pattern.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{pattern.description}</p>
                
                <div className="space-y-2">
                  <div className="relative group">
                    <div className="bg-black/90 p-2 rounded overflow-x-auto">
                      <code className="text-xs text-red-400 font-mono whitespace-nowrap block">{pattern.example}</code>
                    </div>
                    <button
                      onClick={() => navigator.clipboard.writeText(pattern.example)}
                      className="absolute top-1 right-1 p-1 bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white rounded opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                  <div className="relative group">
                    <div className="bg-black/90 p-2 rounded overflow-x-auto">
                      <code className="text-xs text-green-400 font-mono whitespace-nowrap block">{pattern.solution}</code>
                    </div>
                    <button
                      onClick={() => navigator.clipboard.writeText(pattern.solution)}
                      className="absolute top-1 right-1 p-1 bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white rounded opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Development Workflow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-background border border-border rounded-2xl p-8"
        >
          <h2 className="text-2xl font-semibold mb-6">Recommended Development Workflow</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4">Daily Workflow</h3>
              <div className="space-y-3">
                {[
                  "Pull latest changes from main branch",
                  "Create feature branch for new work",
                  "Write tests before implementing features",
                  "Commit changes with descriptive messages",
                  "Push branch and create pull request",
                  "Address review feedback",
                  "Merge after approval"
                ].map((step, index) => (
                  <div key={step} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xs font-semibold">
                      {index + 1}
                    </div>
                    <span className="text-sm">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Code Quality Checklist</h3>
              <div className="space-y-2">
                {[
                  "All tests pass",
                  "Code follows project conventions",
                  "No console.log statements",
                  "Proper error handling",
                  "TypeScript types are correct",
                  "Documentation is updated",
                  "Performance is acceptable"
                ].map((item) => (
                  <div key={item} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
