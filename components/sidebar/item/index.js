import { useState } from "react";

export const SidebarItem = ({ title, items, onClick }) => {
  const [currentItem, setCurrentItem] = useState(null);
  const handleClick = (item) => {
    if (item === currentItem) {
      setCurrentItem(null);
      onClick(null);
    } else {
      setCurrentItem(item);
      onClick(item.toLowerCase());
    }
  };
  return (
    <>
      <h3 className="sidebar-card__subheader">
        {title}
        <div className="sidebar-card__divider"></div>
      </h3>

      <ul className="sidebar-card__list">
        {items.map((item) => (
          <li
            onClick={() => handleClick(item)}
            className={`sidebar-card__list__item ${
              currentItem == item ? "sidebar-card__list__item--active" : ""
            }`}
            key={`${title}-${item}`}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};
