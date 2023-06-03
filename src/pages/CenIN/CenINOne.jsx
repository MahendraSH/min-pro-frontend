import React from "react";
import Navbar from "../../components/Navbar";
const CenINOne = () => {
  const REACT_APP_API_ONE = process.env.REACT_APP_API_ONE;
  // console.log(REACT_APP_API_ONE);
  return (
    <>
      <div className=" max-h-screen  overflow-hidden  w-full">
        <Navbar />
        <iframe
          title="2001"
          className=" w-full min-h-screen"
          src={REACT_APP_API_ONE}
        ></iframe>
      </div>
    </>
  );
};

export default CenINOne;
