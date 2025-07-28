import { Card } from "@/components/ui/card";

interface ProcurementProgressProps {
  data: {
    title: string;
    items: Array<{
      name: string;
      values: number[];
      total: number;
      colors: string[];
    }>;
  };
}

export function ProcurementProgress({ data }: ProcurementProgressProps) {
  return (
    <Card className="flex-1 p-4 h-fit">
      <h3 className="mb-4 text-sm font-semibold text-primary">{data.title}</h3>

      <div className="space-y-4">
        {data.items.map((item, index) => (
          <div key={index}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-medium">{item.name}</span>
            </div>

            <div className="relative h-5">
              <div className="flex h-full overflow-hidden rounded-full">
                {item.values.map((value, segmentIndex) => (
                  <div
                    key={segmentIndex}
                    className="flex items-center justify-center text-[10px] font-medium text-white"
                    style={{
                      width: `${(value / item.total) * 100}%`,
                      backgroundColor: item.colors[segmentIndex] || "#e5e7eb",
                    }}
                  >
                    {value}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
