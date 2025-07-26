import { Card } from "@/components/ui/card";

interface TimelineItem {
  title: string;
  subtitle: string;
  id: string;
  status: string;
  color: string;
}

interface ProjectTimelineProps {
  data: TimelineItem[];
}

export function ProjectTimeline({ data }: ProjectTimelineProps) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return (
          <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
            <span className="text-white text-xs font-bold">✓</span>
          </div>
        );
      case 'active':
        return (
          <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
            <span className="text-white text-xs font-bold">A</span>
          </div>
        );
      case 'pending':
        return <div className="w-6 h-6 rounded-full bg-gray-400" />;
      case 'archived':
        return <div className="w-6 h-6 rounded-full bg-gray-300" />;
      default:
        return <div className="w-6 h-6 rounded-full bg-gray-400" />;
    }
  };

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-primary">Chronologie du Projet</h3>
        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
          <span className="text-purple-600 font-bold text-sm">V</span>
        </div>
      </div>

      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="flex flex-col items-center">
              {getStatusIcon(item.status)}
              {index < data.length - 1 && (
                <div className="w-px h-8 bg-gray-200 mt-2" />
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm">{item.title}</p>
              <p className="text-xs text-muted-foreground mt-1">
                {item.subtitle}
              </p>
              <p className="text-xs text-muted-foreground">
                {item.id}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}