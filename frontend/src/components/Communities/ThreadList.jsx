// ThreadList.jsx - Enhanced with spacing between threads
import React from "react";
import Thread from "./Thread";

const ThreadList = ({ threads }) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
      <div className="divide-y divide-gray-200 space-y-px">
        {threads.map((thread) => (
          <Thread key={thread.id} thread={thread} />
        ))}
      </div>
    </div>
  );
};

export default ThreadList;
