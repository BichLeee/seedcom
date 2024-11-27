import classNames from "classnames";
import { useContext, useEffect, useRef } from "react";
import { PageContext } from "../../context/page";
import "./Page.scss";

function Page({ className, id, mainRef, children }) {
  const { page, setPage } = useContext(PageContext);
  const ref = useRef();

  useEffect(() => {
    if (page === id) {
      const top = ref.current.offsetTop - mainRef.current.offsetTop;
      console.log(top);
      mainRef.current.scrollTo({
        top,
        behavior: "smooth",
      });
    }
    console.log(page === id);
  }, [page]);

  const classes = classNames("page-wrapper", className);

  return (
    <div className={classes} ref={ref}>
      {children}
    </div>
  );
}

export default Page;
