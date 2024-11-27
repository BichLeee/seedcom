import { useContext, useRef, useState } from "react";
import IconButton from "../IconButton";

import "./Navigation.scss";
import { PageContext } from "../../context/page";
import MenuItem from "../IconButton/MenuItem";

const ITEM_LIST = [
  { id: 0, title: "Khuyến mãi hot" },
  { id: 1, title: "Menu Item" },
  { id: 2, title: "Menu Item" },
  { id: 3, title: "Menu Item" },
  { id: 4, title: "Menu Item" },
  { id: 5, title: "Menu Item" },
  { id: 6, title: "Menu Item" },
  { id: 7, title: "Menu Item" },
  { id: 8, title: "Menu Item" },
];

function Navigation() {
  const { page, setPage } = useContext(PageContext);
  const ref = useRef();

  return (
    <div className="navigation" ref={ref}>
      {ITEM_LIST.map((item) => (
        <MenuItem
          key={item.id}
          title={`${item.title} ${item.id}`}
          containerRef={ref}
          id={item.id}
          onClick={() => setPage(item.id)}
          active={page === item.id}
        />
      ))}
    </div>
  );
}

export default Navigation;
