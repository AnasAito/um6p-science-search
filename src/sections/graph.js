import React from 'react';

import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { get } from 'lodash';
import clusters from '../data/papers_plot';
import papers from '../data/papers_f';
/* Array */
const colors = [
  'ffd400',
  '541388',
  '970b78',
  'd90368',
  'fff',
  'ebb0be',
  'f1e9da',
  '908994',
  '2e294e',
  '977f27',
];

const CustomTooltip = ({ active, payload, label }) => {
  const paperId = get(payload, '[0].payload.paperId', '');
  if (active && payload && payload.length) {
    return (
      <div className="bg-white w-80 px-4 py-2 rounded-md ">
        <p className="desc">{papers[paperId].title}</p>
      </div>
    );
  }

  return null;
};
const Graph = ({ cluster, setPaperId }) => {
  const [highlight, setHighlight] = React.useState(null);
  return (
    <ResponsiveContainer width="100%" height={500}>
      <ScatterChart
        // width={400}
        // height={400}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        //className="bg-red-100 "
      >
        <XAxis hide dataKey="x" type="number" domain={['dataMin', 'dataMax']} />
        <YAxis hide dataKey="y" type="number" domain={['dataMin', 'dataMax']} />
        <ZAxis dataKey="size" range={[0, 60]} />

        <Tooltip
          cursor={{ strokeDasharray: '3 3' }}
          content={<CustomTooltip />}
        ></Tooltip>
        {/* loop over papers dict  */}

        {clusters.map((cluster_, index) => {
          if (cluster_.id != cluster) {
            return <div></div>;
          }
          return (
            <Scatter
              key={cluster_.id}
              opacity={0.5}
              onClick={(data) => {
                setPaperId(data.paperId);
                // get paper cordinate by paperId
                const point = papers[data.paperId]['embedding_proj'];
                setHighlight([
                  {
                    x: point[0],
                    y: point[1],
                    paperId: data.paperId,
                    size: 50,
                  },
                ]);
              }}
              name={cluster_.id}
              data={cluster_['data'].map((point) => {
                return {
                  x: point['x'],
                  y: point['y'],
                  paperId: point['paper_id'],
                  size: 50,
                };
              })}
              fill={`#${'fff'}`}
            />
          );
        })}
        {highlight && <Scatter data={highlight} fill={'#f22'} />}
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default Graph;
