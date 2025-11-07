import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

interface PortfolioLinkProps {
  url: string;
  title: string;
  description: string;
  delay?: number;
}

export const PortfolioLink = ({ url, title, description, delay = 0 }: PortfolioLinkProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="glass group cursor-pointer transition-all duration-500 hover:glow-primary hover:-translate-y-2 animate-fade-in"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${delay}ms` }}
    >
      <a href={url} target="_blank" rel="noopener noreferrer">
        <CardContent className="p-8">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-gradient transition-all">
                {title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{description}</p>
            </div>
            <div className="flex-shrink-0">
              <div className={`w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-300 ${
                isHovered ? "bg-gradient-to-br from-primary to-secondary scale-110 rotate-45" : ""
              }`}>
                <ExternalLink
                  className={`h-5 w-5 transition-all ${
                    isHovered ? "text-white -rotate-45" : "text-primary"
                  }`}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </a>
    </Card>
  );
};
