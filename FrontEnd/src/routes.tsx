import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./features/home/Layout";

const Routes = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Layout />}></Route>)
);
export default Routes;
