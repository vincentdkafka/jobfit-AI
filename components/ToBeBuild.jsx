import React from "react";

const ToBeBuild = ({ pageName = "This page" }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-50 dark:bg-gray-900">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">
        🚧 {pageName} is under construction 🚧
      </h1>
      <p className="text-gray-600 dark:text-gray-400">
        This feature will be built soon. Stay tuned!
      </p>
    </div>
  );
};

export default ToBeBuild;
