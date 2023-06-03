import React from "react";

const GalaryImage = (props) => {
  return (
    <div className="card  shadow-xl h-4/6  lg:h-[25rem] p-1 m-1  overflow-hidden  ">
      <figure>
        <img src={props.image.url} alt="Galay_image" className="  h-96 w-96 " />
      </figure>
    </div>
  );
};

export default GalaryImage;
