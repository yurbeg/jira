import { Login,Register } from "./pages/auth" 
import MainLayout from "./components/Layout/Main";
import "./styles/global.css";


import { ROUTE_CONSTANTS } from "./core/constants/constants";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route path="" element={<MainLayout />}>
            <Route path={ROUTE_CONSTANTS.LOGIN} element={<Login />} />
            <Route path={ROUTE_CONSTANTS.REGISTER} element={<Register />} />
          </Route>
        )
      )}
    />
  );
};

export default App;
