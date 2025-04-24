import React from 'react';
import { useInView } from 'react-intersection-observer';
import 'animate.css';

const AnimatedOnScroll = ({ children, animation = "animate__fadeInUp", delay = "0s" }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true, // Only animate once
  });

  return (
    <div
      ref={ref}
      style={{ animationDelay: delay }}
      className={`${
        inView ? `animate__animated ${animation}` : 'opacity-0'
      }`}
    >
      {children}
    </div>
  );
};

export default AnimatedOnScroll;
