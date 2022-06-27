
import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { NAVBAR } from "../../constants/Nabar";
import Button from "../Button/Button";
import {useSite} from "../../context/Sitecontext";


export const Navbar = () => {
  const { submenu ,setSubmenu } = useSite() ;

  useEffect(() => {
    setSubmenu(NAVBAR);
  }, []);
  return (
    <ul className="main-nav">
      {submenu.map((item, index) => {


        const menuid = `menu-${item.id}`;
        const element1 = document.getElementById(menuid);
        return (
          <li
            key={index}
            onMouseOver={() => {
              const element1 = document.getElementById(menuid);
              element1.classList.add("animation");
              const element2 = document.getElementById(menuid);
              element2.classList.add("enabled");
            }}
            onMouseOut={() => {
              const element3 = document.getElementById(menuid);
              element3.classList.remove("animation");
              const element4 = document.getElementById(menuid);
              element4.classList.remove("enabled");
            }}
            className="tab-link"
          >
            <Button to={item.path} thema="navigation">
              {item.name}
            </Button>
            <div id={menuid} className="sub-nav ">
              <div className="sub-nav-center">
                <div className="sub-nav-outer">
                  <div className="normal-column">
                    {item.menu.map((menu, index2) => {
                      return (
                        <div key={index2} className="category-box">
                          <Link to="">{menu.name}</Link>
                          <ul className="sub-item-list">
                            {menu.submenu.map((submenu, index3) => {
                              return (
                                <li key={index3} className="sub-item">
                                  <NavLink to={submenu.path}>
                                    {submenu.name}
                                  </NavLink>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>


              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
