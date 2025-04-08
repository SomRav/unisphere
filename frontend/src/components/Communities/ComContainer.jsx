import React from "react";
import Community from "./Community";

const ComContainer = () => {
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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100">
      <div className="py-6">
        <div className="max-w-4xl mx-auto px-4 mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <a href="#" className="hover:text-indigo-600">
              Home
            </a>
            <span>/</span>
            <a href="#" className="hover:text-indigo-600">
              Communities
            </a>
            <span>/</span>
            <span className="text-gray-900 font-medium">Computer Science</span>
          </div>
        </div>

        <Community
          title={communityData.title}
          description={communityData.description}
          threads={communityData.threads}
        />
      </div>
    </div>
  );
};

export default ComContainer;
