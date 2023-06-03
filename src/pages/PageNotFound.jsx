import React from 'react'
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-7xl font-bold">404</h1>
            <h2 className="text-5xl font-bold">Page not found</h2>
            <p className="py-6">The page you are looking for does not exist.</p>
            <Link to="/" className="btn btn-primary">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound
