import React from "react";
import { Link } from "react-router";

const MyHero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="max-w-3xl mx-auto text-center px-6 py-16">
        {/* <div className="inline-block mb-6">
          <div className="h-12 w-12 rounded-full bg-indigo-600 flex items-center justify-center mx-auto">
            <span className="text-xl font-bold text-white">U</span>
          </div>
        </div> */}

        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Uni<span className="text-blue-600">Sphere</span>
        </h1>
        <p className="text-lg text-indigo-700 font-medium mb-6">
          Bold Ideas. Open Minds.
        </p>

        <div className="max-w-xl mx-auto">
          <p className="text-gray-600 mb-8">
            Welcome to UniSphere - your university's dynamic forum bridging
            academic discourse and campus life. Engage in unfiltered
            conversations where ideas transform into action. Debate scholarly
            concepts, address campus matters, exchange creative sparks, or voice
            personal concerns - every perspective powers our collective growth.
            Connect across disciplines and shape tomorrow's solutions through
            today's dialogues.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="btn bg-indigo-600 hover:bg-indigo-700 text-white border-none px-8"
            type="button"
          >
            <Link to="/sign-up">Join Now</Link>
          </button>
          <button
            className="btn bg-transparent border-gray-300 text-gray-700 hover:bg-gray-100 px-6"
            type="button"
          >
            <Link to="/communities">Explore</Link>
          </button>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          Already a member?{" "}
          <Link
            to="/sign-in"
            className="font-medium text-indigo-600 hover:text-indigo-800"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyHero;
