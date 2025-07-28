import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

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
    <Card className="p-6">
      <div className="flex items-center justify-between gap-4">
        {/* Circular Progress Chart */}
        <div className="relative flex-shrink-0 w-28 h-28">
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <PieChart>
              <Pie
                data={data.breakdown}
                cx="50%"
                cy="50%"
                innerRadius={35}
                outerRadius={45}
                paddingAngle={2}
                dataKey="value"
                stroke="none"
              >
                {data.breakdown.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-xs text-muted-foreground">Total</span>
            <span className="text-2xl font-bold">{data.total}M</span>
          </div>
        </div>

        {/* Legend */}
        <div className="flex-1 space-y-2">
          {data.breakdown.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-xs font-medium text-muted-foreground">
                  {item.name}
                </span>
              </div>
              <div className="text-xs font-semibold">{item.value} MCFA</div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
