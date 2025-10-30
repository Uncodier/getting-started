"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Heart, Shield, Users, Code, Bug, FileText, Mail } from "lucide-react";
import CodeBlock from "./CodeBlock";

const contributionTypes = [
  {
    title: "Bug Reports",
    icon: <Bug className="h-6 w-6" />,
    color: "bg-red-500",
    description: "Help us identify and fix issues",
    steps: [
      "Check existing issues first",
      "Use the bug report template",
      "Provide clear reproduction steps",
      "Include environment details"
    ],
  },
  {
    title: "Feature Requests",
    icon: <Code className="h-6 w-6" />,
    color: "bg-blue-500",
    description: "Suggest new features and improvements",
    steps: [
      "Check existing feature requests",
      "Describe the use case clearly",
      "Explain the expected behavior",
      "Consider implementation complexity"
    ],
  },
  {
    title: "Code Contributions",
    icon: <Github className="h-6 w-6" />,
    color: "bg-green-500",
    description: "Submit code improvements and fixes",
    steps: [
      "Fork the repository",
      "Create a feature branch",
      "Follow coding standards",
      "Submit a pull request"
    ],
  },
  {
    title: "Documentation",
    icon: <FileText className="h-6 w-6" />,
    color: "bg-purple-500",
    description: "Improve documentation and guides",
    steps: [
      "Identify unclear sections",
      "Write clear explanations",
      "Add code examples",
      "Update outdated information"
    ],
  },
];

const licenseInfo = {
  name: "GNU Affero General Public License v3.0 (AGPL-3.0)",
  summary: "A copyleft license that requires derivative works to be open source",
  keyPoints: [
    {
      point: "Commercial Use",
      allowed: true,
      description: "You can use this software commercially"
    },
    {
      point: "Modification",
      allowed: true,
      description: "You can modify the code"
    },
    {
      point: "Distribution",
      allowed: true,
      description: "You can distribute the software"
    },
    {
      point: "Patent Use",
      allowed: true,
      description: "Patent rights are granted to users"
    },
    {
      point: "Proprietary Derivatives",
      allowed: false,
      description: "You cannot create closed-source derivatives"
    },
    {
      point: "Network Use without Source",
      allowed: false,
      description: "If used over a network, source code must be available"
    }
  ],
  whyAGPL: [
    "Prevents direct competition using our code",
    "Ensures all improvements are shared with the community",
    "Protects network-based applications like Makinari",
    "Maintains open source ecosystem integrity"
  ]
};

export default function Contributing() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Contributing to Makinari
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join our open source community and help build the future of AI-powered growth platforms.
          </p>
        </motion.div>

        {/* Contribution Types */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {contributionTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + (index * 0.1), duration: 0.6 }}
              className="bg-background border border-border rounded-2xl p-6 text-center"
            >
              <div className={`w-12 h-12 ${type.color} rounded-lg flex items-center justify-center text-white mx-auto mb-4`}>
                {type.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{type.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{type.description}</p>
              <ul className="text-xs text-muted-foreground space-y-1">
                {type.steps.map((step, stepIndex) => (
                  <li key={stepIndex} className="flex items-start space-x-2">
                    <span className="text-accent">•</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Getting Started */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-muted/30 rounded-2xl p-8 mb-16"
        >
          <h2 className="text-2xl font-semibold mb-6">Getting Started</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4">Quick Start Guide</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xs font-semibold">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium">Fork the Repository</h4>
                    <p className="text-sm text-muted-foreground">Create your own copy of the project</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xs font-semibold">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium">Clone Your Fork</h4>
                    <p className="text-sm text-muted-foreground">Download the code to your local machine</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xs font-semibold">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium">Create a Branch</h4>
                    <p className="text-sm text-muted-foreground">Start working on your feature or fix</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xs font-semibold">
                    4
                  </div>
                  <div>
                    <h4 className="font-medium">Submit a PR</h4>
                    <p className="text-sm text-muted-foreground">Create a pull request for review</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Development Setup</h3>
              <CodeBlock
                code={`# Fork and clone the repository
git clone https://github.com/your-username/market-fit.git
cd market-fit

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Start development server
npm run dev

# Run tests
npm test`}
                language="bash"
                showLineNumbers={true}
              />
            </div>
          </div>
        </motion.div>

        {/* Code of Conduct */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-background border border-border rounded-2xl p-8 mb-16"
        >
          <div className="flex items-center space-x-3 mb-6">
            <Heart className="h-6 w-6 text-red-500" />
            <h2 className="text-2xl font-semibold">Code of Conduct</h2>
          </div>
          
          <div className="prose prose-sm max-w-none">
            <p className="text-muted-foreground mb-4">
              We are committed to providing a welcoming and inclusive environment for all contributors. 
              By participating in this project, you agree to abide by our Code of Conduct.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-3">We Encourage</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Respectful and constructive feedback</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Collaborative problem-solving</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Diverse perspectives and experiences</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Professional and courteous communication</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium mb-3">We Prohibit</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <span className="text-red-500">✗</span>
                    <span>Harassment or discrimination</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-red-500">✗</span>
                    <span>Inappropriate or offensive language</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-red-500">✗</span>
                    <span>Personal attacks or trolling</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-red-500">✗</span>
                    <span>Spam or off-topic discussions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* License Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-muted/30 rounded-2xl p-8 mb-16"
        >
          <div className="flex items-center space-x-3 mb-6">
            <Shield className="h-6 w-6 text-accent" />
            <h2 className="text-2xl font-semibold">License: {licenseInfo.name}</h2>
          </div>
          
          <p className="text-muted-foreground mb-6">
            {licenseInfo.summary}. This license ensures that all improvements and modifications 
            to Makinari remain open source and benefit the entire community.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4">What You Can Do</h3>
              <div className="space-y-3">
                {licenseInfo.keyPoints
                  .filter(point => point.allowed)
                  .map((point, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <span className="text-green-500 text-lg">✓</span>
                      <div>
                        <div className="font-medium">{point.point}</div>
                        <div className="text-sm text-muted-foreground">{point.description}</div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">What You Cannot Do</h3>
              <div className="space-y-3">
                {licenseInfo.keyPoints
                  .filter(point => !point.allowed)
                  .map((point, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <span className="text-red-500 text-lg">✗</span>
                      <div>
                        <div className="font-medium">{point.point}</div>
                        <div className="text-sm text-muted-foreground">{point.description}</div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-background rounded-lg border border-border">
            <h4 className="font-medium mb-3">Why AGPL-3.0?</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {licenseInfo.whyAGPL.map((reason, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-accent">•</span>
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Community */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Users className="h-6 w-6 text-accent" />
            <h2 className="text-2xl font-semibold">Join Our Community</h2>
          </div>
          
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Connect with other contributors, get help, and stay updated on the latest developments.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/your-org/makinari"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 btn-primary font-medium rounded-lg"
            >
              <Github className="h-5 w-5" />
              <span>GitHub</span>
              <ExternalLink className="h-4 w-4" />
            </a>
            
            <a
              href="mailto:support@makinari.com"
              className="inline-flex items-center space-x-2 px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-muted transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span>Contact Us</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
