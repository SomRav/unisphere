import React from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router";

const CommunityList = ({ communities }) => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {communities.map((community) => (
        <div
          key={community.id}
          className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-4px]"
        >
          <div className="p-5">
            {/* Category Badge */}
            <div className="mb-3">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-indigo-100 text-indigo-800">
                {community.category}
              </span>
            </div>

            {/* Community Title */}
            <h3 className="font-bold text-xl text-gray-800 mb-2">
              {community.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {community.description}
            </p>

            {/* Metadata */}
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
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
                <span>{community.members} members</span>
              </div>

              {community.createdAt && (
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
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <span>
                    Created {new Date(community.createdAt).toLocaleDateString()}
                  </span>
                </div>
              )}
            </div>

            {/* View Button */}
            <button
              onClick={() => navigate("Computer-Science")}
              type="button"
              className="block w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white text-center font-medium rounded-md transition-colors duration-200"
            >
              View Community
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommunityList;
