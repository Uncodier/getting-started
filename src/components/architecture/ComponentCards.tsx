import { Github, ExternalLink } from 'lucide-react';
import { ARCHITECTURE_COMPONENTS } from './data';

type Props = {
  selectedId: string | null;
  onSelect: (id: string) => void;
};

export default function ComponentCards({ selectedId, onSelect }: Props) {
  return (
    <div className="space-y-4 lg:space-y-6">
      <h3 className="text-xl font-semibold">Component Details</h3>
      {ARCHITECTURE_COMPONENTS.map((component) => (
        <div
          key={component.id}
          className={`p-4 rounded-lg border transition-all cursor-pointer ${
            selectedId === component.id
              ? 'border-accent bg-accent/5'
              : 'border-border hover:border-accent/50'
          }`}
          onClick={() => onSelect(component.id)}
        >
          <div className="flex items-center space-x-3 mb-2">
            <div className={`p-2 rounded-lg ${component.color} text-white`}>{
              // keep icon area consistent in size
              <div className="h-6 w-6" />
            }</div>
            <div>
              <h4 className="font-medium">{component.title}</h4>
              <p className="text-sm text-muted-foreground">{component.name}</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-3">{component.description}</p>
          <div className="space-y-2">
            <h5 className="text-xs font-medium text-muted-foreground">Key Features:</h5>
            <div className="flex flex-wrap gap-1">
              {component.features.map((feature) => (
                <span key={feature} className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded">
                  {feature}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-border">
            <a
              href={`https://github.com/your-org/${component.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-sm text-foreground transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="h-4 w-4" />
              <span>View Repository</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}


