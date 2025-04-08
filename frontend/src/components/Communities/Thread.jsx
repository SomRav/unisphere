// Thread.jsx - Kept exactly as designed, just converted to Tailwind CSS v4
import React from "react";

const Thread = ({ thread }) => {
  const { title, author, timestamp, type, replies, votes } = thread;

  return (
    <div className="flex items-center p-4 hover:bg-gray-50 transition-colors">
      <div className="flex flex-col items-center mr-4 min-w-10">
        <button className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </button>
        <span className="text-base font-semibold text-gray-700 my-1">
          {votes}
        </span>
        <button className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </button>
      </div>

      <div className="flex-1">
        <h3 className="text-base font-semibold text-gray-800 mb-1.5">
          {title}
        </h3>
        <div className="flex flex-wrap gap-3 text-xs text-gray-500">
          <span className="text-gray-700">Posted by {author}</span>
          <span>{timestamp}</span>
          <span
            className={`px-2 py-0.5 rounded-full text-xs font-medium ${
              type === "Question"
                ? "bg-blue-50 text-blue-700"
                : "bg-green-50 text-green-700"
            }`}
          >
            {type}
          </span>
        </div>
      </div>

      <div className="flex items-center mx-4">
        <span className="flex items-center gap-1 text-sm text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          </svg>
          {replies} replies
        </span>
      </div>

      <div className="text-gray-400 hover:text-gray-600 transition-colors">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </div>
    </div>
  );
};

export default Thread;
