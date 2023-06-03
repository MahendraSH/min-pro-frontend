import React from "react";
const CardOverlay = () => {
  // console.log("url", url, "title", title, "dis", dis);

  return (
    // <div className="card  image-full  lg:h-[30rem]  overflow-hidden  p-1 mb-2 shadow-2xl shadow-base-content ">
    //   <figure>
    //     <img src={url} alt="Shoes" className="w-full h-full object-cover" />
    //   </figure>
    //   <div className="card-body ">
    //     <h2 className="card-title text-green-500 glass">{title}</h2>
    //     <p className=" text-slate-300 ">{dis}</p>
    //     <div className="card-actions justify-end">
    //       {/* <button className="btn btn-success">Read more...</button> */}
    //     </div>
    //   </div>
    // </div>
    <>
      <div className=" min-h-screen    w-full  overflow-x-hidden  ">
        <iframe
          title="feature"
          className=" w-[102%]  min-h-screen overflow-hidden "
          src="https://min-census-data-v.onrender.com/"
        ></iframe>
      </div>
    </>
  );
};

export default CardOverlay;
