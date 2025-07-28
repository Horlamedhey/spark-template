import { DisbursementChart } from "@/components/DisbursementChart";
import { FinancialOverview } from "@/components/FinancialOverview";
import { ProcurementProgress } from "@/components/ProcurementProgress";
import { ProjectTimeline } from "@/components/ProjectTimeline";
import { StatusCard } from "@/components/StatusCard";
import { mockData } from "@/lib/mockData";
import { TreeDeciduous } from "lucide-react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { Card } from "./components/ui/card";
import { Progress } from "./components/ui/progress";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./components/ui/tooltip";
import { cn } from "./lib/utils";

const EnvironmentalCategoryCard = ({ data }: { data: any }) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <Card className="flex-1 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="mb-1 text-xs font-normal text-muted-foreground">
                {data.title}
              </p>
              <p className="flex items-center gap-2 text-base font-semibold">
                <TreeDeciduous className="w-5 h-5 text-green-600" />
                {data.value}
              </p>
            </div>
          </div>
        </Card>
      </TooltipTrigger>
      <TooltipContent>
        <p>{data.tooltip}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

const MissionsCard = ({ data }: { data: any }) => (
  <Card className="p-4">
    <div className="flex items-center justify-between">
      <div>
        <p className="mb-1 text-xs font-normal text-muted-foreground">
          Missions
        </p>
        <p className="text-xl font-semibold">{data.total}</p>
      </div>
      <div className="w-10 h-10">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <PieChart>
            <Pie
              data={data.breakdown}
              dataKey="value"
              innerRadius={8}
              outerRadius={16}
            >
              {data.breakdown.map((entry: any, index: number) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  stroke={entry.color}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
    <div className="flex items-center justify-between mt-2 text-xs">
      {data.breakdown.map((item: any) => (
        <div
          key={item.name}
          className="flex items-center gap-1"
        >
          <div
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: item.color }}
          />
          <span>{item.name}</span>
          <span className="font-semibold">{item.value}</span>
        </div>
      ))}
    </div>
  </Card>
);

const ProjectListItem = ({ project }: { project: any }) => {
  const statusColorClasses: { [key: string]: string } = {
    green: "border-green-500 text-green-500",
    blue: "border-blue-500 text-blue-500",
    gray: "border-gray-400 text-gray-400",
    red: "border-red-500 text-red-500",
    orange: "border-orange-500 text-orange-500",
  };

  return (
    <Card
      className={cn("p-4 border-l-4", statusColorClasses[project.statusColor])}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-muted-foreground">{project.id}</p>
          <p className="font-semibold">{project.type}</p>
        </div>
        <div
          className={cn(
            "text-xs font-medium px-2 py-0.5 rounded-full",
            project.statusColor === "green" && "bg-green-100 text-green-700",
            project.statusColor === "blue" && "bg-blue-100 text-blue-700",
            project.statusColor === "gray" && "bg-gray-100 text-gray-700",
            project.statusColor === "red" && "bg-red-100 text-red-700",
            project.statusColor === "orange" && "bg-orange-100 text-orange-700"
          )}
        >
          {project.status}
        </div>
      </div>
      <div className="mt-4">
        <p className="text-lg font-bold">{project.amount}</p>
        {project.progress > 0 && (
          <Progress
            value={project.progress}
            className="h-1 mt-1"
          />
        )}
      </div>
    </Card>
  );
};

function App() {
  return (
    <div className="min-h-screen p-4 bg-gray-50 sm:p-6">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-9">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <FinancialOverview data={mockData.financial} />
              </div>
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  <StatusCard {...mockData.statusCards[0]} />
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div>
                          <StatusCard {...mockData.statusCards[1]} />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Moderate risks - localized, limited impacts</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <EnvironmentalCategoryCard
                    data={mockData.environmentalCategory}
                  />
                  <MissionsCard data={mockData.missions} />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {mockData.projectList.map((project) => (
                <ProjectListItem
                  key={project.id + project.type}
                  project={project}
                />
              ))}
            </div>

            <DisbursementChart data={mockData.disbursementChart} />
          </div>

          <div className="space-y-6 lg:col-span-3">
            <ProcurementProgress data={mockData.procurementProgress} />
            <ProjectTimeline data={mockData.timeline} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
