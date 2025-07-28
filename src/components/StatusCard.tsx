import { Card } from "@/components/ui/card";
import { AlertTriangle, ArrowRight, Building } from "lucide-react";

interface StatusCardProps {
  title: string;
  value: string;
  icon: string;
  color: string;
}

const iconMap = {
  building: Building,
  warning: AlertTriangle,
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
          <p className="mb-1 text-xs font-normal text-muted-foreground">
            {title}
          </p>
          <p className="text-xl font-semibold">{value}</p>
        </div>
        <div
          className={`p-3 rounded-lg ${
            colorClasses[color as keyof typeof colorClasses] ||
            colorClasses.blue
          }`}
        >
          <IconComponent size={20} />
        </div>
      </div>
    </Card>
  );
}
