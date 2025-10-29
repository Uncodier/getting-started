"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";
import { cn, copyToClipboard } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  className?: string;
  showLineNumbers?: boolean;
}

export default function CodeBlock({
  code,
  language = "bash",
  filename,
  className,
  showLineNumbers = false,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await copyToClipboard(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split("\n");

  return (
    <div className={cn("relative group", className)}>
      {/* Header */}
      {(filename || language) && (
        <div className="flex items-center justify-between px-4 py-2 bg-muted border-b border-border rounded-t-lg">
          <div className="flex items-center space-x-2">
            {filename && (
              <span className="text-sm font-medium text-foreground">{filename}</span>
            )}
            {language && (
              <span className="px-2 py-1 text-xs font-medium bg-accent/10 text-accent rounded">
                {language}
              </span>
            )}
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center space-x-1 px-2 py-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            {copied ? (
              <>
                <Check className="h-3 w-3" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-3 w-3" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      )}

      {/* Code Content */}
      <div className="relative">
        <pre className="p-4 bg-black text-green-400 font-mono text-sm overflow-x-auto rounded-b-lg">
          <code>
            {showLineNumbers ? (
              <div className="flex">
                <div className="flex flex-col text-muted-foreground/50 pr-4 select-none">
                  {lines.map((_, index) => (
                    <span key={index} className="leading-6">
                      {String(index + 1).padStart(2, " ")}
                    </span>
                  ))}
                </div>
                <div className="flex-1">
                  {lines.map((line, index) => (
                    <div key={index} className="leading-6">
                      {line || "\u00A0"}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              lines.map((line, index) => (
                <div key={index} className="leading-6">
                  {line || "\u00A0"}
                </div>
              ))
            )}
          </code>
        </pre>

        {/* Copy button for blocks without header */}
        {!filename && !language && (
          <motion.button
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            onClick={handleCopy}
            className="absolute top-2 right-2 p-2 bg-muted/80 hover:bg-muted text-muted-foreground hover:text-foreground rounded transition-colors"
          >
            {copied ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </motion.button>
        )}
      </div>
    </div>
  );
}

// Inline code component
export function InlineCode({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <code
      className={cn(
        "px-1.5 py-0.5 bg-muted text-muted-foreground font-mono text-sm rounded",
        className
      )}
    >
      {children}
    </code>
  );
}
