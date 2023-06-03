import React from "react";
import Loader from "../../components/Loader";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { logout } from "../../actions/userActions";
const Logout = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(logout());
    history("/");
  }, [dispatch, history]);
  return (
    <div>
      <Loader />
    </div>
  );
};

export default Logout;
