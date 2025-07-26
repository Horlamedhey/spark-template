import { FinancialOverview } from "@/components/FinancialOverview";
import { StatusCard } from "@/components/StatusCard";
import { ProjectDetails } from "@/components/ProjectDetails";
import { ProcurementProgress } from "@/components/ProcurementProgress";
import { ProjectTimeline } from "@/components/ProjectTimeline";
import { DisbursementChart } from "@/components/DisbursementChart";
import { mockData } from "@/lib/mockData";

function App() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* First Row */}
          <div className="lg:col-span-3">
            <FinancialOverview data={mockData.financial} />
          </div>
          
          <div className="lg:col-span-2">
            <StatusCard {...mockData.statusCards[0]} />
          </div>
          
          <div className="lg:col-span-2">
            <StatusCard {...mockData.statusCards[1]} />
          </div>
          
          <div className="lg:col-span-2">
            <StatusCard {...mockData.statusCards[2]} />
          </div>
          
          <div className="lg:col-span-3">
            <ProcurementProgress data={mockData.procurementProgress} />
          </div>

          {/* Second Row */}
          <div className="lg:col-span-4">
            <ProjectDetails data={mockData.projectDetails} />
          </div>
          
          <div className="lg:col-span-4">
            <ProjectTimeline data={mockData.timeline} />
          </div>
          
          <div className="lg:col-span-4">
            {/* Empty space for balance */}
          </div>

          {/* Third Row - Chart */}
          <div className="lg:col-span-12">
            <DisbursementChart data={mockData.disbursementChart} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;