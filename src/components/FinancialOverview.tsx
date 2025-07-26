import { Card } from "@/components/ui/card";

interface FinancialOverviewProps {
  data: {
    total: number;
    breakdown: Array<{
      name: string;
      value: number;
      color: string;
    }>;
  };
}

export function FinancialOverview({ data }: FinancialOverviewProps) {
  const total = data.total;
  let currentAngle = 0;

  return (
    <Card className="p-6">
      <div className="flex items-center justify-center">
        <div className="relative w-32 h-32">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            {data.breakdown.map((item, index) => {
              const percentage = (item.value / total) * 100;
              const strokeDasharray = `${percentage} ${100 - percentage}`;
              const strokeDashoffset = -currentAngle;
              
              const element = (
                <circle
                  key={index}
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke={item.color}
                  strokeWidth="8"
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={strokeDashoffset}
                  className="transition-all duration-300"
                />
              );
              
              currentAngle += percentage;
              return element;
            })}
          </svg>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xs text-muted-foreground">Total</span>
            <span className="text-2xl font-bold text-primary">{total}M</span>
          </div>
        </div>
      </div>
      
      <div className="mt-6 space-y-2">
        {data.breakdown.map((item, index) => (
          <div key={index} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: item.color }}
              />
              <span className="text-muted-foreground">{item.name}</span>
            </div>
            <span className="font-medium">{item.value} MCFA</span>
          </div>
        ))}
      </div>
    </Card>
  );
}