import { ALL_TECH } from './data';

export default function TechStack() {
  return (
    <div className="mt-12 bg-muted/30 rounded-2xl p-6 lg:p-8">
      <h3 className="text-xl lg:text-2xl font-semibold mb-4 lg:mb-6 text-center">Tech Stack</h3>
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {ALL_TECH.map((t) => (
          <span key={t} className="px-3 py-1 text-xs sm:text-sm bg-muted text-muted-foreground rounded-full">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}


