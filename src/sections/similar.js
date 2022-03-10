import React, { useEffect } from 'react';
import papers from '../data/papers_f';
const axios = require('axios');

export default function Similar({ paperId }) {
  const [similarPapers, setSimilarPapers] = React.useState([]);
  useEffect(() => {
    console.log(paperId);
    const path = `https://4y5fot.deta.dev/get_neighbors/?paper_id=${paperId}&k=6`;

    axios
      .post(path)
      .then((res) => {
        console.log('RESPONSE RECEIVED: ', res.data);
        setSimilarPapers(
          res.data.map((paper_id) => {
            return {
              id: paper_id,
              title: papers[paper_id]['title'],
              preview: papers[paper_id]['abstarct'],
              date: parseInt(papers[paper_id]['pub_year']),
              readingLength: '',

              category: { name: 'Article', href: '#' },
              author: {
                name: `${papers[paper_id]['authors'][0]} et al.`,
                imageUrl:
                  'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                href: '#',
              },
            };
          })
        );
      })
      .catch((err) => {
        console.log('AXIOS ERROR: ', err);
        setSimilarPapers([]);
      });
  }, [paperId]);
  return (
    <div className="relative bg-white py-16 sm:py-24 lg:py-32">
      <div className="relative">
        <div className="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">
            discover
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Similar Papers
          </p>
          <p className="mt-5 mx-auto max-w-prose text-xl text-gray-500">
            Phasellus lorem quam molestie id quisque diam aenean nulla in.
            Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
            condimentum id viverra nulla.
          </p>
        </div>
        <div className="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-2 lg:max-w-7xl">
          {similarPapers.map((post) => (
            <div
              key={post.id}
              className="flex flex-col no-underline  rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-blue-600">
                    <a href={post.category.href} className="hover:underline">
                      {post.category.name}
                    </a>
                  </p>
                  <div href={post.href} className="block mt-2">
                    <p className="text-xl font-semibold no-underline text-gray-900">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-ellipsis  no-underline  text-gray-500">
                      {post.preview}
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href={post.author.href}></a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a href={post.author.href} className="hover:underline">
                        {post.author.name}
                      </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.datetime}>{post.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{post.readingLength} read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
