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
import Profile from "./pages/profile";
import { getDoc,doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth,db } from "./services/firbase"
import { onAuthStateChanged } from "firebase/auth";
import LoadingWrapper from "./components/shared/LoadingWrapper";
import { AuthContext } from "./context/authContext";
import { FIRSTORE_PATH_NAMES } from "./core/constants/constants";
import "./styles/global.css";

const App = () => {
  const [ isAuth,setIsAuth ] = useState(false)
  const [ loading,setLoading ] = useState(true)
  const [ userProfileInfo,setUserProfileInfo] = useState({})
  const handleGetUser = async (uid)=>{
    const docRef = doc(db,FIRSTORE_PATH_NAMES.REGISTERED_USERS,uid)
    const response = await getDoc(docRef)
    if(response.exists()){
      setUserProfileInfo(response.data())
    }
  }
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      user?.uid && handleGetUser(user.uid)
      setLoading(false)
      setIsAuth(Boolean(user))
    })
  })

  return (
    <AuthContext.Provider value = {{isAuth,userProfileInfo }}>
    <LoadingWrapper loading={loading}>
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route path="" element={<MainLayout />}>
            <Route path={ROUTE_CONSTANTS.LOGIN} element={isAuth?<Navigate to={ROUTE_CONSTANTS.CABINET} />:<Login setIsAuth={setIsAuth}/>} />
            <Route path={ROUTE_CONSTANTS.REGISTER} element={<Register />} />
            <Route path={ROUTE_CONSTANTS.CABINET} element={isAuth ? <Cabinet />:<Navigate to={ROUTE_CONSTANTS.LOGIN}/> } />
            <Route path={ROUTE_CONSTANTS.PROFILE} element={isAuth ? <Profile />:<Navigate to={ROUTE_CONSTANTS.LOGIN}/> } />
          </Route>
        )
      )}
    />
    </LoadingWrapper>
    </AuthContext.Provider>
  );
};

export default App;
