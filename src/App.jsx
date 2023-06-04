import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Blog/MainBlog";
import Layout1 from "./layouts/Layout1";
import Login from "./pages/User/Login";
import Registor from "./pages/User/Registor";
import LandingPage from "./pages/LangdingPages/LandingPage";
import Galary from "./pages/LangdingPages/Galary.jsx";
import Admin from "./pages/AdminPages/Admin";
import AdminGalary from "./pages/AdminPages/AdminGalary.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import AllUsers from "./pages/AdminPages/AllUsers";
import WebFont from "webfontloader";
import Logout from "./pages/User/Logout.jsx";
import { loadUser } from "./actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import MyProfile from "./pages/User/MyProfile.jsx";
import CreateBlog from "./pages/Blog/CreateBlog.jsx";
import CenINEleven from "./pages/CenIN/CenINEleven.jsx";

import store from "./store";
import LoginRoute from "./components/Routes/LoginRoute.jsx";
import Layout2 from "./layouts/Layout2";
import CenINOne from "./pages/CenIN/CenINOne";
import WorldVisual from "./pages/CenIN/WorldVisual";
import Predictive from "./pages/CenIN/Predictive";
import About from "./pages/LangdingPages/About";
import Contact from "./pages/LangdingPages/Contact";
import DisplayBlog from "./pages/Blog/DisplayBlog";
// import AdminRoute from "./components/Routes/AdminRoute.jsx";
const App = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout1 />}>
          <Route index element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registor />} />
          <Route path="/logout" element={<Logout />} />
          <Route
            element={
              <LoginRoute isAuthenticated={user.isAuthenticated} user={user} />
            }
          >
            <Route path="/blog" element={<Main />} />
            <Route path="/blog/create" element={<CreateBlog />} />
            <Route path="/blog/:id" element={<DisplayBlog/>} />
            <Route path="/myprofile" element={<MyProfile />} />
          </Route>

          <Route path="/galary" element={<Galary />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route
            element={
              <LoginRoute
                isAuthenticated={user.isAuthenticated}
                user={user}
                checkAdmin={true}
              />
            }
          >
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/gallery" element={<AdminGalary />} />
            <Route path="/admin/users/all" element={<AllUsers />} />
          </Route>
        </Route>

        <Route path="/" element={<Layout2 />}>
          <Route path="/2011" element={<CenINEleven />} />
          <Route path="/2001" element={<CenINOne />} />
          <Route path="/worldvis" element={<WorldVisual />} />
          <Route path="/preditive" element={<Predictive />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};
export default App;
