import React from 'react';

const clusters_ = [
  { id: 1, name: ['Learning', 'Data', 'Study'] },
  { id: 2, name: ['Cellulose', 'Nanocrystals', 'Water'] },
  { id: 3, name: ['Climate', 'Groundwater'] },
  { id: 4, name: ['Soil', 'Plant', 'Phosphorus'] },
  { id: 8, name: ['Phosphate', 'Mine', 'Waste'] },
  { id: 9, name: ['Solar', 'Climate', 'Pv'] },
  { id: 7, name: ['Batteries', 'Material', 'Electrode'] },
];

const colors = {
  1: 'bg-red-200',
  2: 'bg-cyan-200',
  3: 'bg-yellow-200',
  4: 'bg-green-200',
  8: 'bg-blue-200',
  9: 'bg-indigo-200',
  7: 'bg-purple-200',
};
export default function clusters({ setCluster, setHighlight }) {
  return (
    <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
      {clusters_.map((item, idx) => (
        <div
          key={item.id}
          className={` cursor-pointer  hover:shadow-md shadow rounded-lg overflow-hidden sm:p-4 ${
            colors[item.id]
          }`}
          onClick={() => {
            setHighlight(null);
            setCluster(JSON.stringify(item.id));
          }}
        >
          <dt className="text-sm font-medium text-gray-500 space-x-1  flex flex-row flex-wrap ">
            {item.name.map((keyword) => (
              <span className="inline-flex my-1  items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                {keyword}
              </span>
            ))}
          </dt>
        </div>
      ))}
    </dl>
  );
}
