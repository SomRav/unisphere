// Community.jsx - Enhanced main container component
import React from "react";
import ThreadList from "./ThreadList";

const Community = ({ title, description, threads }) => {
  const communityData = {
    title: "Computer Science",
    description:
      "Discussions about algorithms, programming languages, and software development for university students and faculty.",
    threads: [
      {
        id: 1,
        title: "Best practices for React component organization?",
        author: "alex_dev",
        timestamp: "2 hours ago",
        type: "Question",
        replies: 8,
        votes: 12,
      },
      {
        id: 2,
        title:
          "New features in TypeScript 5.0 - what are you most excited about?",
        author: "typescript_fan",
        timestamp: "Yesterday",
        type: "Discussion",
        replies: 24,
        votes: 31,
      },
      {
        id: 3,
        title:
          "How to optimize database queries for a large-scale application?",
        author: "db_master",
        timestamp: "3 days ago",
        type: "Question",
        replies: 15,
        votes: 19,
      },
      {
        id: 4,
        title: "The future of web development: A critical analysis",
        author: "future_coder",
        timestamp: "5 days ago",
        type: "Discussion",
        replies: 42,
        votes: 87,
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-gradient-to-b from-blue-50 to-indigo-100">
      {/* Community Header Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors">
              New Thread
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>

        {/* Community Stats */}
        <div className="flex items-center gap-6 py-3 text-sm text-gray-500 border-t border-b border-gray-200">
          <div className="flex items-center gap-1">
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
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <span>{threads.length * 8} members</span>
          </div>
          <div className="flex items-center gap-1">
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
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <span>{threads.length} threads</span>
          </div>
          <div className="flex items-center gap-1">
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
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            <span>1.2k views today</span>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium hover:bg-indigo-200 transition-colors">
            All Threads
          </button>
          <button className="px-3 py-1 text-gray-500 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
            Questions
          </button>
          <button className="px-3 py-1 text-gray-500 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
            Discussions
          </button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Sort by:</span>
          <select className="text-sm border-0 bg-transparent text-gray-700 font-medium focus:outline-none focus:ring-0">
            <option>Latest</option>
            <option>Popular</option>
            <option>Most Replied</option>
          </select>
        </div>
      </div>

      {/* Thread List */}
      <ThreadList threads={threads} />

      {/* Pagination */}
      <div className="mt-6 flex justify-center">
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 border border-gray-300 rounded text-gray-500 hover:bg-gray-50 transition-colors">
            Previous
          </button>
          <button className="px-3 py-1 bg-indigo-600 text-white rounded">
            1
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded text-gray-700 hover:bg-gray-50 transition-colors">
            2
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded text-gray-700 hover:bg-gray-50 transition-colors">
            3
          </button>
          <span className="px-2 text-gray-500">...</span>
          <button className="px-3 py-1 border border-gray-300 rounded text-gray-700 hover:bg-gray-50 transition-colors">
            10
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded text-gray-500 hover:bg-gray-50 transition-colors">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Community;
