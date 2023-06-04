import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, createBlog } from "../../actions/blogActions";
import { enqueueSnackbar } from "notistack";
import Loader from "../../components/Loader";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const dispatch = useDispatch();

  const { error, message, loading } = useSelector((state) => state.blogs);
  const [post, setPost] = useState({
    title: "",
    mainContent: "",
    summary: "",
    paras: "",
  });
  const { title, mainContent, summary, paras } = post;
  const [mainImage, setMainImage] = useState(null);
  const setTargetImage = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) setMainImage(reader.result);
    };

    reader.readAsDataURL(e.target.files[0]);
  };
  const history = useNavigate();
  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: "error" });
      dispatch(clearErrors());
      history("/blog/create");
    }
    if (message) {
      enqueueSnackbar(message, { variant: "success" });
      history("/");
    }
  }, [dispatch, error, message, history]);

  const onSubmitRegistoHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("mainContent", mainContent);
    formData.append("summary", summary);
    formData.append("paras", paras);
    formData.append("mainImage", mainImage);
    dispatch(createBlog(formData));
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="container ">
          <div className="card  w-10/12 flex justify-center  mx-auto mt-10   bg-base-100">
            <div className="card-body  shadow-xl shadow-base-content">
              <form onSubmit={onSubmitRegistoHandler}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Title :</span>
                  </label>
                  <input
                    type="text"
                    placeholder="title"
                    className="input input-bordered"
                    value={title}
                    onChange={(e) =>
                      setPost({ ...post, title: e.target.value })
                    }
                    required={true}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Main Content :</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Main Point of blog "
                    className="input input-bordered"
                    value={mainContent}
                    required={true}
                    onChange={(e) =>
                      setPost({ ...post, mainContent: e.target.value })
                    }
                  />
                </div>

                <div className="form control">
                  <label className="label">
                    <span className="label-text"> avatar</span>
                  </label>{" "}
                  <input
                    type="file"
                    required={true}
                    accept="image/*"
                    name="mainImage"
                    onChange={setTargetImage}
                    className="file-input file-input-bordered file-input-primary
                    w-full max-w-xs"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">blog Content :</span>
                  </label>

                  <ReactQuill
                    required={true}
                    value={paras}
                    onChange={(e) => setPost({ ...post, paras: e })}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Summary :</span>
                  </label>
                  <input
                    type="text"
                    required={true}
                    placeholder=" blog Summary "
                    className="input input-bordered"
                    value={summary}
                    onChange={(e) =>
                      setPost({ ...post, summary: e.target.value })
                    }
                  />
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">
                    create blog
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateBlog;
