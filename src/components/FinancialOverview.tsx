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
  const circumference = 2 * Math.PI * 40; // radius of 40

  return (
    <Card className="p-6 h-fit">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-muted-foreground mb-1">Répartition budget</h3>
        <div className="text-2xl font-bold text-foreground">{total} MCFA</div>
      </div>

      {/* Donut Chart */}
      <div className="flex items-center justify-center mb-6">
        <div className="relative w-28 h-28">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#f1f5f9"
              strokeWidth="8"
            />
            
            {data.breakdown.map((item, index) => {
              const percentage = (item.value / total) * 100;
              const strokeLength = (percentage / 100) * circumference;
              const strokeOffset = -((currentAngle / 100) * circumference);
              
              const element = (
                <circle
                  key={index}
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke={item.color}
                  strokeWidth="8"
                  strokeDasharray={`${strokeLength} ${circumference}`}
                  strokeDashoffset={strokeOffset}
                  strokeLinecap="round"
                  className="transition-all duration-300"
                />
              );
              
              currentAngle += percentage;
              return element;
            })}
          </svg>
        </div>
      </div>
      
      {/* Legend */}
      <div className="space-y-3">
        {data.breakdown.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div 
                className="w-3 h-3 rounded-full flex-shrink-0" 
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm text-muted-foreground">{item.name}</span>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium text-foreground">{item.value} M</div>
              <div className="text-xs text-muted-foreground">
                {Math.round((item.value / total) * 100)}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}