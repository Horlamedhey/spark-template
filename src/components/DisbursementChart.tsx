import { Card } from "@/components/ui/card";
import { ComposedChart, Bar, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from "recharts";

interface DisbursementChartProps {
  data: {
    data: Array<{
      month: string;
      planned: number;
      actual: number | null;
      cumulativePlanned: number;
      cumulativeActual: number;
    }>;
  };
}

export function DisbursementChart({ data }: DisbursementChartProps) {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-800 text-white p-3 rounded-lg shadow-lg">
          <p className="text-xs font-medium">{`15 Juin 2025`}</p>
          <p className="text-[10px] font-normal">{`Approuvé: 15`}</p>
          <p className="text-[10px] font-normal">{`Montant: 145A CFA`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-sm font-semibold">Chronogramme de décaissement</h3>
        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
          <span className="text-purple-600 font-semibold text-sm">V</span>
        </div>
      </div>

      <div className="flex items-center gap-6 mb-4 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-blue-400" />
          <span className="font-normal">Planifié</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-orange-400" />
          <span className="font-normal">Réel</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-0.5 bg-yellow-500" />
          <span className="font-normal">Cumulatif Prévu</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-0.5 bg-orange-500" />
          <span className="font-normal">Cumulatif Réel</span>
        </div>
        <div className="px-2 py-1 bg-blue-500 text-white rounded text-[10px] font-normal">
          Mois
        </div>
        <span className="text-[10px] font-normal">Trimestre</span>
        <span className="text-[10px] font-normal">Année</span>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data.data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: '#6b7280' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: '#6b7280' }}
              tickFormatter={(value) => `${value/1000}K`}
            />
            <Tooltip content={<CustomTooltip />} />
            
            <Bar dataKey="planned" fill="#93c5fd" name="Planifié" />
            <Bar dataKey="actual" fill="#fb923c" name="Réel" />
            
            <Line 
              type="monotone" 
              dataKey="cumulativePlanned" 
              stroke="#eab308" 
              strokeWidth={2}
              dot={{ fill: '#eab308', strokeWidth: 1, r: 3 }}
              name="Cumulatif Prévu"
            />
            <Line 
              type="monotone" 
              dataKey="cumulativeActual" 
              stroke="#f97316" 
              strokeWidth={2}
              dot={{ fill: '#f97316', strokeWidth: 1, r: 3 }}
              name="Cumulatif Réel"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}