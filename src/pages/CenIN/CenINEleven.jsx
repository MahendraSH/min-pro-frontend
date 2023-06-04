import React from "react";
import Navbar from "../../components/Navbar";

const CenINEleven = () => {
  const REACT_APP_API_ELE = process.env.REACT_APP_API_ELE;
  // console.log(REACT_APP_API_ELE);
  return (
    <div className=" max-h-screen  overflow-hidden  w-full">
      <Navbar />
      <iframe
        title="2011"
        className=" w-full min-h-screen"
        src={REACT_APP_API_ELE}
      ></iframe>
    </div>
  );
};

export default CenINEleven;
