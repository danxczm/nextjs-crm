import React from 'react';

type LoadingProps = {};

function Loading({}: LoadingProps) {
  return (
    <div className="rounded bg-gray-100 w-full h-full">
      <p className="p-5 text-xl	text-gray-900 font-medium">Loading...</p>
    </div>
  );
}

export default Loading;
