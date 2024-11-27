import { useState } from "react";
import IconButton from "../IconButton";

import "./Navigation.scss";

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
  { id: 9, title: "Menu Item" },
  { id: 10, title: "Menu Item" },
  { id: 11, title: "Menu Item" },
];

function Navigation() {
  const [activeItem, setActiveItem] = useState(ITEM_LIST[0].id);

  console.log(activeItem);

  return (
    <div className="navigation">
      {ITEM_LIST.map((item) => (
        <IconButton
          key={item.id}
          title={item.title}
          onClick={() => setActiveItem(item.id)}
          active={activeItem === item.id}
        />
      ))}
    </div>
  );
}

export default Navigation;
