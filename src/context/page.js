import { useState, createContext } from "react";

const PageContext = createContext();

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

function PageProvider({ children }) {
  const [page, setPage] = useState(ITEM_LIST[0].id);

  return (
    <PageContext.Provider value={{ page, setPage }}>
      {children}
    </PageContext.Provider>
  );
}

export { PageContext, PageProvider };
