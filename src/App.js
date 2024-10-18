import { Login,Register } from "./pages/auth" 
import MainLayout from "./components/Layout/Main";
import Cabinet from "./pages/cabinet";
import { ROUTE_CONSTANTS } from "./core/constants/constants";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate
} from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "./services/firbase"
import { onAuthStateChanged } from "firebase/auth";
import LoadingWrapper from "./components/shared/LoadingWrapper";
import "./styles/global.css";

const App = () => {
  const [isAuth,setIsAuth] = useState(false)
  const [ loading,setLoading ] = useState(true)
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      setLoading(false)
      setIsAuth(Boolean(user))
    })
  })

  return (
    <LoadingWrapper loading={loading}>
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route path="" element={<MainLayout />}>
            <Route path={ROUTE_CONSTANTS.LOGIN} element={isAuth?<Navigate to={ROUTE_CONSTANTS.CABINET} />:<Login setIsAuth={setIsAuth}/>} />
            <Route path={ROUTE_CONSTANTS.REGISTER} element={<Register />} />
            <Route path={ROUTE_CONSTANTS.CABINET} element={isAuth?<Cabinet />:<Navigate  to={ROUTE_CONSTANTS.LOGIN}/>} />

          </Route>
        )
      )}
    />
    </LoadingWrapper>
  );
};

export default App;
