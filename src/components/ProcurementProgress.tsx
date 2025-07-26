import { Card } from "@/components/ui/card";

interface ProcurementProgressProps {
  data: {
    title: string;
    items: Array<{
      name: string;
      values: number[];
      colors: string[];
    }>;
  };
}

export function ProcurementProgress({ data }: ProcurementProgressProps) {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-primary mb-4">{data.title}</h3>
      
      <div className="space-y-4">
        {data.items.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">{item.name}</span>
            </div>
            
            <div className="flex h-6 rounded-lg overflow-hidden bg-gray-100">
              {item.values.map((value, segmentIndex) => (
                <div
                  key={segmentIndex}
                  className="flex items-center justify-center text-xs font-medium text-white relative"
                  style={{
                    width: `${value}%`,
                    backgroundColor: item.colors[segmentIndex] || '#e5e7eb'
                  }}
                >
                  {value > 10 && <span>{value}</span>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}