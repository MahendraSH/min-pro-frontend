import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ title, summary, mainImage, id }) => {

  let url = `/blog/${id}`;
  return (
    <div className="card  shadow-xl h-4/6  lg:h-[25rem] p-1 m-1  overflow-hidden ">
      <figure className="">
        <img
          src={mainImage.url}
          alt={mainImage.url}
          className=" w-9/12 h-40   "
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{title.substring(0, 20)}</h2>
        <p>{summary.substring(0, 100)}</p>
        <div className="card-actions justify-end">
          <Link to={url} className="btn btn-ghost hover:btn-link">
           Read more....
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
