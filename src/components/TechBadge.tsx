interface TechBadgeProps {
  name: string;
  delay?: number;
}

export const TechBadge = ({ name, delay = 0 }: TechBadgeProps) => {
  return (
    <div
      className="glass px-6 py-3 rounded-full hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 hover:scale-110 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <span className="font-medium text-foreground">{name}</span>
    </div>
  );
};
