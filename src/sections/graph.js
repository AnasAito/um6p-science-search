import React from "react";

import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import clusters from "../data/papers_plot";
/* Array */
const colors = [
  "ffd400",
  "541388",
  "970b78",
  "d90368",
  "fff",
  "ebb0be",
  "f1e9da",
  "908994",
  "2e294e",
  "977f27",
];

const Graph = () => (
  <ResponsiveContainer width="100%" height={500}>
    <ScatterChart
      // width={400}
      // height={400}
      margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      //className="bg-red-100 "
    >
      <XAxis hide dataKey="x" type="number" domain={["dataMin", "dataMax"]} />
      <YAxis hide dataKey="y" type="number" domain={["dataMin", "dataMax"]} />
      <ZAxis dataKey="size" range={[0, 60]} />

      <Tooltip cursor={{ strokeDasharray: "3 3" }} />
      {/* loop over papers dict  */}
      {clusters.map((cluster, index) => {
        if (cluster.id != "4") {
          return <div></div>;
        }
        return (
          <Scatter
            key={cluster.id}
            onClick={(data) => console.log(data)}
            name={cluster.id}
            data={cluster["data"].map((point) => {
              return {
                x: point["x"],
                y: point["y"],
                paperId: point["paper_id"],
                size: 50,
              };
            })}
            fill={`#${colors[cluster.id]}`}
          />
        );
      })}
    </ScatterChart>
  </ResponsiveContainer>
);

export default Graph;
