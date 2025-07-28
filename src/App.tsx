import { DisbursementChart } from "@/components/DisbursementChart";
import { FinancialOverview } from "@/components/FinancialOverview";
import { ProcurementProgress } from "@/components/ProcurementProgress";
import { ProjectTimeline } from "@/components/ProjectTimeline";
import { StatusCard } from "@/components/StatusCard";
import { mockData } from "@/lib/mockData";
import { TreeDeciduous } from "lucide-react";
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

const ProjectListItem = ({ project }: { project: any }) => {
  const statusColorClasses: { [key: string]: string } = {
    green: "shadow-[0px_1px_2px_0px_#22C348,0px_0px_1px_0px_#22C348]",
    blue: "shadow-[0px_1px_2px_0px_#2C7BE5,0px_0px_1px_0px_#2C7BE5]",
    gray: "shadow-[0px_1px_2px_0px_#5B6871,0px_0px_1px_0px_#5B6871]",
    red: "shadow-[0px_1px_2px_0px_#F2271C,0px_0px_1px_0px_#F2271C]",
    violet: "shadow-[0px_1px_2px_0px_#A23FEE,0px_0px_1px_0px_#A23FEE]",
  };

  return (
    // TODO: Remove the border later
    <Card
      className={cn("p-4 border-none", statusColorClasses[project.statusColor])}
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
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-12 2xl:col-span-9">
            {/* meeee */}
            <div className="grid grid-cols-12 gap-4 lg:grid-cols-12 xl:grid-cols-7">
              <div className="col-span-12 sm:col-span-8 lg:col-span-5 xl:col-span-2">
                <FinancialOverview data={mockData.financial} />
              </div>
              <div className="col-span-6 sm:col-span-2 lg:col-span-2 xl:col-span-1">
                <StatusCard {...mockData.statusCards[0]} />
              </div>
              <div className="col-span-6 sm:col-span-2 lg:col-span-2 xl:col-span-1">
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
              </div>
              <div className="col-span-12 sm:col-span-4 lg:col-span-3 xl:col-span-1">
                <EnvironmentalCategoryCard
                  data={mockData.environmentalCategory}
                />
              </div>
              <div className="col-span-12 sm:col-span-8 lg:col-span-5 xl:col-span-2">
                <FinancialOverview data={mockData.missions} />
              </div>
            </div>
            {/* meee end */}
            <div className="grid grid-cols-1 gap-3 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {mockData.projectList.map((project) => (
                <ProjectListItem
                  key={project.id + project.type}
                  project={project}
                />
              ))}
            </div>

            <DisbursementChart data={mockData.disbursementChart} />
          </div>

          <div className="grid-cols-7 gap-4 space-y-4 lg:grid lg:col-span-12 2xl:col-span-3 2xl:block">
            <div className="order-last col-span-3 2xl:order-first">
              <ProcurementProgress data={mockData.procurementProgress} />
            </div>
            <div className="col-span-4">
              <ProjectTimeline data={mockData.timeline} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
