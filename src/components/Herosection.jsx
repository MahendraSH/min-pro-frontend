import React from "react";
import MainHeading from "./MainLandingPage/MainHeading";

const Herosection = (props) => {
  return (
    <div
      className="hero min-h-screen bg-dark  "
      style={{
        backgroundImage: `url("https://res.cloudinary.com/dranaclni/image/upload/v1685855048/cenIN/Recording_2023-06-04_102525_AdobeExpress_ybwclf.gif")`,
        // backgroundImage : '('../../public/svg.html')'
      }}
    >
      <div className="hero-overlay  "></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl font-bold lg:text-7xl">
            <MainHeading />
          </h1>
          <h3 className="mb-5 text-2xl   text-zinc-100">
            {props.data.subheading}
          </h3>
          <p className="mb-5 font-semibold text-lg  text-zinc-100">
            {props.data.para}
          </p>
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
