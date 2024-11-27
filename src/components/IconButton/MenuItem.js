import { useContext, useEffect, useRef } from "react";
import IconButton from ".";
import { PageContext } from "../../context/page";

function MenuItem({ containerRef, id, ...passProps }) {
  const ref = useRef();
  const { page } = useContext(PageContext);

  useEffect(() => {
    if (page === id) {
      const top = ref.current.offsetTop - containerRef.current.offsetTop;
      console.log(top);
      containerRef.current.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  }, [page]);

  return (
    <div ref={ref}>
      <IconButton {...passProps} />
    </div>
  );
}

export default MenuItem;
