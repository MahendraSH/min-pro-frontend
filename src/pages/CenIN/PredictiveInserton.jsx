import React from "react";

const PredictiveInserton = () => {
  const REACT_APP_API_PREDICTIVE_INSERTION =
    process.env.REACT_APP_API_PREDICTIVE_INSERTION;
  return (
    <>
      <div className=" max-h-screen  overflow-hidden  w-full">
    
        <iframe
          title="world-visual"
          className=" w-full min-h-screen"
          src={REACT_APP_API_PREDICTIVE_INSERTION}
        ></iframe>
      </div>
    </>
  );
};

export default PredictiveInserton;
