import Header from "../components/Header/Header";
import {Outlet} from "react-router-dom"
const ButikLayout = ({ children }) => {

  return (
    <div>
      <Header />
         <Outlet />
    </div>
  );
}
export default ButikLayout;


