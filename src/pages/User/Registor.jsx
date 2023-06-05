import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../actions/userActions";
import avatardemo from '../../image/Screenshot 2023-06-05 082130.png';

import Loader from "../../components/Loader";
import { enqueueSnackbar } from "notistack";
const Registor = () => {
  const dispatch = useDispatch();
  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.user
  );
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [avatar, setAvatar] = useState(avatardemo);
  const { name, email, password } = user;

  const registerDataChange = (e) => {
    
      enqueueSnackbar("avatar size less then 100 kb ", { variant: "info" }); 
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatar(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const onSubmitRegistoHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("avatar", avatar);
    console.log(avatar);
    dispatch(register(formData));
  };
  const history = useNavigate();
  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: "error" });
      dispatch({ type: "clearErrors" });
    }
    if (isAuthenticated) {
      // enqueueSnackbar("Registation Successfull", { variant: "success" });
      // dispatch({ type: "clearErrors" });
      history("/myprofile");
    }
  }, [dispatch, isAuthenticated, error, history]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div
          className="hero min-h-screen bg-base-200"
          // style={{
          //   backgroundImage: `url("https://res.cloudinary.com/dranaclni/image/upload/v1684320559/cenIN/MainHero_esipxn.png")`,
          // }} // with bag  text-slate-200
        >
          <div className="hero-content flex-col ">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">
                Register now! Welcome to CenIN
              </h1>
              {/* <p className="py-6 para">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p> */}
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body  shadow-xl shadow-base-content">
                <form onSubmit={onSubmitRegistoHandler}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="name"
                      className="input input-bordered"
                      required={true}
                      value={name}
                      onChange={(e) =>
                        setUser({ ...user, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="email"
                      className="input input-bordered"
                      required={true}
                      value={email}
                      onChange={(e) =>
                        setUser({ ...user, email: e.target.value })
                      }
                    />
                  </div>

                  <div className="form control">
                    <label className="label">
                      <span className="label-text"> avatar</span>
                    </label>{" "}
                    <input
                      type="file"
                      name="avatar"
                      accept="image/*"
                      onChange={registerDataChange}
                      className="file-input file-input-bordered file-input-primary
                    w-full max-w-xs"
                    />  
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="password"
                      className="input input-bordered"
                      required={true}
                      value={password}
                      onChange={(e) =>
                        setUser({ ...user, password: e.target.value })
                      }
                    />
                    <label className="label">
                      <Link
                        to="/forgot"
                        className="label-text-alt link link-hover"
                      >
                        Forgot password?
                      </Link>
                      <Link
                        to="/login"
                        className="label-text-alt link link-hover"
                      >
                        login user
                      </Link>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary">register</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Registor;
