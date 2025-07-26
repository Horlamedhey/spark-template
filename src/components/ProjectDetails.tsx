import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface ProjectDetailsProps {
  data: {
    amount: string;
    status: string;
    type: string;
    operationAmount: string;
    entryDateLimit: string;
    realEntryDate: string;
    drawDateLimit: string;
    progress: number;
  };
}

export function ProjectDetails({ data }: ProjectDetailsProps) {
  return (
    <Card className="p-6">
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
          <span className="text-purple-600 font-bold text-sm">V</span>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-bold text-lg">{data.amount}</span>
            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
              {data.status}
            </span>
          </div>
          <p className="text-sm text-muted-foreground">{data.type}</p>
        </div>
      </div>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Montant Opération:</span>
          <span className="font-medium">{data.operationAmount}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Date limite Entrée en vigueur:</span>
          <span className="font-medium">{data.entryDateLimit}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Date réelle Entrée en vigueur:</span>
          <span className="font-medium">{data.realEntryDate}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Date limite tirage:</span>
          <span className="font-medium">{data.drawDateLimit}</span>
        </div>
      </div>

      <div className="mt-6 space-y-2">
        <div className="flex justify-between text-sm">
          <span>100 MCFA</span>
          <span className="font-medium">{data.progress}%</span>
        </div>
        <Progress value={data.progress} className="h-2" />
      </div>
    </Card>
  );
}