import { Card } from "@/components/ui/card";
import { Calendar, Warning, ArrowRight } from "@phosphor-icons/react";

interface StatusCardProps {
  title: string;
  value: string;
  icon: string;
  color: string;
}

const iconMap = {
  calendar: Calendar,
  warning: Warning,
  "arrow-right": ArrowRight,
};

export function StatusCard({ title, value, icon, color }: StatusCardProps) {
  const IconComponent = iconMap[icon as keyof typeof iconMap];
  
  const colorClasses = {
    blue: "text-blue-600 bg-blue-50",
    yellow: "text-yellow-600 bg-yellow-50",
    red: "text-red-600 bg-red-50",
  };

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-muted-foreground mb-1 font-normal">{title}</p>
          <p className="text-xl font-semibold">{value}</p>
        </div>
        <div className={`p-3 rounded-lg ${colorClasses[color as keyof typeof colorClasses] || colorClasses.blue}`}>
          <IconComponent size={20} />
        </div>
      </div>
    </Card>
  );
}