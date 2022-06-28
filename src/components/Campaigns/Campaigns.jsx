/* eslint-disable */
import { Link, useParams } from "react-router-dom";
import LazyLoad from "react-lazyload";
import Text from "../Text/Text";
import cn from "classnames";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useSite } from "../../context/Sitecontext";
import { useEffect } from "react";

const Campaigns = ({ mode, newCampaning }) => {
  const { categoriesUrl } = useParams();

  const {
    campaigns,
    setCampaigns,
    categories,
    setCategories,
    setCategoryId,
    categoryId,
  } = useSite();
  useEffect(() => {
    fetch("/campaings")
      .then((response) => response.json())
      .then((response) => setCampaigns(response))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch("/categories")
      .then((response) => response.json())
      .then((response) => setCategories(response))
      .catch((error) => console.log(error));
  }, []);

  setTimeout(() => {
    const categoryIds = categories.find(
      (category) => category.categoriesSlugify === categoriesUrl
    )._id;
    setCategoryId(categoryIds);
    console.log(categoryId);
  }, 60);

  const style = {
    mode: {
      campaignbig: "campaign-big",
      campaignsmall: "campaign-small",
    },
  };

  return (
    <>
      {campaigns
        .filter(
          categoriesUrl
            ? (data) =>
                data.newCampaning === newCampaning && categoriesUrl
                  ? data.category === categoryId
                  : null
            : (data) => data.newCampaning === newCampaning
        )
        .map((campaign) => {
          const listId = `list-${campaign.id}`;
          return (
            <article
              key={campaign._id}
              className={cn("component-item", style.mode[mode])}
              onMouseOver={() => {
                const hoverText = document.getElementById(listId);
                hoverText.classList.add("open-text");
              }}
              onMouseOut={() => {
                const hoverText = document.getElementById(listId);
                hoverText.classList.remove("open-text");
              }}
            >
              <Link className="campaign-link " to={campaign.link}>
                <span className="image-container">
                  <LazyLoad once={true} height={187}>
                    {" "}
                    <img src={campaign.image} alt={campaign.name} />
                  </LazyLoad>
                </span>
                <summary className="campaign-summary">
                  <span>
                    {mode === "campaignbig" ? (
                      <Text color="white" size="base">
                        {campaign.name}
                      </Text>
                    ) : (
                      <Text mode="CampaignSummary">{campaign.name}</Text>
                    )}
                  </span>
                  <div id={listId} className="hover-text">
                    <Text> Alışverişe Başla </Text>
                    <i className="arrow">
                      <MdOutlineArrowForwardIos />
                    </i>
                  </div>
                </summary>
              </Link>
            </article>
          );
        })}
    </>
  );
};

export default Campaigns;
