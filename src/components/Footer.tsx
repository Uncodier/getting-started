"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, ExternalLink, Mail } from "lucide-react";

export default function Footer() {

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
                    <Image
                      src="/MAKINARI_black.png"
                      alt="Makinari Logo"
                      width={120}
                      height={32}
                      className="h-8 w-auto"
                    />
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              An AI-powered marketing analytics and automation platform that transforms how businesses manage leads, campaigns, and growth.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/your-org/makinari"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:support@makinari.com"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Documentation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/architecture" className="text-muted-foreground hover:text-accent transition-colors">
                  Architecture
                </Link>
              </li>
              <li>
                <Link href="/deployment" className="text-muted-foreground hover:text-accent transition-colors">
                  Deployment
                </Link>
              </li>
              <li>
                <Link href="/best-practices" className="text-muted-foreground hover:text-accent transition-colors">
                  Best Practices
                </Link>
              </li>
            </ul>
          </div>

          {/* Repositories */}
          <div>
            <h3 className="font-semibold mb-4">Repositories</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/your-org/market-fit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-muted-foreground hover:text-accent transition-colors"
                >
                  <span>market-fit</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/your-org/api"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-muted-foreground hover:text-accent transition-colors"
                >
                  <span>api</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/your-org/workflows"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-muted-foreground hover:text-accent transition-colors"
                >
                  <span>workflows</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 Makinari. Licensed under AGPL-3.0.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/contributing" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Contributing
              </Link>
              <a
                href="https://github.com/your-org/makinari/blob/main/LICENSE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                License
              </a>
              <a
                href="mailto:security@makinari.com"
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                Security
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
