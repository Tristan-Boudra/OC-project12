import {
  PolarGrid,
  PolarAngleAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

export default function Performance(props) {
  const performanceData = props.data[0].data;

  const kindMapping = {
    1: "Cardio",
    2: "Energie",
    3: "Endurance",
    4: "Force",
    5: "Vitesse",
    6: "Intensité",
  };

  const formattedData = performanceData
    .map((dataPoint) => ({
      ...dataPoint,
      kind: kindMapping[dataPoint.kind],
    }))
    .reverse();

  return (
    <ResponsiveContainer>
      <RadarChart data={formattedData} outerRadius="70%">
        <PolarAngleAxis
          dataKey="kind"
          tickLine={false}
          tick={{ fontSize: "12px", fontWeight: "500" }}
          stroke="#FFFFFF"
        />
        <PolarGrid radialLines={false} stroke="#FFFFFF" />
        <Radar dataKey="value" fill="#FF0101" fillOpacity="80%" />
      </RadarChart>
    </ResponsiveContainer>
  );
}
