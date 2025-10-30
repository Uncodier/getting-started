"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Architecture", href: "/architecture" },
  { name: "Deployment", href: "/deployment" },
  { name: "Dependencies", href: "/dependencies" },
];

const repositories = [
  { name: "market-fit", href: "https://github.com/your-org/market-fit", description: "Growth Engine" },
  { name: "api", href: "https://github.com/your-org/api", description: "API Server" },
  { name: "workflows", href: "https://github.com/your-org/workflows", description: "Temporal Workflows" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/MAKINARI.png"
                alt="Makinari Logo"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-accent",
                  pathname === item.href
                    ? "text-accent"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Repository Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
                <Github className="h-4 w-4" />
                <span>Repositories</span>
              </button>
              
              {/* Invisible bridge to prevent menu from closing when moving mouse */}
              <div className="absolute top-full left-0 right-0 h-1 bg-transparent"></div>
              
              <div className="absolute top-full left-0 mt-1 w-64 bg-background border border-border rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50 pointer-events-none group-hover:pointer-events-auto">
                <div className="p-2">
                  {repositories.map((repo) => (
                    <a
                      key={repo.name}
                      href={repo.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-md hover:bg-muted transition-colors"
                    >
                      <div>
                        <div className="font-medium text-sm text-foreground">{repo.name}</div>
                        <div className="text-xs text-muted-foreground">{repo.description}</div>
                      </div>
                      <ExternalLink className="h-3 w-3 text-muted-foreground" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-accent hover:bg-muted transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background border-t border-border"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block px-3 py-2 rounded-md text-base font-medium transition-colors",
                      pathname === item.href
                        ? "text-accent bg-accent/10"
                        : "text-muted-foreground hover:text-accent hover:bg-muted"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                
                <div className="pt-4 border-t border-border">
                  <div className="px-3 py-2 text-sm font-medium text-muted-foreground">
                    Repositories
                  </div>
                  {repositories.map((repo) => (
                    <a
                      key={repo.name}
                      href={repo.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-accent hover:bg-muted transition-colors"
                    >
                      <div>
                        <div className="font-medium">{repo.name}</div>
                        <div className="text-xs">{repo.description}</div>
                      </div>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
