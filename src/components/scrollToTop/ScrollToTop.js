import { useEffect } from 'react';

const ScrollToTop = ({ switchPage }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [switchPage]);

  return null;
};

export default ScrollToTop;
