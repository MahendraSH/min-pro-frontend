import React from 'react'
import { Link } from 'react-router-dom';

const CardCenINLanding = ({linkto,title,image ,des}) => {
  return (
    <Link to={linkto}>
      <div className="card card-side bg-base-100 shadow-xl shadow-base-content  m-1  p-3  :translate-x-1   ">
        <figure>
          <img
            className="mask mask-parallelogram  w-72 h-72 "
            alt="CenInLanding"

            src={image}
          />
        </figure>
        <div className="card-body w-1/3">
          <h2 className="card-title text-primary hover:btn-link"> {title}</h2>
          <p className=' sm:hidden md:hidden '>{des} </p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </Link>
  );
}

export default CardCenINLanding;
