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
        <section className=" P-4 m-4 shadow-lx lg:columns-3 md:columns-2 gap-x-0.5 ">
          {blogs &&
            blogs.map((blog) => {
              return (
                <Cards
                  key={blog._id}
                  id={blog._id}
                  title={blog.title}
                  summary={blog.summary}
                  mainImage={blog.mainImage}
                />
              );
            })}
        </section>
      )}
    </>
  );
};

export default Main;
