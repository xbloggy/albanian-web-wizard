import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  delay?: number;
}

export const StatCard = ({ icon: Icon, value, label, delay = 0 }: StatCardProps) => {
  return (
    <Card 
      className="glass hover:glow-primary transition-all duration-500 hover:-translate-y-2"
      style={{ animationDelay: `${delay}ms` }}
    >
      <CardContent className="p-6 text-center">
        <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-primary">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <div className="text-3xl font-bold text-gradient mb-2">{value}</div>
        <p className="text-sm text-muted-foreground">{label}</p>
      </CardContent>
    </Card>
  );
};
