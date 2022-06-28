/* eslint-disable */
import { createContext, useContext, useState } from "react";

const Contex = createContext(undefined, undefined);

const Provider = ({ children }) => {
  const [campaigns, setCampaigns] = useState([]);
  const [categories, setCategories] = useState([]);
  const [submenu, setSubmenu] = useState([]);
  const [categoryId, setCategoryId] = useState([]);
  const data = {
    campaigns,
    setCampaigns,
    categories,
    setCategories,
    submenu,
    setSubmenu,
    categoryId,
    setCategoryId,
  };
  return <Contex.Provider value={data}>{children}</Contex.Provider>;
};

export const useSite = () => useContext(Contex);

export default Provider;
