import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
    <Card className="p-4">
      <div className="flex items-start gap-4 mb-4">
        <div className="flex -space-x-2">
          <Avatar className="w-8 h-8 border-2 border-white">
            <AvatarFallback className="bg-purple-600 text-white text-sm font-semibold">
              V
            </AvatarFallback>
          </Avatar>
          <Avatar className="w-8 h-8 border-2 border-white">
            <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-semibold text-base">{data.amount}</span>
            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded font-normal">
              {data.status}
            </span>
          </div>
          <p className="text-xs text-muted-foreground font-normal">
            {data.type}
          </p>
        </div>
      </div>

      <div className="space-y-3 text-xs">
        <div className="flex justify-between">
          <span className="text-muted-foreground font-normal">
            Montant Opération:
          </span>
          <span className="font-medium">{data.operationAmount}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground font-normal">
            Date limite Entrée en vigueur:
          </span>
          <span className="font-medium">{data.entryDateLimit}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground font-normal">
            Date réelle Entrée en vigueur:
          </span>
          <span className="font-medium">{data.realEntryDate}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground font-normal">
            Date limite tirage:
          </span>
          <span className="font-medium">{data.drawDateLimit}</span>
        </div>
      </div>

      <div className="mt-6 space-y-2">
        <div className="flex justify-between text-xs">
          <span className="font-normal">100 MCFA</span>
          <span className="font-medium">{data.progress}%</span>
        </div>
        <Progress
          value={data.progress}
          className="h-2"
        />
      </div>
    </Card>
  );
}
