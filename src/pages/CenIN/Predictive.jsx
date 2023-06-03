import React from "react";

import Navbar from "../../components/Navbar";

const Predictive = () => {
  const REACT_APP_API_PREDICTIVE = process.env.REACT_APP_API_PREDICTIVE;
  console.log(REACT_APP_API_PREDICTIVE);
  return (
    <>
      <div className=" max-h-screen  overflow-hidden  w-full">
        <Navbar />
        <iframe
          title="world-visual"
          className=" w-full min-h-screen"
          src={REACT_APP_API_PREDICTIVE}
        ></iframe>
      </div>
    </>
  );
};

export default Predictive;
