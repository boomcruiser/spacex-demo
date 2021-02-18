import { SidebarItem } from "./item";
import { useContext, useState, useEffect, useRef } from "react";
import { SpaceProgramsContext } from "../../providers/space-program-provider";
import { LoadingContext } from "../../providers/loading-provider";
import { getYears, generateQueryString } from "../../utils";
import { BASE_SPACEX_URL } from "../../constants";

const Sidebar = () => {
  const mounted = useRef(true);
  const [spacePrograms, setSpacePrograms] = useContext(SpaceProgramsContext);
  const [loading, setLoading] = useContext(LoadingContext);
  const [filters, setFilters] = useState({
    launch_success: null,
    launch_year: null,
    land_success: null,
  });
  const years = getYears();
  const TF = ["True", "False"];
  const fetchNewData = (queryString) => {
    const url = BASE_SPACEX_URL + queryString;
    if (mounted?.current) setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (mounted?.current) setSpacePrograms(data);
      })
      .finally(() => {
        if (mounted?.current) setLoading(false);
      });
  };
  const applyYearFilter = (item) => {
    setFilters({ ...filters, launch_year: item });
  };
  const applyLaunchFilter = (item) => {
    setFilters({ ...filters, launch_success: item });
  };
  const applyLandingFilter = (item) => {
    setFilters({ ...filters, land_success: item });
  };
  const filterItems = [
    { title: "Launch Year", items: years, onClick: applyYearFilter },
    { title: "Successful Launch", items: TF, onClick: applyLaunchFilter },
    { title: "Successful Landing", items: TF, onClick: applyLandingFilter },
  ];
  useEffect(() => {
    mounted.current = true;
    const newQueryString = generateQueryString(filters);
    fetchNewData(newQueryString);
    return () => {
      mounted.current = false;
    };
  }, [filters]);

  return (
    <nav className="sidebar-card">
      <h2 className="sidebar-card__header">Filters</h2>
      {filterItems.map((filterItem) => (
        <SidebarItem
          key={filterItem.title + "-sidebar"}
          title={filterItem.title}
          items={filterItem.items}
          onClick={filterItem.onClick}
        />
      ))}
    </nav>
  );
};
export default Sidebar;
