import React, { useEffect } from 'react';
import 'animate.css'; // Import Animate.css

const colors = [
  '#EF5350', '#FB8C00', '#FDD835', '#66BB6A', '#42A5F5',
  '#5C6BC0', '#AB47BC', '#26C6DA', '#26A69A', '#FFA726'
];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const FloatingCircles = ({ count = 20 }) => {
  useEffect(() => {
    const styleSheet = document.styleSheets[0];

    for (let i = 0; i < count; i++) {
      const size = getRandomInt(20, 100);
      const color = colors[getRandomInt(0, colors.length - 1)];
      const x = getRandomInt(0, window.innerWidth);
      const y = getRandomInt(0, window.innerHeight);
      const duration = getRandomInt(8, 20);
      const dx = getRandomInt(-100, 100);
      const dy = getRandomInt(-250, -100);
      const animName = `float-${x}-${y}-${i}`;

      // Create keyframes dynamically for the floating animation
      const keyframes = `
        @keyframes ${animName} {
          0% { transform: translate(0, 0); }
          100% { transform: translate(${dx}px, ${dy}px); }
        }
      `;
      styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

      // Create the div
      const div = document.createElement('div');
      div.style.position = 'absolute';
      div.style.borderRadius = '50%';
      div.style.width = `${size}px`;
      div.style.height = `${size}px`;
      div.style.backgroundColor = color;
      div.style.left = `${x}px`;
      div.style.top = `${y}px`;
      div.style.animation = `${animName} ${duration}s linear infinite, animate__animated 1s infinite alternate`;
      div.style.zIndex = -1; // Set the circle behind other content
      div.className = 'animate__heartBeat'; // Add Animate.css heartbeat class
      div.style.opacity = "0.3";

      document.body.appendChild(div);
    }
  }, [count]);

  return null; // Circles are added to the body, no JSX rendered here
};

export default FloatingCircles;
