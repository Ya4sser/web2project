import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// When the page (URL) changes, scroll back to the top.
// Without this, opening a book from the bottom of a list starts halfway down.
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // this component shows nothing on screen
}

export default ScrollToTop;
