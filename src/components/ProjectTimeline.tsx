import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

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
  const getStatusIcon = (item: TimelineItem) => {
    const iconWrapperClasses =
      "w-6 h-6 flex items-center justify-center relative z-10";

    if (item.status === "achieved") {
      return (
        <div className={`${iconWrapperClasses} bg-green-500 rounded-full`}>
          <Check className="w-3 h-3 text-white" />
        </div>
      );
    }
    if (item.status === "in_progress") {
      return (
        <div
          className={`${iconWrapperClasses} rounded-full bg-white border-2 border-blue-500`}
        >
          <div className="w-3 h-3 bg-blue-500 rounded-full" />
        </div>
      );
    }
    if (item.status === "end") {
      return (
        <div className={`${iconWrapperClasses} rounded-full bg-blue-300`} />
      );
    }
    if (item.status === "milestone") {
      return (
        <div className={`${iconWrapperClasses}`}>
          <div className="w-3.5 h-3.5 bg-blue-500 transform rotate-45" />
        </div>
      );
    }

    return null;
  };

  return (
    <Card className="p-4 h-fit">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-sm font-semibold text-primary">
          Chronologie du Projet
        </h3>
        <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full">
          <span className="text-sm font-semibold text-purple-600">V</span>
        </div>
      </div>

      <div className="relative">
        {data.map((item, index) => (
          <div
            key={item.id}
            className="flex items-start gap-4 pl-3"
          >
            <div className="flex flex-col items-center self-stretch">
              {getStatusIcon(item)}
              {index < data.length - 1 && (
                <div className="w-px -mt-1 bg-gray-200 grow" />
              )}
            </div>

            <div className="flex-1 min-w-0 pb-8 -mt-1">
              <p className="text-sm font-medium">{item.title}</p>
              <div className="text-xs text-muted-foreground mt-0.5 font-normal">
                <p>{item.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
