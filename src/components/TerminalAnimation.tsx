"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, ChevronRight } from "lucide-react";

interface TerminalAnimationProps {
  commands: string[];
  className?: string;
}

export default function TerminalAnimation({ commands, className }: TerminalAnimationProps) {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentCommandIndex >= commands.length) {
      setCurrentCommandIndex(0);
      setCurrentText("");
      setIsTyping(true);
      return;
    }

    const command = commands[currentCommandIndex];
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex < command.length) {
        setCurrentText(command.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
        
        // Wait before moving to next command
        setTimeout(() => {
          setCurrentCommandIndex(prev => prev + 1);
          setCurrentText("");
          setIsTyping(true);
        }, 2000);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, [currentCommandIndex, commands]);

  return (
    <div className={`relative ${className}`}>
      {/* Terminal Header */}
      <div className="flex items-center space-x-2 px-4 py-3 bg-gray-900 rounded-t-lg border-b border-gray-700">
        <div className="flex space-x-1">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="flex items-center space-x-2 text-gray-400 text-sm">
          <Terminal className="h-4 w-4" />
          <span>Terminal</span>
        </div>
      </div>

      {/* Terminal Content */}
      <div className="bg-black text-green-400 font-mono text-sm p-4 rounded-b-lg min-h-[200px]">
        <div className="space-y-2">
          {/* Previous commands */}
          {commands.slice(0, currentCommandIndex).map((command, index) => (
            <div key={index} className="flex items-center space-x-2">
              <span className="text-blue-400">$</span>
              <span>{command}</span>
            </div>
          ))}
          
          {/* Current typing command */}
          {currentCommandIndex < commands.length && (
            <div className="flex items-center space-x-2">
              <span className="text-blue-400">$</span>
              <span>{currentText}</span>
              {isTyping && (
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="w-2 h-4 bg-green-400"
                />
              )}
            </div>
          )}
        </div>
      </div>

      {/* Floating elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute -top-2 -right-2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium shadow-lg"
      >
        Live Demo
      </motion.div>
    </div>
  );
}
