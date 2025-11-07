import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

interface PortfolioLinkProps {
  url: string;
  title: string;
  description: string;
}

export const PortfolioLink = ({ url, title, description }: PortfolioLinkProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href={url} target="_blank" rel="noopener noreferrer">
        <CardContent className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {title}
              </h3>
              <p className="text-muted-foreground text-sm">{description}</p>
            </div>
            <ExternalLink
              className={`h-5 w-5 text-muted-foreground transition-all ${
                isHovered ? "text-primary translate-x-1 -translate-y-1" : ""
              }`}
            />
          </div>
        </CardContent>
      </a>
    </Card>
  );
};
