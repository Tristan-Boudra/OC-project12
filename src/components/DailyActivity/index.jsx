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

/**
 * Composant qui représente un graphique de l'activité quotidienne.
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {Array} props.data - Les données du graphique.
 * @returns {JSX.Element} - Élément JSX représentant le graphique.
 */

export default function DailyActivity(props) {
  const activityData = props.data[0];

  /**
   * Fonction pour générer les numéros de jours pour l'axe X.
   * @function
   * @returns {Array} - Un tableau de numéros de jours.
   */

  const activityDayNumbers = () => {
    return activityData.sessions.map((session, index) => index + 1);
  };

  /**
   * Fonction de rendu du tooltip personnalisé.
   * @function
   * @param {Object} param - Les paramètres du tooltip.
   * @param {boolean} param.active - Indique si le tooltip est actif.
   * @param {Array} param.payload - Les données du tooltip.
   * @returns {JSX.Element} - Élément JSX représentant le contenu du tooltip.
   */

  const renderTooltip = ({ active, payload }) => {
    if (active && payload.length) {
      return (
        <div
          style={{
            background: "#E60000",
            color: "#FFFFFF",
            padding: "10px 10px",
            textAlign: "center",
            fontSize: "10px",
            fontWeight: "500",
          }}
        >
          {payload.map((entry, index) => (
            <p
              key={index}
              style={{ margin: "15px 0" }}
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
          domain={["dataMin - 3", "auto"]}
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
