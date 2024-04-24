import React from "react";
import "./App.css";
import Root from "./Root";
import BeingBuilt from "./Components/Features/BeingBuilt";
import PageNotFound from "./Components/Features/PageNotFound";
import BusinessPage from "./Pages/BusinessPage";
import DriversPage from "./Pages/DriversPage";
import HomePage from "./Pages/HomePage";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<HomePage />} />
      <Route path="DriversPage" element={<DriversPage />} />
      <Route path="BusinessPage" element={<BusinessPage />} />
      <Route path="BeingBuilt" element={<BeingBuilt />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);
export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
