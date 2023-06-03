import React from "react";
import MainHeading from "./MainLandingPage/MainHeading";

const Herosection = (props) => {
  return (
    <div
      className="hero min-h-screen "
      style={{
        backgroundImage: `url("https://res.cloudinary.com/dranaclni/image/upload/v1684320559/cenIN/MainHero_esipxn.png")`,
      }}
    >
      <div className="hero-overlay  bg-opacity-30"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl font-bold lg:text-7xl">
            <MainHeading />
          </h1>
          <h3 className="mb-5 text-2xl  text-gray-300">
            {props.data.subheading}
          </h3>
          <p className="mb-5 text-slate-200  text-lg ">{props.data.para}</p>
        </div>
      </div>
    </div>
  );
};

// const MainHeading = () => {
//   return (
//     <>
//       <span className="text-accent">In</span>di
//       <span className=" text-success">an</span>{" "}
//       <span className="text-blue-700">Census</span>{" "}
//       <span className="text-slate-300">Visualization</span>
//     </>
//   );
// };

export default Herosection;
