import React, { useEffect } from 'react';

const colors = [
  '#EF5350', // Soft Red
  '#FB8C00', // Deep Orange
  '#FDD835', // Golden Yellow
  '#66BB6A', // Balanced Green
  '#42A5F5', // Bright Blue
  '#5C6BC0', // Blue Indigo
  '#AB47BC', // Violet
  '#26C6DA', // Sky Cyan
  '#26A69A', // Medium Teal
  '#FFA726'  // Orange Accent
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

      // Create keyframes dynamically
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
      div.style.animation = `${animName} ${duration}s linear infinite`;
      div.style.zIndex = -1

      document.body.appendChild(div);
    }
  }, [count]);

  return null; // Nothing rendered in JSX — circles are added to body
};

export default FloatingCircles;
