"use client";

import MainGroup from "./main-group";

function Body(props) {
  return (
    <div>
      <div className="card w-fit bg-base-300 shadow-xl mx-auto mb-6 mt-6">
        <div className="card-body items-center text-center">
          <p>
            This tool is designed to help convert mouse sensitivity between
            games.
          </p>
          <p>
            {" "}
            Select a game from the dropdown with your preferred sensitivity, and
            the target game for your desired sensitivity.
          </p>
        </div>
      </div>
      <MainGroup />
    </div>
  );
}

export default Body;
