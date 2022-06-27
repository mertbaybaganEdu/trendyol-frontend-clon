import React  from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import ButikLayout from "../Layout/ButikLayout";
import CategoryList from "../Layout/CategoryList";
import App from "../App";
import {useSite} from "../context/Sitecontext";
import Loading from "../components/Loading/Loading";
import {Suspense} from "react";
const HomePage  = React.lazy(() => import("../Pages/CategoriPages/HomePage"));
function AppRouter() {
  const { submenu } = useSite();
  return (
    <div>
      <BrowserRouter>
          <Suspense fallback={<Loading/>}>
        <Routes>

            <Route path="/" element={<App/>} />
          <Route path="/butik" exact element={<ButikLayout />} >

            <Route path="liste"   element={<CategoryList/>} >

                <Route path=":id/:categoriesUrl" element={<HomePage />} />
            </Route>


            </Route>
        </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default AppRouter;
