import React from "react";
import { Link } from "react-router-dom";
import { BANNERS } from "../../constants/Banners";
import hcSticky from "hc-sticky";
import "./banners.scss";

const Banners = () => {
  return (
    <div id="stickys" className="component-banner-list">
      <div className="slick-slider">
        {BANNERS.map((banner) => {
          return (
            <div key={banner.id} id={banner.id} className="slick-track">
              <Link className="banner-slick-link" to={banner.href}>
                <img src={banner.src} alt={banner.title} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Banners;
