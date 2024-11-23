import React from "react";

const ComingSoon: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white from-gray-800 via-gray-900 to-black text-white">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          🚀 Coming Soon!
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Stay tuned for Report Incident Option. We are working hard to bring
          you the best experience!
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;
