import React, { useEffect } from "react";

import Cards from "../../components/Cards/CardHorizon";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getAllBlogs } from "../../actions/blogActions";
import Loader from "../../components/Loader";
import { enqueueSnackbar } from "notistack";

const Main = () => {
  const { error, loading, blogs } = useSelector((state) => state.blogs);
  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: "error" });
      dispatch(clearErrors());
    }
    dispatch(getAllBlogs());
  }, [dispatch, error]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className="text-gray-600 body-font bg-gradient-to-br  ">
          <div className=" px-2 py-4 container mx-auto">
            <div className="md:flex flex-wrap   ">
              {blogs &&
                blogs.map((blog) => {
                  return (
                    <Cards
                      key={blog._id}
                      id={blog._id}
                      title={blog.title}
                      summary={blog.summary}
                      mainImage={blog.mainImage}
                      createdAt={blog.createdAt}
                      userName={blog.author.name}
                      avatar={blog.author.avatar}
                    />
                  );
                })}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Main;
