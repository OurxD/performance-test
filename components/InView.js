/* eslint-disable jsx-a11y/anchor-is-valid, react/prop-types */
import React, { useRef, useEffect, useState } from 'react';

const InView = ({ children }) => {
  const [isInView, setIsInView] = useState(false);
  const inViewRef = useRef(null);

  useEffect(() => {
    let observer;

    observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    });
    observer.observe(inViewRef.current);

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div ref={inViewRef}>
      {isInView ? children : null}
    </div>
  );
};

export default InView;
