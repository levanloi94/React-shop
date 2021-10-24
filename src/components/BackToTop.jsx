import React, { useEffect, useRef, useState } from 'react';

BackToTop.propTypes = {};

function BackToTop(props) {
  const [show, setShow] = useState(false);
  const backToTopRef = useRef(null);

  // useEffect(() => {
  //   window.addEventListener('scroll', () => {
  //     if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
  //       backToTopRef.current.classList.add('active');
  //     } else {
  //       backToTopRef.current.classList.remove('active');
  //     }
  //   });
  //   return () => {
  //     window.removeEventListener('scroll');
  //   };
  // }, []);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  const handleClickToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    // <div className="back-to-top" ref={backToTopRef} onClick={handleClickToTop}>
    //   <i className="bx bx-chevron-up"></i>
    // </div>
    <div className={`back-to-top ${show ? 'active' : ''}`} onClick={handleClickToTop}>
      <i className="bx bx-chevron-up"></i>
    </div>
  );
}

export default BackToTop;
