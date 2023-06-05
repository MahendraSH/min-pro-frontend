import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { formatISO9075 } from "data-fns";
import { useParams } from "react-router-dom";
import { clearErrors, getBlogDetails } from "../../actions/blogActions";
import { enqueueSnackbar } from "notistack";
import Loader from "../../components/Loader";
const DisplayBlog = () => {
  const { id } = useParams();

  const { error, loading, blog } = useSelector((state) => state.blogs);

  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: "error" });
      dispatch(clearErrors());
    }
    dispatch(getBlogDetails(id));
  }, [dispatch, error, id]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        blog && (
          <div>
            <div
              className="hero min-h-screen"
              style={{ backgroundImage: `url(${blog.mainImage.url})` }}
            >
              <div className="hero-overlay bg-gradient-to-br from-black  opacity-10"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  {/* <h1 className="mb-5 text-5xl font-bold">Hello there</h1> */}
                </div>
              </div>
            </div>
            <h1 className="text-5xl text-center my-4 bg-base-200 p-2 rounded-sm shadow-sm shadow-gray-700 first-letter:capitalize">
              {blog.title}
            </h1>

            <div className="container mx-auto px-16">
              <p>{blog.mainContent}</p>
            </div>
            <div
              className=" container mx-auto px-16 "
              dangerouslySetInnerHTML={{ __html: blog.paras }}
            />
            <div className="container mx-auto px-10 rounded-lg bg-orange-200  py-3 my-10 shadow-lg shadow-gray-900 ">
              <p>{blog.summary}</p>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default DisplayBlog;
