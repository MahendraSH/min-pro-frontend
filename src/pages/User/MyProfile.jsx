import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";

const MyProfile = () => {
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);
  const history = useNavigate();
  useEffect(() => {
    if (isAuthenticated === false) {
      history("/login");
    }
  }, [isAuthenticated, history]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
              <div className="avatar">
                <div className=" w-72 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={user.avatar.url} alt="" />
                </div>
              </div>
              <div>
                <h1 className="text-7xl font-bold">My Profile</h1>

                <div>
                  <div>
                    <h4 className="text-2xl">Full Name :</h4>
                    <p className="text-2xl">{user.name}</p>
                  </div>
                  <div>
                    <h4 className="text-2xl">Email :</h4>
                    <p className="text-2xl">{user.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MyProfile;
