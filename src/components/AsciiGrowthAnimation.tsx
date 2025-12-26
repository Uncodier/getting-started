"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type AsciiGrowthAnimationProps = {
  className?: string;
};

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(media.matches);
    onChange();
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

export default function AsciiGrowthAnimation({ className }: AsciiGrowthAnimationProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const frames = useMemo(
    () => [
      String.raw`            [💬]                   …     …            ↗
      oOOo       OooO         …        …        █
         \\     //                              █ █
          \\   //         [💬]                 █ █ █
           oOOo             …         …      █ █ █ █`,
      String.raw`          [💬]                  …   …                ↗
       OooO       oOOo      …        …        █
         //     \\                              █ █
        //       \\      [💬]                  █ █ █
       OooO                      …           █ █ █ █`,
      String.raw`        [💬]                  …         …           ↗
      oOOo     OooO       …        …         █
        \\     //                                 █ █
         \\   //     [💬]                        █ █ █
          oOOo             …       …           █ █ █ █`,
      String.raw`          [💬]                …     …               ↗
       OooO     oOOo      …        …          █
        //     \\                                   █ █
       //       \\   [💬]                           █ █ █
       OooO                …       …              █ █ █ █`,
      String.raw`        [💬]                …         …            ↗
      oOOo    OooO      …        …           █
        \\     //                                    █ █
         \\   //   [💬]                              █ █ █
          oOOo             …       …              █ █ █ █`,
      String.raw`          [💬]              …   …                   ↗
       OooO    oOOo     …        …           █
        //     \\                                        █ █
       //       \\ [💬]                                   █ █ █
       OooO              …        …                    █ █ █ █`,
    ],
    []
  );

  // Compact frames for very small widths to avoid wrapping
  const compactFrames = useMemo(
    () => [
      String.raw` [💬]   ↗
 oOOo OooO █
  \\  //  █ █
   \\//  █ █ █
   oOOo █ █ █ █`,
      String.raw` [💬]   ↗
 OooO oOOo █
  //  \\  █ █
 //    \\ █ █ █
 OooO   █ █ █ █`,
    ],
    []
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const [frameIndex, setFrameIndex] = useState(0);
  const [useCompact, setUseCompact] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = containerRef.current?.clientWidth ?? window.innerWidth;
      setUseCompact(width < 480);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const id = window.setInterval(() => {
      setFrameIndex((i) => (i + 1) % (useCompact ? compactFrames.length : frames.length));
    }, 333);
    return () => window.clearInterval(id);
  }, [prefersReducedMotion, frames.length, compactFrames.length, useCompact]);

  const current = useCompact ? compactFrames[frameIndex % compactFrames.length] : frames[frameIndex % frames.length];

  const staticFrame = useCompact ? compactFrames[0] : frames[2];

  return (
    <section
      ref={containerRef}
      className={`relative bg-muted/30 border-b border-border overflow-hidden ${className ?? ""}`}
      aria-hidden={prefersReducedMotion ? undefined : true}
      role={prefersReducedMotion ? "img" : undefined}
      aria-label={prefersReducedMotion ? "Animated growth illustration" : undefined}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 min-h-[40vh] sm:min-h-[50vh] lg:min-h-[60vh] flex items-center justify-center">
        <pre
          className="font-mono text-[clamp(10px,2.4vw,22px)] leading-relaxed text-foreground/90 select-none whitespace-pre text-center"
        >
{prefersReducedMotion ? staticFrame : current}
        </pre>
      </div>
    </section>
  );
}


