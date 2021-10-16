import React, { useEffect, useRef } from 'react';

BackToTop.propTypes = {};

function BackToTop(props) {
  const backToTopRef = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopRef.current.classList.add('active');
      } else {
        backToTopRef.current.classList.remove('active');
      }
    });
    return () => {
      window.addEventListener('scroll');
    };
  }, []);

  const handleClickToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="back-to-top" ref={backToTopRef} onClick={handleClickToTop}>
      <i className="bx bx-chevron-up"></i>
    </div>
  );
}

export default BackToTop;
