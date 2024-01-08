import "../../styles/main.scss";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function DailyActivity(props) {
  const activityData = props.data[0];

  const activityDayNumbers = () => {
    return activityData.sessions.map((session, index) => index + 1);
  };

  const renderTooltip = ({ active, payload }) => {
    if (active && payload.length) {
      return (
        <div
          style={{
            background: "#E60000",
            color: "#FFFFFF",
            padding: "0.25em 0.5em",
            textAlign: "center",
            fontSize: "1rem",
            fontWeight: "500",
          }}
        >
          {payload.map((entry, index) => (
            <p
              key={index}
              style={{ margin: "1.25em 0" }}
            >{`${entry.value} ${entry.unit}`}</p>
          ))}
        </div>
      );
    }
  };

  return (
    <ResponsiveContainer>
      <BarChart data={activityData.sessions} barGap={12} barSize={8}>
        <text
          x={0}
          y={20}
          textAnchor="left"
          style={{
            fontSize: "15px",
            fontWeight: 500,
            fill: "#20253A",
          }}
        >
          Activité quotidienne
        </text>

        <CartesianGrid strokeDasharray="3 3" opacity={0.5} vertical={false} />
        <XAxis
          dataKey={activityDayNumbers}
          tickLine={false}
          axisLine={{ stroke: "#DEDEDE" }}
          tick={{ stroke: "#9B9EAC", fontWeight: "400" }}
          dy={14}
        />
        <YAxis
          yAxisId="kilogram"
          orientation="right"
          stroke="#282D30"
          axisLine={false}
          tickLine={false}
          tickCount={3}
          tick={{ stroke: "#9B9EAC", fontWeight: "400" }}
          type="number"
          domain={["dataMin - 5", "auto"]}
          dx={14}
        />
        <YAxis
          yAxisId="calories"
          orientation="left"
          stroke="#E60000"
          axisLine={false}
          tickLine={false}
          tickCount={3}
          hide={true}
          domain={["dataMin - 50", "auto"]}
          dx={-16}
        />
        <Tooltip content={renderTooltip} />
        <Legend
          layout="horizontal"
          verticalAlign="top"
          align="right"
          iconType="circle"
          wrapperStyle={{
            paddingBottom: "4em",
          }}
        />
        <Bar
          yAxisId="kilogram"
          name="Poids (kg)"
          dataKey="kilogram"
          unit="kg"
          fill="#282D30"
          radius={[20, 20, 0, 0]}
        />
        <Bar
          yAxisId="calories"
          name="Calories brûlées (kCal)"
          dataKey="calories"
          unit="kCal"
          fill="#E60000"
          radius={[20, 20, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
