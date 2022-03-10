import React from 'react';
import Graph from './graph';
import papers from '../data/papers_f';
import Clusters from '../components/clusters';
const stats = [
  { label: 'Published', value: '2021' },
  { label: 'Citations', value: '5' },
];

export default function Paper({
  cluster,
  paperId,
  setPaperId,
  highlight,
  setHighlight,
  setCluster,
}) {
  const colors = {
    1: 'bg-red-200',
    2: 'bg-cyan-200',
    3: 'bg-yellow-200',
    4: 'bg-green-200',
    8: 'bg-blue-200',
    9: 'bg-indigo-200',
    7: 'bg-purple-200',
  };

  const grad_num = [100, 300];
  const gradients = {
    1: `from-red-${grad_num[0]} to-red-${grad_num[1]}`,
    2: `from-cyan-${grad_num[0]} to-cyan-${grad_num[1]}`,
    3: `from-yellow-${grad_num[0]} to-yellow-${grad_num[1]}`,
    4: `from-green-${grad_num[0]} to-green-${grad_num[1]}`,
    8: `from-blue-${grad_num[0]} to-blue-${grad_num[1]}`,
    9: `from-indigo-${grad_num[0]} to-indigo-${grad_num[1]}`,
    7: `from-purple-${grad_num[0]} to-purple-${grad_num[1]}`,
  };

  return (
    <div className="relative mt-20">
      {
        <div className="text-center pb-10 mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">
            Explore
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Paper Details
          </p>
          <p className="mt-5 mx-auto max-w-prose text-xl text-gray-500">
            Phasellus lorem quam molestie id quisque diam aenean nulla in.
            Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
            condimentum id viverra nulla.
          </p>
        </div>
      }
      <div className=" lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
        <div className="relative sm:py-16 lg:py-0">
          <div
            aria-hidden="true"
            className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
          >
            <div className="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72" />
            <svg
              className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={392}
                fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
              />
            </svg>
          </div>
          <div className="  relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
            {/* Testimonial card*/}

            <div
              className={` ${
                colors[parseInt(cluster)]
              } relative  rounded-2xl shadow-xl overflow-hidden`}
            >
              <Graph
                cluster={cluster}
                setPaperId={setPaperId}
                highlight={highlight}
                setHighlight={setHighlight}
              />
            </div>
            <Clusters setCluster={setCluster} setHighlight={setHighlight} />
          </div>
        </div>

        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          {/* Content area */}
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
              {papers[paperId].title}
            </h2>
            <div className="mt-6 text-gray-500 space-y-6">
              <p className="text-lg">{papers[paperId].abstarct}</p>
            </div>
          </div>

          {/* Stats section */}
          <div className="mt-10">
            <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
              {[
                {
                  label: 'Published',
                  value: parseInt(papers[paperId].pub_year),
                },
                { label: 'Citations', value: papers[paperId].citation_count },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="border-t-2 border-gray-100 pt-6"
                >
                  <dt className="text-base font-medium text-gray-500">
                    {stat.label}
                  </dt>
                  <dd className="text-3xl font-extrabold tracking-tight text-gray-900">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-10">
              <a href="#" className="text-base font-medium text-indigo-500">
                Learn more about the paper &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
