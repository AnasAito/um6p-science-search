import React from "react";
import Graph from "./graph";
const stats = [
  { label: "Published", value: "2021" },
  { label: "Citations", value: "5" },
];
export default function Paper() {
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

            <div className="bg-gradient-to-r from-purple-800 to-indigo-700 relative     rounded-2xl shadow-xl overflow-hidden">
              <Graph />
            </div>
            <p>graph title </p>
          </div>
        </div>

        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          {/* Content area */}
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
              General trends in fertilisers use in the world
            </h2>
            <div className="mt-6 text-gray-500 space-y-6">
              <p className="text-lg">
                We consider the trends in the use of nitrogen (N), phosphorus
                (P), and potassium (K) fertilizers in the 15 largest countries
                from a population perspective. We use a growth curve modelling
                approach because of the temporal dimension of the analysis. We
                show that there is a general upward trend in the use of N and K
                fertilizers per unit of harvested land, with average rates of
                increase 0.93 and 0.64 kg/ha/year, respectively. However, there
                is no statistical evidence to show that the same trend holds for
                P fertilizers. There is a significant variation in growth
                between the 15 countries for all three fertilizers. For
                instance, Egypt and China show a higher starting level for
                fertilizer use in the study sample, and China’s fertilizer use
                intensity continues to increase in all three categories of
                fertilizers; at the same time, Japan has been reducing its use
                intensity for the three categories. This indicates greater
                opportunities for exchanging best practices in fertilizer use
                and management and provides basis for future requirement of
                fertilizers and promoting the use of alternative methods of
                farming
              </p>
            </div>
          </div>

          {/* Stats section */}
          <div className="mt-10">
            <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
              {stats.map((stat) => (
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
