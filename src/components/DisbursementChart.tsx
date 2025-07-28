import { Card } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface DisbursementChartProps {
  data: {
    data: Array<{
      month: string;
      planifie: number;
      reel: number | null;
      decaissements: number;
      autorisations: number;
    }>;
  };
}

export function DisbursementChart({ data }: DisbursementChartProps) {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="p-2 text-xs text-white bg-gray-900 rounded-md shadow-lg">
          <p className="font-bold">{`15 Juin 2025`}</p>{" "}
          {/* This seems to be static in screenshot */}
          <p>{`Approuvé: 15`}</p> {/* This seems to be static in screenshot */}
          <p>{`Montant: 145B CFA`}</p>{" "}
          {/* This seems to be static in screenshot */}
        </div>
      );
    }
    return null;
  };

  const legendPayload = [
    { value: "Planifié", type: "dot", color: "#d1d5db" },
    { value: "Réel", type: "dot", color: "#60a5fa" },
    { value: "Décaissements cumulés", type: "line", color: "#fb923c" },
    { value: "Autorisations cumulées", type: "line", color: "#fcd34d" },
  ];

  return (
    <Card className="p-4">
      <div className="flex flex-col items-start justify-between mb-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-4">
          <h3 className="text-sm font-semibold">
            Chronogramme de décaissement
          </h3>
        </div>
        <div className="flex items-center gap-4 mt-4 sm:mt-0">
          <div className="flex items-center gap-4 text-xs">
            {legendPayload.map((entry, index) => (
              <div
                key={`legend-${index}`}
                className="flex items-center gap-1.5"
              >
                {entry.type === "dot" ? (
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: entry.color }}
                  />
                ) : (
                  <div
                    className="w-3 h-0.5"
                    style={{ backgroundColor: entry.color }}
                  />
                )}
                <span>{entry.value}</span>
              </div>
            ))}
          </div>
          <ToggleGroup
            type="single"
            defaultValue="mois"
            size="sm"
          >
            <ToggleGroupItem value="mois">Mois</ToggleGroupItem>
            <ToggleGroupItem value="trimestre">Trimestre</ToggleGroupItem>
            <ToggleGroupItem value="annee">Année</ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      <div className="h-72">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <ComposedChart
            data={data.data}
            margin={{ top: 5, right: 20, left: 5, bottom: 5 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
            />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#6b7280" }}
              padding={{ left: 10, right: 10 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#6b7280" }}
              tickFormatter={(value) => `${value / 1000}K`}
              domain={[0, "dataMax + 10000"]}
            />
            <Tooltip
              content={<CustomTooltip />} // The tooltip in screenshot is very specific
              cursor={{ fill: "rgba(200,200,200,0.2)" }}
            />

            <defs>
              <linearGradient
                id="colorAutorisations"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="#fcd34d"
                  stopOpacity={0.4}
                />
                <stop
                  offset="95%"
                  stopColor="#fcd34d"
                  stopOpacity={0}
                />
              </linearGradient>
              <linearGradient
                id="colorDecaissements"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="#fb923c"
                  stopOpacity={0.4}
                />
                <stop
                  offset="95%"
                  stopColor="#fb923c"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <Area
              type="monotone"
              dataKey="autorisations"
              stroke="none"
              fill="url(#colorAutorisations)"
            />
            <Area
              type="monotone"
              dataKey="decaissements"
              stroke="none"
              fill="url(#colorDecaissements)"
            />

            <Bar
              dataKey="planifie"
              fill="#d1d5db"
              name="Planifié"
              barSize={4}
            />
            <Bar
              dataKey="reel"
              fill="#60a5fa"
              name="Réel"
              barSize={4}
            />

            <Line
              type="monotone"
              dataKey="autorisations"
              stroke="#fcd34d"
              strokeWidth={2}
              dot={{ r: 4, fill: "#fcd34d", stroke: "white", strokeWidth: 2 }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="decaissements"
              stroke="#fb923c"
              strokeWidth={2}
              dot={{ r: 4, fill: "#fb923c", stroke: "white", strokeWidth: 2 }}
              activeDot={{ r: 6 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
