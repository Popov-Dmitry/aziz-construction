import React from "react";

const Plus = ({ fill = "#000000", width = 800, height = 800 }) => {
  return (
    <svg fill={fill} width={`${width}px`} height={`${height}px`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 12H20M12 4V20" stroke={fill} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};

export default Plus;