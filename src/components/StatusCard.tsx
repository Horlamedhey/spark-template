import { Card } from "@/components/ui/card";
import { AlertTriangle, Building, ChevronsRight } from "lucide-react";

interface StatusCardProps {
  title: string;
  value: string;
  icon: string;
}

const iconMap = {
  building: Building,
  warning: AlertTriangle,
  "arrow-right": ChevronsRight,
};

export function StatusCard({ title, value, icon }: StatusCardProps) {
  const IconComponent = iconMap[icon as keyof typeof iconMap];

  return (
    <Card className="p-4 flex-1">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-muted-foreground mb-1 font-normal">
            {title}
          </p>
          <p className="text-xl font-semibold">{value}</p>
        </div>
        {IconComponent && (
          <IconComponent className="w-5 h-5 text-muted-foreground" />
        )}
      </div>
    </Card>
  );
}
