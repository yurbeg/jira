import { useEffect } from "react";
import { Login, Register } from "./pages/auth";
import MainLayout from "./components/layouts/Main";
import CabinetLayout from "./components/layouts/Cabinet";
import Profile from "./pages/profile";
import LoadingWrapper from "./components/sheard/LoadingWrapper";
import { ROUTE_CONSTANTS } from "./core/utils/constants";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfileInfo } from "./state-managment/slices/userProfile";
import Cabinet from "./pages/cabinet";

import "./styles/global.css";

const App = () => {
  const dispatch = useDispatch();
  const {
    loading,
    authUserInfo: { isAuth },
  } = useSelector((store) => store.userProfile);

  useEffect(() => {
    dispatch(fetchUserProfileInfo());
  }, [dispatch]);

  return (
    <LoadingWrapper loading={loading}>
      <RouterProvider
        router={createBrowserRouter(
          createRoutesFromElements(
            <Route path="/" element={<MainLayout />}>
              <Route
                path={ROUTE_CONSTANTS.LOGIN}
                element={
                  isAuth ? <Navigate to={ROUTE_CONSTANTS.CABINET} /> : <Login />
                }
              />
              <Route
                path={ROUTE_CONSTANTS.REGISTER}
                element={
                  isAuth ? (
                    <Navigate to={ROUTE_CONSTANTS.CABINET} />
                  ) : (
                    <Register />
                  )
                }
              />

              {/*  Cabinet Layout Route  */}
              <Route
                path={ROUTE_CONSTANTS.CABINET}
                element={
                  isAuth ? (
                    <CabinetLayout />
                  ) : (
                    <Navigate to={ROUTE_CONSTANTS.LOGIN} />
                  )
                }
              >
                <Route path={ROUTE_CONSTANTS.PROFILE} element={<Profile />} />
                <Route path={ROUTE_CONSTANTS.CABINET} element={<Cabinet />} />
              </Route>
            </Route>
          )
        )}
      />
    </LoadingWrapper>
  );
};

export default App;
