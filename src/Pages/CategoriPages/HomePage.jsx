import React from "react";
import Banners from "../../components/Banners/Banners";
import CampaignList from "../../components/Campaigns/CampaignList";

import TopSiliders from "../../components/Silider/TopSiliders";
function HomePage() {
  return (
    <div className="wrapper">
      <TopSiliders />
      <div className="sticky-wrapper">
        <div>
          <CampaignList mode="campaignbig" newcampaning="true" />
        </div>
        <div>
          <Banners />
        </div>
      </div>

      <CampaignList mode="campaignsmall" newcampaning="false" />
    </div>
  );
}

export default HomePage;
