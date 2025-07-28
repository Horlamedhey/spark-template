import { Card } from "@/components/ui/card";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

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
    <Card className="p-4">
      <div className="flex items-center justify-start gap-4">
        {/* Circular Progress Chart */}
        <div className="relative flex-shrink-0 w-28 h-28">
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <PieChart>
              <Pie
                data={[{ value: 100 }]}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius={42}
                outerRadius={48}
                fill="#22c55e"
                startAngle={90}
                endAngle={-270}
                stroke="none"
                opacity={0.3}
              />
              <Pie
                data={[{ value: 85 }]} // ~85% progress
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius={42}
                outerRadius={48}
                fill="#22c55e"
                startAngle={90}
                endAngle={-225} // 90 - (360 * 0.85) = 90 - 306 = -216
                stroke="none"
              />
              <Pie
                data={data.breakdown}
                cx="50%"
                cy="50%"
                innerRadius={28}
                outerRadius={38}
                paddingAngle={0}
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
              <Tooltip
                contentStyle={{ display: "none" }}
                cursor={{ fill: "transparent" }}
              />
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
                <span className="text-sm">{item.name}</span>
              </div>
              <div className="text-sm font-semibold">{item.value} MCFA</div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
