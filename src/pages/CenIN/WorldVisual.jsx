import React from "react";

import Navbar from "../../components/Navbar";

const WorldVisual = () => {
  const REACT_APP_API_WORLD = process.env.REACT_APP_API_WORLD;
  // console.log(REACT_APP_API_WORLD);
  return (
    <>
      <div className=" max-h-screen  overflow-hidden  w-full">
        <Navbar />
        <iframe
          title="world-visual"
          className=" w-full min-h-screen"
          src={REACT_APP_API_WORLD}
        ></iframe>
      </div>
    </>
  );
};

export default WorldVisual;
