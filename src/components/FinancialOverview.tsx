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
  return (
    <Card className="p-6 h-fit">
      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Répartition budget</h3>
          <div className="text-2xl font-bold">{data.total} MCFA</div>
        </div>
        
        <div className="space-y-3">
          {data.breakdown.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm text-muted-foreground">{item.name}</span>
              </div>
              <div className="font-medium">{item.value} M</div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}