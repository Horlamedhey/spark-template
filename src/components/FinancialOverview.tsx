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
  // Calculate percentages for the circular chart
  const total = data.breakdown.reduce((sum, item) => sum + item.value, 0);
  let cumulativePercentage = 0;

  return (
    <Card className="p-6 h-fit">
      <div className="flex items-center justify-between gap-4">
        {/* Circular Progress Chart */}
        <div className="relative w-24 h-24 flex-shrink-0">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
            <circle
              cx="60"
              cy="60"
              r="50"
              fill="none"
              stroke="#f1f5f9"
              strokeWidth="8"
            />
            {data.breakdown.map((item, index) => {
              const percentage = (item.value / total) * 100;
              const strokeDasharray = `${(percentage / 100) * 314.16} 314.16`;
              const strokeDashoffset = -((cumulativePercentage / 100) * 314.16);
              
              const result = (
                <circle
                  key={index}
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke={item.color}
                  strokeWidth="8"
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                />
              );
              
              cumulativePercentage += percentage;
              return result;
            })}
          </svg>
          
          {/* Center Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-[10px] text-muted-foreground font-normal">Total</div>
            <div className="text-sm font-semibold">{data.total}M</div>
          </div>
        </div>

        {/* Legend */}
        <div className="space-y-1.5 flex-1">
          {data.breakdown.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div 
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0" 
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-xs text-muted-foreground font-normal">{item.name}</span>
              </div>
              <div className="text-xs font-medium">{item.value} MCFA</div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}