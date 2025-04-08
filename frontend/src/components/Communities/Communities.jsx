import React, { useEffect, useState } from "react";
import axios from "axios";
import CommunityList from "./CommunityList";

function Communities() {
  const [communitiesData, setCommunitiesData] = useState(null);

  useEffect(() => {
    console.log("fetching data");
    if (!communitiesData) {
      axios
        .get("http://localhost:3001/communities")
        .then((response) => response.data)
        .then((data) => {
          console.log(data);
          setCommunitiesData(data);
          console.log("comm:", communitiesData);
        })
        .catch((error) => console.log(error));
    }
  }, [communitiesData]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 pt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <header className="mb-10 pt-10 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
            Explore Communities
          </h1>
          <p className="text-gray-600 text-lg">
            Discover and join academic communities at UniSphere
          </p>
        </header>

        {communitiesData ? (
          <CommunityList communities={communitiesData} />
        ) : (
          <div className="flex justify-center py-20">
            <p className="text-gray-500">Fetching data...</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Communities;
